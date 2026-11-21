/* ReolScan RC5.5 – offline-cache (kun statiske filer; ingen data). Ny version hentes automatisk. */
const CACHE='reolscan-rc55-v4';
const FILES=['./','./index.html','./faglig-hjaelp/Sikkerhed-paa-lageret.pdf','./pdfjs/pdf.min.js','./pdfjs/pdf.worker.min.js','./logo/reoler-as-logo-lys-baggrund.png','./logo/reoler-as-logo-moerk-baggrund.png','./logo/reoler-as-logo-original.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(f=>c.add(f).catch(()=>{})))).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET') return;
  const u=new URL(e.request.url);
  if(u.hostname.indexOf('adressevaelger')>=0) return;
  const store=r=>{ if(r&&r.ok&&(u.origin===location.origin||u.hostname==='cdnjs.cloudflare.com')){const cp=r.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));} return r; };
  const isApp = e.request.mode==='navigate' || u.pathname.endsWith('/') || u.pathname.endsWith('index.html');
  if(isApp){ // netværk først → altid nyeste app; cache hvis offline
    e.respondWith(fetch(e.request).then(store).catch(()=>caches.match(e.request,{ignoreSearch:true})||caches.match('./index.html')));
    return;
  }
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(store)));
});
