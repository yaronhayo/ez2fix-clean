// Booking form API endpoint
import type { APIRoute } from 'astro';
import { verifyRecaptcha } from '@/lib/recaptcha';
import { sendBookingFormEmail, type BookingFormData } from '@/lib/email';
import { isDev, serverEnv } from '@/config/env';

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
        !!serverEnv.email.resendApiKey && !!serverEnv.recaptcha.secretKey);
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
    const { 
      name, email, phone, address, service, urgency, description, recaptchaToken, consent,
      contactPreference, source, sessionData, city, state, zip, unit
    } = body;
    
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

    // Validate and map urgency level from form values to internal values
    const urgencyMapping: Record<string, 'same-day' | 'next-day' | 'flexible'> = {
      'asap': 'same-day',
      'today': 'same-day', 
      'few-days': 'next-day',
      'few-weeks': 'flexible',
      'browsing': 'flexible',
      // Legacy support for existing values
      'same-day': 'same-day',
      'next-day': 'next-day', 
      'flexible': 'flexible'
    };

    const mappedUrgency = urgencyMapping[urgency];
    if (!mappedUrgency) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: `Invalid urgency level: ${urgency}. Please select a valid urgency option.` 
        }),
        { 
          status: 400,
          headers: securityHeaders
        }
      );
    }

    // Build complete address from components if available
    let completeAddress = String(address).trim();
    
    // If we have additional address components, build a more complete address
    if (city || state || zip || unit) {
      const addressParts = [completeAddress];
      
      if (city && !completeAddress.toLowerCase().includes(String(city).toLowerCase())) {
        addressParts.push(String(city).trim());
      }
      
      if (state && !completeAddress.toLowerCase().includes(String(state).toLowerCase())) {
        addressParts.push(String(state).trim());
      }
      
      if (zip && !completeAddress.includes(String(zip))) {
        // Add zip code to the last part
        const lastIndex = addressParts.length - 1;
        addressParts[lastIndex] = `${addressParts[lastIndex]} ${String(zip).trim()}`.trim();
      }
      
      if (unit && !completeAddress.toLowerCase().includes('unit') && !completeAddress.toLowerCase().includes('apt')) {
        addressParts.push(`Unit ${String(unit).trim()}`);
      }
      
      completeAddress = addressParts.join(', ');
    }
    
    if (isDev) {
      console.log('Address processing:', {
        original: address,
        city, state, zip, unit,
        complete: completeAddress
      });
    }

    // Prepare booking form data with tracking information
    const bookingData: BookingFormData = {
      name: String(name).trim(),
      email: email ? String(email).trim().toLowerCase() : '',
      phone: String(phone).trim(),
      address: completeAddress,
      service: String(service).trim(),
      urgency: mappedUrgency,
      description: String(description).trim(),
      preferredTime: body.preferredTime ? String(body.preferredTime).trim() : undefined,
      recaptchaToken,
      // Enhanced tracking data
      contactPreference: contactPreference ? String(contactPreference).trim() : 'phone',
      leadSource: source ? String(source).trim() : 'website',
      sessionData: sessionData ? {
        referrer: sessionData.referrer || '',
        userAgent: sessionData.userAgent || '',
        timestamp: sessionData.timestamp || new Date().toLocaleString('en-US', {
          timeZone: 'America/New_York',
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        }) + ' ET',
        pageViews: sessionData.pageViews || [],
        timeOnSite: sessionData.timeOnSite || 0,
        device: sessionData.device || 'unknown',
        location: sessionData.location || '',
        utmSource: sessionData.utmSource || '',
        utmMedium: sessionData.utmMedium || '',
        utmCampaign: sessionData.utmCampaign || '',
        landingPage: sessionData.landingPage || '',
        previousPages: sessionData.previousPages || [],
      } : undefined,
    };

    // Validate email format (only if email is provided and not empty)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (bookingData.email && bookingData.email.length > 0 && !emailRegex.test(bookingData.email)) {
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