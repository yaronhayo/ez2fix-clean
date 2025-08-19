// Booking form API endpoint
import type { APIRoute } from 'astro';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendBookingFormEmail, type BookingFormData } from '@/lib/email';
import { isDev } from '@/config/env';

// API route - will be handled by Vercel serverless functions

// Security headers for all responses
const securityHeaders = {
  'Content-Type': 'application/json',
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin'
};

export const POST: APIRoute = async ({ request }) => {
  try {
    if (isDev) {
      console.log('Booking API called');
      console.log('Environment check - required keys exist:', 
        !!process.env.RESEND_API_KEY && !!process.env.RECAPTCHA_SECRET_KEY);
    }
    
    let body;
    try {
      body = await request.json();
      if (isDev) {
        console.log('Request body received with fields:', Object.keys(body));
      }
    } catch (jsonError) {
      console.error('Failed to parse JSON body:', jsonError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid JSON in request body'
        }),
        { 
          status: 400,
          headers: securityHeaders
        }
      );
    }
    
    // Validate required fields
    const { name, email, phone, address, service, urgency, description, recaptchaToken, consent } = body;
    
    if (!name || !phone || !address || !service || !recaptchaToken || !consent) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Missing required fields including consent' 
        }),
        { 
          status: 400,
          headers: securityHeaders
        }
      );
    }

    // Verify reCAPTCHA
    if (isDev) console.log('Verifying reCAPTCHA token...');
    try {
      const recaptchaResult = await verifyRecaptcha(recaptchaToken, 'booking_form');
      if (isDev) console.log('reCAPTCHA verification completed');
      
      if (!recaptchaResult.success) {
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'reCAPTCHA verification failed'
          }),
          { 
            status: 400,
            headers: securityHeaders
          }
        );
      }
    } catch (recaptchaError) {
      console.error('reCAPTCHA verification error:', recaptchaError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'reCAPTCHA verification failed'
        }),
        { 
          status: 500,
          headers: securityHeaders
        }
      );
    }

    // Validate urgency level
    const validUrgencies = ['same-day', 'next-day', 'flexible'];
    if (!validUrgencies.includes(urgency)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid urgency level' 
        }),
        { 
          status: 400,
          headers: securityHeaders
        }
      );
    }

    // Prepare booking form data
    const bookingData: BookingFormData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: String(phone).trim(),
      address: String(address).trim(),
      service: String(service).trim(),
      urgency: urgency as BookingFormData['urgency'],
      description: String(description).trim(),
      preferredTime: body.preferredTime ? String(body.preferredTime).trim() : undefined,
      recaptchaToken,
    };

    // Validate email format (only if email is provided)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (bookingData.email && !emailRegex.test(bookingData.email)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid email format' 
        }),
        { 
          status: 400,
          headers: securityHeaders
        }
      );
    }

    // Validate phone format
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = bookingData.phone.replace(/[\s\-\(\)\.]/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid phone number format' 
        }),
        { 
          status: 400,
          headers: securityHeaders
        }
      );
    }
    bookingData.phone = cleanPhone;

    // Validate address length (basic check)
    if (bookingData.address.length < 10) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Please provide a complete address' 
        }),
        { 
          status: 400,
          headers: securityHeaders
        }
      );
    }

    // Send email
    if (isDev) console.log('Attempting to send booking form email...');
    try {
      const emailResult = await sendBookingFormEmail(bookingData);
      if (isDev && emailResult.success) console.log('Email sent successfully');
      
      if (!emailResult.success) {
        console.error('Failed to send booking form email:', emailResult.error);
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: 'Email service temporarily unavailable. Please try again or call us directly.'
          }),
          { 
            status: 500,
            headers: securityHeaders
          }
        );
      }
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Email service temporarily unavailable. Please try again or call us directly.'
        }),
        { 
          status: 500,
          headers: securityHeaders
        }
      );
    }

    // Success response
    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Service request submitted successfully',
        urgency: bookingData.urgency
      }),
      { 
        status: 200,
        headers: securityHeaders
      }
    );

  } catch (error) {
    console.error('Booking form API error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error. Please try again or contact us directly.'
      }),
      { 
        status: 500,
        headers: securityHeaders
      }
    );
  }
};