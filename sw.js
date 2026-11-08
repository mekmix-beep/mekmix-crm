// Service worker mínimo — não existe pra guardar nada em cache (os dados
// do CRM são sempre ao vivo, vindos do Supabase), só pra satisfazer o
// requisito do Chrome/Android de ter um service worker registrado com
// tratamento de "fetch" pra considerar o site instalável como app.
self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){
  e.respondWith(fetch(e.request));
});
