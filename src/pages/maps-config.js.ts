// Runtime Google Maps configuration endpoint
// This bypasses build-time environment variable issues
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  // IMPORTANT: In Vercel serverless functions, use process.env directly
  // The import.meta.env pattern works at build time but not at runtime
  const runtimeApiKey = process.env.PUBLIC_GOOGLE_MAPS_API_KEY || 
                        process.env.GOOGLE_MAPS_API_KEY ||
                        process.env.MAPS_API_KEY;
  
  console.log('Runtime maps config requested - testing env vars...');
  console.log('Runtime environment check:', {
    hasRuntimeKey: !!runtimeApiKey,
    keyPreview: runtimeApiKey ? `${runtimeApiKey.substring(0, 10)}...` : 'undefined',
    keyLength: runtimeApiKey ? runtimeApiKey.length : 0,
    isValid: !!(runtimeApiKey && runtimeApiKey.length > 30 && runtimeApiKey.startsWith('AIza')),
    sources: {
      PUBLIC_GOOGLE_MAPS_API_KEY: process.env.PUBLIC_GOOGLE_MAPS_API_KEY ? `${process.env.PUBLIC_GOOGLE_MAPS_API_KEY.substring(0, 10)}...` : 'undefined',
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY ? `${process.env.GOOGLE_MAPS_API_KEY.substring(0, 10)}...` : 'undefined', 
      MAPS_API_KEY: process.env.MAPS_API_KEY ? `${process.env.MAPS_API_KEY.substring(0, 10)}...` : 'undefined'
    }
  });
  
  // Validate the API key
  const isValidKey = runtimeApiKey && 
                     runtimeApiKey.length > 30 && 
                     runtimeApiKey.startsWith('AIza') &&
                     runtimeApiKey !== 'local_development_placeholder';
  
  if (!isValidKey) {
    console.error('Runtime API key validation failed');
    
    // Return JavaScript code that sets an error configuration
    const jsErrorConfig = `
// Google Maps Runtime Configuration - ERROR STATE
window.RUNTIME_MAPS_CONFIG = {
  apiKey: null,
  loaded: false,
  error: "Google Maps API key not properly configured",
  debug: {
    hasKey: ${!!runtimeApiKey},
    keyLength: ${runtimeApiKey ? runtimeApiKey.length : 0},
    startsWithAIza: ${runtimeApiKey ? runtimeApiKey.startsWith('AIza') : false},
    isPlaceholder: ${runtimeApiKey === 'local_development_placeholder'},
    keyPreview: ${JSON.stringify(runtimeApiKey ? `${runtimeApiKey.substring(0, 10)}...` : 'undefined')},
    sources: ${JSON.stringify({
      PUBLIC_GOOGLE_MAPS_API_KEY: process.env.PUBLIC_GOOGLE_MAPS_API_KEY ? `${process.env.PUBLIC_GOOGLE_MAPS_API_KEY.substring(0, 10)}...` : 'undefined',
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY ? `${process.env.GOOGLE_MAPS_API_KEY.substring(0, 10)}...` : 'undefined', 
      MAPS_API_KEY: process.env.MAPS_API_KEY ? `${process.env.MAPS_API_KEY.substring(0, 10)}...` : 'undefined'
    }, null, 2)}
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
`.trim();

    return new Response(jsErrorConfig, {
      headers: {
        'Content-Type': 'application/javascript',
        'Cache-Control': 'no-cache'
      }
    });
  }
  
  console.log('✅ Valid runtime API key found');
  
  // Generate JavaScript config that will be executed immediately
  const jsConfig = `
// Google Maps Runtime Configuration
window.RUNTIME_MAPS_CONFIG = {
  apiKey: ${JSON.stringify(runtimeApiKey)},
  loaded: true,
  timestamp: ${JSON.stringify(new Date().toISOString())}
};

// Trigger map loading if the page is already loaded
if (window.loadGoogleMapsFromRuntime) {
  console.log('🚀 Triggering map load with runtime config');
  window.loadGoogleMapsFromRuntime();
} else {
  console.log('📝 Runtime config loaded, waiting for page to initialize');
}
`.trim();

  return new Response(jsConfig, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=60'
    }
  });
};