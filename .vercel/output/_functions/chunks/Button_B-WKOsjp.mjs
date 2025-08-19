import { e as createAstro, f as createComponent, k as renderComponent, r as renderTemplate, n as renderSlot } from './astro/server_BJwJjVcz.mjs';
import 'kleur/colors';
import { c as cn } from './Card_prYGIFm_.mjs';

const $$Astro = createAstro("https://ez2fixllc.com");
const $$Button = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Button;
  const {
    variant = "primary",
    size = "md",
    class: className,
    href,
    ...rest
  } = Astro2.props;
  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  };
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 py-2",
    lg: "h-11 px-8"
  };
  const classes = cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className
  );
  const Element = href ? "a" : "button";
  return renderTemplate`${renderComponent($$result, "Element", Element, { "class": classes, "href": href, ...rest }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/components/ui/Button.astro", void 0);

export { $$Button as $ };
