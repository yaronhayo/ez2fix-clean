import { e as createAstro, f as createComponent, m as maybeRenderHead, h as addAttribute, k as renderComponent, p as renderScript, r as renderTemplate } from './astro/server_BJwJjVcz.mjs';
import 'kleur/colors';
import { b as $$CTA } from './FooterClean_DNQtsTCW.mjs';

const $$Astro = createAstro("https://ez2fixllc.com");
const $$BookingFormClean = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BookingFormClean;
  const {
    variant = "inline",
    title = "Get Your Free Estimate",
    subtitle = "Tell us about your garage door issue and we'll provide an honest, detailed estimate.",
    buttonText = "Get My Free Estimate",
    service = "",
    location = ""
  } = Astro2.props;
  const services = [
    "24/7 Emergency Repair",
    "Spring Repair",
    "Smart Opener Installation",
    "New Door Installation",
    "Commercial Service",
    "General Repair",
    "Cable & Track Repair",
    "Maintenance Service",
    "Safety Inspection",
    "Not Sure - Need Diagnosis"
  ];
  const formId = `booking-form-${variant}`;
  return renderTemplate`${maybeRenderHead()}<div class="booking-form-container"> <div${addAttribute(variant === "hero" ? "mb-3" : "mb-4 md:mb-6", "class")}> <h3${addAttribute(variant === "hero" ? "text-base lg:text-lg font-bold text-ez2fix-dark mb-1" : "text-lg md:text-xl lg:text-2xl font-bold text-ez2fix-dark mb-2", "class")}> ${title} </h3> ${subtitle && renderTemplate`<p${addAttribute(variant === "hero" ? "text-xs lg:text-sm text-ez2fix-brown" : "text-sm md:text-base text-ez2fix-brown", "class")}> ${subtitle} </p>`} </div> <form${addAttribute(variant === "hero" ? "space-y-3" : "space-y-4", "class")}${addAttribute(formId, "id")}${addAttribute(variant, "data-variant")}> <!-- Name --> <div> <label${addAttribute(`name-${variant}`, "for")}${addAttribute(variant === "hero" ? "block text-xs font-semibold mb-1 text-ez2fix-dark" : "block text-sm font-semibold mb-2 text-ez2fix-dark", "class")}>
Name*
</label> <input type="text"${addAttribute(`name-${variant}`, "id")} name="name" required${addAttribute(variant === "hero" ? "form-input w-full px-3 py-2 text-sm border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors" : "form-input w-full px-4 py-3 border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors", "class")} placeholder="Enter your full name"> <div${addAttribute(`name-error-${variant}`, "id")} class="text-red-600 text-xs mt-1 hidden" role="alert"></div> </div> <!-- Phone --> <div> <label${addAttribute(`phone-${variant}`, "for")}${addAttribute(variant === "hero" ? "block text-xs font-semibold mb-1 text-ez2fix-dark" : "block text-sm font-semibold mb-2 text-ez2fix-dark", "class")}>
Phone Number*
</label> <input type="tel"${addAttribute(`phone-${variant}`, "id")} name="phone" required${addAttribute(variant === "hero" ? "form-input w-full px-3 py-2 text-sm border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors" : "form-input w-full px-4 py-3 border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors", "class")} placeholder="(201) 555-0123"> <div${addAttribute(`phone-error-${variant}`, "id")} class="text-red-600 text-xs mt-1 hidden" role="alert"></div> </div> ${variant !== "hero" && renderTemplate`<!-- Email -->
      <div> <label${addAttribute(`email-${variant}`, "for")} class="block text-sm font-semibold mb-2 text-ez2fix-dark">
Email Address*
</label> <input type="email"${addAttribute(`email-${variant}`, "id")} name="email" required class="form-input w-full px-4 py-3 border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors" placeholder="your.email@example.com"> <div${addAttribute(`email-error-${variant}`, "id")} class="text-red-600 text-xs mt-1 hidden" role="alert"></div> </div>`} <!-- Service Type --> <div> <label${addAttribute(`service-${variant}`, "for")}${addAttribute(variant === "hero" ? "block text-xs font-semibold mb-1 text-ez2fix-dark" : "block text-sm font-semibold mb-2 text-ez2fix-dark", "class")}>
Service Needed*
</label> <select${addAttribute(`service-${variant}`, "id")} name="service" required${addAttribute(variant === "hero" ? "form-input w-full px-3 py-2 text-sm border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors bg-white" : "form-input w-full px-4 py-3 border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors bg-white", "class")}> <option value="">What can we help with?</option> ${services.map((serviceOption) => renderTemplate`<option${addAttribute(serviceOption, "value")}${addAttribute(service === serviceOption, "selected")}>${serviceOption}</option>`)} </select> <div${addAttribute(`service-error-${variant}`, "id")} class="text-red-600 text-xs mt-1 hidden" role="alert"></div> </div> ${variant !== "hero" && renderTemplate`<!-- Urgency -->
      <div> <label${addAttribute(`urgency-${variant}`, "for")} class="block text-sm font-semibold mb-2 text-ez2fix-dark">
