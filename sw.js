// The Field Inverse beta has ended: clear the offline copy and step aside.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) await caches.delete(k);
    await self.registration.unregister();
    for (const c of await self.clients.matchAll({ type: 'window' })) { try { c.navigate(c.url); } catch (err) {} }
  })());
});
