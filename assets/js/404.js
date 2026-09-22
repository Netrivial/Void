// ====== ЧЁРНАЯ ДЫРА: АНИМАЦИЯ И ЧАСТИЦЫ ======
const canvas = document.getElementById('blackhole-canvas');
const ctx = canvas.getContext('2d');

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let dpr = Math.min(window.devicePixelRatio || 1, 2);
let W, H, cx, cy, R;

let frontCanvas, fctx;

function resize() {
  const w = window.innerWidth;
  const h = window.innerHeight;
  W = canvas.width = Math.floor(w * dpr);
  H = canvas.height = Math.floor(h * dpr);
  canvas.style.width = w + 'px';
  canvas.style.height = h + 'px';
  cx = W / 2;
  cy = H / 2;
  R = Math.min(W, H) * 0.11;

  if (!frontCanvas) {
    frontCanvas = document.createElement('canvas');
    fctx = frontCanvas.getContext('2d');
  }
  frontCanvas.width = W;
  frontCanvas.height = H;
}
window.addEventListener('resize', resize);
resize();

const particles = [];
const PARTICLE_COUNT = window.innerWidth < 700 ? 120 : 220;

function spawnParticle(initial) {
  const angle = Math.random() * Math.PI * 2;
  const dist = initial
    ? R * (1.3 + Math.random() * 3.5)
    : R * (3 + Math.random() * 2.5);
  return {
    angle,
    dist,
    baseDist: dist,
    angularSpeed: 0.0009 + Math.random() * 0.0022,
    radialSpeed: 12 + Math.random() * 35,
    size: (0.6 + Math.random() * 1.6) * dpr,
    color: Math.random() < 0.55 ? [255, 42, 42] : [255, 100, 130],
  };
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(spawnParticle(true));

function renderFrontDisk(pulseAmount) {
  fctx.clearRect(0, 0, W, H);

  fctx.save();
  fctx.translate(cx, cy);
  fctx.scale(1, 0.30);

  const frontGrad = fctx.createRadialGradient(0, 0, R * 1.05, 0, 0, R * 2.4);
  frontGrad.addColorStop(0.00, 'rgba(255, 42, 42, 0)');
  frontGrad.addColorStop(0.18, `rgba(255, 130, 160, ${0.55 + pulseAmount * 0.3})`);
  frontGrad.addColorStop(0.45, `rgba(255, 210, 225, ${0.85 + pulseAmount * 0.15})`);
  frontGrad.addColorStop(0.75, `rgba(255, 100, 130, ${0.45 + pulseAmount * 0.2})`);
  frontGrad.addColorStop(1.00, 'rgba(255, 42, 42, 0)');
  fctx.fillStyle = frontGrad;

  fctx.beginPath();
  fctx.arc(0, 0, R * 2.4, 0, Math.PI);
  fctx.lineTo(-R * 2.4, 0);
  fctx.closePath();
  fctx.fill();

  fctx.restore();

  fctx.globalCompositeOperation = 'destination-in';
  const topFade = fctx.createLinearGradient(0, cy - R * 0.05, 0, cy + R * 0.55);
  topFade.addColorStop(0.00, 'rgba(0, 0, 0, 0)');
  topFade.addColorStop(0.35, 'rgba(0, 0, 0, 0.35)');
  topFade.addColorStop(0.70, 'rgba(0, 0, 0, 0.80)');
  topFade.addColorStop(1.00, 'rgba(0, 0, 0, 1)');
  fctx.fillStyle = topFade;
  fctx.fillRect(0, 0, W, H);
  fctx.globalCompositeOperation = 'source-over';

  return frontCanvas;
}

function drawStatic() {
  ctx.clearRect(0, 0, W, H);

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(1, 0.30);

  const diskInner = R * 1.05;
  const diskOuter = R * 3.2;

  const diskGrad = ctx.createRadialGradient(0, 0, diskInner, 0, 0, diskOuter);
  diskGrad.addColorStop(0.00, 'rgba(255, 42, 42, 0)');
  diskGrad.addColorStop(0.08, 'rgba(255, 60, 90, 0.55)');
  diskGrad.addColorStop(0.28, 'rgba(255, 130, 160, 0.85)');
  diskGrad.addColorStop(0.48, 'rgba(255, 200, 215, 0.75)');
  diskGrad.addColorStop(0.68, 'rgba(255, 110, 140, 0.55)');
  diskGrad.addColorStop(0.88, 'rgba(255, 60, 90, 0.28)');
  diskGrad.addColorStop(1.00, 'rgba(255, 42, 42, 0)');
  ctx.fillStyle = diskGrad;
  ctx.beginPath();
  ctx.arc(0, 0, diskOuter, 0, Math.PI * 2);
  ctx.fill();

  const doppler = ctx.createLinearGradient(-diskOuter, 0, diskOuter, 0);
  doppler.addColorStop(0.00, 'rgba(255, 235, 240, 0.55)');
  doppler.addColorStop(0.35, 'rgba(255, 180, 195, 0.22)');
  doppler.addColorStop(0.65, 'rgba(255, 120, 140, 0)');
  doppler.addColorStop(1.00, 'rgba(255, 42, 42, 0)');
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = doppler;
  ctx.beginPath();
  ctx.arc(0, 0, diskOuter, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';

  ctx.restore();

  ctx.beginPath();
  ctx.arc(cx, cy, R * 0.85, 0, Math.PI * 2);
  ctx.fillStyle = '#000';
  ctx.fill();

  const photon = ctx.createRadialGradient(cx, cy, R * 0.78, cx, cy, R * 1.12);
  photon.addColorStop(0.00, 'rgba(255, 42, 42, 0)');
  photon.addColorStop(0.22, 'rgba(255, 130, 160, 0.4)');
  photon.addColorStop(0.50, 'rgba(255, 228, 236, 0.92)');
  photon.addColorStop(0.72, 'rgba(255, 100, 130, 0.72)');
  photon.addColorStop(1.00, 'rgba(255, 42, 42, 0)');
  ctx.fillStyle = photon;
  ctx.beginPath();
  ctx.arc(cx, cy, R * 1.12, 0, Math.PI * 2);
  ctx.fill();

  const ready = renderFrontDisk(0);
  ctx.drawImage(ready, 0, 0);

  const rim = ctx.createRadialGradient(cx, cy, R * 0.78, cx, cy, R * 1.1);
  rim.addColorStop(0, 'rgba(255, 42, 42, 0)');
  rim.addColorStop(0.72, 'rgba(255, 110, 140, 0.35)');
  rim.addColorStop(0.92, 'rgba(255, 42, 42, 0.22)');
  rim.addColorStop(1, 'rgba(255, 42, 42, 0)');
  ctx.fillStyle = rim;
  ctx.beginPath();
  ctx.arc(cx, cy, R * 1.1, 0, Math.PI * 2);
  ctx.fill();
}

let lastT = performance.now();
let pulse = 0;

function frame(t) {
  const dt = Math.min(t - lastT, 50);
  lastT = t;
  const dtSec = dt / 1000;

  pulse *= 0.94;

  ctx.clearRect(0, 0, W, H);

  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(1, 0.30);

  const diskInner = R * 1.05;
  const diskOuter = R * 3.2;

  const diskGrad = ctx.createRadialGradient(0, 0, diskInner, 0, 0, diskOuter);
  diskGrad.addColorStop(0.00, 'rgba(255, 42, 42, 0)');
  diskGrad.addColorStop(0.08, `rgba(255, 60, 90, ${0.55 + pulse * 0.25})`);
  diskGrad.addColorStop(0.28, `rgba(255, 130, 160, ${0.85 + pulse * 0.15})`);
  diskGrad.addColorStop(0.48, `rgba(255, 200, 215, ${0.75 + pulse * 0.2})`);
  diskGrad.addColorStop(0.68, `rgba(255, 110, 140, ${0.55 + pulse * 0.2})`);
  diskGrad.addColorStop(0.88, `rgba(255, 60, 90, ${0.28 + pulse * 0.15})`);
  diskGrad.addColorStop(1.00, 'rgba(255, 42, 42, 0)');
  ctx.fillStyle = diskGrad;
  ctx.beginPath();
  ctx.arc(0, 0, diskOuter, 0, Math.PI * 2);
  ctx.fill();

  const doppler = ctx.createLinearGradient(-diskOuter, 0, diskOuter, 0);
  doppler.addColorStop(0.00, `rgba(255, 235, 240, ${0.55 + pulse * 0.3})`);
  doppler.addColorStop(0.35, `rgba(255, 180, 195, ${0.22 + pulse * 0.15})`);
  doppler.addColorStop(0.65, 'rgba(255, 120, 140, 0)');
  doppler.addColorStop(1.00, 'rgba(255, 42, 42, 0)');
  ctx.globalCompositeOperation = 'screen';
  ctx.fillStyle = doppler;
  ctx.beginPath();
  ctx.arc(0, 0, diskOuter, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';

  ctx.restore();

  for (const p of particles) {
    const closeness = Math.max(0.35, p.baseDist / p.dist);
    p.angle += p.angularSpeed * closeness * dt;
    p.dist -= p.radialSpeed * closeness * dtSec;

    if (p.dist < R * 1.05) {
      Object.assign(p, spawnParticle(false));
      continue;
    }

    const appear = Math.min(1, (p.baseDist - p.dist) / (p.baseDist * 0.6));
    const alpha = Math.max(0.05, appear);

    const x = cx + Math.cos(p.angle) * p.dist;
    const y = cy + Math.sin(p.angle) * p.dist * 0.30;

    const [r, g, b] = p.color;
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
    ctx.beginPath();
    ctx.arc(x, y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }

  ctx.beginPath();
  ctx.arc(cx, cy, R * 0.85, 0, Math.PI * 2);
  ctx.fillStyle = '#000';
  ctx.fill();

  const photonOuter = R * (1.12 + pulse * 0.1);
  const photon = ctx.createRadialGradient(cx, cy, R * 0.78, cx, cy, photonOuter);
  photon.addColorStop(0.00, 'rgba(255, 42, 42, 0)');
  photon.addColorStop(0.22, `rgba(255, 130, 160, ${0.40 + pulse * 0.25})`);
  photon.addColorStop(0.50, `rgba(255, 228, 236, ${0.92 + pulse * 0.08})`);
  photon.addColorStop(0.72, `rgba(255, 100, 130, ${0.72 + pulse * 0.2})`);
  photon.addColorStop(1.00, 'rgba(255, 42, 42, 0)');
  ctx.fillStyle = photon;
  ctx.beginPath();
  ctx.arc(cx, cy, photonOuter, 0, Math.PI * 2);
  ctx.fill();

  const readyFront = renderFrontDisk(pulse);
  ctx.drawImage(readyFront, 0, 0);

  const rim = ctx.createRadialGradient(cx, cy, R * 0.78, cx, cy, R * (1.1 + pulse * 0.15));
  rim.addColorStop(0, 'rgba(255, 42, 42, 0)');
  rim.addColorStop(0.72, `rgba(255, 110, 140, ${0.35 + pulse * 0.25})`);
  rim.addColorStop(0.92, `rgba(255, 42, 42, ${0.22 + pulse * 0.2})`);
  rim.addColorStop(1, 'rgba(255, 42, 42, 0)');
  ctx.fillStyle = rim;
  ctx.beginPath();
  ctx.arc(cx, cy, R * (1.1 + pulse * 0.15), 0, Math.PI * 2);
  ctx.fill();

  requestAnimationFrame(frame);
}

if (prefersReducedMotion) {
  drawStatic();
} else {
  requestAnimationFrame(frame);
}

const jokes = [
  "Эта страница ушла в сингулярность. Обещала вернуться",
  "Мы отправили запрос в параллельную вселенную. Ответа нет",
  "Сюда даже свет не доходит. Что уж о странице говорить",
  "Простите, страница решила стать ботом и ушла в Telegram"
];

let toastTimeout = null;

function showJoke(x, y) {
  let toast = document.getElementById('void-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'void-toast';
    toast.className = 'void-toast';
    document.body.appendChild(toast);
  }

  const text = jokes[Math.floor(Math.random() * jokes.length)];
  toast.textContent = text;

  const maxX = window.innerWidth - 40;
  const maxY = window.innerHeight - 40;
  toast.style.left = Math.min(x + 16, maxX) + 'px';
  toast.style.top = Math.min(y + 16, maxY) + 'px';

  toast.classList.remove('void-toast--visible');
  void toast.offsetWidth;
  toast.classList.add('void-toast--visible');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('void-toast--visible');
  }, 3200);

  pulse = 1;
}

canvas.addEventListener('click', (e) => {
  const rect = canvas.getBoundingClientRect();
  const mx = (e.clientX - rect.left) * dpr;
  const my = (e.clientY - rect.top) * dpr;
  const dx = (mx - cx) / (R * 2.2);
  const dy = (my - cy) / (R * 1.35);
  const inside = dx * dx + dy * dy <= 1;

  if (inside) {
    showJoke(e.clientX, e.clientY);
  }
});