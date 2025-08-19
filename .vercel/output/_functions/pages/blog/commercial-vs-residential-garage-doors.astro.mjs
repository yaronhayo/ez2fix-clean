/* empty css                                          */
import { f as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BJwJjVcz.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_D5VH6-2r.mjs';
import { $ as $$HeaderClean, a as $$FooterClean } from '../../chunks/FooterClean_DNQtsTCW.mjs';
export { renderers } from '../../renderers.mjs';

const $$CommercialVsResidentialGarageDoors = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Commercial vs Residential Garage Doors: Key Differences | Ez2Fix NJ", "description": "Understanding the important differences between commercial and residential garage door systems. Expert guidance from Ez2Fix professionals in Bergen County, NJ.", "keywords": "commercial vs residential garage doors, commercial garage door differences, business garage doors vs home, garage door systems comparison, bergen county commercial garage doors" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeaderClean", $$HeaderClean, {})} ${maybeRenderHead()}<main id="main-content"> <section class="py-16" style="background: linear-gradient(135deg, #1D1912 0%, #2A2420 100%);"> <div class="container mx-auto px-4"> <div class="max-w-4xl mx-auto text-center"> <h1 class="text-3xl md:text-5xl font-bold mb-6" style="color: #F3F3E6;">
Commercial vs Residential <span style="color: #D2A63C;">Garage Doors</span> </h1> <p class="text-xl" style="color: #EECD5C;">
Detailed article coming soon. Contact Ez2Fix for commercial and residential garage door services.
</p> <div class="mt-8 flex gap-4 justify-center"> <a href="/services/commercial-garage-door-service" class="px-6 py-3 bg-blue-600 text-white rounded-lg">Commercial Service</a> <a href="/services/new-garage-door-installation" class="px-6 py-3 bg-green-600 text-white rounded-lg">Residential Service</a> </div> </div> </div> </section> </main> ${renderComponent($$result2, "FooterClean", $$FooterClean, {})} ` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/blog/commercial-vs-residential-garage-doors.astro", void 0);

const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/blog/commercial-vs-residential-garage-doors.astro";
const $$url = "/blog/commercial-vs-residential-garage-doors";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$CommercialVsResidentialGarageDoors,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
