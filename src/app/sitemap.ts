import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export const revalidate = 86400; // Daily update

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Base static routes
  const routes: MetadataRoute.Sitemap = [
    {
      url: 'https://todayshops.kr',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://todayshops.kr/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://todayshops.kr/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: 'https://todayshops.kr/privacy',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ];

  // In a real scenario, fetch high-priority stores from DB
  // This is a simplified example to avoid build errors if DB is unconnected
  try {
    const { data: stores } = await supabase
      .from('stores_index')
      .select('original_id, category_large, region, category_middle')
      .limit(49000); // 50k is limit for sitemap file usually

    if (stores) {
      const dynamicRoutes = stores.map(store => ({
        url: `https://todayshops.kr/${encodeURIComponent(store.region)}/${encodeURIComponent(store.category_large)}/${encodeURIComponent(store.category_middle)}/${store.original_id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
      return [...routes, ...dynamicRoutes];
    }
  } catch (e) {
    console.error('Sitemap generation error', e);
  }

  return routes;
}
```
