import { writeFileSync } from 'fs';

const DOMAIN = 'https://bizcalc-pro.pages.dev'; // 임시 도메인

const pages = [
    '',
    '/vat-calculator',
    '/margin-calculator',
    '/salary-calculator',
    '/about',
    '/contact',
    '/privacy'
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(path => `  <url>
    <loc>${DOMAIN}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

const robots = `User-agent: *
Allow: /
Sitemap: ${DOMAIN}/sitemap.xml`;

writeFileSync('public/sitemap.xml', sitemap);
writeFileSync('public/robots.txt', robots);

console.log('✅ Sitemap & Robots.txt generated!');
