// Generate a JavaScript file with the API key injected
import type { APIRoute } from 'astro';
import { clientEnv } from '@/config/env';

export const GET: APIRoute = async () => {
  // Get the API key from all possible sources
  const apiKeys = {
    importMeta: import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY,
    processEnv: process.env.PUBLIC_GOOGLE_MAPS_API_KEY,
    clientEnv: clientEnv.googleMaps.apiKey
  };
  
  // Find the first real API key (not placeholder)
  const realApiKey = Object.values(apiKeys).find(key => 
    key && 
    key !== 'local_development_placeholder' && 
    key.startsWith('AIza') && 
    key.length > 30
  );
  
  console.log('Generating maps.js with API keys:', {
    importMeta: apiKeys.importMeta ? `${apiKeys.importMeta.substring(0, 10)}...` : 'undefined',
    processEnv: apiKeys.processEnv ? `${apiKeys.processEnv.substring(0, 10)}...` : 'undefined', 
    clientEnv: apiKeys.clientEnv ? `${apiKeys.clientEnv.substring(0, 10)}...` : 'undefined',
    selectedKey: realApiKey ? `${realApiKey.substring(0, 10)}... (${realApiKey.length} chars)` : 'none found'
  });
  
  // Generate JavaScript content
  const jsContent = `
// Google Maps API Key - Generated at build time
window.GOOGLE_MAPS_CONFIG = {
  apiKey: ${JSON.stringify(realApiKey || 'ENVIRONMENT_VARIABLE_NOT_SET')},
  hasValidKey: ${!!realApiKey},
  debugInfo: ${JSON.stringify({
    sources: {
      importMeta: !!apiKeys.importMeta,
      processEnv: !!apiKeys.processEnv,
      clientEnv: !!apiKeys.clientEnv
    },
    selectedSource: realApiKey ? 'found valid key' : 'no valid key found',
    timestamp: new Date().toISOString()
  }, null, 2)}
};

console.log('🔧 Google Maps config loaded:', window.GOOGLE_MAPS_CONFIG.debugInfo);
console.log('✅ API key available:', window.GOOGLE_MAPS_CONFIG.hasValidKey);
if (!window.GOOGLE_MAPS_CONFIG.hasValidKey) {
  console.error('❌ No valid Google Maps API key found in any environment variable source');
  console.error('🔧 Set PUBLIC_GOOGLE_MAPS_API_KEY in Vercel with a valid API key starting with AIza...');
}
`.trim();
  
  return new Response(jsContent, {
    headers: {
      'Content-Type': 'application/javascript',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};