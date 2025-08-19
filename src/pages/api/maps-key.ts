// Maps API key endpoint - provides client-side Google Maps API key at runtime
import type { APIRoute } from 'astro';
import { clientEnv, isDev } from '@/config/env';

export const prerender = false; // Force server-side rendering

export const GET: APIRoute = async () => {
  // Try to get the client-side Google Maps API key from environment variables
  const apiKey = clientEnv.googleMaps.apiKey || 
                 process.env.PUBLIC_GOOGLE_MAPS_API_KEY ||
                 process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  if (isDev) {
    console.log('Maps key endpoint called');
    console.log('Environment variables check:', {
      hasApiKey: !!apiKey,
      keyLength: apiKey ? apiKey.length : 0,
      keyPreview: apiKey ? `${apiKey.substring(0, 10)}...` : 'undefined',
      sources: {
        clientEnv: !!clientEnv.googleMaps.apiKey,
        PUBLIC_GOOGLE_MAPS_API_KEY: !!process.env.PUBLIC_GOOGLE_MAPS_API_KEY,
        NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: !!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
      }
    });
  }
  
  // Validate the API key
  const isValidKey = apiKey && 
                     apiKey.length > 30 && 
                     apiKey.startsWith('AIza') &&
                     apiKey !== 'your_public_google_maps_api_key_here' &&
                     apiKey !== 'local_development_placeholder';
  
  if (!isValidKey) {
    console.error('Google Maps API key validation failed');
    return new Response(
      JSON.stringify({ 
        success: false,
        error: 'Google Maps API key not properly configured. Please check environment variables.',
        debug: {
          hasKey: !!apiKey,
          keyLength: apiKey ? apiKey.length : 0,
          startsWithAIza: apiKey ? apiKey.startsWith('AIza') : false,
          isPlaceholder: apiKey === 'your_public_google_maps_api_key_here' || apiKey === 'local_development_placeholder',
          keyPreview: apiKey ? `${apiKey.substring(0, 10)}...` : 'undefined',
          environmentHints: {
            requiredVars: ['PUBLIC_GOOGLE_MAPS_API_KEY', 'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY'],
            currentEnv: isDev ? 'development' : 'production'
          }
        }
      }), 
      { 
        status: 500,
        headers: { 
          'Content-Type': 'application/json',
          'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
      }
    );
  }
  
  if (isDev) {
    console.log('✅ Valid Google Maps API key found, serving to client...');
  }
  
  return new Response(
    JSON.stringify({ 
      apiKey: apiKey,
      success: true
    }), 
    { 
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        'X-Content-Type-Options': 'nosniff',
        'X-Frame-Options': 'DENY',
      }
    }
  );
};