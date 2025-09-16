// Email Service Integration using Resend
import { Resend } from 'resend';
import { serverEnv, isDev } from '@/config/env';

// Initialize Resend client only when needed
let resendClient: Resend | null = null;

function getResendClient(): Resend {
  if (!serverEnv.email.resendApiKey) {
    console.warn('Resend API key not found in environment variables - email functionality disabled');
    throw new Error('Email service not configured - please contact us directly at (201) 554-6769');
  }
  
  if (!resendClient) {
    if (isDev) console.log('Initializing Resend client...');
    try {
      resendClient = new Resend(serverEnv.email.resendApiKey);
      if (isDev) console.log('Resend client initialized successfully');
    } catch (error) {
      console.error('Failed to initialize Resend client:', error);
      throw new Error('Email service configuration error');
    }
  }
  
  return resendClient;
}

// Email template interfaces
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
  address?: string;
  recaptchaToken: string;
  // Lead tracking data
  sessionData?: SessionTrackingData;
}

export interface BookingFormData {
  name: string;
  email?: string;
  phone: string;
  address: string;
  service: string;
  urgency: 'same-day' | 'next-day' | 'flexible';
  description: string;
  preferredTime?: string;
  recaptchaToken: string;
  // Enhanced tracking data
  contactPreference?: string;
  leadSource?: string;
  sessionData?: {
    referrer?: string;
    userAgent?: string;
    timestamp?: string;
    pageViews?: string[];
    timeOnSite?: number;
    device?: string;
    location?: string;
    utmSource?: string;
    utmMedium?: string;
    utmCampaign?: string;
    landingPage?: string;
    previousPages?: string[];
  };
}

export interface SessionTrackingData {
  // Page tracking
  currentPage: string;
  referrerPage?: string;
  landingPage?: string;
  pagesVisited: Array<{
    url: string;
    title: string;
    timeSpent: number; // seconds
    timestamp: string; // ISO string
  }>;
  
  // Session info
  sessionStart: string; // ISO string
  sessionDuration: number; // seconds
  totalPageViews: number;
  
  // Traffic source
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
  referrer?: string;
  
  // Device info
  userAgent: string;
  screenResolution?: string;
  deviceType: 'desktop' | 'tablet' | 'mobile';
  
  // Location (if available)
  city?: string;
  state?: string;
  country?: string;
  
  // Behavior
  isReturningVisitor: boolean;
  previousVisitCount: number;
  lastVisit?: string; // ISO string
}

