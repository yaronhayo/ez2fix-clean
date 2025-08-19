// Maps API key endpoint - provides key at runtime
import type { APIRoute } from 'astro';
import { clientEnv } from '@/config/env';

export const GET: APIRoute = async () => {
  // Get API key from environment variables
  const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY || process.env.PUBLIC_GOOGLE_MAPS_API_KEY || clientEnv.googleMaps.apiKey;
  
  console.log('Maps key endpoint called');
  console.log('API key available:', !!apiKey && apiKey !== 'local_development_placeholder');
  
  if (!apiKey || apiKey === 'local_development_placeholder') {
    console.error('No Google Maps API key configured in environment variables');
    return new Response(
      JSON.stringify({ 
        error: 'Google Maps API key not configured',
        debug: {
          hasEnvVar: !!import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY,
          hasProcessEnv: !!process.env.PUBLIC_GOOGLE_MAPS_API_KEY,
          hasClientEnv: !!clientEnv.googleMaps.apiKey
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