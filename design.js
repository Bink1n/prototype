// ============================================================
//  SHORTCUT'S SKIN CARE SPA — DESIGN SYSTEM JS
//  Animations, micro-interactions, UI effects
// ============================================================

const Design = {

  // ── RIPPLE EFFECT on buttons ─────────────────────────────
  initRipple() {
    document.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn, .nav-btn, .ar-svc-btn, .svc-card, .role-tab');
      if (!btn) return;
      const existing = btn.querySelector('.ripple');
      if (existing) existing.remove();

      const circle = document.createElement('span');
      const diameter = Math.max(btn.clientWidth, btn.clientHeight);
      const rect = btn.getBoundingClientRect();
      circle.className = 'ripple';
      circle.style.cssText = `
        position:absolute; border-radius:50%; pointer-events:none;
        width:${diameter}px; height:${diameter}px;
        left:${e.clientX - rect.left - diameter / 2}px;
        top:${e.clientY - rect.top - diameter / 2}px;
        background:rgba(255,255,255,0.25);
        transform:scale(0); animation:rippleAnim .55s ease-out forwards;
        z-index:9999;
      `;
      btn.style.position = btn.style.position || 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(circle);
      setTimeout(() => circle.remove(), 600);
    });

    // Inject ripple keyframe
    if (!document.getElementById('rippleStyle')) {
      const s = document.createElement('style');
      s.id = 'rippleStyle';
      s.textContent = `@keyframes rippleAnim { to { transform:scale(2.5); opacity:0; } }`;
      document.head.appendChild(s);
    }
  },

  // ── SCROLL REVEAL ─────────────────────────────────────────
  initScrollReveal() {
    const style = document.createElement('style');
    style.textContent = `
      .reveal { opacity:0; transform:translateY(22px); transition:opacity .5s ease, transform .5s ease; }
      .reveal.visible { opacity:1; transform:none; }
      .reveal-left { opacity:0; transform:translateX(-22px); transition:opacity .5s ease, transform .5s ease; }
      .reveal-left.visible { opacity:1; transform:none; }
      .reveal-scale { opacity:0; transform:scale(.94); transition:opacity .45s ease, transform .45s ease; }
      .reveal-scale.visible { opacity:1; transform:scale(1); }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 60);
        }
      });
    }, { threshold: 0.1 });

    const observe = () => {
      document.querySelectorAll('.stat-card, .svc-card, .client-card, .appt-card, .card')
        .forEach(el => {
          if (!el.classList.contains('reveal')) {
            el.classList.add('reveal');
            observer.observe(el);
          }
        });
    };

    observe();
    // Re-observe when views change
    const mutObs = new MutationObserver(observe);
    mutObs.observe(document.body, { childList: true, subtree: true });
  },

  // ── ANIMATED COUNTER ──────────────────────────────────────
  animateCounter(el, target, prefix = '', suffix = '', duration = 900) {
    if (typeof target === 'string') {
      el.textContent = target; return;
    }
    const start = 0;
    const startTime = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * target);
      el.textContent = prefix + value.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  },

  // ── SKELETON LOADING ──────────────────────────────────────
  skeleton(container, rows = 3) {
    const style = document.createElement('style');
    style.id = 'skeletonStyle';
    if (!document.getElementById('skeletonStyle')) {
      style.textContent = `
        .skeleton-line {
          background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
          border-radius: 6px; height: 14px; margin-bottom: 10px;
        }
        .skeleton-line.wide  { width: 80%; }
        .skeleton-line.mid   { width: 55%; }
        .skeleton-line.short { width: 30%; }
        @keyframes shimmer { to { background-position: -200% 0; } }
      `;
      document.head.appendChild(style);
    }
    container.innerHTML = Array.from({ length: rows }, () => `
      <div style="padding:12px 0;border-bottom:1px solid #f0ede8">
        <div class="skeleton-line wide"></div>
        <div class="skeleton-line mid"></div>
        <div class="skeleton-line short"></div>
      </div>
    `).join('');
  },

  // ── SMOOTH PAGE TRANSITION ────────────────────────────────
  initPageTransition() {
    const overlay = document.createElement('div');
    overlay.id = 'pageTransition';
    overlay.style.cssText = `
      position:fixed; inset:0; background:var(--forest);
      z-index:9999; opacity:0; pointer-events:none;
      transition:opacity .25s ease;
    `;
    document.body.appendChild(overlay);
  },

  fadeToPage(url) {
    const overlay = document.getElementById('pageTransition');
    if (!overlay) { window.location.href = url; return; }
    overlay.style.pointerEvents = 'auto';
    overlay.style.opacity = '1';
    setTimeout(() => { window.location.href = url; }, 280);
  },

  // ── TOAST NOTIFICATIONS ───────────────────────────────────
  toast(msg, type = 'success') {
    const colors = {
      success: 'linear-gradient(135deg,#2d5a3d,#1e3d28)',
      error: 'linear-gradient(135deg,#7f1d1d,#991b1b)',
      info: 'linear-gradient(135deg,#1e3a5f,#1d4ed8)',
      warning: 'linear-gradient(135deg,#78350f,#b45309)',
    };
    const icons = { success: '✓', error: '✕', info: 'ℹ', warning: '⚠' };

    let t = document.getElementById('design-toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'design-toast';
      t.style.cssText = `
        position:fixed; bottom:28px; left:50%; transform:translateX(-50%) translateY(16px);
        padding:12px 22px; border-radius:30px; font-family:'Jost',sans-serif;
        font-size:13.5px; color:#fff; opacity:0; transition:all .3s cubic-bezier(.34,1.56,.64,1);
        z-index:9998; pointer-events:none; white-space:nowrap;
        box-shadow:0 8px 28px rgba(0,0,0,.22); display:flex; align-items:center; gap:8px;
      `;
      document.body.appendChild(t);
    }
    clearTimeout(t._timer);
    t.style.background = colors[type] || colors.success;
    t.innerHTML = `<span style="font-size:15px">${icons[type]}</span>${msg}`;
    t.style.opacity = '1';
    t.style.transform = 'translateX(-50%) translateY(0)';
    t._timer = setTimeout(() => {
      t.style.opacity = '0';
      t.style.transform = 'translateX(-50%) translateY(16px)';
    }, 3200);
  },

  // ── FLOATING LABEL INPUT ──────────────────────────────────
  initFloatingLabels() {
    document.querySelectorAll('.fg input, .fg select, .fg textarea').forEach(input => {
      const label = input.closest('.fg')?.querySelector('label');
      if (!label) return;
      input.addEventListener('focus', () => label.style.color = 'var(--sage)');
      input.addEventListener('blur', () => label.style.color = '');
    });
  },

  // ── PARTICLE BACKGROUND (login page) ─────────────────────
  initParticles(canvasId) {
    const canvas = document.getElementById(canvasId);
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let W, H, particles;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    function mkParticle() {
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        r: Math.random() * 2 + 0.5,
        vx: (Math.random() - .5) * 0.35,
        vy: (Math.random() - .5) * 0.35,
        opacity: Math.random() * 0.45 + 0.08,
      };
    }

    resize();
    particles = Array.from({ length: 60 }, mkParticle);
    window.addEventListener('resize', () => { resize(); particles = Array.from({ length: 60 }, mkParticle); });

    function draw() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(143,196,154,${p.opacity})`;
        ctx.fill();
      });

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(143,196,154,${0.06 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(draw);
    }
    draw();
  },

  // ── SIDEBAR HIGHLIGHT INDICATOR ───────────────────────────
  initSidebarIndicator() {
    const style = document.createElement('style');
    style.textContent = `
      .nav-btn { transition: color .2s, background .2s, padding-left .2s; }
      .nav-btn.active { padding-left: 26px; }
    `;
    document.head.appendChild(style);
  },

  // ── HOVER CARD TILT ───────────────────────────────────────
  initCardTilt() {
    document.querySelectorAll('.stat-card, .svc-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = `translateY(-3px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
        card.style.transition = 'transform .05s';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
        card.style.transition = 'transform .3s ease';
      });
    });
  },

  // ── SMOOTH SCROLL ─────────────────────────────────────────
  smoothScroll(el) {
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  // ── TYPEWRITER EFFECT ─────────────────────────────────────
  typewriter(el, text, speed = 55) {
    el.textContent = '';
    let i = 0;
    const timer = setInterval(() => {
      el.textContent += text[i++];
      if (i >= text.length) clearInterval(timer);
    }, speed);
  },

  // ── PULSE DOT (for live/active indicators) ────────────────
  pulseDot(color = '#16a34a') {
    const dot = document.createElement('span');
    dot.style.cssText = `
      display:inline-block; width:8px; height:8px; border-radius:50%;
      background:${color}; margin-right:6px; vertical-align:middle;
      animation:pulseDotAnim 2s ease-in-out infinite;
    `;
    if (!document.getElementById('pulseDotStyle')) {
      const s = document.createElement('style');
      s.id = 'pulseDotStyle';
      s.textContent = `@keyframes pulseDotAnim { 0%,100%{box-shadow:0 0 0 0 ${color}66} 50%{box-shadow:0 0 0 5px transparent} }`;
      document.head.appendChild(s);
    }
    return dot;
  },

  // ── INIT ALL ──────────────────────────────────────────────
  init() {
    this.initRipple();
    this.initScrollReveal();
    this.initPageTransition();
    this.initFloatingLabels();
    this.initSidebarIndicator();

    // Tilt after short delay (wait for DOM)
    setTimeout(() => this.initCardTilt(), 400);

    // Re-init tilt on view changes
    document.addEventListener('click', () => {
      setTimeout(() => this.initCardTilt(), 300);
    });

    console.log('%c✦ Shortcut\'s Spa Design System loaded', 'color:#8fc49a;font-family:serif;font-size:13px;');
  }
};

// Auto-init on DOMContentLoaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => Design.init());
} else {
  Design.init();
}

window.Design = Design;