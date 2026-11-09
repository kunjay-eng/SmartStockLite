/* SmartStock Lite wrapper service worker (v1.8) - เก็บเฉพาะตัวห่อหน้าจอ ไม่เก็บข้อมูลแอป */
const V = 'ssl-shell-v1.8';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== V).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  if (r.method !== 'GET' || u.origin !== location.origin) return;
  const isShell = r.mode === 'navigate' && (u.pathname.endsWith('/') || u.pathname.endsWith('/index.html'));
  if (isShell) {                                   // หน้าหลัก: เอาจากเน็ตก่อน ถ้าออฟไลน์ใช้ตัวที่เก็บไว้
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put('./index.html', cp)); return res; })
      .catch(() => caches.match('./index.html')));
    return;
  }
  if (r.mode === 'navigate') return;               // หน้าอื่น เช่น ocr-reader.html ใช้เน็ตตามปกติ
  e.respondWith(caches.match(r).then(m => m || fetch(r)));
});
