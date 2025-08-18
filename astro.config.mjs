// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'static',
  adapter: vercel(),
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets'
  },
  site: 'https://ez2fix.com',
  compressHTML: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport'
  },
  vite: {
    build: {
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['react', 'react-dom'],
            'utils': ['clsx', 'tailwind-merge']
          },
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js'
        },
        treeshake: 'recommended'
      },
      target: 'es2020',
      minify: 'esbuild',
      sourcemap: false,
      chunkSizeWarningLimit: 1000
    },
    css: {
      devSourcemap: false
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'clsx', 'tailwind-merge'],
      exclude: ['lucide-react']
    }
  }
});
