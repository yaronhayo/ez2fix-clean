const clientEnv = {
  googleMaps: {
    apiKey: ""
  },
  analytics: {
    facebookPixelId: ""
  }};
const serverEnv = {
  recaptcha: {
    secretKey: ""
  },
  email: {
    resendApiKey: "",
    fromEmail: "noreply@ez2fix.com",
    toEmail: "info@ez2fix.com",
    adminEmail: "admin@ez2fix.com"
  },
  business: {
    name: "Ez2Fix Garage Door Service",
    address: "Bergen County, NJ",
    phone: "(201) 554-6769",
    email: "info@ez2fix.com",
    website: "https://ez2fixllc.com",
    coordinates: {
      lat: parseFloat("40.9176"),
      lng: parseFloat("-74.0732")
    }
  },
  serviceArea: {
    radiusMiles: parseInt("25"),
    primaryAreas: [
      "Fair Lawn",
      "Elmwood Park",
      "Garfield",
      "Lodi",
      "Saddle Brook",
      "Wallington",
      "Wood-Ridge",
      "Carlstadt",
      "East Rutherford",
      "Hasbrouck Heights",
      "Little Ferry",
      "Moonachie",
      "Rutherford",
      "Teterboro"
    ]
  },
  googleMaps: {
    apiKey: ""
    // Server-side only
  },
  integrations: {
    webhookUrl: "",
    databaseUrl: "",
    slackWebhookUrl: "",
    twilio: {
      accountSid: "",
      authToken: "",
      phoneNumber: ""
    },
    crm: {
      apiKey: "",
      endpoint: ""
    }
  },
  security: {
    rateLimitMaxRequests: parseInt("100"),
    rateLimitWindowMs: parseInt("900000"),
    formRateLimitMax: parseInt("5"),
    formRateLimitWindowMs: parseInt("300000")
  }
};
const isDev = false;

export { clientEnv as c, isDev as i, serverEnv as s };
