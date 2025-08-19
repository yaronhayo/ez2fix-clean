import { v as verifyRecaptcha, s as sendBookingFormEmail } from '../../chunks/email_CBh7Ww2H.mjs';
import { i as isDev } from '../../chunks/env_DdGjSxDD.mjs';
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
    if (isDev) ;
    let body;
    try {
      body = await request.json();
      if (isDev) ;
    } catch (jsonError) {
      console.error("Failed to parse JSON body:", jsonError);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid JSON in request body"
        }),
        {
          status: 400,
          headers: securityHeaders
        }
      );
    }
    const { name, email, phone, address, service, urgency, description, recaptchaToken, consent } = body;
    if (!name || !phone || !address || !service || !recaptchaToken || !consent) {
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
    if (isDev) ;
    try {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken, "booking_form");
      if (isDev) ;
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
    } catch (recaptchaError) {
      console.error("reCAPTCHA verification error:", recaptchaError);
      return new Response(
        JSON.stringify({
          success: false,
          error: "reCAPTCHA verification failed"
        }),
        {
          status: 500,
          headers: securityHeaders
        }
      );
    }
    const validUrgencies = ["same-day", "next-day", "flexible"];
    if (!validUrgencies.includes(urgency)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid urgency level"
        }),
        {
          status: 400,
          headers: securityHeaders
        }
      );
    }
    const bookingData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      address: String(address).trim(),
      service: String(service).trim(),
      urgency,
      description: String(description).trim(),
      preferredTime: body.preferredTime ? String(body.preferredTime).trim() : void 0,
      recaptchaToken
    };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (bookingData.email && !emailRegex.test(bookingData.email)) {
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
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = bookingData.phone.replace(/[\s\-\(\)\.]/g, "");
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
    bookingData.phone = cleanPhone;
    if (bookingData.address.length < 10) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Please provide a complete address"
        }),
        {
          status: 400,
          headers: securityHeaders
        }
      );
    }
    if (isDev) ;
    try {
      const emailResult = await sendBookingFormEmail(bookingData);
      if (isDev && emailResult.success) ;
      if (!emailResult.success) {
        console.error("Failed to send booking form email:", emailResult.error);
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
    } catch (emailError) {
      console.error("Email sending error:", emailError);
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
        message: "Service request submitted successfully",
        urgency: bookingData.urgency
      }),
      {
        status: 200,
        headers: securityHeaders
      }
    );
  } catch (error) {
    console.error("Booking form API error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal server error. Please try again or contact us directly."
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
