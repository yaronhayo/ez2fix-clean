/* empty css                                       */
import { f as createComponent, k as renderComponent, p as renderScript, r as renderTemplate, l as Fragment, u as unescapeHTML, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_BJwJjVcz.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, s as siteConfig } from '../chunks/BaseLayout_D5VH6-2r.mjs';
import { $ as $$HeaderClean, a as $$FooterClean } from '../chunks/FooterClean_DNQtsTCW.mjs';
import { $ as $$Card } from '../chunks/Card_prYGIFm_.mjs';
import { $ as $$Button } from '../chunks/Button_B-WKOsjp.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Faq = createComponent(($$result, $$props, $$slots) => {
  const faqCategories = [
    {
      category: "General Questions",
      faqs: [
        {
          question: "What areas do you service?",
          answer: "We provide garage door services throughout Hudson & Bergen Counties, including Jersey City, Hoboken, Bayonne, Union City, Weehawken, North Bergen, West New York, Elmwood Park, Fair Lawn, Garfield, Lodi, Saddle Brook, Hasbrouck Heights, Wood-Ridge, Little Ferry, and surrounding communities."
        },
        {
          question: "Do you offer emergency services?",
          answer: `Absolutely - we know garage door emergencies don't wait for business hours. Whether it's 6 AM and your car is trapped inside when you're rushing to work, or 11 PM and your door won't close leaving your home unsecure, we understand the stress and urgency. We provide 24/7 emergency service because your peace of mind can't wait until tomorrow. Call us immediately at ${siteConfig.business.phone}.`
        },
        {
          question: "Are you licensed and insured?",
          answer: "Absolutely. Ez2Fix is fully licensed and insured with comprehensive liability and workers' compensation insurance. We are professional technicians committed to safe, quality service."
        },
        {
          question: "Do you provide free estimates?",
          answer: "Yes - and we know cost anxiety is often the biggest worry when your garage door breaks. You're already stressed about the inconvenience, and the last thing you need is surprise charges or pressure tactics. That's why we provide completely free, written estimates with no obligation and no hidden fees. You'll know exactly what everything costs before we begin any work, so you can make the best decision for your family and budget."
        }
      ],
      moreFaqs: [
        {
          question: "How quickly can you respond to service calls?",
          answer: "We strive to respond to all service calls promptly. For emergency situations, we aim to have a technician at your location as soon as possible. For scheduled appointments, we offer flexible scheduling to meet your needs."
        },
        {
          question: "Do you work on weekends and holidays?",
          answer: "Yes, we provide 7-days-a-week service including weekends and holidays. Garage door problems don't wait for business hours, so neither do we. Emergency services are available 24/7."
        },
        {
          question: "What brands of garage doors do you work on?",
          answer: "We service all major garage door brands including Clopay, Wayne Dalton, Amarr, CHI, Raynor, and many others. Our technicians are experienced with both residential and commercial door systems."
        },
        {
          question: "Do you offer maintenance contracts?",
          answer: "Yes, we offer annual maintenance contracts to keep your garage door system running smoothly. Regular maintenance prevents costly repairs and extends the life of your door and opener."
        },
        {
          question: "What should I do while waiting for your technician?",
          answer: "For safety, avoid using your garage door if it's malfunctioning. Disconnect the opener if the door won't close properly, and never attempt to repair springs or cables yourself. We'll handle everything safely when we arrive."
        },
        {
          question: "Do you provide references from previous customers?",
          answer: "Absolutely! We're proud of our work and happy to provide references from recent customers in your area. You can also read our online reviews to see what other Hudson & Bergen County residents say about our service."
        },
        {
          question: "How do I prepare for your service visit?",
          answer: "Clear the area around your garage door, ensure we have access to electrical outlets, and remove any vehicles from the garage if possible. We'll bring all necessary tools and equipment for the repair or installation."
        },
        {
          question: "What happens if you can't fix my garage door?",
          answer: "In the rare case where a repair isn't possible or cost-effective, we'll explain your options and provide a detailed estimate for replacement. We only recommend replacement when it's truly the best solution for our customers."
        }
      ]
    },
    {
      category: "Garage Door Repairs",
      faqs: [
        {
          question: "How do I know if I need garage door spring replacement?",
          answer: "That loud 'SNAP!' sound in the middle of the night? That's usually your garage door spring breaking. Other warning signs include your door refusing to open, looking crooked when it tries to operate, or feeling incredibly heavy when you attempt to lift it manually. We know it's tempting to try fixing it yourself to save money, but garage door springs are under extreme tension and can cause serious injury or death if handled improperly. Please don't risk your safety - our trained technicians have the right tools and experience to handle this dangerous repair safely."
        },
        {
          question: "Why won't my garage door open?",
          answer: "Common causes include: broken springs, damaged cables, misaligned tracks, faulty garage door opener, blocked safety sensors, or power issues. Our technicians can quickly diagnose and fix the problem."
        },
        {
          question: "How long do garage door repairs take?",
          answer: "Most repairs are completed within the same visit, typically taking 1-3 hours depending on the complexity. We carry common parts on our trucks to minimize delays and get your door working quickly."
        },
        {
          question: "What if my garage door is making noise?",
          answer: "Noisy doors often indicate worn rollers, loose hardware, lack of lubrication, or misaligned tracks. While some noise is normal, loud grinding, squealing, or banging sounds require professional attention to prevent further damage."
        }
      ],
      moreFaqs: [
        {
          question: "Can you repair garage doors that are off their tracks?",
          answer: "Yes, we can repair garage doors that have come off their tracks. This is often caused by broken cables, damaged rollers, or track misalignment. It's dangerous to attempt this repair yourself - call us immediately for safe, professional service."
        },
        {
          question: "What should I do if my garage door opener remote stops working?",
          answer: "First, try replacing the remote battery. If that doesn't work, the remote may need reprogramming or replacement. We can reprogram existing remotes or provide new ones that are compatible with your opener system."
        },
        {
          question: "How do I know if my garage door cables need replacement?",
          answer: "Signs of cable problems include: frayed or broken cables, door hanging crooked, door won't stay up when manually opened, or visible cable damage. Broken cables are dangerous - don't operate the door and call for immediate service."
        },
        {
          question: "Why does my garage door reverse when trying to close?",
          answer: "This usually indicates a problem with the safety sensors or force settings. Check for obstructions blocking the sensors, clean sensor lenses, and ensure they're properly aligned. If the problem persists, our technicians can adjust or replace the sensors."
        },
        {
          question: "What causes garage door panels to crack or dent?",
          answer: "Panel damage is often caused by impacts, weather exposure, or age-related wear. Minor dents may be repairable, but significant damage usually requires panel replacement to maintain the door's structural integrity and appearance."
        },
        {
          question: "Can you fix a garage door that won't stay closed?",
          answer: "Yes, this is usually caused by limit switch problems, worn weather stripping, or track issues. Our technicians can diagnose the exact cause and make the necessary adjustments or replacements to keep your door properly closed."
        },
        {
          question: "Why is my garage door moving so slowly?",
          answer: "Slow operation can indicate worn rollers, lack of lubrication, motor problems, or track obstructions. Regular maintenance prevents this issue, but we can diagnose and fix the underlying cause to restore proper operation speed."
        },
        {
          question: "What should I do if my garage door gets stuck halfway?",
          answer: "Don't force it! This could indicate broken springs, cable problems, or track obstructions. Disconnect the opener and call for service. Forcing a stuck door can cause additional damage and safety hazards."
        }
      ]
    },
    {
      category: "Garage Door Installation",
      faqs: [
        {
          question: "How long does garage door installation take?",
          answer: "New garage door installation typically takes 3-5 hours, depending on the complexity and type of door. This includes removing the old door (if applicable), installing the new door, opener, and testing all components."
        },
        {
          question: "What garage door brands do you install?",
          answer: "We install all major garage door brands including LiftMaster, Chamberlain, Clopay, Wayne Dalton, and more. We'll help you choose the best door for your home's style, budget, and functionality needs."
        },
        {
          question: "Do you install smart garage door openers?",
          answer: "Yes! We install and program smart garage door openers with WiFi connectivity, smartphone apps, battery backup, and advanced safety features. Popular brands include LiftMaster myQ and Chamberlain smart openers."
        },
        {
          question: "Can you install a garage door in any size opening?",
          answer: "We can install garage doors for most standard and custom openings. Our technicians will measure your opening and recommend the appropriate door size and configuration, including single and double-car doors."
        }
      ],
      moreFaqs: [
        {
          question: "Do you handle permits for garage door installation?",
          answer: "In most cases, garage door replacement doesn't require permits. However, for new openings or structural changes, permits may be needed. We'll advise you of any permit requirements and can assist with the process if needed."
        },
        {
          question: "What's the difference between insulated and non-insulated garage doors?",
          answer: "Insulated doors provide better energy efficiency, noise reduction, and durability. They're especially beneficial if you have living spaces above or adjacent to the garage, or use your garage as a workshop or storage area."
        },
        {
          question: "Can you match my new garage door to my home's style?",
          answer: "Absolutely! We offer a wide variety of styles, colors, and materials including steel, wood, aluminum, and composite doors. We'll help you choose a door that complements your home's architectural style and enhances curb appeal."
        },
        {
          question: "Do you dispose of old garage doors?",
          answer: "Yes, as part of our installation service, we'll properly dispose of your old garage door and opener components. We handle all cleanup so you don't have to worry about debris removal."
        },
        {
          question: "Can you install a garage door opener with my new door?",
          answer: "Absolutely! We can install a new opener along with your door, or upgrade your existing opener if it's compatible. We'll recommend the best opener for your door size, weight, and usage patterns."
        },
        {
          question: "How do I choose between different garage door materials?",
          answer: "Steel doors offer durability and low maintenance, wood provides natural beauty but requires more care, aluminum is lightweight and rust-resistant, and composite combines durability with wood-like appearance. We'll help you choose based on your needs and budget."
        },
        {
          question: "What's included in your installation service?",
          answer: "Our installation includes complete removal of old door, installation of new door and hardware, opener installation/connection, safety testing, customer training on operation, cleanup, and warranty documentation."
        },
        {
          question: "Can you install garage doors in extreme weather?",
          answer: "We can install in most weather conditions, though extreme temperatures or storms may require rescheduling for safety. We'll work with you to find the best installation window and protect your home during the process."
        }
      ]
    },
    {
      category: "Costs and Warranty",
      faqs: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, check, and all major credit cards for your convenience. Payment is due upon completion of services. We also offer financing options for qualified customers on larger projects."
        },
        {
          question: "What warranties do you provide?",
          answer: "We stand behind our work with comprehensive warranties: 1-year warranty on repair work, 10-year warranty on spring replacements, and 15-year warranty on new door installations. Manufacturer warranties also apply to all parts and products."
        },
        {
          question: "Do you offer senior discounts?",
          answer: "Yes, we offer special pricing for senior citizens. Please mention this when scheduling your service appointment to ensure you receive the discount."
        },
        {
          question: "What factors affect garage door repair costs?",
          answer: "Costs depend on the type of repair needed, parts required, door size, and complexity of the issue. We provide transparent, written estimates before beginning any work so you know exactly what to expect."
        }
      ],
      moreFaqs: [
        {
          question: "Do you offer financing for garage door installations?",
          answer: "Yes, we offer financing options for qualified customers on new garage door installations and major repairs. This allows you to get the service you need now and pay over time with convenient monthly payments."
        },
        {
          question: "Is there a service call fee?",
          answer: "There is no service call fee when you proceed with recommended repairs. For estimates only or if you choose not to proceed with repairs, a minimal diagnostic fee may apply, which we'll discuss upfront."
        },
        {
          question: "Do you offer any other discounts besides senior discounts?",
          answer: "Yes, we occasionally offer seasonal promotions and may provide discounts for multiple services or referrals. Follow us on social media or ask about current promotions when you call."
        },
        {
          question: "What happens if I'm not satisfied with the work?",
          answer: "Customer satisfaction is our top priority. If you're not completely satisfied with our work, we'll return to make it right at no additional charge. Our warranty covers both parts and labor for your peace of mind."
        }
      ]
    },
    {
      category: "Maintenance and Safety",
      faqs: [
        {
          question: "How often should I have my garage door serviced?",
          answer: "We recommend annual professional maintenance to keep your garage door operating safely and efficiently. Regular maintenance can prevent costly repairs and extend the life of your door system."
        },
        {
          question: "What garage door maintenance can I do myself?",
          answer: "Safe DIY maintenance includes: visual inspection for wear, cleaning tracks of debris, testing safety features, and lubricating hinges and rollers with white lithium grease. Leave spring adjustments and major repairs to professionals."
        },
        {
          question: "How do I test my garage door safety features?",
          answer: "Test the auto-reverse by placing a 2x4 under the door - it should reverse when it contacts the board. Test photo-eye sensors by breaking the beam while closing - the door should reverse. If either test fails, call for service immediately."
        },
        {
          question: "When should I replace my garage door instead of repairing it?",
          answer: "Consider replacement if: the door is over 15-20 years old, requires frequent repairs, has significant structural damage, lacks modern safety features, or if replacement costs are more economical than ongoing repairs."
        }
      ],
      moreFaqs: [
        {
          question: "What are the signs that my garage door needs maintenance?",
          answer: "Warning signs include: unusual noises during operation, slow or jerky movement, door not closing completely, visible wear on cables or springs, remote control issues, or the door feeling heavier than usual when manually operated."
        },
        {
          question: "How can I make my garage door more secure?",
          answer: "Security improvements include: upgrading to a modern opener with rolling code technology, installing smart door locks, adding motion-sensor lighting, using manual release locks, and ensuring your opener remote uses encrypted signals."
        },
        {
          question: "What should I do if my garage door gets frozen shut in winter?",
          answer: "Never force a frozen door open. Use a hair dryer to melt ice around the weather seal, or pour warm water along the bottom seal. Clear snow and ice from tracks. If the door is still stuck, call for professional assistance to avoid damage."
        },
        {
          question: "How long do garage door components typically last?",
          answer: "Garage door lifespans vary: springs (7-10 years), openers (10-15 years), doors (15-30 years depending on material), cables (7-10 years), and rollers (5-7 years with regular use). Quality products and maintenance extend these lifespans."
        }
      ]
    }
  ];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Garage Door FAQ Bergen County NJ | Licensed Contractor #13VH13553300 | Ez2Fix Expert Answers", "description": "Garage door FAQ from licensed Bergen County contractor #13VH13553300. Expert answers about repair, installation, maintenance, emergency service. Spring replacement, opener installation, pricing. Serving Elmwood Park, Fair Lawn, Clifton. Call (201) 554-6769!", "keywords": "garage door faq bergen county nj, garage door questions answers nj, garage door repair faq bergen county, garage door maintenance tips nj, emergency garage door service faq bergen county, garage door installation questions bergen county, licensed garage door contractor faq nj, garage door troubleshooting bergen county, garage door spring repair faq, garage door opener faq nj", "data-astro-cid-6kmwghhu": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeaderClean", $$HeaderClean, { "data-astro-cid-6kmwghhu": true })} ${maybeRenderHead()}<main id="main-content" data-astro-cid-6kmwghhu> <!-- Hero Section --> <section class="py-16" style="background: linear-gradient(135deg, #1D1912 0%, #2A2420 100%);" data-astro-cid-6kmwghhu> <div class="container mx-auto px-4" data-astro-cid-6kmwghhu> <div class="max-w-4xl mx-auto text-center" data-astro-cid-6kmwghhu> <!-- Breadcrumb --> <nav class="flex items-center justify-start space-x-2 text-sm mb-8 max-w-4xl mx-auto" style="color: #BB8525;" data-astro-cid-6kmwghhu> <a href="/" class="hover:underline" data-astro-cid-6kmwghhu>Home</a> <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6kmwghhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-6kmwghhu></path> </svg> <span style="color: #EECD5C;" data-astro-cid-6kmwghhu>FAQ</span> </nav> <h1 class="text-4xl md:text-5xl font-bold mb-6" style="color: #F3F3E6;" data-astro-cid-6kmwghhu>
