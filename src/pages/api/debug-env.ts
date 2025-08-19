// Debug endpoint to test environment variable access in Vercel
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  // Try all possible environment variable names and sources
  const envSources = {
    PUBLIC_GOOGLE_MAPS_API_KEY: process.env.PUBLIC_GOOGLE_MAPS_API_KEY,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    MAPS_API_KEY: process.env.MAPS_API_KEY,
    VITE_GOOGLE_MAPS_API_KEY: process.env.VITE_GOOGLE_MAPS_API_KEY,
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  };

  // Get all environment variables that contain 'MAPS' or 'GOOGLE'
  const allEnvVars = Object.keys(process.env)
    .filter(key => key.includes('MAPS') || key.includes('GOOGLE'))
    .reduce((obj, key) => {
      obj[key] = process.env[key] ? `${process.env[key]?.substring(0, 10)}...` : 'undefined';
      return obj;
    }, {} as Record<string, string>);

  const debugInfo = {
    timestamp: new Date().toISOString(),
    requestUrl: request.url,
    platform: process.platform,
    nodeEnv: process.env.NODE_ENV,
    vercelEnv: process.env.VERCEL_ENV,
    isVercel: !!process.env.VERCEL,
    envSources: Object.keys(envSources).reduce((obj, key) => {
      const value = envSources[key as keyof typeof envSources];
      obj[key] = {
        exists: !!value,
        length: value?.length || 0,
        preview: value ? `${value.substring(0, 10)}...` : 'undefined',
        startsWithAIza: value?.startsWith('AIza') || false,
        isPlaceholder: value === 'local_development_placeholder'
      };
      return obj;
    }, {} as Record<string, any>),
    allMapsRelatedVars: allEnvVars,
    processEnvKeys: Object.keys(process.env).length
  };

  return new Response(JSON.stringify(debugInfo, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  });
};