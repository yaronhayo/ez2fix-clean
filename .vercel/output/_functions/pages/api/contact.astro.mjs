import { v as verifyRecaptcha, a as sendContactFormEmail } from '../../chunks/email_CBh7Ww2H.mjs';
import '../../chunks/env_DdGjSxDD.mjs';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const securityHeaders = {
  "Content-Type": "application/json",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin"
};
const POST = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message, recaptchaToken, consent } = body;
    if (!name || !email || !message || !recaptchaToken || !consent) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Missing required fields including consent"
        }),
        {
          status: 400,
          headers: securityHeaders
        }
      );
    }
    const recaptchaResult = await verifyRecaptcha(recaptchaToken, "contact_form");
    if (!recaptchaResult.success) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "reCAPTCHA verification failed"
        }),
        {
          status: 400,
          headers: securityHeaders
        }
      );
    }
    const contactData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: body.phone ? String(body.phone).trim() : void 0,
      message: String(message).trim(),
      service: body.service ? String(body.service).trim() : void 0,
      address: body.address ? String(body.address).trim() : void 0,
      recaptchaToken
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid email format"
        }),
        {
          status: 400,
          headers: securityHeaders
        }
      );
    }
    if (contactData.phone) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      const cleanPhone = contactData.phone.replace(/[\s\-\(\)\.]/g, "");
      if (!phoneRegex.test(cleanPhone)) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "Invalid phone number format"
          }),
          {
            status: 400,
            headers: securityHeaders
          }
        );
      }
      contactData.phone = cleanPhone;
    }
    const emailResult = await sendContactFormEmail(contactData);
    if (!emailResult.success) {
      console.error("Failed to send contact form email:", emailResult.error);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email service temporarily unavailable. Please try again or call us directly."
        }),
        {
          status: 500,
          headers: securityHeaders
        }
      );
    }
    return new Response(
      JSON.stringify({
        success: true,
        message: "Contact form submitted successfully"
      }),
      {
        status: 200,
        headers: securityHeaders
      }
    );
  } catch (error) {
    console.error("Contact form API error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal server error"
      }),
      {
        status: 500,
        headers: securityHeaders
      }
    );
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