Got Questions About Your <span style="color: #D2A63C;" data-astro-cid-6kmwghhu>Garage Door Problem?</span> </h1> <p class="text-xl leading-relaxed mb-8" style="color: #EECD5C;" data-astro-cid-6kmwghhu>
Whether it's 6 AM and you're trapped in your garage running late for work, or your door won't close and you're worried about security - we know you need answers fast. After 10+ years serving Bergen County families, we've heard every question and solved every problem. Here are the honest, straightforward answers you're looking for.
</p> <!-- Quick Stats --> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto" data-astro-cid-6kmwghhu> <div class="text-center p-4 rounded-lg" style="background: rgba(238, 205, 92, 0.1);" data-astro-cid-6kmwghhu> <div class="text-3xl font-bold mb-2" style="color: #D2A63C;" data-astro-cid-6kmwghhu>10+</div> <div class="text-sm" style="color: #EECD5C;" data-astro-cid-6kmwghhu>Years Experience</div> </div> <div class="text-center p-4 rounded-lg" style="background: rgba(238, 205, 92, 0.1);" data-astro-cid-6kmwghhu> <div class="text-3xl font-bold mb-2" style="color: #D2A63C;" data-astro-cid-6kmwghhu>24/7</div> <div class="text-sm" style="color: #EECD5C;" data-astro-cid-6kmwghhu>Emergency Service</div> </div> <div class="text-center p-4 rounded-lg" style="background: rgba(238, 205, 92, 0.1);" data-astro-cid-6kmwghhu> <div class="text-3xl font-bold mb-2" style="color: #D2A63C;" data-astro-cid-6kmwghhu>5.0★</div> <div class="text-sm" style="color: #EECD5C;" data-astro-cid-6kmwghhu>Customer Rating</div> </div> </div> </div> </div> </section> <!-- FAQ Content --> <section class="py-16" style="background-color: #F3F3E6;" data-astro-cid-6kmwghhu> <div class="container mx-auto px-4" data-astro-cid-6kmwghhu> <div class="max-w-4xl mx-auto" data-astro-cid-6kmwghhu> ${faqCategories.map((category, categoryIndex) => renderTemplate`<div class="mb-12" data-astro-cid-6kmwghhu> <h2 class="text-3xl font-bold mb-8 text-center" style="color: #1D1912;" data-astro-cid-6kmwghhu> ${category.category === "General Questions" ? "Getting Started - Your First Questions" : category.category === "Garage Door Repairs" ? "When Your Garage Door Breaks" : category.category === "Garage Door Installation" ? "Upgrading Your Home with New Doors" : category.category === "Costs and Warranty" ? "Understanding Costs and Protection" : category.category === "Maintenance and Safety" ? "Keeping Your Family Safe" : category.category} </h2> <div class="space-y-6" data-astro-cid-6kmwghhu> <!-- Initial FAQs --> ${category.faqs.map((faq, faqIndex) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": "p-6 shadow-lg border-2 faq-item", "style": "background-color: white; border-color: #BB8525;", "data-astro-cid-6kmwghhu": true }, { "default": ($$result3) => renderTemplate` <div class="faq-question cursor-pointer" data-astro-cid-6kmwghhu> <div class="flex items-center justify-between" data-astro-cid-6kmwghhu> <h3 class="text-xl font-bold pr-4" style="color: #1D1912;" data-astro-cid-6kmwghhu> ${faq.question} </h3> <div class="faq-icon flex-shrink-0 transition-transform duration-300" data-astro-cid-6kmwghhu> <svg class="h-6 w-6" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6kmwghhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-6kmwghhu></path> </svg> </div> </div> </div> <div class="faq-answer mt-4 overflow-hidden transition-all duration-300" style="max-height: 0;" data-astro-cid-6kmwghhu> <div class="pt-4 border-t" style="border-color: rgba(187, 133, 37, 0.2);" data-astro-cid-6kmwghhu> <p class="text-lg leading-relaxed" style="color: #BB8525;" data-astro-cid-6kmwghhu> ${faq.answer} </p> </div> </div> ` })}`)} <!-- More FAQs (Initially Hidden) - ABOVE the button --> ${category.moreFaqs.map((faq, faqIndex) => renderTemplate`${renderComponent($$result2, "Card", $$Card, { "class": `p-6 shadow-lg border-2 faq-item extra-faq-${categoryIndex}-${faqIndex}`, "style": "background-color: white; border-color: #BB8525; display: none;", "data-astro-cid-6kmwghhu": true }, { "default": ($$result3) => renderTemplate` <div class="faq-question cursor-pointer" data-astro-cid-6kmwghhu> <div class="flex items-center justify-between" data-astro-cid-6kmwghhu> <h3 class="text-xl font-bold pr-4" style="color: #1D1912;" data-astro-cid-6kmwghhu> ${faq.question} </h3> <div class="faq-icon flex-shrink-0 transition-transform duration-300" data-astro-cid-6kmwghhu> <svg class="h-6 w-6" style="color: #D2A63C;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6kmwghhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-6kmwghhu></path> </svg> </div> </div> </div> <div class="faq-answer mt-4 overflow-hidden transition-all duration-300" style="max-height: 0;" data-astro-cid-6kmwghhu> <div class="pt-4 border-t" style="border-color: rgba(187, 133, 37, 0.2);" data-astro-cid-6kmwghhu> <p class="text-lg leading-relaxed" style="color: #BB8525;" data-astro-cid-6kmwghhu> ${faq.answer} </p> </div> </div> ` })}`)} <!-- See More Button - BELOW all the questions --> <div class="text-center mt-8" data-astro-cid-6kmwghhu> <button${addAttribute(`see-more-btn-${categoryIndex} inline-flex items-center px-6 py-3 text-lg font-semibold border-2 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1`, "class")} style="color: #D2A63C; border-color: #D2A63C; background-color: transparent;"${addAttribute(categoryIndex, "data-category")} data-astro-cid-6kmwghhu> <span class="see-more-text" data-astro-cid-6kmwghhu>See More</span> <svg class="see-more-icon ml-2 h-5 w-5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6kmwghhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" data-astro-cid-6kmwghhu></path> </svg> </button> </div> </div> </div>`)} </div> </div> </section> <!-- Still Have Questions --> <section class="py-16" style="background-color: #1D1912;" data-astro-cid-6kmwghhu> <div class="container mx-auto px-4" data-astro-cid-6kmwghhu> <div class="max-w-4xl mx-auto text-center" data-astro-cid-6kmwghhu> <h2 class="text-4xl md:text-5xl font-bold mb-6" style="color: #F3F3E6;" data-astro-cid-6kmwghhu>
Still Have Questions? <span style="color: #D2A63C;" data-astro-cid-6kmwghhu>We're Here to Help</span> </h2> <p class="text-xl leading-relaxed mb-12" style="color: #EECD5C;" data-astro-cid-6kmwghhu>
Every garage door situation is unique. If you didn't find your specific answer above, don't worry - our experienced technicians have seen it all and can provide personalized guidance. No pressure, no sales pitch - just honest advice from your Bergen County neighbors.
</p> <!-- Contact Options --> <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12" data-astro-cid-6kmwghhu> <!-- Phone Contact --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 text-center shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #D2A63C;", "data-astro-cid-6kmwghhu": true }, { "default": ($$result3) => renderTemplate` <div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style="background-color: #D2A63C;" data-astro-cid-6kmwghhu> <svg class="h-8 w-8" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6kmwghhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" data-astro-cid-6kmwghhu></path> </svg> </div> <h3 class="text-2xl font-bold mb-4" style="color: #1D1912;" data-astro-cid-6kmwghhu>Need Immediate Help?</h3> <p class="text-lg mb-6" style="color: #BB8525;" data-astro-cid-6kmwghhu>
Call now for emergency service or free consultation
</p> <a${addAttribute(siteConfig.links.phone, "href")} class="inline-flex items-center justify-center px-8 py-3 text-lg font-bold rounded-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105" style="background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;" data-astro-cid-6kmwghhu> ${siteConfig.business.phone} </a> ` })} <!-- Email Contact --> ${renderComponent($$result2, "Card", $$Card, { "class": "p-8 text-center shadow-xl border-2", "style": "background-color: #F3F3E6; border-color: #BB8525;", "data-astro-cid-6kmwghhu": true }, { "default": ($$result3) => renderTemplate` <div class="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center" style="background-color: #BB8525;" data-astro-cid-6kmwghhu> <svg class="h-8 w-8" style="color: #F3F3E6;" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-6kmwghhu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" data-astro-cid-6kmwghhu></path> </svg> </div> <h3 class="text-2xl font-bold mb-4" style="color: #1D1912;" data-astro-cid-6kmwghhu>Have Questions?</h3> <p class="text-lg mb-6" style="color: #BB8525;" data-astro-cid-6kmwghhu>
Send us your specific questions - we reply quickly
</p> <a${addAttribute(siteConfig.links.email, "href")} class="inline-flex items-center justify-center px-8 py-3 text-lg font-semibold border-2 rounded-lg transition-all duration-300 hover:shadow-lg" style="color: #BB8525; border-color: #BB8525; background-color: transparent;" data-astro-cid-6kmwghhu> ${siteConfig.business.email} </a> ` })} </div> <!-- Book Service CTA --> <div class="p-8 rounded-xl border-2" style="background: rgba(238, 205, 92, 0.1); border-color: #D2A63C;" data-astro-cid-6kmwghhu> <h3 class="text-2xl font-bold mb-4" style="color: #F3F3E6;" data-astro-cid-6kmwghhu>Ready to Fix Your Problem?</h3> <p class="text-lg mb-6" style="color: #EECD5C;" data-astro-cid-6kmwghhu>
Stop worrying and get your free estimate. Professional service from Bergen County's most trusted garage door experts.
</p> ${renderComponent($$result2, "Button", $$Button, { "href": "/booking", "class": "px-8 py-4 text-xl font-bold transition-all duration-300 hover:shadow-lg transform hover:scale-105", "style": "background: linear-gradient(135deg, #D2A63C 0%, #EECD5C 100%); color: #1D1912;", "data-astro-cid-6kmwghhu": true }, { "default": ($$result3) => renderTemplate`
Get Free Estimate
` })} </div> </div> </div> </section> </main> ${renderComponent($$result2, "FooterClean", $$FooterClean, { "data-astro-cid-6kmwghhu": true })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template(['  <script type="application/ld+json">', "<\/script> "])), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://ez2fixllc.com/faq#faq",
    "name": "Garage Door FAQ - Ez2Fix Bergen County NJ",
    "description": "Frequently asked questions about garage door repair, installation, and maintenance services.",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What areas do you service?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide garage door services throughout Bergen, Hudson, Passaic & Essex Counties in Northern New Jersey, including Fair Lawn, Clifton, Elmwood Park, Jersey City, Hoboken, and 25+ surrounding communities."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer emergency services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide 24/7 emergency garage door repair service. Whether your door won't open, close, or is creating a safety hazard, we respond quickly to emergency situations. Call (201) 554-6769 for immediate help."
        }
      },
      {
        "@type": "Question",
        "name": "Are you licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Ez2Fix is fully licensed contractor #13VH13553300 and fully insured with comprehensive liability and workers' compensation insurance. We are professional technicians committed to safe, quality service."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide free estimates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we provide completely free, written estimates with no obligation and no hidden fees. You'll know exactly what everything costs before we begin any work."
        }
      }
    ]
  }))) })}` })} ${renderScript($$result, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/faq.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/faq.astro", void 0);

const $$file = "/Users/yaronhayo/Dev_Projects/Projects_2025/ez2fix-clean/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
