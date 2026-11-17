const CACHE_NAME = 'mi-pwa-cache-v1';
const urlsToCache = [
    const urlsToCache = [
    '/Memorama/',
    '/Memorama/index.html',
    '/Memorama/style.css',
    '/Memorama/app.js',
    '/Memorama/manifest.json',
    '/Memorama/icon-192.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});