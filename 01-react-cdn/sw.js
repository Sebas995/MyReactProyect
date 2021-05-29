const CACHE_NAME = "v1_cache_sebas_p1_react";

const CACHE_ELEMENTS = [
    "./",
    "./favicon.ico",
    "https://unpkg.com/react@17/umd/react.production.min.js",
    "https://unpkg.com/react-dom@17/umd/react-dom.production.min.js",
    "https://unpkg.com/@babel/standalone/babel.min.js",
    //"./?umt_source=web_app_manifest",
    "./components/Contador.js",
    "./style.css"
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            cache.addAll(CACHE_ELEMENTS).then(() => {
                self.skipWaiting()
            }).catch(console.log)
        })
    );
});

self.addEventListener("activate", (e) => {

    const cacheWaitList = [CACHE_NAME];

    e.waitUntil(
       caches.keys().then((cachesNames) => {
           return Promise.all(cachesNames.map(cacheName => {
                return cacheWaitList.indexOf(cacheName) === -1 && caches.delete(cacheName);
           }));
       }).then(() => self.clients.claim())
    );
});

self.addEventListener("fetch", (e) => {
    // No usar el arrow function por que no se debe usar
    e.respondWith(
        caches.match(e.request).then(res => { 
            if(res) return res;
            return fetch(e.request);
        })
    );
});
