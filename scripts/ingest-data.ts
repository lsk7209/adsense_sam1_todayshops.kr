import fs from 'fs';
import path from 'path';
import { config } from 'dotenv';
import { createClient } from '@supabase/supabase-js';

// Load environment variables from .env.local
config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
    console.error('Missing Supabase credentials in .env.local');
    process.exit(1);
}

// Admin client for detailed writes
const supabase = createClient(supabaseUrl, supabaseServiceKey);

interface RawStoreData {
    bizesId: string;    // 상가업소번호
    bizesNm: string;    // 상호명
    indsLclsNm: string; // 상권업종대분류명
    indsMclsNm: string; // 상권업종중분류명
    rdnmAdr: string;    // 도로명주소
    ctprvnNm: string;   // 시도명 (Region)
    lat: number;        // 위도
    lon: number;        // 경도
    // ... other fields
}

const BATCH_SIZE = 100;

async function ingestData(filePath: string) {
    console.log(`Reading data from ${filePath}...`);

    if (!fs.existsSync(filePath)) {
        console.error(`File not found: ${filePath}`);
        process.exit(1);
    }

    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const rawData: RawStoreData[] = JSON.parse(fileContent);

    console.log(`Total records to process: ${rawData.length}`);

    let processed = 0;
    let batchIndex = [];
    let batchDetail = [];

    for (const item of rawData) {
        // Map to stores_index
        batchIndex.push({
            original_id: item.bizesId,
            name: item.bizesNm,
            category_large: item.indsLclsNm,
            category_middle: item.indsMclsNm,
            region: item.ctprvnNm,
            address: item.rdnmAdr,
            lat: item.lat,
            lng: item.lon,
        });

        // Map to stores_detail
        // Note: Detail ID must match Index ID. 
        // Ideally we insert Index first, get IDs, then insert details.
        // BUT since we create the UUID in Supabase (default), we don't have it here.
        // STRATEGY: 
        // 1. We should generate UUIDs here deterministically OR use original_id as a lookup.
        // 2. However, Supabase ID is UUID.
        // Solution: We will upsert stores_index based on `original_id`.
        // Then we select the IDs back? That's slow.
        // Better: Let's assume we can use `original_id` as the join key if we couldn't use UUID?
        // User schema says: id is UUID. original_id is unique.
        // 
        // OPTIMIZED APPROACH:
        // Upsert into stores_index, returning id, original_id.
        // Then map those IDs to stores_detail.

        if (batchIndex.length >= BATCH_SIZE) {
            await processBatch(batchIndex, rawData);
            processed += batchIndex.length;
            console.log(`Processed ${processed} / ${rawData.length}`);
            batchIndex = []; // Clear
        }
    }

    // Final batch
    if (batchIndex.length > 0) {
        await processBatch(batchIndex, rawData);
        processed += batchIndex.length;
        console.log(`Processed ${processed} / ${rawData.length}`);
    }

    console.log('Ingestion Complete.');
}

async function processBatch(batchIndex: any[], allRawData: any[]) {
    // 1. Upsert Index Table
    const { data: insertedIndices, error: indexError } = await supabase
        .from('stores_index')
        .upsert(batchIndex, { onConflict: 'original_id' })
        .select('id, original_id');

    if (indexError) {
        console.error('Error upserting index:', indexError);
        return;
    }

    if (!insertedIndices || insertedIndices.length === 0) return;

    // 2. Prepare Detail Table
    // Map back from inserted UUIDs to correct Raw Data
    const batchDetail = insertedIndices.map((idxVal) => {
        const original = allRawData.find(d => d.bizesId === idxVal.original_id);
        return {
            id: idxVal.id, // FK
            original_data: original,
            // description & faq are initially null, populated by AI later
            updated_at: new Date().toISOString()
        };
    });

    // 3. Upsert Detail Table
    const { error: detailError } = await supabase
        .from('stores_detail')
        .upsert(batchDetail, { onConflict: 'id' }); // Conflict on UUID

    if (detailError) {
        console.error('Error upserting detail:', detailError);
    }
}

// Run assuming file is passed as arg
const inputFile = process.argv[2] || 'data/source.json';
ingestData(inputFile);
