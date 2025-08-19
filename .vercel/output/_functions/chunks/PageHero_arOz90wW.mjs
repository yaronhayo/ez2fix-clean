import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, u as unescapeHTML, r as renderTemplate, k as renderComponent, l as Fragment } from './astro/server_BJwJjVcz.mjs';
import 'kleur/colors';

const $$Astro = createAstro("https://ez2fixllc.com");
const $$PageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHero;
  const {
    title,
    subtitle,
    breadcrumbs,
    stats,
    backgroundImage,
    theme = "dark",
    size = "medium"
  } = Astro2.props;
  const sizeClasses = {
    small: "py-12 md:py-16",
    medium: "py-16 md:py-20",
    large: "py-20 md:py-24"
  };
  const bgClass = theme === "dark" ? "gradient-dark" : "bg-ez2fix-cream";
  const textClass = theme === "dark" ? "text-ez2fix-cream" : "text-ez2fix-dark";
  const accentClass = theme === "dark" ? "text-ez2fix-gold" : "text-ez2fix-primary";
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`relative ${sizeClasses[size]} overflow-hidden ${bgClass}`, "class")}> ${backgroundImage && renderTemplate`<div class="absolute inset-0"> <img${addAttribute(backgroundImage, "src")} alt="" class="w-full h-full object-cover" loading="eager"> <div class="absolute inset-0 bg-black bg-opacity-60"></div> </div>`} <div class="container mx-auto px-4 relative z-10"> <div class="max-w-4xl mx-auto text-center"> ${breadcrumbs && renderTemplate`<nav class="flex items-center justify-center space-x-2 text-sm mb-8 text-ez2fix-brown"> ${breadcrumbs.map((crumb, index) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${index > 0 && renderTemplate`<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path> </svg>`}${index === breadcrumbs.length - 1 ? renderTemplate`<span${addAttribute(accentClass, "class")}>${crumb.name}</span>` : renderTemplate`<a${addAttribute(crumb.href, "href")} class="hover:underline">${crumb.name}</a>`}` })}`)} </nav>`} <h1${addAttribute(`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 ${textClass}`, "class")}>${unescapeHTML(title)}</h1> ${subtitle && renderTemplate`<p${addAttribute(`text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-8 ${theme === "dark" ? "text-ez2fix-gold" : "text-ez2fix-brown"}`, "class")}>${unescapeHTML(subtitle)}</p>`} ${stats && renderTemplate`<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto"> ${stats.map((stat) => renderTemplate`<div${addAttribute(`text-center p-4 rounded-lg ${theme === "dark" ? "bg-white/10" : "bg-ez2fix-primary/10"}`, "class")}> <div${addAttribute(`text-2xl md:text-3xl font-bold mb-1 ${accentClass}`, "class")}> ${stat.number} </div> <div${addAttribute(`text-sm md:text-base ${theme === "dark" ? "text-ez2fix-cream" : "text-ez2fix-brown"}`, "class")}> ${stat.label} </div> </div>`)} </div>`} </div> </div> </section>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/components/ui/PageHero.astro", void 0);

export { $$PageHero as $ };
