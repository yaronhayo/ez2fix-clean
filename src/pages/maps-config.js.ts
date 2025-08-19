// Runtime Google Maps configuration endpoint
// This bypasses build-time environment variable issues
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  // Get API key from runtime environment (Vercel Functions have full access)
  const runtimeApiKey = process.env.PUBLIC_GOOGLE_MAPS_API_KEY;
  
  console.log('Runtime maps config requested');
  console.log('Runtime environment check:', {
    hasRuntimeKey: !!runtimeApiKey,
    keyPreview: runtimeApiKey ? `${runtimeApiKey.substring(0, 10)}...` : 'undefined',
    keyLength: runtimeApiKey ? runtimeApiKey.length : 0,
    isValid: !!(runtimeApiKey && runtimeApiKey.length > 30 && runtimeApiKey.startsWith('AIza'))
  });
  
  // Validate the API key
  const isValidKey = runtimeApiKey && 
                     runtimeApiKey.length > 30 && 
                     runtimeApiKey.startsWith('AIza') &&
                     runtimeApiKey !== 'local_development_placeholder';
  
  if (!isValidKey) {
    console.error('Runtime API key validation failed');
    return new Response(JSON.stringify({
      success: false,
      error: 'Google Maps API key not properly configured',
      debug: {
        hasKey: !!runtimeApiKey,
        keyLength: runtimeApiKey ? runtimeApiKey.length : 0,
        startsWithAIza: runtimeApiKey ? runtimeApiKey.startsWith('AIza') : false,
        isPlaceholder: runtimeApiKey === 'local_development_placeholder'
      }
    }), {
      status: 500,
      headers: { 
        'Content-Type': 'application/json',
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