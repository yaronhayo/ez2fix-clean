/* empty css                                      */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from "../assets/astro/server-B2kn4zWz.js";
import "kleur/colors";
import { $ as $$BaseLayout, s as siteConfig } from "../assets/BaseLayout-DZ4ZSGBd.js";
import { $ as $$HeaderClean, a as $$FooterClean } from "../assets/FooterClean-CgLsknuk.js";
import { $ as $$Card } from "../assets/Card-DzqDmBJQ.js";
import { renderers } from "../renderers.mjs";
const $$Blog = createComponent(($$result, $$props, $$slots) => {
  const blogPosts = [
    {
      title: "5 Signs Your Garage Door Spring Needs Replacement",
      slug: "garage-door-spring-replacement-signs",
      excerpt: "Learn the warning signs that indicate your garage door springs are failing and need professional replacement to avoid safety hazards.",
      publishDate: "2024-12-15",
      category: "Maintenance",
      readTime: "4 min read",
      featured: true
    },
    {
      title: "How to Choose the Right Garage Door for Your Bergen County Home",
      slug: "choosing-right-garage-door-bergen-county",
      excerpt: "A comprehensive guide to selecting the perfect garage door style, material, and features for New Jersey weather conditions.",
      publishDate: "2024-12-10",
      category: "Installation",
      readTime: "6 min read",
      featured: true
    },
    {
      title: "Winter Garage Door Maintenance Tips for NJ Homeowners",
      slug: "winter-garage-door-maintenance-nj",
      excerpt: "Essential maintenance tips to keep your garage door functioning smoothly through harsh New Jersey winters.",
      publishDate: "2024-12-05",
      category: "Maintenance",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "Emergency Garage Door Repair: When to Call a Professional",
      slug: "emergency-garage-door-repair-when-to-call",
      excerpt: "Know when a garage door problem requires immediate professional attention and what constitutes a true emergency.",
      publishDate: "2024-11-28",
      category: "Emergency",
      readTime: "3 min read",
      featured: false
    },
    {
      title: "Commercial vs Residential Garage Doors: Key Differences",
      slug: "commercial-vs-residential-garage-doors",
      excerpt: "Understanding the important differences between commercial and residential garage door systems and their specific requirements.",
      publishDate: "2024-11-20",
      category: "Commercial",
      readTime: "5 min read",
      featured: false
    },
    {
      title: "Smart Garage Door Openers: Are They Worth the Investment?",
      slug: "smart-garage-door-openers-worth-investment",
      excerpt: "Explore the benefits and features of smart garage door openers and whether they're right for your home.",
      publishDate: "2024-11-15",
      category: "Technology",
      readTime: "4 min read",
      featured: false
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Garage Door Tips & Expert Advice Bergen County NJ | Ez2Fix Blog | Licensed Contractor", "description": "Expert garage door advice from licensed Bergen County contractors. Maintenance tips, repair guides, installation advice from Ez2Fix professionals. 10+ years experience helping NJ homeowners. Learn how to maintain, repair, and choose garage doors.", "keywords": "garage door blog bergen county nj, garage door tips nj, garage door maintenance bergen county, garage door repair advice nj, garage door installation tips bergen county, garage door expert advice nj, licensed garage door contractor blog, garage door spring replacement tips, garage door opener installation guide bergen county" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderClean", $$HeaderClean, {})} ${maybeRenderHead()}<main id="main-content"> <!-- Blog Hero --> <section class="py-20" style="background: linear-gradient(135deg, #1D1912 0%, #2A2420 100%);"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-4xl md:text-6xl font-bold mb-6" style="color: #F3F3E6;">
Garage Door <span style="color: #D2A63C;">Expert Advice</span> </h1> <p class="text-xl md:text-2xl leading-relaxed mb-8" style="color: #EECD5C;">
Professional tips, maintenance advice, and industry insights from Bergen County's trusted garage door experts
</p> <!-- Categories --> <div class="flex flex-wrap justify-center gap-4 mt-8"> <span class="px-4 py-2 rounded-full text-sm font-semibold" style="background: rgba(210, 166, 60, 0.2); color: #D2A63C;">
Maintenance
</span> <span class="px-4 py-2 rounded-full text-sm font-semibold" style="background: rgba(238, 205, 92, 0.2); color: #EECD5C;">
Installation
</span> <span class="px-4 py-2 rounded-full text-sm font-semibold" style="background: rgba(187, 133, 37, 0.2); color: #BB8525;">
Emergency
</span> <span class="px-4 py-2 rounded-full text-sm font-semibold" style="background: rgba(210, 166, 60, 0.2); color: #D2A63C;">
Technology
</span> </div> </div> </div> </section> <!-- Featured Posts --> <section class="py-16" style="background-color: #F3F3E6;"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-4" style="color: #1D1912;">
Featured <span style="color: #D2A63C;">Articles</span> </h2> <p class="text-lg" style="color: #BB8525;">
Our most popular garage door tips and advice
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"> ${blogPosts.filter((post) => post.featured).map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "overflow-hidden shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1", "style": "background-color: white; border-color: #D2A63C;" }, { "default": ($$result3) => renderTemplate` <a${addAttribute(`/blog/${post.slug}`, "href")} class="block"> <div class="p-6"> <div class="flex items-center justify-between mb-4"> <span class="px-3 py-1 text-xs font-semibold rounded-full" style="background: rgba(210, 166, 60, 0.1); color: #D2A63C;"> ${post.category} </span> <span class="text-xs" style="color: #BB8525;"> ${post.readTime} </span> </div> <h3 class="text-xl font-bold mb-3 hover:text-opacity-80 transition-colors" style="color: #1D1912;"> ${post.title} </h3> <p class="text-sm leading-relaxed mb-4" style="color: #BB8525;"> ${post.excerpt} </p> <div class="flex items-center justify-between text-xs" style="color: #BB8525;"> <time${addAttribute(post.publishDate, "datetime")}> ${new Date(post.publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> <span class="font-semibold hover:underline" style="color: #D2A63C;">
Read More →
</span> </div> </div> </a> ` })}`)} </div> </div> </div> </section> <!-- All Articles --> <section class="py-16" style="background-color: white;"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <h2 class="text-3xl font-bold mb-8 text-center" style="color: #1D1912;">
All <span style="color: #D2A63C;">Articles</span> </h2> <div class="space-y-6"> ${blogPosts.map((post) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-lg border hover:shadow-xl transition-all duration-300", "style": "background-color: #F3F3E6; border-color: #EECD5C;" }, { "default": ($$result3) => renderTemplate` <a${addAttribute(`/blog/${post.slug}`, "href")} class="block"> <div class="flex items-start justify-between mb-3"> <div class="flex items-center space-x-4"> <span class="px-3 py-1 text-xs font-semibold rounded-full" style="background: rgba(210, 166, 60, 0.2); color: #D2A63C;"> ${post.category} </span> <time${addAttribute(post.publishDate, "datetime")} class="text-xs" style="color: #BB8525;"> ${new Date(post.publishDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </time> </div> <span class="text-xs" style="color: #BB8525;"> ${post.readTime} </span> </div> <h3 class="text-xl font-bold mb-2 hover:text-opacity-80 transition-colors" style="color: #1D1912;"> ${post.title} </h3> <p class="text-sm leading-relaxed" style="color: #BB8525;"> ${post.excerpt} </p> </a> ` })}`)} </div> </div> </div> </section> <!-- CTA Section --> <section class="py-16" style="background: linear-gradient(135deg, #1D1912 0%, #2A2420 100%);"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: #F3F3E6;">
Need Professional <span style="color: #D2A63C;">Garage Door Service?</span> </h2> <p class="text-lg mb-8" style="color: #EECD5C;">
Don't wait for a minor issue to become a major problem. Get expert service from Bergen County's trusted garage door professionals.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"> <a${addAttribute(siteConfig.links.phone, "href")} class="inline-flex items-center justify-center px-8 py-4 text-xl font-bold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105" style="background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;"> <svg class="mr-3 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
Call ${siteConfig.business.phone} </a> <a href="/booking" class="inline-flex items-center justify-center px-8 py-4 text-xl font-bold border-2 rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105" style="color: #EECD5C; border-color: #EECD5C; background-color: transparent;">
Schedule Service Online
<svg class="ml-2 h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "FooterClean", $$FooterClean, {})} ` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/blog.astro", void 0);
const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/blog.astro";
const $$url = "/blog";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Blog,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
