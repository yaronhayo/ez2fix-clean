// Simple test endpoint to debug environment variable access
import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ request }) => {
  // Log all environment variables that contain GOOGLE or MAPS
  console.log('=== ENVIRONMENT VARIABLE DEBUG ===');
  console.log('Node.js Version:', process.version);
  console.log('Platform:', process.platform);
  console.log('Current working directory:', process.cwd());
  console.log('VERCEL environment:', process.env.VERCEL);
  console.log('VERCEL_ENV:', process.env.VERCEL_ENV);
  
  const allEnvVars = Object.keys(process.env);
  console.log('Total environment variables:', allEnvVars.length);
  
  const relevantVars = allEnvVars.filter(key => 
    key.includes('GOOGLE') || key.includes('MAPS')
  );
  
  console.log('Google/Maps related variables:', relevantVars);
  
  const envData = {
    nodeVersion: process.version,
    platform: process.platform,
    cwd: process.cwd(),
    isVercel: !!process.env.VERCEL,
    vercelEnv: process.env.VERCEL_ENV,
    totalEnvVars: allEnvVars.length,
    relevantVarNames: relevantVars,
    envValues: {
      PUBLIC_GOOGLE_MAPS_API_KEY: process.env.PUBLIC_GOOGLE_MAPS_API_KEY,
      GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
      MAPS_API_KEY: process.env.MAPS_API_KEY
    },
    // Check first 10 env vars to see what's available
    sampleEnvVars: allEnvVars.slice(0, 10).reduce((obj, key) => {
      obj[key] = process.env[key];
      return obj;
    }, {} as Record<string, string | undefined>)
  };
  
  return new Response(JSON.stringify(envData, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  });
};