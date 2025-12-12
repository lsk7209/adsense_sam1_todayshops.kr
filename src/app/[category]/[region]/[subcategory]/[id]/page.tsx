import { notFound } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { SchemaOrg } from '@/components/SchemaOrg';
import { Metadata } from 'next';
import { FaqItem } from '@/types/store';

// ISR Revalidation Time (e.g., 1 day)
export const revalidate = 86400;

interface PageProps {
    params: Promise<{
        category: string;
        region: string;
        subcategory: string;
        id: string;
    }>;
}

// 1. Fetch Store Data
async function getStore(id: string) {
    const { data, error } = await supabase
        .from('stores_index')
        .select(`
      *,
      stores_detail (
        description,
        faq
      )
    `)
        .eq('original_id', id)
        .single();

    if (error || !data) {
        return null;
    }

    return data;
}

// 2. Dynamic Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const store = await getStore(resolvedParams.id);
    if (!store) return {};

    return {
        title: `${store.name} - ${store.region} ${store.category_middle} | 오늘의매장`,
        description: store.stores_detail?.[0]?.description?.substring(0, 160) || `${store.name} 상세 정보. ${store.address} 위치.`,
    };
}

// 3. Page Component
export default async function StorePage({ params }: PageProps) {
    const resolvedParams = await params;
    const store = await getStore(resolvedParams.id);

    if (!store) {
        notFound();
    }

    const details = store.stores_detail?.[0] || {};
    const faqs: FaqItem[] = details.faq || [];

    return (
        <main className="container mx-auto px-4 py-8">
            {/* Schema Markup */}
            <SchemaOrg
                store={{
                    name: store.name,
                    description: details.description || '',
                    address: {
                        streetAddress: store.address,
                        addressLocality: store.region,
                        addressRegion: store.region,
                        addressCountry: 'KR',
                    },
                    geo: {
                        latitude: store.lat!,
                        longitude: store.lng!,
                    },
                }}
                faq={faqs}
            />

            {/* Header */}
            <header className="mb-8 border-b pb-6">
                <div className="text-sm text-gray-500 mb-2">
                    {decodeURIComponent(resolvedParams.region)} &gt; {decodeURIComponent(resolvedParams.category)} &gt; {decodeURIComponent(resolvedParams.subcategory)}
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{store.name}</h1>
                <p className="text-lg text-gray-600">{store.address}</p>
            </header>

            {/* AI Description */}
            <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">매장 소개</h2>
                <div className="prose max-w-none text-gray-700 whitespace-pre-line bg-gray-50 p-6 rounded-lg">
                    {details.description || '상세 정보가 준비 중입니다.'}
                </div>
            </section>

            {/* Info Grid */}
            <section className="grid md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="font-semibold text-lg mb-4">기본 정보</h3>
                    <ul className="space-y-2">
                        <li><span className="text-gray-500 w-24 inline-block">카테고리:</span> {store.category_large} / {store.category_middle}</li>
                        <li><span className="text-gray-500 w-24 inline-block">주소:</span> {store.address}</li>
                    </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                    {/* Placeholder for Map or other info */}
                    <div className="h-full flex items-center justify-center bg-gray-100 text-gray-400">
                        Map Visualization Area
                    </div>
                </div>
            </section>

            {/* FAQ */}
            {faqs.length > 0 && (
                <section>
                    <h2 className="text-2xl font-semibold mb-6">자주 묻는 질문 (FAQ)</h2>
                    <div className="space-y-4">
                        {faqs.map((item: FaqItem, idx: number) => (
                            <div key={idx} className="border rounded-lg p-6">
                                <h3 className="font-medium text-lg mb-2 text-blue-900">Q. {item.question}</h3>
                                <p className="text-gray-700">A. {item.answer}</p>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </main>
    );
}
