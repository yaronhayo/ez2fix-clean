// API route to handle redirects programmatically
import type { APIRoute } from 'astro';
import { getRedirectFor } from '@/config/redirects';

export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Check if this path should be redirected
  const redirect = getRedirectFor(pathname);
  
  if (redirect) {
    const status = redirect.status || 301; // Default to permanent redirect
    
    // Log the redirect for debugging
    console.log(`🔄 Redirecting ${pathname} → ${redirect.to} (${status})`);
    
    return new Response(null, {
      status,
      headers: {
        'Location': redirect.to,
        'Cache-Control': 'public, max-age=31536000', // Cache redirects for 1 year
      }
    });
  }
  
  // No redirect found
  return new Response(JSON.stringify({
    error: 'No redirect found',
    path: pathname
  }), {
    status: 404,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};