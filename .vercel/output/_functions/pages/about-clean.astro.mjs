/* empty css                                       */
import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, n as renderSlot, r as renderTemplate, u as unescapeHTML, k as renderComponent } from '../chunks/astro/server_BJwJjVcz.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, s as siteConfig } from '../chunks/BaseLayout_D5VH6-2r.mjs';
import { $ as $$HeaderClean, a as $$FooterClean } from '../chunks/FooterClean_DNQtsTCW.mjs';
import { $ as $$PageHero } from '../chunks/PageHero_arOz90wW.mjs';
import 'clsx';
import { $ as $$Card } from '../chunks/Card_prYGIFm_.mjs';
import { $ as $$CTASectionClean } from '../chunks/CTASectionClean_CPiCamW8.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://ez2fixllc.com");
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Section;
  const {
    theme = "light",
    size = "medium",
    containerSize = "large",
    class: className = ""
  } = Astro2.props;
  const sizeClasses = {
    small: "py-8 md:py-12",
    medium: "py-12 md:py-16",
    large: "py-16 md:py-20"
  };
  const themeClasses = {
    light: "bg-white",
    dark: "gradient-dark",
    cream: "bg-ez2fix-cream"
  };
  const containerClasses = {
    small: "max-w-2xl",
    medium: "max-w-4xl",
    large: "max-w-6xl",
    full: "max-w-7xl"
  };
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${sizeClasses[size]} ${themeClasses[theme]} ${className}`, "class")}> <div class="container mx-auto px-4"> <div${addAttribute(`${containerClasses[containerSize]} mx-auto`, "class")}> ${renderSlot($$result, $$slots["default"])} </div> </div> </section>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/components/ui/Section.astro", void 0);

const $$Astro = createAstro("https://ez2fixllc.com");
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const {
    title,
    subtitle,
    theme = "light",
    align = "center",
    size = "medium"
  } = Astro2.props;
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const sizeClasses = {
    small: "text-2xl md:text-3xl",
    medium: "text-3xl md:text-4xl lg:text-5xl",
    large: "text-4xl md:text-5xl lg:text-6xl"
  };
  const textClass = theme === "dark" ? "text-ez2fix-cream" : "text-ez2fix-dark";
  const subtitleClass = theme === "dark" ? "text-ez2fix-gold" : "text-ez2fix-brown";
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`mb-12 ${alignClasses[align]}`, "class")}> <h2${addAttribute(`${sizeClasses[size]} font-bold mb-6 ${textClass}`, "class")}>${unescapeHTML(title)}</h2> ${subtitle && renderTemplate`<p${addAttribute(`text-xl max-w-3xl leading-relaxed ${subtitleClass} ${align === "center" ? "mx-auto" : ""}`, "class")}>${unescapeHTML(subtitle)}</p>`} </div>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/components/ui/SectionHeader.astro", void 0);

const $$AboutClean = createComponent(($$result, $$props, $$slots) => {
  const values = [
    {
      title: "We're Your Neighbors",
      description: "15+ years living and working in Northern NJ. We understand your homes, weather, and worries.",
      icon: "home"
    },
    {
      title: "Honest Service Always",
      description: "No pressure tactics, no hidden fees. Just straight talk about what your garage door needs.",
      icon: "shield"
    },
    {
      title: "We Stand Behind Our Work",
      description: "10-year warranties on springs, comprehensive coverage on all repairs. Our word matters.",
      icon: "check"
    }
  ];
  const stats = [
    { number: "15+", label: "Years Serving NJ" },
    { number: "10,000+", label: "Families Helped" },
    { number: "24/7", label: "Emergency Service" },
    { number: "5.0\u2605", label: "Customer Rating" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Ez2Fix Bergen County NJ | Licensed Garage Door Contractor #13VH13553300", "description": "Meet Ez2Fix, your trusted Bergen County garage door professionals since 2014. Licensed contractor #13VH13553300 with 10+ years experience serving 25+ communities. Call (201) 554-6769!", "keywords": "about ez2fix bergen county nj, licensed garage door contractor bergen county, garage door company bergen county nj, professional garage door service bergen county" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderClean", $$HeaderClean, {})} ${maybeRenderHead()}<main id="main-content"> ${renderComponent($$result2, "PageHero", $$PageHero, { "title": "About <span class='text-ez2fix-primary'>Ez2Fix</span>", "subtitle": "Your trusted Bergen County garage door professionals since 2014. Licensed, insured, and committed to exceptional service.", "breadcrumbs": [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" }
  ], "theme": "dark", "size": "medium" })} ${renderComponent($$result2, "Section", $$Section, { "theme": "cream", "size": "large" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "We're Not Just Another <span class='text-ez2fix-primary'>Repair Company</span>", "subtitle": "We're your neighbors who happen to be really good at fixing garage doors. When yours breaks, you're not just another service call - you're a neighbor who needs help.", "theme": "light" })} <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <div> <div class="space-y-6"> <p class="text-lg leading-relaxed text-ez2fix-brown">
For over 15 years, we've been the garage door company that Northern NJ families call when they need honest service they can trust. We're not the biggest company, but we're the one your neighbors recommend because we treat every home like it's our own.
</p> <p class="text-lg leading-relaxed text-ez2fix-brown">
When your garage door spring snaps at 6 AM and you're running late for work, or when it won't close and you're worried about your family's security - we understand that stress. That's why we've built our entire business around being there when you need us most.
</p> <div class="grid grid-cols-2 md:grid-cols-4 gap-4"> ${stats.map((stat) => renderTemplate`<div class="text-center p-4 rounded-lg bg-white border-2 border-ez2fix-gold"> <div class="text-2xl font-bold text-ez2fix-primary">${stat.number}</div> <div class="text-sm text-ez2fix-brown">${stat.label}</div> </div>`)} </div> </div> </div> <div> ${renderComponent($$result3, "Card", $$Card, { "class": "p-6 shadow-xl border-2 border-ez2fix-primary" }, { "default": ($$result4) => renderTemplate` <img src="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/ez2fix-team.jpg" alt="Ez2Fix Team" class="w-full h-64 object-cover rounded-lg mb-4"> <h3 class="text-xl font-bold mb-2 text-ez2fix-dark">Licensed & Insured Professionals</h3> <p class="text-ez2fix-brown"> ${siteConfig.business.license} • Fully insured • Background checked technicians
</p> ` })} </div> </div> ` })} ${renderComponent($$result2, "Section", $$Section, { "theme": "light", "size": "large" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "SectionHeader", $$SectionHeader, { "title": "What Makes Us <span class='text-ez2fix-primary'>Different</span>", "subtitle": "We've built our reputation one neighbor at a time by doing what we say we'll do.", "theme": "light" })} <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${values.map((value, index) => renderTemplate`${renderComponent($$result3, "Card", $$Card, { "class": "p-8 text-center shadow-xl border-2 border-ez2fix-brown hover:shadow-2xl transition-all duration-300" }, { "default": ($$result4) => renderTemplate` <div class="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center bg-ez2fix-primary"> <svg class="h-8 w-8 text-ez2fix-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"${addAttribute(
    value.icon === "home" ? "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" : value.icon === "shield" ? "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" : "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z",
    "d"
  )}></path> </svg> </div> <h3 class="text-xl font-bold mb-4 text-ez2fix-dark">${value.title}</h3> <p class="text-ez2fix-brown leading-relaxed">${value.description}</p> ` })}`)} </div> ` })} ${renderComponent($$result2, "CTASectionClean", $$CTASectionClean, { "title": "Ready to Experience the <span class='text-ez2fix-gold'>Ez2Fix Difference?</span>", "subtitle": "Join thousands of Northern NJ families who trust us with their garage door needs. <span class='text-ez2fix-gold font-bold'>One call and you'll understand why your neighbors choose us</span>.", "primaryCTA": {
    text: `Call ${siteConfig.business.phone}`,
    href: siteConfig.links.phone,
    icon: "phone"
  }, "secondaryCTA": {
    text: "Get Free Estimate",
    href: "/booking",
    icon: "calendar"
  }, "theme": "dark" })} </main> ${renderComponent($$result2, "FooterClean", $$FooterClean, {})} ` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/about-clean.astro", void 0);

const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/about-clean.astro";
const $$url = "/about-clean";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$AboutClean,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