// Send contact form email
export async function sendContactFormEmail(data: ContactFormData) {
  try {
    // Email to business owner with CC to additional recipients
    const businessEmail = await getResendClient().emails.send({
      from: serverEnv.email.fromEmail,
      to: serverEnv.email.toEmail,
      cc: ['ez2fixllc@gmail.com', 'sandrahmarketing@gmail.com'],
      subject: `New Contact Form Submission - ${data.name}`,
      html: generateContactFormEmailHTML(data),
      replyTo: data.email,
    });

    // Auto-reply to customer
    const customerEmail = await getResendClient().emails.send({
      from: serverEnv.email.fromEmail,
      to: data.email,
      subject: 'Thank you for contacting Ez2Fix - We\'ll be in touch soon!',
      html: generateContactFormAutoReplyHTML(data),
    });

    return {
      success: true,
      businessEmailId: businessEmail.data?.id,
      customerEmailId: customerEmail.data?.id,
    };
  } catch (error) {
    console.error('Failed to send contact form email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Send booking form email
export async function sendBookingFormEmail(data: BookingFormData) {
  try {
    // Email to business owner with CC to additional recipients
    const businessEmailData: any = {
      from: serverEnv.email.fromEmail,
      to: serverEnv.email.toEmail,
      cc: ['ez2fixllc@gmail.com', 'sandrahmarketing@gmail.com'],
      subject: `New Service Request - ${data.urgency.toUpperCase()} - ${data.name}`,
      html: generateBookingFormEmailHTML(data),
    };
    
    // Only add replyTo if email is provided
    if (data.email && data.email.trim()) {
      businessEmailData.replyTo = data.email;
    }
    
    const businessEmail = await getResendClient().emails.send(businessEmailData);

    // Auto-reply to customer (only if email provided)
    let customerEmail = null;
    if (data.email && data.email.trim()) {
      customerEmail = await getResendClient().emails.send({
        from: serverEnv.email.fromEmail,
        to: data.email,
        subject: 'Service Request Received - Ez2Fix Will Contact You Soon',
        html: generateBookingFormAutoReplyHTML(data),
      });
    }

    return {
      success: true,
      businessEmailId: businessEmail.data?.id,
      customerEmailId: customerEmail?.data?.id || null,
    };
  } catch (error) {
    console.error('Failed to send booking form email:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Utility function to convert UTC to Eastern Time
function toEasternTime(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleString('en-US', {
    timeZone: 'America/New_York',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  }) + ' ET';
}

// Format seconds to readable duration
function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  if (minutes === 0) return `${remainingSeconds}s`;
  return `${minutes}m ${remainingSeconds}s`;
}

// HTML email templates
function generateContactFormEmailHTML(data: ContactFormData): string {
  const leadData = data.sessionData;
  const submissionTime = toEasternTime(new Date().toISOString());
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Lead - ${data.name}</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8f9fa;">
      <div style="max-width: 700px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
        
        <!-- Header -->
        <div style="background: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; border-bottom: 3px solid #ebc959;">
          <!-- Company Logo -->
          <div style="margin-bottom: 20px;">
            <img src="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/ez2fix%20logo.png" alt="Ez2Fix Logo" style="height: 60px; width: auto;">
          </div>
          <div style="background: #ebc959; color: #1D1912; padding: 8px 20px; border-radius: 20px; display: inline-block; font-weight: bold; font-size: 14px; margin-bottom: 15px;">
            🔥 NEW LEAD ALERT
          </div>
          <h1 style="color: #1D1912; margin: 0; font-size: 28px; font-weight: 700;">Contact Form Submission</h1>
          <p style="color: #666666; margin: 10px 0 0 0; font-size: 16px;">Submitted ${submissionTime}</p>
        </div>

        <!-- Contact Information -->
        <div style="background: #F3F3E6; padding: 30px;">
          <div style="background: white; border-radius: 8px; padding: 25px; border-left: 5px solid #D2A63C; margin-bottom: 25px;">
            <h2 style="color: #1D1912; margin: 0 0 20px 0; font-size: 22px; font-weight: 600;">👤 Contact Details</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912; width: 120px;">Name:</td>
                <td style="padding: 12px 0; color: #333333; font-size: 16px;">${data.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912;">Email:</td>
                <td style="padding: 12px 0;">
                  <a href="mailto:${data.email}" style="color: #ebc959; text-decoration: none; font-weight: 500;">${data.email}</a>
                </td>
              </tr>
              ${data.phone ? `
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912;">Phone:</td>
                <td style="padding: 12px 0;">
                  <a href="tel:${data.phone}" style="color: #ebc959; text-decoration: none; font-weight: 500; background: #ebc959; padding: 6px 12px; border-radius: 4px; color: #1D1912; display: inline-block;">📞 ${data.phone}</a>
                </td>
              </tr>
              ` : ''}
              ${data.service ? `
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912;">Service:</td>
                <td style="padding: 12px 0; color: #333333;">${data.service}</td>
              </tr>
              ` : ''}
              ${data.address ? `
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912;">Address:</td>
                <td style="padding: 12px 0; color: #333333;">${data.address}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <!-- Message -->
          <div style="background: white; border-radius: 8px; padding: 25px; border-left: 5px solid #BB8525; margin-bottom: 25px;">
            <h3 style="color: #1D1912; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">💬 Customer Message</h3>
            <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 3px solid #ebc959; color: #1D1912; line-height: 1.6; font-size: 15px;">
              ${data.message.replace(/\n/g, '<br>')}
            </div>
          </div>

          ${leadData ? generateLeadTrackingHTML(leadData) : ''}

          <!-- Quick Actions -->
          <div style="background: linear-gradient(135deg, #ebc959 0%, #f4d76b 100%); border-radius: 8px; padding: 25px; text-align: center;">
            <h3 style="color: #1D1912; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">🚀 Quick Actions</h3>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
              ${data.phone ? `
              <a href="tel:${data.phone}" style="background: #1D1912; color: #ebc959; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block;">📞 Call Now</a>
              ` : ''}
              <a href="mailto:${data.email}" style="background: white; color: #1D1912; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block;">✉️ Reply Email</a>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8f9fa; border-top: 3px solid #ebc959; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
          <p style="color: #666666; margin: 0; font-size: 14px;">Ez2Fix Lead Notification System</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateBookingLeadTrackingHTML(sessionData: BookingFormData['sessionData']): string {
  if (!sessionData) return '';
  
  return `
    <!-- Lead Intelligence -->
    <div style="background: white; border-radius: 8px; padding: 25px; border-left: 5px solid #ebc959; margin-bottom: 25px;">
      <h3 style="color: #1D1912; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">🕵️ Lead Intelligence</h3>
      
      <!-- Session Overview -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 15px; margin-bottom: 15px;">
        <h4 style="color: #1D1912; margin: 0 0 10px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Session Overview</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
          ${sessionData.timeOnSite ? `
          <div>
            <div style="color: #333333; font-size: 12px; margin-bottom: 2px;">Time on Site</div>
            <div style="color: #1D1912; font-weight: 600;">${formatDuration(sessionData.timeOnSite)}</div>
          </div>
          ` : ''}
          ${sessionData.pageViews ? `
          <div>
            <div style="color: #333333; font-size: 12px; margin-bottom: 2px;">Pages Visited</div>
            <div style="color: #1D1912; font-weight: 600;">${sessionData.pageViews.length} pages</div>
          </div>
          ` : ''}
          ${sessionData.device ? `
          <div>
            <div style="color: #333333; font-size: 12px; margin-bottom: 2px;">Device</div>
            <div style="color: #1D1912; font-weight: 600;">${sessionData.device}</div>
          </div>
          ` : ''}
          ${sessionData.location ? `
          <div>
            <div style="color: #333333; font-size: 12px; margin-bottom: 2px;">Location</div>
            <div style="color: #1D1912; font-weight: 600;">${sessionData.location}</div>
          </div>
          ` : ''}
        </div>
      </div>

      <!-- Traffic Source -->
      ${sessionData.utmSource || sessionData.utmMedium || sessionData.referrer ? `
      <div style="background: #f8f9fa; border-radius: 6px; padding: 15px; margin-bottom: 15px;">
        <h4 style="color: #1D1912; margin: 0 0 10px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">🚀 Traffic Source</h4>
        <table style="width: 100%; font-size: 13px;">
          ${sessionData.utmSource ? `
          <tr><td style="color: #333333; padding: 3px 0; width: 100px;">Source:</td><td style="color: #1D1912; font-weight: 500;">${sessionData.utmSource}</td></tr>
          ` : ''}
          ${sessionData.utmMedium ? `
          <tr><td style="color: #333333; padding: 3px 0;">Medium:</td><td style="color: #1D1912; font-weight: 500;">${sessionData.utmMedium}</td></tr>
          ` : ''}
          ${sessionData.utmCampaign ? `
          <tr><td style="color: #333333; padding: 3px 0;">Campaign:</td><td style="color: #1D1912; font-weight: 500;">${sessionData.utmCampaign}</td></tr>
          ` : ''}
          ${sessionData.referrer ? `
          <tr><td style="color: #333333; padding: 3px 0;">Referrer:</td><td style="color: #1D1912; font-weight: 500;">${sessionData.referrer}</td></tr>
          ` : ''}
          ${sessionData.landingPage ? `
          <tr><td style="color: #333333; padding: 3px 0;">Landing Page:</td><td style="color: #1D1912; font-weight: 500;">${sessionData.landingPage}</td></tr>
          ` : ''}
        </table>
      </div>
      ` : ''}

      <!-- Page Journey -->
      ${sessionData.previousPages && sessionData.previousPages.length > 0 ? `
      <div style="background: #f8f9fa; border-radius: 6px; padding: 15px;">
        <h4 style="color: #1D1912; margin: 0 0 15px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📍 Page Journey</h4>
        ${sessionData.previousPages.slice(0, 5).map((page, index) => `
          <div style="display: flex; align-items: center; padding: 8px 0; border-bottom: 1px solid #E8E9EA;">
            <div style="background: #D2A63C; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; margin-right: 10px;">${index + 1}</div>
            <div style="flex: 1;">
              <div style="color: #1D1912; font-weight: 500; font-size: 13px;">${page}</div>
            </div>
          </div>
        `).join('')}
        ${sessionData.previousPages.length > 5 ? `
        <div style="color: #333333; font-size: 12px; text-align: center; padding: 10px 0;">... and ${sessionData.previousPages.length - 5} more pages</div>
        ` : ''}
      </div>
      ` : ''}
    </div>
  `;
}

function generateLeadTrackingHTML(sessionData: SessionTrackingData): string {
  return `
    <!-- Lead Intelligence -->
    <div style="background: white; border-radius: 8px; padding: 25px; border-left: 5px solid #ebc959; margin-bottom: 25px;">
      <h3 style="color: #1D1912; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">🕵️ Lead Intelligence</h3>
      
      <!-- Session Overview -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 15px; margin-bottom: 15px;">
        <h4 style="color: #1D1912; margin: 0 0 10px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Session Overview</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
          <div>
            <div style="color: #333333; font-size: 12px; margin-bottom: 2px;">Session Duration</div>
            <div style="color: #1D1912; font-weight: 600;">${formatDuration(sessionData.sessionDuration)}</div>
          </div>
          <div>
            <div style="color: #333333; font-size: 12px; margin-bottom: 2px;">Pages Visited</div>
            <div style="color: #1D1912; font-weight: 600;">${sessionData.totalPageViews} pages</div>
          </div>
          <div>
            <div style="color: #333333; font-size: 12px; margin-bottom: 2px;">Device</div>
            <div style="color: #1D1912; font-weight: 600;">${sessionData.deviceType}</div>
          </div>
          <div>
            <div style="color: #333333; font-size: 12px; margin-bottom: 2px;">Visitor Type</div>
            <div style="color: #1D1912; font-weight: 600;">${sessionData.isReturningVisitor ? 'Returning' : 'New'} Visitor</div>
          </div>
        </div>
      </div>

      <!-- Traffic Source -->
      <div style="background: #f8f9fa; border-radius: 6px; padding: 15px; margin-bottom: 15px;">
        <h4 style="color: #1D1912; margin: 0 0 10px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">🚀 Traffic Source</h4>
        <table style="width: 100%; font-size: 13px;">
          ${sessionData.utmSource ? `
          <tr><td style="color: #333333; padding: 3px 0; width: 100px;">Source:</td><td style="color: #1D1912; font-weight: 500;">${sessionData.utmSource}</td></tr>
          ` : ''}
          ${sessionData.utmMedium ? `
          <tr><td style="color: #333333; padding: 3px 0;">Medium:</td><td style="color: #1D1912; font-weight: 500;">${sessionData.utmMedium}</td></tr>
          ` : ''}
          ${sessionData.utmCampaign ? `
          <tr><td style="color: #333333; padding: 3px 0;">Campaign:</td><td style="color: #1D1912; font-weight: 500;">${sessionData.utmCampaign}</td></tr>
          ` : ''}
          ${sessionData.utmTerm ? `
          <tr><td style="color: #333333; padding: 3px 0;">Keyword:</td><td style="color: #1D1912; font-weight: 500;">${sessionData.utmTerm}</td></tr>
          ` : ''}
          ${sessionData.referrer ? `
          <tr><td style="color: #333333; padding: 3px 0;">Referrer:</td><td style="color: #1D1912; font-weight: 500;">${sessionData.referrer}</td></tr>
          ` : ''}
        </table>
      </div>

      <!-- Page Journey -->
      ${sessionData.pagesVisited.length > 0 ? `
      <div style="background: #f8f9fa; border-radius: 6px; padding: 15px;">
        <h4 style="color: #1D1912; margin: 0 0 15px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">📍 Page Journey</h4>
        ${sessionData.pagesVisited.slice(0, 5).map((page, index) => `
          <div style="display: flex; align-items: center; padding: 8px 0; border-bottom: 1px solid #E8E9EA;">
            <div style="background: #D2A63C; color: white; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; margin-right: 10px;">${index + 1}</div>
            <div style="flex: 1;">
              <div style="color: #1D1912; font-weight: 500; font-size: 13px;">${page.title}</div>
              <div style="color: #333333; font-size: 11px;">${page.url.replace(serverEnv.business.website || '', '')} • ${formatDuration(page.timeSpent)} • ${toEasternTime(page.timestamp)}</div>
            </div>
          </div>
        `).join('')}
        ${sessionData.pagesVisited.length > 5 ? `
        <div style="color: #333333; font-size: 12px; text-align: center; padding: 10px 0;">... and ${sessionData.pagesVisited.length - 5} more pages</div>
        ` : ''}
      </div>
      ` : ''}
    </div>
  `;
}

function generateContactFormAutoReplyHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Thank You - Ez2Fix</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8f9fa;">
      <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
        
        <!-- Header -->
        <div style="background: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; border-bottom: 3px solid #ebc959;">
          <!-- Company Logo -->
          <div style="margin-bottom: 20px;">
            <img src="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/ez2fix%20logo.png" alt="Ez2Fix Logo" style="height: 60px; width: auto;">
          </div>
          <div style="background: #ebc959; color: #1D1912; padding: 10px 25px; border-radius: 25px; display: inline-block; font-weight: bold; font-size: 16px; margin-bottom: 20px;">
            ✅ MESSAGE RECEIVED
          </div>
          <h1 style="color: #1D1912; margin: 0; font-size: 32px; font-weight: 700;">Thank You, ${data.name}!</h1>
          <p style="color: #666666; margin: 15px 0 0 0; font-size: 18px;">We'll be in touch very soon</p>
        </div>

        <!-- Main Content -->
        <div style="background: #f8f9fa; padding: 40px 30px;">
          
          <!-- Welcome Message -->
          <div style="text-align: center; margin-bottom: 35px;">
            <h2 style="color: #1D1912; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">Your Message Has Been Received</h2>
            <p style="color: #666666; font-size: 16px; line-height: 1.6; margin: 0; max-width: 450px; margin: 0 auto;">
              Thank you for reaching out to Ez2Fix! One of our garage door experts will contact you promptly during business hours to help with your ${data.service || 'garage door needs'}.
            </p>
          </div>

          <!-- Emergency CTA -->
          <div style="background: linear-gradient(135deg, #ebc959 0%, #f4d76b 100%); border-radius: 12px; padding: 25px; text-align: center; margin-bottom: 30px;">
            <h3 style="color: #1D1912; margin: 0 0 10px 0; font-size: 18px; font-weight: 600;">🚨 Need Emergency Service?</h3>
            <p style="color: #1D1912; margin: 0 0 20px 0; font-size: 14px;">
              If you have an urgent garage door issue that can't wait, call us now!
            </p>
            <a href="tel:${serverEnv.business.phone}" style="background: #1D1912; color: #ebc959; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block; transition: all 0.3s ease;">
              📞 Call ${serverEnv.business.phone}
            </a>
          </div>

          <!-- Quick Links -->
          <div style="background: white; border-radius: 12px; padding: 25px; border-left: 5px solid #ebc959; margin-bottom: 30px;">
            <h3 style="color: #1D1912; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; text-align: center;">🔗 Helpful Links</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
              <a href="${serverEnv.business.website || 'https://ez2fixllc.com'}" style="background: #f8f9fa; border: 2px solid #ebc959; padding: 15px; border-radius: 8px; text-decoration: none; text-align: center; transition: all 0.3s ease;">
                <div style="color: #1D1912; font-weight: 600; font-size: 14px;">🏠 Homepage</div>
                <div style="color: #666666; font-size: 12px; margin-top: 5px;">Learn more about us</div>
              </a>
              <a href="${serverEnv.business.website || 'https://ez2fixllc.com'}/services" style="background: #f8f9fa; border: 2px solid #d4a736; padding: 15px; border-radius: 8px; text-decoration: none; text-align: center; transition: all 0.3s ease;">
                <div style="color: #1D1912; font-weight: 600; font-size: 14px;">🔧 Our Services</div>
                <div style="color: #666666; font-size: 12px; margin-top: 5px;">See what we offer</div>
              </a>
            </div>
            <div style="text-align: center; margin-top: 15px;">
              <a href="${serverEnv.business.website || 'https://ez2fixllc.com'}/reviews" style="background: #d4a736; color: white; padding: 12px 25px; border-radius: 6px; text-decoration: none; font-weight: 500; font-size: 14px; display: inline-block;">
                ⭐ Read Customer Reviews
              </a>
            </div>
          </div>

          <!-- What Happens Next -->
          <div style="background: white; border-radius: 12px; padding: 25px; border-left: 5px solid #ebc959;">
            <h3 style="color: #1D1912; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">📋 What Happens Next?</h3>
            <div style="space-y: 15px;">
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style="background: #ebc959; color: #1D1912; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 15px; flex-shrink: 0;">1</div>
                <div>
                  <div style="color: #1D1912; font-weight: 600; margin-bottom: 5px;">We'll Contact You</div>
                  <div style="color: #666666; font-size: 14px; line-height: 1.5;">Our team will reach out promptly during business hours to discuss your needs</div>
                </div>
              </div>
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style="background: #d4a736; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 15px; flex-shrink: 0;">2</div>
                <div>
                  <div style="color: #1D1912; font-weight: 600; margin-bottom: 5px;">Schedule Your Service</div>
                  <div style="color: #666666; font-size: 14px; line-height: 1.5;">We'll find a convenient time that works with your schedule</div>
                </div>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <div style="background: #b8a138; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 15px; flex-shrink: 0;">3</div>
                <div>
                  <div style="color: #1D1912; font-weight: 600; margin-bottom: 5px;">Professional Service</div>
                  <div style="color: #666666; font-size: 14px; line-height: 1.5;">Licensed technician arrives on time with quality parts and expertise</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8f9fa; border-top: 3px solid #ebc959; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
          <p style="color: #666666; margin: 0; font-size: 14px;">Ez2Fix - Your Trusted Bergen County Garage Door Experts Since 2014</p>
          <p style="color: #666666; margin: 0; font-size: 12px;">Licensed & Insured | 5-Star Rated | Family Owned & Operated</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateBookingFormEmailHTML(data: BookingFormData): string {
  const urgencyColors = {
    'same-day': '#ebc959',
    'next-day': '#f4d76b',
    'flexible': '#d4a736'
  };

  const urgencyLabels = {
    'same-day': 'Same Day Service',
    'next-day': 'Next Day Service', 
    'flexible': 'Flexible Scheduling'
  };

  const submissionTime = toEasternTime(new Date().toISOString());
  const leadData = data.sessionData;

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Service Request - ${data.name}</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8f9fa;">
      <div style="max-width: 700px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
        
        <!-- Header -->
        <div style="background: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; border-bottom: 3px solid #ebc959;">
          <!-- Company Logo -->
          <div style="margin-bottom: 20px;">
            <img src="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/ez2fix%20logo.png" alt="Ez2Fix Logo" style="height: 60px; width: auto;">
          </div>
          <div style="background: ${urgencyColors[data.urgency]}; color: #1D1912; padding: 8px 20px; border-radius: 20px; display: inline-block; font-weight: bold; font-size: 14px; margin-bottom: 15px;">
            🎯 ${urgencyLabels[data.urgency].toUpperCase()}
          </div>
          <h1 style="color: #1D1912; margin: 0; font-size: 28px; font-weight: 700;">Service Request</h1>
          <p style="color: #666666; margin: 10px 0 0 0; font-size: 16px;">Submitted ${submissionTime}</p>
        </div>

        <!-- Main Content -->
        <div style="background: #f8f9fa; padding: 30px;">
          
          <!-- Customer Information -->
          <div style="background: white; border-radius: 8px; padding: 25px; border-left: 5px solid #D2A63C; margin-bottom: 25px;">
            <h2 style="color: #1D1912; margin: 0 0 20px 0; font-size: 22px; font-weight: 600;">👤 Customer Information</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912; width: 120px;">Name:</td>
                <td style="padding: 12px 0; color: #333333; font-size: 16px;">${data.name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912;">Email:</td>
                <td style="padding: 12px 0;">
                  <a href="mailto:${data.email}" style="color: #ebc959; text-decoration: none; font-weight: 500;">${data.email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912;">Phone:</td>
                <td style="padding: 12px 0;">
                  <a href="tel:${data.phone}" style="color: #ebc959; text-decoration: none; font-weight: 500; background: #ebc959; padding: 6px 12px; border-radius: 4px; color: #1D1912; display: inline-block;">📞 ${data.phone}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912;">Address:</td>
                <td style="padding: 12px 0; color: #333333;">${data.address}</td>
              </tr>
              ${data.contactPreference ? `
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912;">Contact Pref:</td>
                <td style="padding: 12px 0; color: #333333; text-transform: capitalize;">${data.contactPreference}</td>
              </tr>
              ` : ''}
              ${data.leadSource ? `
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912;">Lead Source:</td>
                <td style="padding: 12px 0;">
                  <span style="background: #f8f9fa; color: #1D1912; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 500; text-transform: capitalize;">${data.leadSource}</span>
                </td>
              </tr>
              ` : ''}
            </table>
          </div>

          <!-- Service Details -->
          <div style="background: white; border-radius: 8px; padding: 25px; border-left: 5px solid #ebc959; margin-bottom: 25px;">
            <h3 style="color: #1D1912; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">🔧 Service Request Details</h3>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912; width: 140px;">Service Type:</td>
                <td style="padding: 12px 0; color: #333333; font-size: 16px;">${data.service}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912;">Priority:</td>
                <td style="padding: 12px 0;">
                  <span style="background: ${urgencyColors[data.urgency]}; color: #1D1912; padding: 4px 12px; border-radius: 12px; font-weight: 600; font-size: 14px;">
                    ${urgencyLabels[data.urgency]}
                  </span>
                </td>
              </tr>
              ${data.preferredTime ? `
              <tr>
                <td style="padding: 12px 0; font-weight: 600; color: #1D1912;">Preferred Time:</td>
                <td style="padding: 12px 0; color: #333333;">${data.preferredTime}</td>
              </tr>
              ` : ''}
            </table>

            <!-- Description -->
            <div style="margin-top: 20px;">
              <h4 style="color: #1D1912; margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">📝 Issue Description:</h4>
              <div style="background: #f8f9fa; padding: 20px; border-radius: 6px; border-left: 3px solid #ebc959; color: #1D1912; line-height: 1.6; font-size: 15px;">
                ${data.description.replace(/\n/g, '<br>')}
              </div>
            </div>
          </div>

          ${data.sessionData ? generateBookingLeadTrackingHTML(data.sessionData) : ''}

          <!-- Quick Actions -->
          <div style="background: linear-gradient(135deg, #ebc959 0%, #f4d76b 100%); border-radius: 8px; padding: 25px; text-align: center;">
            <h3 style="color: #1D1912; margin: 0 0 20px 0; font-size: 20px; font-weight: 600;">🚀 Contact Customer</h3>
            <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
              <a href="tel:${data.phone}" style="background: #1D1912; color: #ebc959; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block;">📞 Call ${data.phone}</a>
              <a href="mailto:${data.email}" style="background: white; color: #1D1912; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-weight: 600; display: inline-block;">✉️ Reply Email</a>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8f9fa; border-top: 3px solid #ebc959; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
          <p style="color: #333333; margin: 0; font-size: 14px;">Ez2Fix Service Request System</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateBookingFormAutoReplyHTML(data: BookingFormData): string {
  const urgencyLabels = {
    'same-day': 'Same Day Service',
    'next-day': 'Next Day Service',
    'flexible': 'Flexible Scheduling'
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Service Request Confirmed - Ez2Fix</title>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f8f9fa;">
      <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif;">
        
        <!-- Header -->
        <div style="background: white; padding: 30px 20px; text-align: center; border-radius: 8px 8px 0 0; border-bottom: 3px solid #ebc959;">
          <!-- Company Logo -->
          <div style="margin-bottom: 20px;">
            <img src="https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/ez2fix%20logo.png" alt="Ez2Fix Logo" style="height: 60px; width: auto;">
          </div>
          <div style="background: #ebc959; color: #1D1912; padding: 10px 25px; border-radius: 25px; display: inline-block; font-weight: bold; font-size: 16px; margin-bottom: 20px;">
            🎯 REQUEST CONFIRMED
          </div>
          <h1 style="color: #1D1912; margin: 0; font-size: 32px; font-weight: 700;">Thank You, ${data.name}!</h1>
          <p style="color: #666666; margin: 15px 0 0 0; font-size: 18px;">We'll contact you shortly</p>
        </div>

        <!-- Main Content -->
        <div style="background: #f8f9fa; padding: 40px 30px;">
          
          <!-- Confirmation Message -->
          <div style="text-align: center; margin-bottom: 35px;">
            <h2 style="color: #1D1912; margin: 0 0 15px 0; font-size: 24px; font-weight: 600;">Your Service Request is Confirmed</h2>
            <p style="color: #333333; font-size: 16px; line-height: 1.6; margin: 0; max-width: 450px; margin: 0 auto;">
              Thank you for choosing Ez2Fix! We've received your ${urgencyLabels[data.urgency].toLowerCase()} request for <strong>${data.service}</strong> and will contact you promptly to schedule your appointment.
            </p>
          </div>

          <!-- Request Summary -->
          <div style="background: white; border-radius: 12px; padding: 25px; border-left: 5px solid #ebc959; margin-bottom: 30px;">
            <h3 style="color: #1D1912; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">📋 Your Request Summary</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 10px 0; font-weight: 600; color: #1D1912; width: 130px;">Service:</td>
                <td style="padding: 10px 0; color: #333333;">${data.service}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 10px 0; font-weight: 600; color: #1D1912;">Priority:</td>
                <td style="padding: 10px 0; color: #333333;">${urgencyLabels[data.urgency]}</td>
              </tr>
              <tr style="border-bottom: 1px solid #E8E9EA;">
                <td style="padding: 10px 0; font-weight: 600; color: #1D1912;">Address:</td>
                <td style="padding: 10px 0; color: #333333; font-size: 14px;">${data.address}</td>
              </tr>
              ${data.preferredTime ? `
              <tr>
                <td style="padding: 10px 0; font-weight: 600; color: #1D1912;">Preferred Time:</td>
                <td style="padding: 10px 0; color: #333333;">${data.preferredTime}</td>
              </tr>
              ` : ''}
            </table>
          </div>

          <!-- Emergency CTA -->
          <div style="background: linear-gradient(135deg, #ebc959 0%, #f4d76b 100%); border-radius: 12px; padding: 25px; text-align: center; margin-bottom: 30px;">
            <h3 style="color: #1D1912; margin: 0 0 10px 0; font-size: 18px; font-weight: 600;">🚨 Need Immediate Help?</h3>
            <p style="color: #1D1912; margin: 0 0 20px 0; font-size: 14px;">
              If you have an urgent issue that can't wait, call us now!
            </p>
            <a href="tel:${serverEnv.business.phone}" style="background: #1D1912; color: #ebc959; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 16px; display: inline-block; transition: all 0.3s ease;">
              📞 Call ${serverEnv.business.phone}
            </a>
          </div>

          <!-- Helpful Resources -->
          <div style="background: white; border-radius: 12px; padding: 25px; border-left: 5px solid #ebc959; margin-bottom: 30px;">
            <h3 style="color: #1D1912; margin: 0 0 20px 0; font-size: 18px; font-weight: 600; text-align: center;">📚 Helpful Resources While You Wait</h3>
            
            <!-- Main Links Grid -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 20px;">
              <a href="${serverEnv.business.website || 'https://ez2fixllc.com'}/services" style="background: linear-gradient(135deg, #f8f9fa 0%, #f0f0f0 100%); border: 2px solid #ebc959; padding: 15px; border-radius: 8px; text-decoration: none; text-align: center; transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="color: #1D1912; font-weight: 600; font-size: 14px; margin-bottom: 5px;">🔧 Our Services</div>
                <div style="color: #666666; font-size: 11px; line-height: 1.3;">Spring repair, opener installation, track alignment & more</div>
              </a>
              <a href="${serverEnv.business.website || 'https://ez2fixllc.com'}/faq" style="background: linear-gradient(135deg, #f8f9fa 0%, #f0f0f0 100%); border: 2px solid #d4a736; padding: 15px; border-radius: 8px; text-decoration: none; text-align: center; transition: all 0.3s ease; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                <div style="color: #1D1912; font-weight: 600; font-size: 14px; margin-bottom: 5px;">❓ Common Questions</div>
                <div style="color: #666666; font-size: 11px; line-height: 1.3;">Quick answers to frequently asked questions</div>
              </a>
            </div>
            
            <!-- Secondary Links -->
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-bottom: 20px;">
              <a href="${serverEnv.business.website || 'https://ez2fixllc.com'}/service-areas" style="background: #f8f9fa; border: 1px solid #e0e0e0; padding: 12px 8px; border-radius: 6px; text-decoration: none; text-align: center; transition: all 0.3s ease;">
                <div style="color: #1D1912; font-weight: 600; font-size: 12px;">📍 Service Areas</div>
                <div style="color: #666666; font-size: 10px; margin-top: 3px;">Bergen & Hudson</div>
              </a>
              <a href="${serverEnv.business.website || 'https://ez2fixllc.com'}/maintenance-tips" style="background: #f8f9fa; border: 1px solid #e0e0e0; padding: 12px 8px; border-radius: 6px; text-decoration: none; text-align: center; transition: all 0.3s ease;">
                <div style="color: #1D1912; font-weight: 600; font-size: 12px;">💡 Maintenance Tips</div>
                <div style="color: #666666; font-size: 10px; margin-top: 3px;">Keep it running</div>
              </a>
              <a href="${serverEnv.business.website || 'https://ez2fixllc.com'}/emergency" style="background: #f8f9fa; border: 1px solid #e0e0e0; padding: 12px 8px; border-radius: 6px; text-decoration: none; text-align: center; transition: all 0.3s ease;">
                <div style="color: #1D1912; font-weight: 600; font-size: 12px;">🚨 Emergency Info</div>
                <div style="color: #666666; font-size: 10px; margin-top: 3px;">What to do</div>
              </a>
            </div>
            
            <!-- Feature Link -->
            <div style="text-align: center;">
              <a href="${serverEnv.business.website || 'https://ez2fixllc.com'}/reviews" style="background: linear-gradient(135deg, #ebc959 0%, #f4d76b 100%); color: #1D1912; padding: 15px 30px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px; display: inline-block; box-shadow: 0 3px 6px rgba(235, 201, 89, 0.3); transition: all 0.3s ease;">
                ⭐ Read 100+ Five-Star Reviews
              </a>
            </div>
          </div>

          <!-- What Happens Next -->
          <div style="background: white; border-radius: 12px; padding: 25px; border-left: 5px solid #ebc959;">
            <h3 style="color: #1D1912; margin: 0 0 20px 0; font-size: 18px; font-weight: 600;">📋 What Happens Next?</h3>
            <div style="space-y: 15px;">
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style="background: #ebc959; color: #1D1912; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 15px; flex-shrink: 0;">1</div>
                <div>
                  <div style="color: #1D1912; font-weight: 600; margin-bottom: 5px;">We'll Call You Soon</div>
                  <div style="color: #333333; font-size: 14px; line-height: 1.5;">Expect our call promptly to schedule your ${urgencyLabels[data.urgency].toLowerCase()}</div>
                </div>
              </div>
              <div style="display: flex; align-items: flex-start; margin-bottom: 15px;">
                <div style="background: #ebc959; color: #1D1912; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 15px; flex-shrink: 0;">2</div>
                <div>
                  <div style="color: #1D1912; font-weight: 600; margin-bottom: 5px;">Professional Assessment</div>
                  <div style="color: #333333; font-size: 14px; line-height: 1.5;">Licensed technician arrives on time and provides free estimate</div>
                </div>
              </div>
              <div style="display: flex; align-items: flex-start;">
                <div style="background: #b8a138; color: white; width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 15px; flex-shrink: 0;">3</div>
                <div>
                  <div style="color: #1D1912; font-weight: 600; margin-bottom: 5px;">Quality Service</div>
                  <div style="color: #333333; font-size: 14px; line-height: 1.5;">Professional repair with warranty and cleanup included</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div style="background: #f8f9fa; border-top: 3px solid #ebc959; padding: 20px; text-align: center; border-radius: 0 0 8px 8px;">
          <p style="color: #666666; margin: 0; font-size: 14px;">Ez2Fix - Your Trusted Bergen County Garage Door Experts Since 2014</p>
          <p style="color: #666666; margin: 0; font-size: 12px;">Licensed & Insured | 5-Star Rated | Family Owned & Operated</p>
        </div>
      </div>
    </body>
    </html>
  `;
}