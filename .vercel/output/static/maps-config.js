// Google Maps Runtime Configuration - ERROR STATE
window.RUNTIME_MAPS_CONFIG = {
  apiKey: null,
  loaded: false,
  error: "Google Maps API key not properly configured",
  debug: {
    hasKey: false,
    keyLength: 0,
    startsWithAIza: false,
    isPlaceholder: false,
    keyPreview: "undefined",
    sources: {
  "PUBLIC_GOOGLE_MAPS_API_KEY": "undefined",
  "GOOGLE_MAPS_API_KEY": "undefined",
  "MAPS_API_KEY": "undefined"
}
  }
};

console.error('❌ Google Maps API key validation failed');
console.error('🔧 Debug info:', window.RUNTIME_MAPS_CONFIG.debug);
console.error('🔧 Set a valid Google Maps API key in Vercel environment variables');

// Trigger error handling if page is already loaded
if (window.loadGoogleMapsFromRuntime) {
  console.log('🚨 Triggering error handling for maps');
  // Don't call the function since we have an error state
}