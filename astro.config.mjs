// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server', // Full server-side rendering for all routes
  adapter: vercel(),
  site: 'https://ez2fixllc.com',

  // Performance optimizations
  build: {
    inlineStylesheets: 'always',
    assets: '_assets',
    format: 'directory',
    split: true
  },

  // Vite optimization for better bundling
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            // Split large dependencies
            'react-vendor': ['react', 'react-dom'],
            'ui-components': [
              '@/components/ui/Button.astro',
              '@/components/ui/Card.astro',
              '@/components/ui/CTA.astro'
            ]
          }
        }
      },
      // Use esbuild for minification (faster and included)
      minify: 'esbuild'
    },
    ssr: {
      noExternal: ['lucide-react']
    }
  },

  // Markdown optimization
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: false
    }
  },
  
  // Built-in redirects for the most common old URLs
  redirects: {
    // SEO essentials
    '/sitemap.xml': '/api/sitemap',
    
    // Core page redirects
    '/index.html': '/',
    '/home': '/',
    '/about-us/': '/about',
    '/contact-us/': '/contact',
    '/get-quote': '/booking',
    '/estimate': '/booking',
    '/testimonials': '/reviews',
    '/frequently-asked-questions': '/faq',
    
    // Actual old website URLs - Core Pages
    '/our-services/': '/services',
    '/sample-page/': '/',
    '/feed/': '/', // RSS feed redirect to home
    
    // Actual old website URLs - Service Pages (with exact correlations)
    '/garage-doors-repair/': '/services/general-garage-door-repair',
    '/spring-repair/': '/services/garage-door-spring-repair',
    '/broken-garage-door-spring-repair-replacement/': '/services/garage-door-spring-repair',
    '/garage-door-openers/': '/services/garage-door-opener-installation',
    '/commercial-garage-doors/': '/services/commercial-garage-door-service',
    
    // Actual old website URLs - Service Pages (without direct correlations)
    '/residential-garage-door/': '/services',
    '/control-system/': '/services/garage-door-opener-installation',
    '/garage-door-locks/': '/services/general-garage-door-repair',
    '/garage-door-hinges/': '/services/general-garage-door-repair',
    '/garage-door-accessories/': '/services',
    
    // Generic service redirects  
    '/emergency-repair': '/services/emergency-garage-door-repair',
    '/opener-installation': '/services/garage-door-opener-installation',
    '/new-door-installation': '/services/new-garage-door-installation',
    '/commercial-service': '/services/commercial-garage-door-service',
    '/repair-service': '/services/general-garage-door-repair',
    
    // Service area redirects
    '/fair-lawn': '/service-areas/fair-lawn',
    '/montclair': '/service-areas/montclair',
    '/clifton': '/service-areas/clifton',
    '/little-falls': '/service-areas/little-falls',
    '/cedar-grove': '/service-areas/cedar-grove',
    '/west-caldwell': '/service-areas/west-caldwell',
    '/north-caldwell': '/service-areas/north-caldwell',
    
    // Orphaned page redirects
    '/gallery': '/#gallery',
    '/photos': '/#gallery',
    '/service-request': '/booking',
    '/request-quote': '/booking',
    '/warranty': '/about#warranty',
    '/guarantee': '/about#warranty',
    '/questions': '/faq',
    '/products': '/services',
    '/parts': '/services',
    '/locations': '/service-areas',
    '/areas-served': '/service-areas'
  }
});
