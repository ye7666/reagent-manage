const CACHE_NAME = "reagent‑pwa‑v1";
const files=["./","./index.html","./manifest.webmanifest"];

self.addEventListener("install",e=>{
e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(files)).then(()=>self.skipWaiting()))
})
self.addEventListener("activate",e=>{
e.waitUntil(self.clients.claim())
})
self.addEventListener("fetch",e=>{
e.respondWith(fetch(e.request).catch(()=>caches.match(e.request)))
})