/* empty css                                      */
import { f as createComponent, k as renderComponent, r as renderTemplate, l as Fragment, u as unescapeHTML, m as maybeRenderHead, h as addAttribute } from "../assets/astro/server-B2kn4zWz.js";
import "kleur/colors";
import { $ as $$BaseLayout } from "../assets/BaseLayout-DZ4ZSGBd.js";
import { $ as $$HeaderClean, a as $$FooterClean } from "../assets/FooterClean-CgLsknuk.js";
import { $ as $$Card } from "../assets/Card-DzqDmBJQ.js";
import { renderers } from "../renderers.mjs";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$About = createComponent(($$result, $$props, $$slots) => {
  const companyStats = {
    yearsExperience: "10+",
    customersServed: "10,000+",
    licenseNumber: "#13VH13553300",
    satisfaction: "99.7%"
  };
  const whyChoosePoints = [
    {
      icon: "shield",
      title: "Licensed & Insured",
      description: "Fully licensed contractor (#13VH13553300) with comprehensive insurance protection for your peace of mind."
    },
    {
      icon: "clock",
      title: "Fast Response Times",
      description: "Average 45-minute response time across Bergen County. When your garage door breaks, we're already on our way."
    },
    {
      icon: "tools",
      title: "Professional Equipment",
      description: "State-of-the-art tools and diagnostic equipment to handle any garage door problem efficiently and safely."
    },
    {
      icon: "warranty",
      title: "Industry-Leading Warranties",
      description: "Up to 15-year warranties on parts and installations. We stand behind our work with real guarantees."
    },
    {
      icon: "pricing",
      title: "Transparent Pricing",
      description: "Honest, upfront pricing with no hidden fees. You'll know exactly what you're paying before we start."
    },
    {
      icon: "quality",
      title: "Premium Parts Only",
      description: "We use only the highest quality parts from trusted manufacturers to ensure lasting repairs and installations."
    }
  ];
  const serviceAreas = [
    { name: "Bergen County", highlight: true },
    { name: "Hudson County", highlight: false },
    { name: "Passaic County", highlight: false },
    { name: "Essex County", highlight: false }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About Ez2Fix Bergen County NJ | Licensed Contractor #13VH13553300 | 10,000+ Customers", "description": "About Ez2Fix - Bergen County's #1 trusted garage door contractor. Licensed #13VH13553300, 10+ years experience, 10,000+ satisfied customers. Professional garage door repair & installation serving Elmwood Park, Fair Lawn, Clifton, North Caldwell. Industry-leading warranties.", "keywords": "about ez2fix bergen county nj, licensed garage door contractor bergen county nj, garage door company bergen county, professional garage door service bergen county, experienced garage door technicians nj, ez2fix garage door services, bergen county garage door experts, garage door contractor elmwood park, garage door company fair lawn nj" }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeaderClean", $$HeaderClean, {})} ${maybeRenderHead()}<main> <!-- Hero Section --> <section class="py-12 bg-ez2fix-cream"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm mb-8 text-ez2fix-brown"> <a href="/" class="hover:text-ez2fix-primary transition-colors">Home</a> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span class="text-ez2fix-primary font-semibold">About Ez2Fix</span> </nav> <!-- Page Title --> <div class="text-center"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-ez2fix-dark mb-6">
About <span class="text-ez2fix-primary">Ez2Fix</span> </h1> <p class="text-lg md:text-xl text-ez2fix-brown max-w-3xl mx-auto">
Bergen County's trusted garage door specialists, serving families since 2014 with professional service, honest pricing, and genuine care.
</p> </div> </div> </div> </section> <!-- Our Story Section --> <section class="py-16 md:py-24 bg-white"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-ez2fix-dark mb-6">
Our <span class="text-ez2fix-primary">Story</span> </h2> </div> <div class="prose prose-lg max-w-none text-ez2fix-brown"> <p class="text-xl leading-relaxed mb-8">
Ez2Fix was founded in 2014 with a simple mission: provide Bergen County families with honest, professional garage door service they can trust. What started as a commitment to excellence has grown into a reputation that speaks for itself.
</p> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"> ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 bg-ez2fix-cream border-2 border-ez2fix-primary" }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold text-ez2fix-dark mb-3">Licensed & Professional</h3> <p class="text-ez2fix-brown">
Licensed contractor <span class="font-bold text-ez2fix-primary">${companyStats.licenseNumber}</span> with comprehensive insurance coverage. Every technician is trained, certified, and committed to safety.
</p> ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 bg-ez2fix-cream border-2 border-ez2fix-gold" }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold text-ez2fix-dark mb-3">Community Focused</h3> <p class="text-ez2fix-brown">
We live and work in Bergen County. Your neighbors are our neighbors, and we take pride in serving the community we call home.
</p> ` })} </div> <p class="text-lg leading-relaxed mb-8">
Over ${companyStats.yearsExperience} years, we've built lasting relationships with ${companyStats.customersServed} families across Bergen County. Our approach is simple: listen to your needs, provide honest recommendations, and deliver quality work that stands the test of time.
</p> </div> </div> </div> </section> <!-- Our Values Section --> <section class="py-16 md:py-24 gradient-dark"> <div class="container mx-auto px-4"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-ez2fix-cream mb-6">
Our <span class="text-ez2fix-primary">Values</span> </h2> <p class="text-lg text-ez2fix-gold max-w-3xl mx-auto">
These principles guide every interaction, every repair, and every installation we perform across Bergen County.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"> ${whyChoosePoints.map((point, index) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-ez2fix-cream border-2 border-ez2fix-primary group h-full flex flex-col" }, { "default": ($$result3) => renderTemplate` <div class="w-16 h-16 rounded-full bg-ez2fix-primary mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"> ${point.icon === "shield" && renderTemplate`<svg class="w-8 h-8 text-ez2fix-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg>`} ${point.icon === "clock" && renderTemplate`<svg class="w-8 h-8 text-ez2fix-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>`} ${point.icon === "tools" && renderTemplate`<svg class="w-8 h-8 text-ez2fix-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg>`} ${point.icon === "warranty" && renderTemplate`<svg class="w-8 h-8 text-ez2fix-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path> </svg>`} ${point.icon === "pricing" && renderTemplate`<svg class="w-8 h-8 text-ez2fix-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path> </svg>`} ${point.icon === "quality" && renderTemplate`<svg class="w-8 h-8 text-ez2fix-dark" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg>`} </div> <h3 class="text-xl font-bold text-ez2fix-dark mb-4">${point.title}</h3> <p class="text-ez2fix-brown leading-relaxed flex-1">${point.description}</p> ` })}`)} </div> </div> </section> <!-- Our Approach Section --> <section class="py-16 md:py-24 bg-white"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-ez2fix-dark mb-6">
Our <span class="text-ez2fix-primary">Approach</span> </h2> <p class="text-lg text-ez2fix-brown">
Every service call follows our proven process designed to deliver exceptional results and complete customer satisfaction.
</p> </div> <div class="space-y-8"> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 bg-ez2fix-cream border-2 border-ez2fix-primary" }, { "default": ($$result3) => renderTemplate` <div class="flex items-start space-x-6"> <div class="w-12 h-12 rounded-full bg-ez2fix-primary flex items-center justify-center flex-shrink-0"> <span class="text-xl font-bold text-ez2fix-dark">1</span> </div> <div> <h3 class="text-xl font-bold text-ez2fix-dark mb-3">Listen & Assess</h3> <p class="text-ez2fix-brown leading-relaxed">
We start by understanding your specific situation and concerns. Our technicians conduct thorough assessments to identify the root cause, not just the symptoms.
</p> </div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 bg-ez2fix-cream border-2 border-ez2fix-gold" }, { "default": ($$result3) => renderTemplate` <div class="flex items-start space-x-6"> <div class="w-12 h-12 rounded-full bg-ez2fix-gold flex items-center justify-center flex-shrink-0"> <span class="text-xl font-bold text-ez2fix-dark">2</span> </div> <div> <h3 class="text-xl font-bold text-ez2fix-dark mb-3">Honest Recommendations</h3> <p class="text-ez2fix-brown leading-relaxed">
We provide clear, honest recommendations with transparent pricing. No pressure tactics, no unnecessary upsells – just the solutions you actually need.
</p> </div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 bg-ez2fix-cream border-2 border-ez2fix-primary" }, { "default": ($$result3) => renderTemplate` <div class="flex items-start space-x-6"> <div class="w-12 h-12 rounded-full bg-ez2fix-primary flex items-center justify-center flex-shrink-0"> <span class="text-xl font-bold text-ez2fix-dark">3</span> </div> <div> <h3 class="text-xl font-bold text-ez2fix-dark mb-3">Quality Execution</h3> <p class="text-ez2fix-brown leading-relaxed">
Using premium parts and professional techniques, we complete every job to the highest standards. Safety protocols are never compromised.
</p> </div> </div> ` })} </div> </div> </div> </section> <!-- Credentials & Experience Section --> <section class="py-16 md:py-24 bg-ez2fix-cream"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-ez2fix-dark mb-6"> <span class="text-ez2fix-primary">Credentials</span> & Experience
</h2> <p class="text-lg text-ez2fix-brown">
Professional qualifications and experience that give you confidence in our service.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"> <!-- License & Insurance --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 bg-white border-2 border-ez2fix-primary h-full" }, { "default": ($$result3) => renderTemplate` <div class="flex items-start space-x-4 mb-6"> <div class="w-12 h-12 rounded-full bg-ez2fix-primary flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-ez2fix-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <div> <h3 class="text-xl font-bold text-ez2fix-dark mb-3">Licensed Contractor</h3> <p class="text-ez2fix-brown leading-relaxed">
New Jersey State Licensed Contractor <span class="font-bold text-ez2fix-primary">${companyStats.licenseNumber}</span> with comprehensive liability and workers' compensation insurance coverage.
</p> </div> </div> ` })} <!-- Experience --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 bg-white border-2 border-ez2fix-gold h-full" }, { "default": ($$result3) => renderTemplate` <div class="flex items-start space-x-4 mb-6"> <div class="w-12 h-12 rounded-full bg-ez2fix-gold flex items-center justify-center flex-shrink-0"> <svg class="w-6 h-6 text-ez2fix-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h3 class="text-xl font-bold text-ez2fix-dark mb-3">${companyStats.yearsExperience} Years of Experience</h3> <p class="text-ez2fix-brown leading-relaxed">
Over a decade serving Bergen County families with ${companyStats.customersServed} successful service calls and ${companyStats.satisfaction} customer satisfaction rate.
</p> </div> </div> ` })} </div> </div> </div> </section> <!-- Service Areas Section --> <section class="py-16 md:py-24 gradient-dark"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold text-ez2fix-cream mb-6"> <span class="text-ez2fix-primary">Service Areas</span> </h2> <p class="text-lg text-ez2fix-gold mb-12">
Proudly serving Bergen County and surrounding areas in Northern New Jersey.
</p> <!-- Service Areas Grid --> <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"> ${serviceAreas.map((area, index) => renderTemplate`<div${addAttribute(`p-4 rounded-lg text-center ${area.highlight ? "bg-ez2fix-primary text-white" : "bg-ez2fix-cream text-ez2fix-dark border-2 border-ez2fix-primary/20"}`, "class")}> <div${addAttribute(`font-bold ${area.highlight ? "text-white" : "text-ez2fix-primary"}`, "class")}> ${area.name} </div> </div>`)} </div> </div> </div> </section> </main> ${renderComponent($$result2, "FooterClean", $$FooterClean, {})} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template([' <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://ez2fix.com/about#about",
    "name": "About Ez2Fix Garage Door Services",
    "description": "Learn about Ez2Fix, Bergen County's most trusted garage door professionals.",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Ez2Fix Garage Door Services",
      "description": "Professional garage door repair and installation company serving Bergen County and surrounding areas in Northern New Jersey.",
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Professional License #13VH13553300"
      },
      "yearsOfOperation": "10+",
      "serviceArea": ["Bergen County, NJ", "Hudson County, NJ", "Passaic County, NJ", "Essex County, NJ"]
    }
  }))) })}` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/about.astro", void 0);
const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/about.astro";
const $$url = "/about";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
