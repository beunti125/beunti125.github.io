/* Offline-Speicher der App-Dateien. Es werden keine Nutzerdaten übertragen oder gespeichert.
   Strategie: immer zuerst frisch aus dem Netz laden, nur offline die gespeicherte Kopie nehmen. */
const CACHE='proud-aging-v45';
const FILES=['./','index.html','styles.css','i18n.js','app.js','manifest.webmanifest','fonts/manrope-latin-wght-normal.woff2','fonts/manrope-latin-ext-wght-normal.woff2','icons/icon-192.png','icons/icon-512.png','icons/maskable-512.png','icons/apple-touch-icon.png','icons/favicon.png','stones/base.webp','stones/sleep.webp','stones/mood.webp','stones/hot.webp'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES.map(f=>new Request(f,{cache:'reload'})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const u=new URL(e.request.url);
  if(e.request.method!=='GET'||u.origin!==location.origin)return;
  if(/\.(woff2|png|webp)$/.test(u.pathname)){e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request)));return;}
  e.respondWith(fetch(e.request,{cache:'no-cache'}).then(res=>{if(res.ok){const c=res.clone();caches.open(CACHE).then(ca=>ca.put(e.request,c));}return res;})
    .catch(()=>caches.match(e.request,{ignoreSearch:true}).then(r=>r||caches.match('index.html'))));
});
