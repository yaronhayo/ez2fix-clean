// Contact form API endpoint
import type { APIRoute } from 'astro';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendContactFormEmail, type ContactFormData } from '@/lib/email';

// Force this route to be server-side rendered
export const prerender = false;

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
          headers: { 'Content-Type': 'application/json' }
        }
      );
    }

    // Verify reCAPTCHA
    const recaptchaResult = await verifyRecaptcha(recaptchaToken, 'contact_form');
    
    if (!recaptchaResult.success) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'reCAPTCHA verification failed',
          details: recaptchaResult.error
        }),
        { 
          status: 400,
          headers: { 'Content-Type': 'application/json' }
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
          headers: { 'Content-Type': 'application/json' }
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
            headers: { 'Content-Type': 'application/json' }
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
          error: 'Failed to send email' 
        }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
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
        headers: { 'Content-Type': 'application/json' }
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
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
};