import { MetadataRoute } from 'next';
import { supabase } from '@/lib/supabase';

export const revalidate = 86400; // Daily update

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Base static routes
    const routes: MetadataRoute.Sitemap = [
        {
            url: 'https://www.today-shop.com',
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
    ];

    // In a real scenario, fetch high-priority stores from DB
    // This is a simplified example to avoid build errors if DB is unconnected
    /*
    const { data: stores } = await supabase
      .from('stores_index')
      .select('original_id, category_large, region, category_middle')
      .limit(1000);
  
    if (stores) {
      const dynamicRoutes = stores.map(store => ({
        url: `https://www.today-shop.com/${store.region}/${store.category_large}/${store.category_middle}/${store.original_id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
      return [...routes, ...dynamicRoutes];
    }
    */

    return routes;
}
