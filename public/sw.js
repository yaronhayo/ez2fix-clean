// Service Worker for Ez2Fix - Ultra-Aggressive JavaScript Optimization
const CACHE_VERSION = '1.4.2-console-errors-fixed';
const CACHE_NAME = `ez2fix-v${CACHE_VERSION}-performance`;
const STATIC_CACHE = `ez2fix-static-v${CACHE_VERSION}`;
const IMAGE_CACHE = `ez2fix-images-v${CACHE_VERSION}`;
const VIDEO_CACHE = `ez2fix-videos-v${CACHE_VERSION}`;
const JS_CACHE = `ez2fix-js-v${CACHE_VERSION}`;
const CSS_CACHE = `ez2fix-css-v${CACHE_VERSION}`;
const THIRD_PARTY_CACHE = `ez2fix-third-party-v${CACHE_VERSION}`;
const RECAPTCHA_CACHE = `ez2fix-recaptcha-v${CACHE_VERSION}`;

// Critical resources to cache immediately - only cache existing resources
const CRITICAL_RESOURCES = [
  '/',
  '/services',
  '/service-areas',
  '/contact',
  '/booking',
  '/manifest.json'
];

// Static assets that can be cached
const STATIC_RESOURCES = [
  '/favicon.svg',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/apple-touch-icon.png'
];

// Network-first strategies for these paths
const NETWORK_FIRST = [
  '/api/',
  '/booking',
  '/contact'
];

// Cache-first strategies for static assets
const CACHE_FIRST = [
  '/assets/',
  'https://fonts.googleapis.com/',
  'https://fonts.gstatic.com/',
  'https://qjvikxuhqs1py0go.public.blob.vercel-storage.com/'
];

self.addEventListener('install', event => {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(cache => {
        return cache.addAll(CRITICAL_RESOURCES).catch(err => {
          console.warn('Failed to cache some critical resources:', err);
          return Promise.resolve();
        });
      }),
      caches.open(STATIC_CACHE).then(cache => {
        return cache.addAll(STATIC_RESOURCES).catch(err => {
          console.warn('Failed to cache some static resources:', err);
          return Promise.resolve();
        });
      })
    ]).then(() => {
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      // Clean up old caches
      caches.keys().then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (![CACHE_NAME, STATIC_CACHE, IMAGE_CACHE, VIDEO_CACHE, JS_CACHE, CSS_CACHE, THIRD_PARTY_CACHE, RECAPTCHA_CACHE].includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      }),
      // Take control immediately
      self.clients.claim()
    ])
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip Chrome extension requests
  if (url.protocol === 'chrome-extension:') {
    return;
  }

  // Network-first strategy for dynamic content
  if (NETWORK_FIRST.some(path => url.pathname.startsWith(path))) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Handle images with dedicated cache
  if (request.destination === 'image' || url.pathname.match(/\.(jpg|jpeg|png|gif|webp|avif|svg)$/i)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE, 86400000)); // 24 hours
    return;
  }

  // Handle videos with dedicated cache
  if (request.destination === 'video' || url.pathname.match(/\.(mp4|webm|mov)$/i)) {
    event.respondWith(cacheFirst(request, VIDEO_CACHE, 604800000)); // 7 days
    return;
  }

  // Handle JavaScript files with dedicated cache
  if (request.destination === 'script' || url.pathname.match(/\.js$/i)) {
    event.respondWith(cacheFirst(request, JS_CACHE, 86400000)); // 24 hours
    return;
  }

  // Ultra-aggressive caching for third-party scripts to reduce execution time
  const thirdPartyDomains = [
    'www.googletagmanager.com',
    'www.gstatic.com',
    'scripts.clarity.ms',
    'maps.googleapis.com',
    'www.google.com',
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'googleads.g.doubleclick.net',
    'www.googleadservices.com',
    'pagead2.googlesyndication.com',
    'tpc.googlesyndication.com',
    'partner.googleadservices.com',
    'stats.g.doubleclick.net',
    'storage.googleapis.com',
    'c.bing.com',
    'dashboard.searchatlas.com',
    'sa.searchatlas.com'
  ];
  
  // Special handling for reCAPTCHA (772ms blocker)
  if (url.hostname.includes('gstatic.com') && url.pathname.includes('recaptcha')) {
    event.respondWith(cacheFirst(request, RECAPTCHA_CACHE, 1209600000)); // 14 days - very aggressive
    return;
  }
  
  if (thirdPartyDomains.some(domain => url.hostname.includes(domain))) {
    // Cache third-party scripts for much longer to prevent re-parsing
    event.respondWith(cacheFirst(request, THIRD_PARTY_CACHE, 1209600000)); // 14 days - ultra-aggressive
    return;
  }

  // Handle CSS files with dedicated cache
  if (request.destination === 'style' || url.pathname.match(/\.css$/i)) {
    event.respondWith(cacheFirst(request, CSS_CACHE, 86400000)); // 24 hours
    return;
  }

  // Cache-first strategy for static assets
  if (CACHE_FIRST.some(pattern => {
    if (pattern.startsWith('http')) {
      return url.href.startsWith(pattern);
    }
    return url.pathname.startsWith(pattern);
  })) {
    event.respondWith(cacheFirst(request, STATIC_CACHE, 3600000)); // 1 hour
    return;
  }

  // Default: stale-while-revalidate for HTML pages
  event.respondWith(staleWhileRevalidate(request));
});

// Network-first with cache fallback
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Enhanced cache-first with TTL and optimization
async function cacheFirst(request, cacheType = STATIC_CACHE, maxAge = 3600000) {
  const cache = await caches.open(cacheType);
  const cachedResponse = await cache.match(request);
  
  // Check if cached response is still fresh
  if (cachedResponse) {
    const cachedDate = cachedResponse.headers.get('sw-cache-date');
    if (cachedDate && (Date.now() - parseInt(cachedDate)) < maxAge) {
      return cachedResponse;
    }
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      // Clone response and add cache date
      const responseToCache = networkResponse.clone();
      const headers = new Headers(responseToCache.headers);
      headers.set('sw-cache-date', Date.now().toString());
      
      const cachedResponseInit = {
        status: responseToCache.status,
        statusText: responseToCache.statusText,
        headers: headers
      };
      
      const cachedResponseWithHeaders = new Response(
        await responseToCache.blob(), 
        cachedResponseInit
      );
      
      cache.put(request, cachedResponseWithHeaders);
    }
    return networkResponse;
  } catch (error) {
    // Return stale cached response if network fails
    if (cachedResponse) {
      return cachedResponse;
    }
    
    // Return offline fallback if available
    if (request.destination === 'document') {
      const offlinePage = await cache.match('/');
      if (offlinePage) {
        return offlinePage;
      }
    }
    throw error;
  }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidate(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);

  // Fetch in background to update cache
  const fetchPromise = fetch(request).then(networkResponse => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  }).catch(() => {
    // Network failed, return cached if available
    return cachedResponse;
  });

  // Return cached response immediately if available
  if (cachedResponse) {
    return cachedResponse;
  }

  // Otherwise wait for network
  return fetchPromise;
}

// Background sync for form submissions
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

async function doBackgroundSync() {
  // Handle any queued form submissions when back online
  const cache = await caches.open('form-cache');
  const requests = await cache.keys();
  
  for (const request of requests) {
    try {
      await fetch(request);
      await cache.delete(request);
    } catch (error) {
      console.log('Background sync failed for:', request.url);
    }
  }
}