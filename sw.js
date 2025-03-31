const CACHE_NAME = 'hyper-cache-v2';
const ASSETS = [
  'kharid.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// نصب Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

// استراتژی Cache-first
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});