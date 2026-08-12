/* Sorana shared site scripts — extracted from index.html + support.html */

/* ===== Index page block 1 ===== */
(function() {
  'use strict';
  var toggle = document.getElementById('menuToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function() {
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      links.classList.toggle('open');
      toggle.textContent = expanded ? '☰' : '✕';
    });
  }
  var themeBtn = document.getElementById('themeToggle');
  var stored = localStorage.getItem('theme');
  var prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  var theme = stored || (prefersLight ? 'light' : 'dark');
  document.documentElement.setAttribute('data-theme', theme);
  if (themeBtn) {
    themeBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
    themeBtn.addEventListener('click', function() {
      var current = document.documentElement.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      themeBtn.textContent = next === 'dark' ? '🌙' : '☀️';
    });
  }
  var toggleBtn = document.getElementById('toggleFeatures');
  var moreFeatures = document.getElementById('moreFeatures');
  if (toggleBtn && moreFeatures) {
    toggleBtn.addEventListener('click', function() {
      var visible = moreFeatures.style.display !== 'none';
      moreFeatures.style.display = visible ? 'none' : 'grid';
      toggleBtn.textContent = visible ? '10 more features ↓' : 'Show fewer ↑';
    });
  }

  /* Nav shadow on scroll */
  var nav = document.querySelector('nav');
  if (nav) {
    var onScroll = function() { nav.classList.toggle('scrolled', window.scrollY > 10); };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Active nav link highlight */
  var navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');
  if (navAnchors.length && 'IntersectionObserver' in window) {
    var sectionMap = {};
    navAnchors.forEach(function(a) { sectionMap[a.getAttribute('href').slice(1)] = a; });
    var activeObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var link = sectionMap[entry.target.id];
        if (!link) return;
        if (entry.isIntersecting) {
          navAnchors.forEach(function(a) { a.classList.remove('active'); });
          link.classList.add('active');
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    Object.keys(sectionMap).forEach(function(id) {
      var el = document.getElementById(id);
      if (el) activeObserver.observe(el);
    });
  }

  /* Section reveal on scroll */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) { e.target.classList.add('revealed'); io.unobserve(e.target); }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.section, .showcase').forEach(function(el) {
      el.classList.add('reveal');
      io.observe(el);
    });
  }

  /* Back to top */
  var btt = document.getElementById('backToTop');
  if (btt) {
    window.addEventListener('scroll', function() {
      btt.classList.toggle('show', window.scrollY > 600);
    }, { passive: true });
    btt.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();

/* ===== Index page block 2 ===== */
(function() {
  'use strict';
  /* Counter animation for stat numbers */
  function animateCount(el, target, suffix) {
    suffix = suffix || '';
    var start = 0;
    var duration = 900;
    var startTime = null;
    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(start + (target - start) * eased) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  document.querySelectorAll('.stat-number').forEach(function(el) {
    var text = el.textContent;
    if (text === '∞' || text === '100%') { /* keep as-is */ }
    else if (/^\d+\+$/.test(text)) {
      var num = parseInt(text, 10);
      /* trigger when visible */
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            animateCount(el, num, '+');
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      observer.observe(el);
    }
  });
})();

/* ===== Index page block 3 ===== */
(function() {
  'use strict';
  /* Version pills - read VER_Sorana.txt so the version stays in sync automatically */
  var pills = document.querySelectorAll('.version-pill');
  if (!pills.length || !window.fetch) return;
  fetch('VER_Sorana.txt', { cache: 'no-cache' })
    .then(function(r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.text();
    })
    .then(function(txt) {
      var m = txt.trim().match(/^(\d+\.\d+\.\d+)/);
      if (!m) return;
      var v = 'v' + m[1];
      pills.forEach(function(p) { p.textContent = v; });
    })
    .catch(function() { /* fetch failed (e.g. file:// or offline) - keep the static fallbacks visible */ });
})();

/* ===== Testimonials band scrolling ===== */
(function() {
  'use strict';
  var band = document.querySelector('.testimonials-grid');
  if (!band) return;
  var prev = document.getElementById('testimonialPrev');
  var next = document.getElementById('testimonialNext');
  if (!prev || !next) return;
  var card = band.querySelector('.testimonial-card');
  var gap = parseFloat(getComputedStyle(band).gap) || 16;
  var step = function() { return (card ? card.offsetWidth : 340) + gap; };
  function updateArrows() {
    var max = band.scrollWidth - band.clientWidth;
    prev.disabled = band.scrollLeft <= 2;
    next.disabled = band.scrollLeft >= max - 2;
  }
  prev.addEventListener('click', function() {
    band.scrollBy({ left: -step(), behavior: 'smooth' });
  });
  next.addEventListener('click', function() {
    band.scrollBy({ left: step(), behavior: 'smooth' });
  });
  band.addEventListener('scroll', updateArrows, { passive: true });
  window.addEventListener('resize', updateArrows);
  updateArrows();
})();
