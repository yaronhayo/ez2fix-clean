// Environment Configuration
// This file centralizes all environment variable access and provides type safety

// Client-side environment variables (PUBLIC_ prefix)
export const clientEnv = {
  recaptcha: {
    siteKey: import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY || '',
  },
  googleMaps: {
    apiKey: import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY || '',
  },
  analytics: {
    gaMeasurementId: import.meta.env.PUBLIC_GA_MEASUREMENT_ID || '',
    facebookPixelId: import.meta.env.PUBLIC_FACEBOOK_PIXEL_ID || '',
  },
  site: {
    url: import.meta.env.SITE_URL || 'https://ez2fixllc.com',
  },
} as const;

// Server-side environment variables (only available in server context)
export const serverEnv = {
  recaptcha: {
    secretKey: import.meta.env.RECAPTCHA_SECRET_KEY || '',
  },
  email: {
    resendApiKey: import.meta.env.RESEND_API_KEY || '',
    fromEmail: import.meta.env.FROM_EMAIL || 'noreply@ez2fix.com',
    toEmail: import.meta.env.TO_EMAIL || 'info@ez2fix.com',
    adminEmail: import.meta.env.ADMIN_EMAIL || 'admin@ez2fix.com',
  },
  business: {
    name: import.meta.env.BUSINESS_NAME || 'Ez2Fix Garage Door Service',
    address: import.meta.env.BUSINESS_ADDRESS || 'Bergen County, NJ',
    phone: import.meta.env.BUSINESS_PHONE || '(201) 554-6769',
    email: import.meta.env.BUSINESS_EMAIL || 'info@ez2fix.com',
    website: import.meta.env.BUSINESS_WEBSITE || 'https://ez2fixllc.com',
    coordinates: {
      lat: parseFloat(import.meta.env.BUSINESS_LAT || '40.9176'),
      lng: parseFloat(import.meta.env.BUSINESS_LNG || '-74.0732'),
    },
  },
  serviceArea: {
    radiusMiles: parseInt(import.meta.env.SERVICE_RADIUS_MILES || '25'),
    primaryAreas: import.meta.env.PRIMARY_SERVICE_AREAS?.split(',') || [
      'Fair Lawn', 'Elmwood Park', 'Garfield', 'Lodi', 'Saddle Brook',
      'Wallington', 'Wood-Ridge', 'Carlstadt', 'East Rutherford',
      'Hasbrouck Heights', 'Little Ferry', 'Moonachie', 'Rutherford', 'Teterboro'
    ],
  },
  googleMaps: {
    apiKey: import.meta.env.GOOGLE_MAPS_API_KEY || '', // Server-side only
  },
  integrations: {
    webhookUrl: import.meta.env.WEBHOOK_URL || '',
    databaseUrl: import.meta.env.DATABASE_URL || '',
    slackWebhookUrl: import.meta.env.SLACK_WEBHOOK_URL || '',
    twilio: {
      accountSid: import.meta.env.TWILIO_ACCOUNT_SID || '',
      authToken: import.meta.env.TWILIO_AUTH_TOKEN || '',
      phoneNumber: import.meta.env.TWILIO_PHONE_NUMBER || '',
    },
    crm: {
      apiKey: import.meta.env.CRM_API_KEY || '',
      endpoint: import.meta.env.CRM_ENDPOINT || '',
    },
  },
  security: {
    rateLimitMaxRequests: parseInt(import.meta.env.RATE_LIMIT_MAX_REQUESTS || '100'),
    rateLimitWindowMs: parseInt(import.meta.env.RATE_LIMIT_WINDOW_MS || '900000'),
    formRateLimitMax: parseInt(import.meta.env.FORM_RATE_LIMIT_MAX || '5'),
    formRateLimitWindowMs: parseInt(import.meta.env.FORM_RATE_LIMIT_WINDOW_MS || '300000'),
  },
} as const;

// Validation functions
export function validateClientEnv(): string[] {
  const errors: string[] = [];
  
  if (!clientEnv.recaptcha.siteKey) {
    errors.push('PUBLIC_RECAPTCHA_SITE_KEY is required');
  }
  
  if (!clientEnv.googleMaps.apiKey) {
    errors.push('PUBLIC_GOOGLE_MAPS_API_KEY is required');
  }
  
  return errors;
}

export function validateServerEnv(): string[] {
  const errors: string[] = [];
  
  if (!serverEnv.recaptcha.secretKey) {
    errors.push('RECAPTCHA_SECRET_KEY is required');
  }
  
  if (!serverEnv.email.resendApiKey) {
    errors.push('RESEND_API_KEY is required');
  }
  
  if (!serverEnv.email.fromEmail || !serverEnv.email.toEmail) {
    errors.push('FROM_EMAIL and TO_EMAIL are required');
  }
  
  if (!serverEnv.googleMaps.apiKey) {
    errors.push('GOOGLE_MAPS_API_KEY is required for server-side maps');
  }
  
  return errors;
}

// Environment type
export const isDev = import.meta.env.DEV;
export const isProd = import.meta.env.PROD;
export const nodeEnv = import.meta.env.NODE_ENV || 'development';

// Export commonly used values for convenience
export const {
  recaptcha: { siteKey: RECAPTCHA_SITE_KEY },
  googleMaps: { apiKey: GOOGLE_MAPS_API_KEY },
  site: { url: SITE_URL },
} = clientEnv;