When do you need service?*
</label> <select${addAttribute(`urgency-${variant}`, "id")} name="urgency" required class="form-input w-full px-4 py-3 border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors bg-white"> <option value="">Select timeframe...</option> <option value="asap">ASAP</option> <option value="today">Today if possible</option> <option value="few-days">Within the next few days</option> <option value="few-weeks">Within the next few weeks</option> <option value="browsing">Not sure / Just browsing</option> </select> <div${addAttribute(`urgency-error-${variant}`, "id")} class="text-red-600 text-xs mt-1 hidden" role="alert"></div> </div>`} <!-- Address --> <div> <label${addAttribute(`address-${variant}`, "for")}${addAttribute(variant === "hero" ? "block text-xs font-semibold mb-1 text-ez2fix-dark" : "block text-sm font-semibold mb-2 text-ez2fix-dark", "class")}>
Address*
</label> <input type="text"${addAttribute(`address-${variant}`, "id")} name="address" required${addAttribute(variant === "hero" ? "form-input w-full px-3 py-2 text-sm border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors" : "form-input w-full px-4 py-3 border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors", "class")}${addAttribute(variant === "hero" ? "Your address..." : "Start typing your address...", "placeholder")} autocomplete="street-address"> <div${addAttribute(`address-error-${variant}`, "id")} class="text-red-600 text-xs mt-1 hidden" role="alert"></div> ${variant !== "hero" && renderTemplate`<!-- Expanded Address Fields (initially hidden) -->
        <div${addAttribute(`address-expanded-${variant}`, "id")} class="hidden mt-3 space-y-3"> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> <div> <input type="text"${addAttribute(`city-${variant}`, "id")} name="city" class="form-input w-full px-4 py-3 border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors" placeholder="City" autocomplete="address-level2"> </div> <div> <input type="text"${addAttribute(`state-${variant}`, "id")} name="state" class="form-input w-full px-4 py-3 border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors" placeholder="State" autocomplete="address-level1" value="NJ" readonly> </div> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3"> <div> <input type="text"${addAttribute(`zip-${variant}`, "id")} name="zip" class="form-input w-full px-4 py-3 border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors" placeholder="Zip Code" autocomplete="postal-code" pattern="[0-9]{5}(-[0-9]{4})?"> </div> <div> <input type="text"${addAttribute(`unit-${variant}`, "id")} name="unit" class="form-input w-full px-4 py-3 border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors" placeholder="Unit/Apt (optional)" autocomplete="address-line2"> </div> </div> </div>`} </div> ${variant !== "hero" && renderTemplate`<!-- Notes -->
      <div> <label${addAttribute(`notes-${variant}`, "for")} class="block text-sm font-semibold mb-2 text-ez2fix-dark">
Notes
</label> <textarea${addAttribute(`notes-${variant}`, "id")} name="notes" class="form-input w-full px-4 py-3 border-2 border-ez2fix-brown/30 rounded-lg focus:border-ez2fix-primary focus:outline-none transition-colors min-h-[100px] resize-vertical" placeholder="Tell us more about your garage door issue, special instructions, or any questions you have..."></textarea> </div>`} <!-- Consent Checkbox --> <div> <div${addAttribute(variant === "hero" ? "flex items-start space-x-2" : "flex items-start space-x-3", "class")}> <input type="checkbox"${addAttribute(`consent-${variant}`, "id")} name="consent" required${addAttribute(variant === "hero" ? "mt-0.5 h-3 w-3 rounded border-2 border-ez2fix-brown/30 text-ez2fix-primary focus:ring-ez2fix-primary focus:ring-1 focus:ring-offset-1" : "mt-1 h-4 w-4 rounded border-2 border-ez2fix-brown/30 text-ez2fix-primary focus:ring-ez2fix-primary focus:ring-2 focus:ring-offset-2", "class")}> <label${addAttribute(`consent-${variant}`, "for")}${addAttribute(variant === "hero" ? "text-xs leading-tight text-ez2fix-dark" : "text-sm leading-relaxed text-ez2fix-dark", "class")}>
I agree to receive service updates via call, text, or email, and I accept the
<a href="/privacy-policy" class="underline hover:no-underline text-ez2fix-primary" target="_blank">Privacy Policy</a> and
<a href="/terms-of-service" class="underline hover:no-underline text-ez2fix-primary" target="_blank">Terms & Conditions</a>.*
</label> </div> <div${addAttribute(`consent-error-${variant}`, "id")} class="text-red-600 text-xs mt-1 hidden" role="alert"></div> </div> <!-- Submit Button --> <div${addAttribute(variant === "hero" ? "pt-1" : "pt-2", "class")}> ${renderComponent($$result, "CTA", $$CTA, { "variant": "primary", "size": variant === "hero" ? "small" : "medium", "text": buttonText, "icon": "check", "class": "w-full btn-premium shadow-premium hover-lift" })} </div> <p${addAttribute(variant === "hero" ? "text-ez2fix-brown text-center text-xs mt-2" : "text-ez2fix-brown text-center text-xs mt-3", "class")}>
* Required fields. We respect your privacy and never share your information.
</p> </form> </div> ${renderScript($$result, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/components/ui/BookingFormClean.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/components/ui/BookingFormClean.astro", void 0);

export { $$BookingFormClean as $ };
