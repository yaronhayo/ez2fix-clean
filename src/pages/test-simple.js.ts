// Simple test endpoint - just return environment variable directly
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const key = 'AIzaSyCC7AYmLnyP7XLdADdhYFpzRRjiCqmlkhw';
  
  return new Response(JSON.stringify({ 
    key: key,
    hasKey: !!key && key !== 'NOT_FOUND'
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
};