// Ultra-minimal Service Worker - Performance First
const CACHE_VERSION = '2.0.0-minimal';
const CACHE_NAME = `ez2fix-minimal-v${CACHE_VERSION}`;

// Only cache critical homepage resources
const CRITICAL_RESOURCES = [
  '/',
  '/images/ez2fix-garage-door-repair.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(CRITICAL_RESOURCES))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(cacheNames =>
        Promise.all(
          cacheNames.map(cacheName =>
            cacheName !== CACHE_NAME ? caches.delete(cacheName) : null
          ).filter(Boolean)
        )
      )
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests and external requests
  if (request.method !== 'GET' || url.origin !== location.origin) return;

  // Only cache homepage and critical images
  if (url.pathname === '/' || url.pathname === '/images/ez2fix-garage-door-repair.jpg') {
    event.respondWith(
      caches.match(request)
        .then(cached => cached || fetch(request))
    );
  }
  // All other requests go directly to network for maximum speed
});