# SmartStock Lite - GitHub Wrapper (PWA) v1.1
ตัวห่อหุ้ม Web App บน GitHub Pages ให้ติดตั้งไอคอนบนหน้าจอหลักมือถือได้

## ติดตั้ง
1. สร้าง repo ใหม่บน GitHub แล้วอัปโหลดทุกไฟล์ในโฟลเดอร์นี้ไว้ที่ root (รวม .nojekyll และ icons/)
2. Settings > Pages > Deploy from a branch > main / (root)
3. เปิด https://<ชื่อผู้ใช้>.github.io/<ชื่อ repo>/ บนมือถือ แล้ววางลิงก์ /exec ของ Apps Script (หรือใส่ใน config.js)
4. Android: กด "ติดตั้งแอปลงหน้าจอหลัก" / iPhone: Safari > แชร์ > เพิ่มไปยังหน้าจอโฮม

## ข้อควรรู้
- ต้อง Deploy Code.gs เวอร์ชัน v1.1 ขึ้นไป (เปิดอนุญาตให้ฝังในหน้าเว็บ) และกด Deploy > Manage deployments > New version
- ถ้า Web App ตั้งเป็น "Only myself" Google อาจไม่ให้ล็อกอินใน frame: ตั้ง MODE เป็น "redirect" ใน config.js หรือกดปุ่ม "เปิดในเบราว์เซอร์"
