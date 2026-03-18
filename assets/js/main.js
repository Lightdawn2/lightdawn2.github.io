/* ============================================================
   PORTFOLIO — Franco Cortés
   main.js
   ============================================================ */

/* ── Custom Cursor ── */
const cursor = document.getElementById('cursor');
const ring   = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx + 'px';
  cursor.style.top  = my + 'px';
});

function animateRing() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top  = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .btn, .tag, .cert-card, .skill-card, .project-card').forEach(el => {
  el.addEventListener('mouseenter', () => {
    ring.style.transform = 'translate(-50%,-50%) scale(1.8)';
    ring.style.opacity   = '0.3';
  });
  el.addEventListener('mouseleave', () => {
    ring.style.transform = 'translate(-50%,-50%) scale(1)';
    ring.style.opacity   = '0.6';
  });
});

/* ── Scroll Reveal ── */
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.01, rootMargin: '0px 0px -20px 0px' });

revealEls.forEach(el => observer.observe(el));

// Fallback para file:// protocol
setTimeout(() => {
  revealEls.forEach(el => el.classList.add('visible'));
}, 1200);

/* ── Terminal Typing Effect ── */
document.querySelectorAll('.t-cmd').forEach((line, i) => {
  const text = line.textContent;
  line.textContent = '';
  setTimeout(() => {
    let j = 0;
    const interval = setInterval(() => {
      line.textContent += text[j++];
      if (j >= text.length) clearInterval(interval);
    }, 40);
  }, 800 + i * 300);
});

/* ── Active Nav Link on Scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.style.color = link.getAttribute('href') === `#${current}`
      ? 'var(--accent)'
      : 'var(--muted)';
  });
});
