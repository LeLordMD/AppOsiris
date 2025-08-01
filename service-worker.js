self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('sis-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/service-worker.js',
        '/icons/icon-192.png',
        '/icons/icon-512.png'
        // ajoute d'autres fichiers si besoin
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
