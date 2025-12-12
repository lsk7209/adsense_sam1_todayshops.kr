import { createClient } from '@supabase/supabase-js';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { config } from 'dotenv';
import path from 'path';
import { StoreIndex } from '../src/types/store';

// Load environment variables
config({ path: path.resolve(__dirname, '../.env.local') });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const geminiApiKey = process.env.GEMINI_API_KEY;

if (!supabaseUrl || !supabaseServiceKey || !geminiApiKey) {
    console.error('Missing credentials (Supabase or Gemini) in .env.local');
    process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);
const genAI = new GoogleGenerativeAI(geminiApiKey);
const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

const BATCH_SIZE = 10; // Process 10 at a time to respect rate limits

async function generateContent() {
    console.log('Starting AI Content Generation Batch...');

    // 1. Fetch pending stores (joined with index for metadata)
    const { data: pendingStores, error } = await supabase
        .from('stores_detail')
        .select(`
      id,
      stores_index!inner (
        name,
        category_large,
        category_middle,
        address,
        region
      )
    `)
        .eq('content_generated', false)
        .limit(BATCH_SIZE);

    if (error) {
        console.error('Error fetching pending stores:', error);
        return;
    }

    if (!pendingStores || pendingStores.length === 0) {
        console.log('No pending stores found.');
        return;
    }

    console.log(`Found ${pendingStores.length} stores to process.`);

    for (const store of pendingStores) {
        // Casting to StoreIndex to fix 'any' lint error
        const meta = store.stores_index as unknown as StoreIndex;
        console.log(`Processing: ${meta.name}`);

        try {
            // 2. Generate Content
            const prompt = `
        Role: You are a professional copywriter for a local business directory.
        Task: Create a unique description and FAQ for the following store.
        
        Store Info:
        - Name: ${meta.name}
        - Category: ${meta.category_large} > ${meta.category_middle}
        - Address: ${meta.address}
        - Region: ${meta.region}

        Requirements:
        1. Description: 4 lines of engaging, SEO-friendly text describing this type of business in this location. Be creative but factual based on the category.
        2. FAQ: 5 common questions and answers potential customers might have for this specific type of business (e.g., parking, hours, reservations, etc.).
        
        Output Format (JSON Only):
        {
          "description": "Line 1\nLine 2\nLine 3\nLine 4",
          "faq": [
            {"question": "Q1", "answer": "A1"},
            ...
          ]
        }
      `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            // Clean up markdown code blocks if present
            const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
            const aiData = JSON.parse(jsonStr);

            // 3. Update DB
            const { error: updateError } = await supabase
                .from('stores_detail')
                .update({
                    description: aiData.description,
                    faq: aiData.faq,
                    content_generated: true,
                    updated_at: new Date().toISOString()
                })
                .eq('id', store.id);

            if (updateError) {
                console.error(`Failed to update DB for ${meta.name}:`, updateError);
            } else {
                console.log(`Successfully updated: ${meta.name}`);
            }

            // Basic rate limiting
            await new Promise(resolve => setTimeout(resolve, 2000));

        } catch (err) {
            console.error(`Error processing ${meta.name}:`, err);
        }
    }

    console.log('Batch Complete.');
}

generateContent();
