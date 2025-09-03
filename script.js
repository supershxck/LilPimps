const qr = document.getElementById('qr');
const qrIn = document.getElementById('qrInput');

// Load from localStorage so images survive refresh
window.addEventListener('DOMContentLoaded', () => {
  if (localStorage.qr) qr.src = localStorage.qr;
});

// Change QR
qrIn.addEventListener('change', e => {
  const file = e.target.files[0];
  if (!file) return;
  const url = URL.createObjectURL(file);
  qr.src = url;
  localStorage.qr = url;
});

// DVD player logo animation
let x = 0;
let y = 0;
let xSpeed = 2;
let ySpeed = 2;

function animate() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;
  const qrWidth = qr.offsetWidth;
  const qrHeight = qr.offsetHeight;

  x += xSpeed;
  y += ySpeed;

  if (x + qrWidth >= screenWidth || x <= 0) {
    xSpeed *= -1;
  }

  if (y + qrHeight >= screenHeight || y <= 0) {
    ySpeed *= -1;
  }

  qr.style.left = `${x}px`;
  qr.style.top = `${y}px`;
  qr.style.transform = 'none'; // remove the original transform

  requestAnimationFrame(animate);
}

animate();
