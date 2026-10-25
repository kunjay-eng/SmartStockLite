// ใส่ลิงก์ Web App ของ Apps Script (ลงท้ายด้วย /exec) แล้ว commit
// ถ้าเว้นว่าง หน้าเว็บจะถามลิงก์ตอนเปิดครั้งแรกและจำไว้ในเครื่อง
window.SMARTSTOCK = {
  APP_URL: "https://script.google.com/macros/s/AKfycbyF-3mlCRml_2yGkKEkjiCNcCHWGQVvZ-Fbv3uRNZeXPsG-YTM_t7N58FqNhJY-IHCD/exec",
  // "frame" = แสดงในหน้าเต็มของแอป, "redirect" = เปิดลิงก์ตรง (ใช้เมื่อ frame ไม่ขึ้น)
  MODE: "frame"
};
