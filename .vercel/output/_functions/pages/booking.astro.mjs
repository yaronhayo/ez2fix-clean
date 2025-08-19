/* empty css                                       */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute, l as Fragment, u as unescapeHTML } from '../chunks/astro/server_BJwJjVcz.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, s as siteConfig } from '../chunks/BaseLayout_D5VH6-2r.mjs';
import { $ as $$HeaderClean, a as $$FooterClean } from '../chunks/FooterClean_DNQtsTCW.mjs';
import { $ as $$Card } from '../chunks/Card_prYGIFm_.mjs';
import { $ as $$BookingFormClean } from '../chunks/BookingFormClean_Ul3rCt9-.mjs';
export { renderers } from '../renderers.mjs';

const $$Booking = createComponent(($$result, $$props, $$slots) => {
  const trustFactors = [
    {
      icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
           </svg>`,
      text: "Same-Day Service Available"
    },
    {
      icon: `<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
             <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
           </svg>`,
      text: "5.0\u2605 Customer Rating"
    },
    {
      icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
           </svg>`,
      text: "Licensed & Insured"
    },
    {
      icon: `<svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
           </svg>`,
      text: "10-Year Warranty"
    }
  ];
  const testimonials = [
    {
      name: "Maria Rodriguez",
      location: "Fair Lawn, NJ",
      text: "Ez2Fix made scheduling so easy. They were here the same day and fixed our spring perfectly.",
      service: "Spring Repair"
    },
    {
      name: "David Chen",
      location: "Clifton, NJ",
      text: "Professional estimate and excellent work. Would definitely book with them again.",
      service: "Door Installation"
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Book Your Garage Door Service - Free Estimate | Ez2Fix Bergen County NJ", "description": "Get your free garage door service estimate today! Same-day service, licensed technicians, 10-year warranty. Book online or call (201) 554-6769 for Bergen County." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderClean", $$HeaderClean, {})} ${maybeRenderHead()}<main id="main-content"> <!-- Hero Section - Conversion Focused --> <section class="py-16 bg-gradient-to-br from-ez2fix-dark via-ez2fix-brown/20 to-ez2fix-dark"> <div class="container mx-auto px-4"> <div class="max-w-7xl mx-auto"> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm mb-8 text-ez2fix-gold"> <a href="/" class="hover:text-ez2fix-primary transition-colors">Home</a> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg> <span class="text-ez2fix-primary font-semibold">Book Service</span> </nav> <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"> <!-- Left Column - Value Proposition --> <div> <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-ez2fix-cream">
Get Your <span class="text-ez2fix-primary">Free Estimate</span> Today
</h1> <p class="text-xl md:text-2xl leading-relaxed mb-8 text-ez2fix-gold">
Professional garage door service in Bergen County.
<span class="text-ez2fix-primary font-semibold">Same-day availability</span> for urgent repairs.
</p> <!-- Trust Indicators --> <div class="grid grid-cols-2 gap-4 mb-8"> ${trustFactors.map((factor) => renderTemplate`<div class="flex items-center space-x-3 p-4 rounded-lg bg-ez2fix-cream/10 border border-ez2fix-primary/20"> <div class="text-ez2fix-primary flex-shrink-0"> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(factor.icon)}` })} </div> <span class="text-ez2fix-cream font-medium text-sm">${factor.text}</span> </div>`)} </div> <!-- Emergency Contact --> <div class="p-6 rounded-xl border-2 border-ez2fix-primary bg-ez2fix-primary/10"> <div class="flex items-center space-x-4"> <div class="w-12 h-12 rounded-full bg-ez2fix-primary flex items-center justify-center"> <svg class="h-6 w-6 text-ez2fix-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> </div> <div> <div class="text-lg font-bold text-ez2fix-cream">Need immediate help?</div> <a${addAttribute(siteConfig.links.phone, "href")} class="text-2xl font-bold text-ez2fix-primary hover:text-ez2fix-gold transition-colors"> ${siteConfig.business.phone} </a> </div> </div> </div> </div> <!-- Right Column - Booking Form (Primary Focus) --> <div> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 shadow-2xl border-2 bg-ez2fix-cream border-ez2fix-primary" }, { "default": ($$result3) => renderTemplate` <div class="text-center mb-6"> <h2 class="text-2xl font-bold text-ez2fix-dark mb-2">Schedule Your Service</h2> <p class="text-ez2fix-brown">Get your personalized estimate in minutes</p> </div> ${renderComponent($$result3, "BookingFormClean", $$BookingFormClean, { "variant": "inline", "title": "", "subtitle": "", "buttonText": "Get My Free Estimate", "showTitle": false })} ` })} </div> </div> </div> </div> </section> <!-- Social Proof - Streamlined --> <section class="py-16 bg-ez2fix-cream"> <div class="container mx-auto px-4"> <div class="max-w-6xl mx-auto"> <div class="text-center mb-12"> <h2 class="text-3xl md:text-4xl font-bold text-ez2fix-dark mb-4">
Trusted by <span class="text-ez2fix-primary">Bergen County Families</span> </h2> <p class="text-xl text-ez2fix-brown max-w-3xl mx-auto">
See what your neighbors are saying about our booking process and service quality.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"> ${testimonials.map((testimonial) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-lg border-2 bg-white border-ez2fix-primary/20 hover:border-ez2fix-primary/40 transition-all duration-300" }, { "default": ($$result3) => renderTemplate`  <div class="flex justify-center mb-4"> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg class="h-5 w-5 text-ez2fix-primary" fill="currentColor" viewBox="0 0 24 24"> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path> </svg>`)} </div>  <blockquote class="text-base leading-relaxed mb-6 text-center italic text-ez2fix-dark">
"${testimonial.text}"
</blockquote>  <div class="text-center"> <div class="w-12 h-12 rounded-full bg-ez2fix-primary flex items-center justify-center font-bold text-lg mx-auto mb-3 text-ez2fix-cream"> ${testimonial.name.split(" ").map((n) => n[0]).join("")} </div> <div class="font-semibold text-ez2fix-dark">${testimonial.name}</div> <div class="text-sm text-ez2fix-brown">${testimonial.location}</div> <div class="text-xs font-medium px-3 py-1 rounded-full mt-2 bg-ez2fix-primary text-ez2fix-cream"> ${testimonial.service} </div> </div> ` })}`)} </div> <!-- Single Clear CTA --> <div class="text-center mt-12"> <a href="/reviews" class="inline-flex items-center px-6 py-3 text-lg font-semibold border-2 border-ez2fix-primary text-ez2fix-primary bg-transparent rounded-lg hover:bg-ez2fix-primary hover:text-ez2fix-cream transition-all duration-300 hover:shadow-lg">
Read All Our Reviews
<svg class="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> </div> </section> <!-- Final CTA - Clean and Direct --> <section class="py-16 bg-gradient-to-r from-ez2fix-primary to-ez2fix-gold"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h2 class="text-3xl md:text-4xl font-bold mb-6 text-ez2fix-dark">
Ready to Schedule Your Service?
</h2> <p class="text-xl mb-8 text-ez2fix-dark max-w-2xl mx-auto">
Don't wait for your garage door problem to get worse. 
            Get professional service with same-day availability.
</p> <!-- Primary Actions --> <div class="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-lg mx-auto"> <a href="#main-content" class="w-full sm:w-auto px-8 py-4 bg-ez2fix-dark text-ez2fix-primary font-bold rounded-lg hover:bg-ez2fix-brown hover:text-ez2fix-cream transition-all duration-300 shadow-lg hover:shadow-xl text-center">
Fill Out Form Above
</a> <span class="text-ez2fix-dark font-semibold">or</span> <a${addAttribute(siteConfig.links.phone, "href")} class="w-full sm:w-auto px-8 py-4 border-2 border-ez2fix-dark text-ez2fix-dark font-bold rounded-lg hover:bg-ez2fix-dark hover:text-ez2fix-primary transition-all duration-300 shadow-lg hover:shadow-xl text-center">
Call ${siteConfig.business.phone} </a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "FooterClean", $$FooterClean, {})} ` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/booking.astro", void 0);

const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/booking.astro";
const $$url = "/booking";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Booking,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
