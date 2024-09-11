const CACHE_NAME = 'offline-cache-v1';
const OFFLINE_URL = '/offline.html';

const urlsToCache = [
    OFFLINE_URL,
    '/assets/css/style.css',
    '/assets/images/icons/a-name-logo.svg',
    '/assets/images/offline-image.svg',  // Ensure your offline image is cached
    '/assets/js/main.js'
];

// Install event: caching the offline page and other assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch event: serve offline page if fetch fails
self.addEventListener('fetch', event => {
    event.respondWith(
        fetch(event.request).catch(() => {
            return caches.match(OFFLINE_URL);
        })
    );
});
