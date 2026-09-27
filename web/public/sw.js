const CACHE_NAME = 'hcode-offline-v1';
const ASSET_MANIFEST = '/offline-assets.json';

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const manifestResponse = await fetch(ASSET_MANIFEST, { cache: 'no-store' });
    if (!manifestResponse.ok) throw new Error('Offline asset manifest is unavailable');
    const assets = await manifestResponse.json();
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(assets);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith('hcode-offline-') && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  event.respondWith((async () => {
    try {
      const response = await fetch(request);
      if (response.ok && response.type === 'basic') {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch {
      const cached = await caches.match(request, { ignoreSearch: request.mode === 'navigate' });
      if (cached) return cached;
      if (request.mode === 'navigate') {
        const home = await caches.match('/');
        if (home) return home;
      }
      return new Response('This item is not available offline yet.', {
        status: 503,
        headers: { 'Content-Type': 'text/plain; charset=utf-8' }
      });
    }
  })());
});
