// Google Maps API Key - Generated at build time
window.GOOGLE_MAPS_CONFIG = {
  apiKey: "ENVIRONMENT_VARIABLE_NOT_SET",
  hasValidKey: false,
  debugInfo: {
  "sources": {
    "importMeta": true,
    "processEnv": true,
    "clientEnv": true
  },
  "selectedSource": "no valid key found",
  "timestamp": "2025-08-19T09:46:55.025Z"
}
};

console.log('🔧 Google Maps config loaded:', window.GOOGLE_MAPS_CONFIG.debugInfo);
console.log('✅ API key available:', window.GOOGLE_MAPS_CONFIG.hasValidKey);
if (!window.GOOGLE_MAPS_CONFIG.hasValidKey) {
  console.error('❌ No valid Google Maps API key found in any environment variable source');
  console.error('🔧 Set PUBLIC_GOOGLE_MAPS_API_KEY in Vercel with a valid API key starting with AIza...');
}