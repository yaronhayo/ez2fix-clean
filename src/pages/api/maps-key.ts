// Maps API key endpoint - provides key at runtime
import type { APIRoute } from 'astro';
import { clientEnv } from '@/config/env';

export const GET: APIRoute = async () => {
  // TEMPORARY HARDCODED API KEY FOR TESTING
  // TODO: Remove this and fix Vercel environment variable access
  const runtimeApiKey = 'AIzaSyCC7AYmLnyP7XLdADdhYFpzRRjiCqmlkhw';
  
  console.log('Maps key endpoint called');
  console.log('Runtime environment check:', {
    hasRuntimeKey: !!runtimeApiKey,
    keyPreview: runtimeApiKey ? `${runtimeApiKey.substring(0, 10)}...` : 'undefined',
    keyLength: runtimeApiKey ? runtimeApiKey.length : 0,
    sources: {
      NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? `${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY.substring(0, 10)}...` : 'undefined',
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
    return new Response(
      JSON.stringify({ 
        success: false,
        error: 'Google Maps API key not properly configured',
        debug: {
          hasKey: !!runtimeApiKey,
          keyLength: runtimeApiKey ? runtimeApiKey.length : 0,
          startsWithAIza: runtimeApiKey ? runtimeApiKey.startsWith('AIza') : false,
          isPlaceholder: runtimeApiKey === 'local_development_placeholder',
          keyPreview: runtimeApiKey ? `${runtimeApiKey.substring(0, 10)}...` : 'undefined'
        }
      }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }
  
  console.log('✅ Valid runtime API key found, serving...');
  
  return new Response(
    JSON.stringify({ 
      apiKey: runtimeApiKey,
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