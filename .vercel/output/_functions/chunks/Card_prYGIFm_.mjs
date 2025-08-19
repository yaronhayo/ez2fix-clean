import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, s as spreadAttributes, n as renderSlot, r as renderTemplate } from './astro/server_BJwJjVcz.mjs';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const $$Astro = createAstro("https://ez2fixllc.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn(
    "rounded-xl border bg-card text-card-foreground shadow",
    className
  ), "class")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </div>`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/components/ui/Card.astro", void 0);

export { $$Card as $, cn as c };
