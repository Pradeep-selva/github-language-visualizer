var cacheName = "sgtoilet-cache-" + Date.now();
var filesToCache = [
  "/",
  "/index.html",
  "/global.css",
  "/build/bundle.css",
  "/build/bundle.js",
  "/build/bundle.js.map",
  "https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;800&display=swap",
  "https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js",
  "https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"
];
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.map(function (thisCacheName) {
          if (thisCacheName !== cacheName) {
            return caches.delete(thisCacheName);
          }
        })
      );
    })
  );
});
self.addEventListener("fetch", (e) => {
  e.respondWith(
    (async function () {
      const response = await caches.match(e.request);
      return response || fetch(e.request);
    })()
  );
});
