/* empty css                                         */
import { e as createAstro, f as createComponent, r as renderTemplate, u as unescapeHTML, k as renderComponent, l as Fragment, m as maybeRenderHead, h as addAttribute } from "../../assets/astro/server-B2kn4zWz.js";
import "kleur/colors";
import { $ as $$BaseLayout, s as siteConfig } from "../../assets/BaseLayout-DZ4ZSGBd.js";
import { $ as $$HeaderClean, a as $$FooterClean } from "../../assets/FooterClean-CgLsknuk.js";
import { $ as $$Card } from "../../assets/Card-DzqDmBJQ.js";
import { $ as $$Button } from "../../assets/Button-CEltzFnr.js";
import { $ as $$BookingFormClean } from "../../assets/BookingFormClean-DiZA6tzw.js";
import "clsx";
import { renderers } from "../../renderers.mjs";
var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(cooked.slice()) }));
var _a$2;
const $$Astro$1 = createAstro("https://ez2fix.com");
const $$FAQSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FAQSchema;
  const { faqs, mainEntity = "Garage Door Services" } = Astro2.props;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  return renderTemplate(_a$2 || (_a$2 = __template$2(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(faqSchema)));
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/components/seo/FAQSchema.astro", void 0);
var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro = createAstro("https://ez2fix.com");
const $$BreadcrumbSchema = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BreadcrumbSchema;
  const { items } = Astro2.props;
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(['<script type="application/ld+json">', "<\/script>"])), unescapeHTML(JSON.stringify(breadcrumbSchema)));
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/components/seo/BreadcrumbSchema.astro", void 0);
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$EmergencyGarageDoorRepair = createComponent(($$result, $$props, $$slots) => {
  const emergencyFAQs = [
    {
      question: "What qualifies as a garage door emergency?",
      answer: "A garage door emergency includes situations where your door won't open or close, is stuck halfway, has broken springs, came off its tracks, or poses a safety risk. We also handle opener failures that prevent access to your garage."
    },
    {
      question: "How quickly can you respond to emergency calls?",
      answer: "We aim to respond to emergency calls within 1-2 hours during our service hours. For urgent situations involving safety risks or complete access blockage, we prioritize immediate response. Our 24/7 service ensures help is always available."
    },
    {
      question: "Do you charge extra for emergency service?",
      answer: "While emergency service may include additional fees for after-hours calls, we provide transparent pricing upfront. Many emergency repairs can be resolved quickly and affordably. We never charge extra just for the estimate."
    },
    {
      question: "What emergency garage door problems do you fix?",
      answer: "We handle all emergency garage door issues including broken springs, snapped cables, doors off tracks, malfunctioning openers, damaged panels, and safety sensor problems. Our technicians carry common parts for immediate repairs."
    }
  ];
  const breadcrumbs = [
    { name: "Home", url: "https://ez2fix.com/" },
    { name: "Services", url: "https://ez2fix.com/services" },
    { name: "Emergency Garage Door Repair", url: "https://ez2fix.com/services/emergency-garage-door-repair" }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "24/7 Emergency Garage Door Repair Bergen County NJ | Licensed #13VH13553300 | Ez2Fix", "description": "24/7 Emergency garage door repair Bergen County NJ. Broken springs, stuck doors, opener failures. Licensed contractor #13VH13553300. Same-day service, 1-year warranty. Serving Elmwood Park, Fair Lawn, Clifton. Call (201) 554-6769!", "keywords": "emergency garage door repair bergen county nj, 24/7 garage door repair nj, broken garage door repair bergen county, garage door spring repair emergency bergen county, garage door opener repair emergency nj, same day garage door repair bergen county, emergency garage door service nj, licensed emergency garage door repair bergen county, after hours garage door repair nj, weekend garage door repair bergen county", "ogImage": "/images/og-emergency-repair.jpg" }, { "default": ($$result2) => renderTemplate`   ${renderComponent($$result2, "HeaderClean", $$HeaderClean, {})} ${maybeRenderHead()}<main id="main-content"> <!-- Hero Section with Booking Form --> <section class="relative min-h-screen flex items-center overflow-hidden"> <!-- Background Image with Overlay --> <div class="absolute inset-0"> <img id="heroImage" src="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/Garage%20Door%20Repair.webp" alt="Emergency garage door repair service" class="w-full h-full object-cover" width="1920" height="1080" loading="eager" decoding="async" fetchpriority="high"> <div class="absolute inset-0 bg-gray-900 bg-opacity-85"></div> </div> <div class="container mx-auto px-4 relative z-10 py-8"> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center"> <!-- Left Column - Content --> <div class="flex flex-col justify-center space-y-4"> <div> <span class="inline-block px-3 py-1 text-xs font-bold rounded-full" style="background-color: #D2A63C; color: #1D1912;">
24/7 EMERGENCY SERVICE
</span> </div> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight" style="color: #F3F3E6;">
Emergency Garage Door Repair <span style="color: #EECD5C;">Bergen County NJ</span> </h1> <p class="text-lg md:text-xl leading-relaxed" style="color: #F3F3E6;">
Your garage door emergency can't wait. When springs snap or doors get stuck, Ez2Fix provides 24/7 emergency garage door repair in Bergen County NJ. <strong style="color: #EECD5C;">Licensed technicians respond fast</strong> with professional tools and quality parts to get you back to normal quickly.
</p> <!-- Trust Indicators --> <div class="flex flex-wrap items-center gap-4"> <div class="flex items-center space-x-2"> <svg class="h-5 w-5" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <span class="font-semibold" style="color: #F3F3E6;">Licensed & Insured</span> </div> <div class="flex items-center space-x-2"> <svg class="h-5 w-5" style="color: #EECD5C;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg> <span class="font-semibold" style="color: #F3F3E6;">5.0★ Rating</span> </div> <div class="flex items-center space-x-2"> <svg class="h-5 w-5" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path> </svg> <span class="font-semibold" style="color: #F3F3E6;">1-Year Warranty</span> </div> </div> <!-- Emergency CTA --> <div class="mt-2"> ${renderComponent($$result2, "Button", $$Button, { "href": siteConfig.links.phone, "size": "lg", "class": "text-lg px-8 py-3 font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-fit", "style": "background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;" }, { "default": ($$result3) => renderTemplate` <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg>
Call Now: ${siteConfig.business.phone}` })} </div> </div> <!-- Right Column - Booking Form --> <div class="flex items-center justify-center"> ${renderComponent($$result2, "Card", $$Card, { "class": "p-3 lg:p-5 shadow-2xl border-2", "style": "background-color: #F3F3E6; border-color: #D2A63C;" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BookingFormClean", $$BookingFormClean, { "variant": "hero", "title": "Get Emergency Service", "subtitle": "Free estimate • Licensed technicians", "buttonText": "Get Emergency Service", "service": "Emergency Garage Door Repair" })}  <div class="mt-2 pt-2 border-t" style="border-color: rgba(187, 133, 37, 0.2);"> <div class="grid grid-cols-2 gap-2 text-center"> <div> <div class="text-xs font-semibold" style="color: #1D1912;">24/7 Service</div> <div class="text-xs" style="color: #BB8525;">Emergency Ready</div> </div> <div> <div class="text-xs font-semibold" style="color: #1D1912;">Licensed Tech</div> <div class="text-xs" style="color: #BB8525;">Same Day Fix</div> </div> </div> </div> ` })} </div> </div> </div> </section> <!-- Problem/Solution Stories --> <section class="py-16" style="background-color: #F3F3E6;"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #1D1912;">
Emergency Situations <span style="color: #D2A63C;">We Handle</span> </h2> <p class="text-xl max-w-3xl mx-auto leading-relaxed" style="color: #BB8525;">
Real emergency calls from Bergen County customers and how our expert technicians solved their problems.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- Story 1: Spring Break --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-lg border-2 h-full", "style": "background-color: white; border-color: #D2A63C;" }, { "default": ($$result3) => renderTemplate` <div class="mb-4"> <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4" style="background-color: #D2A63C;"> <svg class="h-6 w-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.864-.833-2.634 0L4.168 16.5c-.77.833.192 2.5 1.732 2.5z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2" style="color: #1D1912;">The Call: "Loud Bang, Door Won't Open"</h3> <p class="text-sm leading-relaxed mb-4" style="color: #BB8525;">
Maria from Elmwood Park called at 7 AM - her garage door spring snapped overnight. Car trapped inside, late for work.
</p> </div> <div class="mb-4"> <h4 class="font-semibold mb-2" style="color: #D2A63C;">Our Diagnosis:</h4> <p class="text-sm leading-relaxed mb-3" style="color: #1D1912;">
Torsion spring failure due to normal wear after 8 years. Door unsafe to operate manually.
</p> </div> <div class="mb-6"> <h4 class="font-semibold mb-2" style="color: #D2A63C;">The Solution:</h4> <p class="text-sm leading-relaxed" style="color: #1D1912;">
Replaced both torsion springs with high-cycle models, balanced the door, tested all safety features. Completed in 90 minutes.
</p> </div> <div class="p-3 rounded-lg mt-auto" style="background-color: rgba(238, 205, 92, 0.1);"> <p class="text-sm italic" style="color: #1D1912;">
"Ez2Fix saved my morning! Professional, fast, and the door works better than ever. 10-year warranty gives me peace of mind." - Maria R.
</p> </div> ` })} <!-- Story 2: Opener Failure --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-lg border-2 h-full", "style": "background-color: white; border-color: #BB8525;" }, { "default": ($$result3) => renderTemplate` <div class="mb-4"> <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4" style="background-color: #BB8525;"> <svg class="h-6 w-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2" style="color: #1D1912;">The Call: "Opener Dead, Storm Coming"</h3> <p class="text-sm leading-relaxed mb-4" style="color: #BB8525;">
David from Fair Lawn called at 3 PM - garage door opener stopped working, weather alert for severe storms.
</p> </div> <div class="mb-4"> <h4 class="font-semibold mb-2" style="color: #D2A63C;">Our Diagnosis:</h4> <p class="text-sm leading-relaxed mb-3" style="color: #1D1912;">
Motor burned out due to power surge. Manual release working, but door heavy to lift manually.
</p> </div> <div class="mb-6"> <h4 class="font-semibold mb-2" style="color: #D2A63C;">The Solution:</h4> <p class="text-sm leading-relaxed" style="color: #1D1912;">
Installed new LiftMaster opener with battery backup and surge protection. Programmed all remotes, tested safety features.
</p> </div> <div class="p-3 rounded-lg mt-auto" style="background-color: rgba(238, 205, 92, 0.1);"> <p class="text-sm italic" style="color: #1D1912;">
"Beat the storm by 2 hours! New opener with battery backup means no more worries about power outages." - David C.
</p> </div> ` })} <!-- Story 3: Off Track --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-lg border-2 h-full", "style": "background-color: white; border-color: #EECD5C;" }, { "default": ($$result3) => renderTemplate` <div class="mb-4"> <div class="w-12 h-12 rounded-full flex items-center justify-center mb-4" style="background-color: #EECD5C;"> <svg class="h-6 w-6" style="color: #1D1912;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-xl font-bold mb-2" style="color: #1D1912;">The Call: "Door Came Off Track!"</h3> <p class="text-sm leading-relaxed mb-4" style="color: #BB8525;">
Sarah from Garfield called panicked - garage door completely off track, blocking driveway. Guests coming for dinner.
</p> </div> <div class="mb-4"> <h4 class="font-semibold mb-2" style="color: #D2A63C;">Our Diagnosis:</h4> <p class="text-sm leading-relaxed mb-3" style="color: #1D1912;">
Cable snapped, causing door to fall off track. Bent track section, damaged rollers. Dangerous situation.
</p> </div> <div class="mb-6"> <h4 class="font-semibold mb-2" style="color: #D2A63C;">The Solution:</h4> <p class="text-sm leading-relaxed" style="color: #1D1912;">
Safely lifted door back on track, replaced damaged cable and rollers, straightened track, adjusted tension.
</p> </div> <div class="p-3 rounded-lg mt-auto" style="background-color: rgba(238, 205, 92, 0.1);"> <p class="text-sm italic" style="color: #1D1912;">
"Fixed before guests arrived! Technician explained how to prevent it happening again. True professionals!" - Sarah T.
</p> </div> ` })} </div> </div> </div> </section> <!-- Service Features --> <section class="py-16" style="background-color: #1D1912;"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #F3F3E6;">
Why Choose Ez2Fix for <span style="color: #D2A63C;">Emergency Repairs?</span> </h2> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> <div class="text-center"> <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style="background-color: #D2A63C;"> <svg class="h-8 w-8" style="color: #1D1912;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <h3 class="text-xl font-bold mb-4" style="color: #F3F3E6;">Professional Response</h3> <p class="leading-relaxed" style="color: #EECD5C;">
Licensed technicians equipped with professional tools and quality parts for reliable emergency repairs.
</p> </div> <div class="text-center"> <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style="background-color: #EECD5C;"> <svg class="h-8 w-8" style="color: #1D1912;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> </div> <h3 class="text-xl font-bold mb-4" style="color: #F3F3E6;">Safety First</h3> <p class="leading-relaxed" style="color: #EECD5C;">
All emergency repairs follow strict safety protocols to protect you, your family, and your property.
</p> </div> <div class="text-center"> <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style="background-color: #BB8525;"> <svg class="h-8 w-8" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path> </svg> </div> <h3 class="text-xl font-bold mb-4" style="color: #F3F3E6;">All Brands Serviced</h3> <p class="leading-relaxed" style="color: #EECD5C;">
Expert repair service for all major garage door and opener brands with proper diagnostic tools.
</p> </div> <div class="text-center"> <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style="background-color: #D2A63C;"> <svg class="h-8 w-8" style="color: #1D1912;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path> </svg> </div> <h3 class="text-xl font-bold mb-4" style="color: #F3F3E6;">1-Year Warranty</h3> <p class="leading-relaxed" style="color: #EECD5C;">
All emergency repair work comes with our comprehensive 1-year warranty on parts and labor.
</p> </div> </div> </div> </div> </section> <!-- Customer Reviews --> <section class="py-16" style="background-color: #F3F3E6;"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #1D1912;">
Emergency Repair <span style="color: #D2A63C;">Success Stories</span> </h2> <p class="text-xl max-w-3xl mx-auto leading-relaxed mb-8" style="color: #BB8525;">
Real reviews from Bergen County customers who needed emergency garage door repair service.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-xl border-2 h-full", "style": "background-color: white; border-color: #BB8525;" }, { "default": ($$result3) => renderTemplate` <div class="flex justify-center mb-4"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg class="h-5 w-5" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg>`)} </div> <blockquote class="text-base leading-relaxed mb-6 text-center italic" style="color: #1D1912;">
"Called Ez2Fix at 6 AM when my spring broke - couldn't get car out for work. Technician arrived within 2 hours, diagnosed the problem, and had me back in business before lunch. Professional service when I needed it most!"
</blockquote> <div class="text-center"> <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3" style="background-color: #D2A63C; color: #F3F3E6;">
JM
</div> <div class="font-semibold text-lg" style="color: #1D1912;">Jennifer Martinez</div> <div class="text-sm mb-2" style="color: #BB8525;">Elmwood Park, NJ</div> <div class="text-xs font-medium px-3 py-1 rounded-full mb-2" style="background-color: #EECD5C; color: #1D1912;">
Spring Break Emergency
</div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-xl border-2 h-full", "style": "background-color: white; border-color: #BB8525;" }, { "default": ($$result3) => renderTemplate` <div class="flex justify-center mb-4"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg class="h-5 w-5" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg>`)} </div> <blockquote class="text-base leading-relaxed mb-6 text-center italic" style="color: #1D1912;">
"Door came completely off track during a storm. Called Ez2Fix and they had someone out within 3 hours despite the weather. Fixed safely and professionally - even cleaned up the debris. Incredible emergency service!"
</blockquote> <div class="text-center"> <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3" style="background-color: #D2A63C; color: #F3F3E6;">
MK
</div> <div class="font-semibold text-lg" style="color: #1D1912;">Mike Kim</div> <div class="text-sm mb-2" style="color: #BB8525;">Fair Lawn, NJ</div> <div class="text-xs font-medium px-3 py-1 rounded-full mb-2" style="background-color: #EECD5C; color: #1D1912;">
Off-Track Emergency
</div> </div> ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-xl border-2 h-full", "style": "background-color: white; border-color: #BB8525;" }, { "default": ($$result3) => renderTemplate` <div class="flex justify-center mb-4"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg class="h-5 w-5" style="color: #D2A63C;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg>`)} </div> <blockquote class="text-base leading-relaxed mb-6 text-center italic" style="color: #1D1912;">
"Opener died at 10 PM and we couldn't secure our garage. Ez2Fix answered the phone and had a technician here within an hour. New opener installed, all remotes programmed. Above and beyond emergency service!"
</blockquote> <div class="text-center"> <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3" style="background-color: #D2A63C; color: #F3F3E6;">
DS
</div> <div class="font-semibold text-lg" style="color: #1D1912;">David Silva</div> <div class="text-sm mb-2" style="color: #BB8525;">Saddle Brook, NJ</div> <div class="text-xs font-medium px-3 py-1 rounded-full mb-2" style="background-color: #EECD5C; color: #1D1912;">
Late Night Opener Failure
</div> </div> ` })} </div> </div> </div> </section> <!-- FAQ Section --> <section class="py-16" style="background-color: #1D1912;"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #F3F3E6;">
Emergency Repair <span style="color: #D2A63C;">Questions?</span> </h2> <p class="text-xl leading-relaxed" style="color: #EECD5C;">
Common questions about our emergency garage door repair services.
</p> </div> <div class="space-y-6"> ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #D2A63C;" }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-3" style="color: #1D1912;">
What qualifies as a garage door emergency?
</h3> <p class="leading-relaxed" style="color: #BB8525;">
Any situation where your garage door is completely non-functional, poses a safety hazard, or prevents access to your vehicle. This includes broken springs, doors off track, opener failures, or doors that won't close and secure properly.
</p> ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #BB8525;" }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-3" style="color: #1D1912;">
How quickly can you respond to emergencies?
</h3> <p class="leading-relaxed" style="color: #BB8525;">
We provide professional emergency response services with licensed technicians. Response times vary based on location and current demand, but we always prioritize emergency calls and safety situations.
</p> ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #EECD5C;" }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-3" style="color: #1D1912;">
Do you charge extra for emergency service calls?
</h3> <p class="leading-relaxed" style="color: #BB8525;">
Our emergency service rates are competitive and transparent. We provide upfront estimates before beginning any work, so you know exactly what to expect. No hidden fees or surprise charges.
</p> ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #D2A63C;" }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-3" style="color: #1D1912;">
What should I do while waiting for the technician?
</h3> <p class="leading-relaxed" style="color: #BB8525;">
Do not attempt to force or manually operate a malfunctioning garage door. Keep the area clear and safe. If the door won't close, avoid leaving valuable items in your garage. Our technician will handle everything safely upon arrival.
</p> ` })} ${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #BB8525;" }, { "default": ($$result3) => renderTemplate` <h3 class="text-xl font-bold mb-3" style="color: #1D1912;">
Do emergency repairs come with a warranty?
</h3> <p class="leading-relaxed" style="color: #BB8525;">
Yes! All emergency repair work is covered by our comprehensive 1-year warranty on parts and labor. We stand behind our work and want you to have complete confidence in the repair.
</p> ` })} </div> </div> </div> </section> <!-- Bottom CTA Section --> <section class="py-16" style="background-color: #F3F3E6;"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: #1D1912;">
Need Emergency Service <span style="color: #D2A63C;">Right Now?</span> </h2> <p class="text-lg max-w-2xl mx-auto" style="color: #BB8525;">
Get professional emergency repair from Bergen County's most trusted garage door experts.
</p> </div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"> <!-- Contact Options --> <div> <h3 class="text-2xl font-bold mb-6" style="color: #1D1912;">Get Immediate Help</h3> <div class="space-y-6"> <div class="flex items-center space-x-4"> <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background-color: #D2A63C;"> <svg class="w-6 h-6" style="color: #1D1912;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <h4 class="font-bold text-lg" style="color: #1D1912;">Call for Emergency Service</h4> <a${addAttribute(siteConfig.links.phone, "href")} class="text-xl font-bold hover:underline" style="color: #D2A63C;"> ${siteConfig.business.phone} </a> </div> </div> <div class="flex items-center space-x-4"> <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background-color: #EECD5C;"> <svg class="w-6 h-6" style="color: #1D1912;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <h4 class="font-bold text-lg" style="color: #1D1912;">Same-Day Response</h4> <p style="color: #BB8525;">Available 7 days a week</p> </div> </div> </div> <!-- Trust Indicators --> <div class="mt-8 p-4 rounded-lg" style="background-color: rgba(210, 166, 60, 0.1);"> <div class="flex items-center justify-between text-sm font-semibold"> <div class="flex items-center space-x-2"> <svg class="h-4 w-4" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <span style="color: #1D1912;">Licensed & Insured</span> </div> <div class="flex items-center space-x-2"> <svg class="h-4 w-4" style="color: #EECD5C;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg> <span style="color: #1D1912;">5.0★ Customer Rating</span> </div> </div> </div> </div> <!-- Bottom Contact Form --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-3 lg:p-5 shadow-2xl border-2", "style": "background-color: white; border-color: #D2A63C;" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BookingFormClean", $$BookingFormClean, { "variant": "hero", "title": "Request Emergency Service", "subtitle": "Get professional repair • Licensed technicians", "buttonText": "Get Emergency Service Now", "service": "Emergency Garage Door Repair" })}  <div class="mt-2 pt-2 border-t" style="border-color: rgba(187, 133, 37, 0.2);"> <div class="grid grid-cols-2 gap-2 text-center"> <div> <div class="text-xs font-semibold" style="color: #1D1912;">Emergency Ready</div> <div class="text-xs" style="color: #BB8525;">Same Day Service</div> </div> <div> <div class="text-xs font-semibold" style="color: #1D1912;">Licensed & Insured</div> <div class="text-xs" style="color: #BB8525;">Professional Repair</div> </div> </div> </div> ` })} </div> </div> </div> </section> </main> ${renderComponent($$result2, "FooterClean", $$FooterClean, {})}  ${renderComponent($$result2, "FAQSchema", $$FAQSchema, { "faqs": emergencyFAQs })} ${renderComponent($$result2, "BreadcrumbSchema", $$BreadcrumbSchema, { "items": breadcrumbs })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template(['  <link rel="preload" as="image" href="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/Garage%20Door%20Repair.webp">  <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "EmergencyService",
    "@id": "https://ez2fix.com/services/emergency-garage-door-repair#emergency",
    "name": "24/7 Emergency Garage Door Repair",
    "description": "24/7 emergency garage door repair service for broken springs, stuck doors, and opener failures in Bergen County, NJ.",
    "serviceType": [
      "24/7 Emergency Garage Door Repair",
      "Emergency Spring Repair",
      "Emergency Opener Repair",
      "Emergency Door Off Track Repair",
      "Emergency Garage Door Service"
    ],
    "provider": {
      "@type": "LocalBusiness",
      "name": "Ez2Fix Garage Door Services",
      "telephone": "(201) 554-6769",
      "url": "https://ez2fix.com"
    },
    "areaServed": [
      "Bergen County, NJ",
      "Hudson County, NJ",
      "Passaic County, NJ",
      "Essex County, NJ"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": "+12015546769",
      "serviceUrl": "https://ez2fix.com/services/emergency-garage-door-repair"
    },
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Emergency Garage Door Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Spring Repair",
            "description": "24/7 broken spring repair service"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Emergency Door Off Track",
            "description": "Emergency service for doors that have come off track"
          }
        }
      ]
    }
  }))) })}` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/services/emergency-garage-door-repair.astro", void 0);
const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/services/emergency-garage-door-repair.astro";
const $$url = "/services/emergency-garage-door-repair";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$EmergencyGarageDoorRepair,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
