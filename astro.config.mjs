// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid', // Enable serverless functions for API routes while keeping pages static
  adapter: vercel(),
  site: 'https://ez2fixllc.com'
});
