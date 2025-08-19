// Maps API key endpoint - provides key at runtime
import type { APIRoute } from 'astro';
import { clientEnv } from '@/config/env';

export const GET: APIRoute = async () => {
  // Get API key from environment variables - check each source
  const importMetaKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;
  const processEnvKey = process.env.PUBLIC_GOOGLE_MAPS_API_KEY;
  const clientEnvKey = clientEnv.googleMaps.apiKey;
  
  console.log('Maps key endpoint called');
  console.log('import.meta.env key:', importMetaKey ? `"${importMetaKey.substring(0, 10)}..."` : 'undefined');
  console.log('process.env key:', processEnvKey ? `"${processEnvKey.substring(0, 10)}..."` : 'undefined');
  console.log('clientEnv key:', clientEnvKey ? `"${clientEnvKey.substring(0, 10)}..."` : 'undefined');
  
  // Use the first valid (non-placeholder) key found
  const apiKey = [processEnvKey, importMetaKey, clientEnvKey]
    .find(key => key && key !== 'local_development_placeholder');
  
  console.log('Final selected key:', apiKey ? `"${apiKey.substring(0, 10)}..." (length: ${apiKey.length})` : 'none found');
  
  if (!apiKey || apiKey === 'local_development_placeholder') {
    console.error('No valid Google Maps API key found');
    return new Response(
      JSON.stringify({ 
        error: 'Google Maps API key not configured',
        debug: {
          hasEnvVar: !!importMetaKey,
          hasProcessEnv: !!processEnvKey,
          hasClientEnv: !!clientEnvKey,
          envVarValue: importMetaKey ? `${importMetaKey.substring(0, 10)}...` : 'undefined',
          processEnvValue: processEnvKey ? `${processEnvKey.substring(0, 10)}...` : 'undefined',
          clientEnvValue: clientEnvKey ? `${clientEnvKey.substring(0, 10)}...` : 'undefined'
        }
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
  
  console.log('Serving API key, length:', apiKey.length);
  
  return new Response(
    JSON.stringify({ 
      apiKey: apiKey,
      success: true
    }), 
    { 
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300'
      }
    }
  );
};