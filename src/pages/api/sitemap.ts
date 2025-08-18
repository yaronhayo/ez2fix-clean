import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://ez2fix.com';
  
  // Static pages with their priorities and change frequencies
  const staticPages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/about', priority: '0.8', changefreq: 'monthly' },
    { url: '/contact', priority: '0.9', changefreq: 'monthly' },
    { url: '/booking', priority: '0.9', changefreq: 'monthly' },
    { url: '/services', priority: '0.9', changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/reviews', priority: '0.7', changefreq: 'weekly' },
    { url: '/faq', priority: '0.6', changefreq: 'monthly' },
    { url: '/service-areas', priority: '0.8', changefreq: 'monthly' }
  ];
  
  // Service pages
  const servicePages = [
    '/services/garage-door-spring-repair',
    '/services/garage-door-opener-installation', 
    '/services/new-garage-door-installation',
    '/services/emergency-garage-door-repair',
    '/services/general-garage-door-repair',
    '/services/commercial-garage-door-service'
  ].map(url => ({
    url,
    priority: '0.8',
    changefreq: 'monthly'
  }));
  
  // Service area pages
  const serviceAreaPages = [
    '/service-areas/fair-lawn',
    '/service-areas/clifton',
    '/service-areas/cedar-grove',
    '/service-areas/little-falls',
    '/service-areas/montclair',
    '/service-areas/north-caldwell',
    '/service-areas/west-caldwell'
  ].map(url => ({
    url,
    priority: '0.7',
    changefreq: 'monthly'
  }));
  
  // Blog pages
  const blogPages = [
    '/blog/garage-door-spring-replacement-signs',
    '/blog/choosing-right-garage-door-bergen-county',
    '/blog/winter-garage-door-maintenance-nj',
    '/blog/emergency-garage-door-repair-when-to-call',
    '/blog/commercial-vs-residential-garage-doors',
    '/blog/smart-garage-door-openers-worth-investment'
  ].map(url => ({
    url,
    priority: '0.7',
    changefreq: 'monthly'
  }));
  
  const allPages = [...staticPages, ...servicePages, ...serviceAreaPages, ...blogPages];
  
  const currentDate = new Date().toISOString().split('T')[0];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allPages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
    },
  });
};