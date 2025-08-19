/* empty css                                       */
import { f as createComponent, o as renderHead, p as renderScript, r as renderTemplate } from '../chunks/astro/server_BJwJjVcz.mjs';
import 'kleur/colors';
import 'clsx';
import { c as clientEnv } from '../chunks/env_dT-QYl02.mjs';
export { renderers } from '../renderers.mjs';

const $$DebugEnv = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html> <head><title>Environment Debug</title>${renderHead()}</head> <body> <h1>Environment Variables Debug</h1> <p>Google Maps API Key Available: ${"NO"}</p> <p>API Key Length: ${clientEnv.googleMaps.apiKey.length}</p> <p>API Key Preview: ${clientEnv.googleMaps.apiKey.substring(0, 10)}...</p> ${renderScript($$result, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/debug-env.astro?astro&type=script&index=0&lang.ts")} </body> </html>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/debug-env.astro", void 0);

const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/debug-env.astro";
const $$url = "/debug-env";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$DebugEnv,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
