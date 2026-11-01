const CACHE='mat-no-tempo-v3';
const ARQUIVOS=['./','index.html','manifest.webmanifest','icone-192.png','icone-512.png','icone-maskable.png'];
self.addEventListener('install',e=>{ e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ARQUIVOS))); self.skipWaiting(); });
self.addEventListener('activate',e=>{ e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k))))); self.clients.claim(); });
// Rede primeiro: sempre tenta buscar a versão nova; o cache só entra sem internet.
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  e.respondWith(fetch(e.request).then(resp=>{
    if(resp&&resp.ok){ const copia=resp.clone(); caches.open(CACHE).then(c=>c.put(e.request,copia)); }
    return resp;
  }).catch(()=>caches.match(e.request).then(r=>r||caches.match('index.html'))));
});
