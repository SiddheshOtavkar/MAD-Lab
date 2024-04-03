
self.addEventListener('install', function (event) {
    console.log('Service Worker: Installing...');
    event.waitUntil(
        caches.open('v1').then(function (cache) {
            console.log('Opened cache');
            return cache.addAll([
                '/index.html',
                '/css/style.css',
                '/js/main.js'
            ]);
        })
    );
});

self.addEventListener('activate', function (event) {
    console.log('Activating new service worker...');

    var cacheWhitelist = ['v1'];

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(
                cacheNames.map(function (cacheName) {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        console.log('Service Worker: Clearing old cache...');
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    console.log('Fetch event for ', event.request.url);
    event.respondWith(
        caches.match(event.request).then(function (response) {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
