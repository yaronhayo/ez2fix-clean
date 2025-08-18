import { renderers } from "../../renderers.mjs";
const GET = async () => {
  const robotsTxt = `
User-agent: *
Allow: /

# Important pages
Allow: /services/
Allow: /about
Allow: /contact
Allow: /booking
Allow: /service-areas/
Allow: /reviews
Allow: /faq

# Block certain pages
Disallow: /api/
Disallow: /thank-you
Disallow: /accessibility-policy
Disallow: /privacy-policy
Disallow: /terms-of-service

# Sitemap location
Sitemap: ${new URL("/sitemap.xml", "https://ez2fix.com").href}

# Crawl-delay for respectful crawling
Crawl-delay: 1
`.trim();
  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=86400"
      // Cache for 24 hours
    }
  });
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
