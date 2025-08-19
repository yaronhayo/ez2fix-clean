// Simple test endpoint - just return environment variable directly
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || process.env.PUBLIC_GOOGLE_MAPS_API_KEY || 'NOT_FOUND';
  
  return new Response(JSON.stringify({ 
    key: key,
    hasKey: !!key && key !== 'NOT_FOUND'
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
};