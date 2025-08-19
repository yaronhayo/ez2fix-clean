/* empty css                                          */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../chunks/astro/server_BJwJjVcz.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, s as siteConfig } from '../../chunks/BaseLayout_D5VH6-2r.mjs';
import { $ as $$HeaderClean, a as $$FooterClean } from '../../chunks/FooterClean_DNQtsTCW.mjs';
export { renderers } from '../../renderers.mjs';

const $$EmergencyGarageDoorRepairWhenToCall = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Emergency Garage Door Repair: When to Call a Professional | Ez2Fix NJ", "description": "Know when a garage door problem requires immediate professional attention. Emergency garage door repair guide from Ez2Fix professionals in Bergen County, NJ.", "keywords": "emergency garage door repair, garage door emergency service nj, when to call garage door repair, urgent garage door problems, 24/7 garage door repair bergen county" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderClean", $$HeaderClean, {})} ${maybeRenderHead()}<main id="main-content"> <section class="py-16" style="background: linear-gradient(135deg, #1D1912 0%, #2A2420 100%);"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-3xl md:text-5xl font-bold mb-6" style="color: #F3F3E6;">
Emergency Garage Door Repair: <span style="color: #D2A63C;">When to Call</span> </h1> <p class="text-xl" style="color: #EECD5C;">
Article coming soon. For emergency garage door repair, call Ez2Fix at ${siteConfig.business.phone} </p> <div class="mt-8"> <a${addAttribute(siteConfig.links.phone, "href")} class="inline-flex items-center justify-center px-8 py-4 text-xl font-bold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105" style="background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;">
Emergency Service: ${siteConfig.business.phone} </a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "FooterClean", $$FooterClean, {})} ` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/blog/emergency-garage-door-repair-when-to-call.astro", void 0);

const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/blog/emergency-garage-door-repair-when-to-call.astro";
const $$url = "/blog/emergency-garage-door-repair-when-to-call";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$EmergencyGarageDoorRepairWhenToCall,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
