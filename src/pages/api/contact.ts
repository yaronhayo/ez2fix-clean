// Contact form API endpoint
import type { APIRoute } from 'astro';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendContactFormEmail, type ContactFormData } from '@/lib/email';
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
    const body = await request.json();
    
    // Validate required fields
    const { name, email, message, recaptchaToken, consent } = body;
    
    if (!name || !email || !message || !recaptchaToken || !consent) {
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
    const recaptchaResult = await verifyRecaptcha(recaptchaToken, 'contact_form');
    
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

    // Prepare contact form data
    const contactData: ContactFormData = {
      name: String(name).trim(),
      email: String(email).trim().toLowerCase(),
      phone: body.phone ? String(body.phone).trim() : undefined,
      message: String(message).trim(),
      service: body.service ? String(body.service).trim() : undefined,
      address: body.address ? String(body.address).trim() : undefined,
      recaptchaToken,
    };

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactData.email)) {
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

    // Validate phone format if provided
    if (contactData.phone) {
      const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
      const cleanPhone = contactData.phone.replace(/[\s\-\(\)\.]/g, '');
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
      contactData.phone = cleanPhone;
    }

    // Send email
    const emailResult = await sendContactFormEmail(contactData);
    
    if (!emailResult.success) {
      console.error('Failed to send contact form email:', emailResult.error);
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
        message: 'Contact form submitted successfully'
      }),
      { 
        status: 200,
        headers: securityHeaders
      }
    );

  } catch (error) {
    console.error('Contact form API error:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: 'Internal server error' 
      }),
      { 
        status: 500,
        headers: securityHeaders
      }
    );
  }
};