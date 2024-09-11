const CACHE_NAME = 'v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/assets/css/themeSwitch.css',
    '/assets/css/socials.css',
    '/assets/css/style.css',
    '/assets/css/mobile.css',
    '/assets/images/icons/a-name-logo.svg',
    // Add more static assets here...
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                if (response) {
                    return response; // return from cache
                }
                return fetch(event.request); // fetch from network if not in cache
            })
    );
});