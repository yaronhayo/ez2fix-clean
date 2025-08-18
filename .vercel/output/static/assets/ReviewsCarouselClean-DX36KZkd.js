import { e as createAstro, f as createComponent, m as maybeRenderHead, o as renderScript, h as addAttribute, r as renderTemplate } from "./astro/server-B2kn4zWz.js";
import "kleur/colors";
import "clsx";
/* empty css                        */
const $$Astro = createAstro("https://ez2fix.com");
const $$ReviewsCarouselClean = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ReviewsCarouselClean;
  const { pageType = "homepage" } = Astro2.props;
  const reviews = [
    {
      name: "Maria Rodriguez",
      location: "Elmwood Park, NJ",
      text: "Called Ez2Fix when my garage door spring broke. Professional from start to finish. The technician explained everything and completed the repair beautifully.",
      service: "Spring Replacement"
    },
    {
      name: "David Chen",
      location: "Jersey City, NJ",
      text: "Excellent customer service! Quick response, convenient scheduling, and professional work. Highly recommend their services.",
      service: "Door Installation"
    },
    {
      name: "Susan Thompson",
      location: "Fair Lawn, NJ",
      text: "Ez2Fix made the whole process easy. From the phone call to completion, everything went smoothly. Very satisfied with their professional service.",
      service: "Opener Repair"
    },
    {
      name: "Michael Johnson",
      location: "Garfield, NJ",
      text: "Great experience working with Ez2Fix. Honest about what needed fixing and provided excellent service. The garage door works perfectly now.",
      service: "Track Repair"
    },
    {
      name: "Jennifer Walsh",
      location: "Hoboken, NJ",
      text: "Professional service from start to finish. Arrived on time, diagnosed quickly, and fixed my garage door opener perfectly. Will call them again.",
      service: "Opener Service"
    },
    {
      name: "Robert Kim",
      location: "Wood-Ridge, NJ",
      text: "Outstanding service! My garage door was making terrible noises. Ez2Fix fixed it professionally and it's been working perfectly ever since.",
      service: "Maintenance"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<div class="reviews-carousel relative" data-astro-cid-3i2y7l6p> <!-- Reviews Container --> <div class="reviews-track flex transition-transform duration-700 ease-in-out" data-astro-cid-3i2y7l6p> ${reviews.map((review, index) => renderTemplate`<div class="review-slide min-w-full sm:min-w-1/2 lg:min-w-1/3 px-2 sm:px-3"${addAttribute(index, "data-index")} data-astro-cid-3i2y7l6p> <div class="p-4 sm:p-5 md:p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 mx-auto max-w-sm bg-ez2fix-cream border-ez2fix-gold" data-astro-cid-3i2y7l6p> <!-- Stars --> <div class="flex justify-center mb-4 sm:mb-6" data-astro-cid-3i2y7l6p> ${[1, 2, 3, 4, 5].map(() => renderTemplate`<svg class="h-5 w-5 sm:h-6 sm:w-6 text-ez2fix-primary" fill="currentColor" viewBox="0 0 24 24" data-astro-cid-3i2y7l6p> <path d="M12 .587l3.668 7.431 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" data-astro-cid-3i2y7l6p></path> </svg>`)} </div> <!-- Quote --> <blockquote class="text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 text-center italic text-ez2fix-dark" data-astro-cid-3i2y7l6p>
"${review.text}"
</blockquote> <!-- Customer Info --> <div class="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4" data-astro-cid-3i2y7l6p> <!-- Avatar --> <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-bold text-base sm:text-lg bg-ez2fix-primary text-ez2fix-cream" data-astro-cid-3i2y7l6p> ${review.name.split(" ").map((n) => n[0]).join("")} </div> <div class="text-center" data-astro-cid-3i2y7l6p> <div class="font-semibold text-base sm:text-lg text-ez2fix-dark" data-astro-cid-3i2y7l6p>${review.name}</div> <div class="text-xs sm:text-sm text-ez2fix-brown" data-astro-cid-3i2y7l6p>${review.location}</div> <div class="text-xs font-medium px-2 py-1 rounded-full mt-1 bg-ez2fix-gold text-ez2fix-dark" data-astro-cid-3i2y7l6p> ${review.service} </div> </div> </div> </div> </div>`)} </div> <!-- Navigation Dots --> <div class="flex justify-center space-x-2 mt-8" data-astro-cid-3i2y7l6p> ${reviews.map((_, index) => renderTemplate`<button class="carousel-dot w-3 h-3 rounded-full transition-all duration-300 hover:scale-110 bg-ez2fix-brown hover:bg-ez2fix-primary"${addAttribute(index, "data-index")}${addAttribute(`Go to review ${index + 1}`, "aria-label")} data-astro-cid-3i2y7l6p></button>`)} </div> </div> ${renderScript($$result, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/components/ui/ReviewsCarouselClean.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/components/ui/ReviewsCarouselClean.astro", void 0);
export {
  $$ReviewsCarouselClean as $
};
