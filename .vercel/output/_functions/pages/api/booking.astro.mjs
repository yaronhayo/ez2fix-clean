import { v as verifyRecaptcha, s as sendBookingFormEmail } from "../../assets/email-CusoSo-W.js";
import { renderers } from "../../renderers.mjs";
const prerender = false;
const POST = async ({ request }) => {
  try {
    console.log("Booking API called");
    console.log("Request headers:", Object.fromEntries(request.headers.entries()));
    console.log("Environment check:");
    console.log("- RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    console.log("- RECAPTCHA_SECRET_KEY exists:", !!process.env.RECAPTCHA_SECRET_KEY);
    console.log("- FROM_EMAIL exists:", !!process.env.FROM_EMAIL);
    console.log("- TO_EMAIL exists:", !!process.env.TO_EMAIL);
    let body;
    try {
      body = await request.json();
      console.log("Request body received:", Object.keys(body));
      console.log("Full body data:", body);
    } catch (jsonError) {
      console.error("Failed to parse JSON body:", jsonError);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid JSON in request body",
          details: jsonError instanceof Error ? jsonError.message : "Unknown JSON parsing error"
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" }
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
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    console.log("Verifying reCAPTCHA token...");
    try {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken, "booking_form");
      console.log("reCAPTCHA result:", recaptchaResult);
      if (!recaptchaResult.success) {
        return new Response(
          JSON.stringify({
            success: false,
            error: "reCAPTCHA verification failed",
            details: recaptchaResult.error
          }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    } catch (recaptchaError) {
      console.error("reCAPTCHA verification error:", recaptchaError);
      return new Response(
        JSON.stringify({
          success: false,
          error: "reCAPTCHA verification failed",
          details: recaptchaError instanceof Error ? recaptchaError.message : "Unknown reCAPTCHA error"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
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
          headers: { "Content-Type": "application/json" }
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
          headers: { "Content-Type": "application/json" }
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
          headers: { "Content-Type": "application/json" }
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
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    console.log("Attempting to send booking form email...");
    try {
      const emailResult = await sendBookingFormEmail(bookingData);
      console.log("Email result:", emailResult);
      if (!emailResult.success) {
        console.error("Failed to send booking form email:", emailResult.error);
        return new Response(
          JSON.stringify({
            success: false,
            error: `Email service error: ${emailResult.error}`,
            details: "Please try again or call us directly."
          }),
          {
            status: 500,
            headers: { "Content-Type": "application/json" }
          }
        );
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Email service error",
          details: emailError instanceof Error ? emailError.message : "Unknown email error"
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" }
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
        headers: { "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Booking form API error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal server error",
        details: error instanceof Error ? error.message : "Unknown error",
        stack: process.env.NODE_ENV === "development" ? error instanceof Error ? error.stack : void 0 : void 0
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" }
      }
    );
  }
};
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
