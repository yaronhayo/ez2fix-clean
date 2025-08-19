// Maps configuration API endpoint
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const apiKey = import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY;
  
  if (!apiKey) {
    return new Response(
      JSON.stringify({ error: 'Google Maps API key not configured' }), 
      { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    );
  }

  return new Response(
    JSON.stringify({ 
      apiKey: apiKey,
      available: true
    }), 
    { 
      headers: { 
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300' // Cache for 5 minutes
      }
    }
  );
};