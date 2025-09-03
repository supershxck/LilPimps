const bg   = document.getElementById('bg');
const qr   = document.getElementById('qr');
const bgIn = document.getElementById('bgInput');
const qrIn = document.getElementById('qrInput');

// Load from localStorage so images survive refresh
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.bg) bg.src = localStorage.bg;
  if (localStorage.qr) qr.src = localStorage.qr;
});

// Change background
bgIn.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  bg.src = url;
  localStorage.bg = url;
});

// Change QR
qrIn.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  qr.src = url;
  localStorage.qr = url;
});
