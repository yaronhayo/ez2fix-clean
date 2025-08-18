/* empty css                                      */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as Fragment, u as unescapeHTML } from "../assets/astro/server-B2kn4zWz.js";
import "kleur/colors";
import { $ as $$BaseLayout, s as siteConfig } from "../assets/BaseLayout-DZ4ZSGBd.js";
import { $ as $$HeaderClean, a as $$FooterClean } from "../assets/FooterClean-CgLsknuk.js";
import { $ as $$Card } from "../assets/Card-DzqDmBJQ.js";
import { $ as $$BookingFormClean } from "../assets/BookingFormClean-DiZA6tzw.js";
import { renderers } from "../renderers.mjs";
const $$Booking = createComponent(($$result, $$props, $$slots) => {
  const benefits = [
    {
      icon: `<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
           </svg>`,
      title: "Professional Service",
      description: "Professional repairs completed promptly - reliable service you can trust!"
    },
    {
      icon: `<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
           </svg>`,
      title: "No Hidden Fees",
      description: "Transparent pricing with written estimates before any work begins"
    },
    {
      icon: `<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
           </svg>`,
      title: "10-Year Warranty",
      description: "Premium parts and professional installation backed by comprehensive warranty"
    },
    {
      icon: `<svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
           </svg>`,
      title: "Licensed & Insured",
      description: "Professional service you can trust with full licensing and insurance protection"
    }
  ];
  const testimonialHighlights = [
    {
      name: "Maria Rodriguez",
      location: "Elmwood Park, NJ",
      text: "Called Ez2Fix when my garage door spring broke. They were professional from the first phone call to the final cleanup.",
      service: "Spring Replacement"
    },
    {
      name: "David Chen",
      location: "Saddle Brook, NJ",
      text: "Excellent customer service! They responded quickly and the work was done professionally at a fair price.",
      service: "Door Installation"
    },
    {
      name: "Sarah Mitchell",
      location: "Saddle Brook, NJ",
      text: "Three years ago, Ez2Fix installed our new garage door. Last month, they came out at no charge to make an adjustment.",
      service: "Installation & Service"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Book Your Garage Door Service - Free Estimate | Ez2Fix Bergen County NJ", "description": "Get your free garage door service estimate today! Same-day service, licensed technicians, 10-year warranty. Book online or call (201) 554-6769 for Bergen County." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderClean", $$HeaderClean, {})} ${maybeRenderHead()}<main id="main-content"> <!-- Hero Section --> <section class="py-16" style="background: linear-gradient(135deg, #1D1912 0%, #2A2420 100%);"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm mb-8" style="color: #5A3F11;"> <a href="/" class="hover:underline">Home</a> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span style="color: #6B5416;">Book Service</span> </nav> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> <!-- Left Column - Content --> <div> <h1 class="text-4xl md:text-6xl font-bold mb-6" style="color: #F3F3E6;">
Get Your Free <span style="color: #6B5416;">Garage Door</span> Estimate
</h1> <p class="text-xl leading-relaxed mb-8" style="color: #6B5416;">
Professional service starts with a simple form. Get your personalized estimate 
                and schedule same-day service from Bergen County's most trusted garage door experts.
</p> <!-- Quick Stats --> <div class="grid grid-cols-2 gap-6 mb-8"> <div class="text-center p-4 rounded-lg" style="background: rgba(238, 205, 92, 0.1);"> <div class="text-3xl font-bold" style="color: #6B5416;">24/7</div> <div class="text-sm" style="color: #6B5416;">Service Available</div> </div> <div class="text-center p-4 rounded-lg" style="background: rgba(238, 205, 92, 0.1);"> <div class="text-3xl font-bold" style="color: #D2A63C;">5.0★</div> <div class="text-sm" style="color: #EECD5C;">Customer Rating</div> </div> </div> <!-- Emergency Contact --> <div class="p-6 rounded-xl border-2" style="background: rgba(210, 166, 60, 0.1); border-color: #D2A63C;"> <div class="flex items-center space-x-4"> <div class="w-12 h-12 rounded-full flex items-center justify-center" style="background-color: #D2A63C;"> <svg class="h-6 w-6" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg> </div> <div> <div class="text-lg font-bold" style="color: #F3F3E6;">Need Emergency Service?</div> <a${addAttribute(siteConfig.links.phone, "href")} class="text-xl font-bold hover:underline" style="color: #EECD5C;">
Call ${siteConfig.business.phone} </a> </div> </div> </div> </div> <!-- Right Column - Form --> <div> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 shadow-2xl border-2 bg-ez2fix-cream border-ez2fix-primary" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "BookingFormClean", $$BookingFormClean, { "variant": "inline", "title": "Schedule Your Service", "subtitle": "Fill out this quick form and we'll contact you promptly with your personalized estimate.", "buttonText": "Get My Free Estimate", "showTitle": true })} ` })} </div> </div> </div> </div> </section> <!-- Benefits Section --> <section class="py-16" style="background-color: #F3F3E6;"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #1D1912;">
Why Choose <span style="color: #6B5416;">Ez2Fix?</span> </h2> <p class="text-xl max-w-3xl mx-auto leading-relaxed" style="color: #5A3F11;">
When you book with Ez2Fix, you're not just getting a repair - you're getting peace of mind 
              from Bergen County's most trusted garage door professionals.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> ${benefits.map((benefit, index) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "text-center p-8 shadow-xl border-2 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1", "style": `background-color: ${index % 2 === 0 ? "#1D1912" : "white"}; border-color: ${index % 2 === 0 ? "#6B5416" : "#5A3F11"};` }, { "default": ($$result3) => renderTemplate` <div class="mb-6"${addAttribute(`color: ${index % 2 === 0 ? "#6B5416" : "#1D1912"};`, "style")}> ${renderComponent($$result3, "Fragment", Fragment, {}, { "default": ($$result4) => renderTemplate`${unescapeHTML(benefit.icon)}` })} </div> <h3 class="text-xl font-bold mb-4"${addAttribute(`color: ${index % 2 === 0 ? "#F3F3E6" : "#1D1912"};`, "style")}> ${benefit.title} </h3> <p class="leading-relaxed"${addAttribute(`color: ${index % 2 === 0 ? "#6B5416" : "#5A3F11"};`, "style")}> ${benefit.description} </p> ` })}`)} </div> </div> </div> </section> <!-- Social Proof Section --> <section class="py-16" style="background-color: #1D1912;"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-16"> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #F3F3E6;">
Join <span style="color: #6B5416;">30+ Happy Customers</span> This Week
</h2> <p class="text-xl max-w-3xl mx-auto leading-relaxed" style="color: #6B5416;">
Real customers sharing their experiences with our booking process and service quality.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${testimonialHighlights.map((testimonial, index) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #5A3F11;" }, { "default": ($$result3) => renderTemplate`  <div class="flex justify-center mb-4"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg class="h-5 w-5" style="color: #6B5416;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg>`)} </div>  <blockquote class="text-base leading-relaxed mb-6 text-center italic" style="color: #1D1912;">
"${testimonial.text}"
</blockquote>  <div class="text-center"> <div class="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3" style="background-color: #D2A63C; color: #F3F3E6;"> ${testimonial.name.split(" ").map((n) => n[0]).join("")} </div> <div class="font-semibold" style="color: #1D1912;">${testimonial.name}</div> <div class="text-sm" style="color: #BB8525;">${testimonial.location}</div> <div class="text-xs font-medium px-3 py-1 rounded-full mt-2" style="background-color: #EECD5C; color: #1D1912;"> ${testimonial.service} </div> </div> ` })}`)} </div> <!-- View All Reviews Link --> <div class="text-center mt-12"> <a href="/reviews" class="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold border-2 rounded-lg transition-all duration-300 hover:shadow-lg" style="color: #EECD5C; border-color: #EECD5C; background-color: transparent;">
Read All 30+ Reviews
<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </section> <!-- Final CTA Section --> <section class="py-16" style="background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%);"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6" style="color: #1D1912;">
Ready to Get Started?
</h2> <p class="text-xl mb-8 leading-relaxed" style="color: #1D1912;">
Don't let a broken garage door disrupt your day. Get professional service with same-day availability.
</p> <!-- Two Options --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto"> <!-- Form Option --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 shadow-xl border-2", "style": "background-color: #1D1912; border-color: #F3F3E6;" }, { "default": ($$result3) => renderTemplate` <h3 class="text-2xl font-bold mb-4" style="color: #F3F3E6;">Option 1: Online Form</h3> <p class="mb-6" style="color: #EECD5C;">Get a written estimate promptly</p> <a href="#booking-form" class="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-bold rounded-lg transition-all duration-300 hover:shadow-lg" style="background-color: #D2A63C; color: #1D1912;">
Fill Out Form Above
<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path> </svg> </a> ` })} <!-- Call Option --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #1D1912;" }, { "default": ($$result3) => renderTemplate` <h3 class="text-2xl font-bold mb-4" style="color: #1D1912;">Option 2: Call Now</h3> <p class="mb-6" style="color: #BB8525;">Speak directly with our licensed technicians</p> <a${addAttribute(siteConfig.links.phone, "href")} class="inline-flex items-center justify-center w-full px-6 py-3 text-lg font-bold rounded-lg transition-all duration-300 hover:shadow-lg" style="background-color: #1D1912; color: #F3F3E6;"> <svg class="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> ${siteConfig.business.phone} </a> ` })} </div> <!-- Trust Indicators --> <div class="mt-12 flex justify-center items-center space-x-8 flex-wrap gap-4"> <div class="flex items-center space-x-2"> <svg class="h-6 w-6" style="color: #1D1912;" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path> </svg> <span class="font-semibold" style="color: #1D1912;">Licensed & Insured</span> </div> <div class="flex items-center space-x-2"> <svg class="h-6 w-6" style="color: #1D1912;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg> <span class="font-semibold" style="color: #1D1912;">5.0★ Rating</span> </div> <div class="flex items-center space-x-2"> <svg class="h-6 w-6" style="color: #1D1912;" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path> </svg> <span class="font-semibold" style="color: #1D1912;">Family Owned Since 2014</span> </div> </div> </div> </div> </section> </main> ${renderComponent($$result2, "FooterClean", $$FooterClean, {})} ` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/booking.astro", void 0);
const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/booking.astro";
const $$url = "/booking";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Booking,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
