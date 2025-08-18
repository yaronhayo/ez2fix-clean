// Service Worker for Ez2Fix - Ultra Performance Optimization
const CACHE_NAME = 'ez2fix-v1.1.0-performance';
const STATIC_CACHE = 'ez2fix-static-v1.1.0-performance';
const IMAGE_CACHE = 'ez2fix-images-v1.1.0';
const VIDEO_CACHE = 'ez2fix-videos-v1.1.0';

// Critical resources to cache immediately
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
        return cache.addAll(CRITICAL_RESOURCES);
      }),
      caches.open(STATIC_CACHE).then(cache => {
        return cache.addAll(STATIC_RESOURCES);
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
            if (cacheName !== CACHE_NAME && cacheName !== STATIC_CACHE) {
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