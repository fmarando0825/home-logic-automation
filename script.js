document.getElementById('year').textContent = new Date().getFullYear();
(() => {
  const slider = document.querySelector('.install-slider');
  if (!slider) return;
  const slides = [...slider.querySelectorAll('.install-slide')];
  const dotsWrap = slider.querySelector('.slider-dots');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  let index = 0;
  let timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'slider-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Show installation ${i + 1}`);
    dot.addEventListener('click', () => { show(i); restart(); });
    dotsWrap.appendChild(dot);
  });
  const dots = [...dotsWrap.children];

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle('active', n === index));
    dots.forEach((d, n) => d.classList.toggle('active', n === index));
  }
  function start() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timer = setInterval(() => show(index + 1), 4500);
  }
  function restart() { clearInterval(timer); start(); }

  prev.addEventListener('click', () => { show(index - 1); restart(); });
  next.addEventListener('click', () => { show(index + 1); restart(); });
  slider.addEventListener('mouseenter', () => clearInterval(timer));
  slider.addEventListener('mouseleave', start);
  slider.addEventListener('focusin', () => clearInterval(timer));
  slider.addEventListener('focusout', start);
  start();
})();

(() => {
  const root = document.querySelector('.top-showcase');
  if (!root) return;
  const slides = [...root.querySelectorAll('.showcase-slide')];
  const dotsWrap = root.querySelector('.showcase-dots');
  const prev = root.querySelector('.showcase-prev');
  const next = root.querySelector('.showcase-next');
  let index = 0, timer;

  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'showcase-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', `Show solution ${i + 1}`);
    dot.addEventListener('click', () => { show(i); restart(); });
    dotsWrap.appendChild(dot);
  });
  const dots = [...dotsWrap.children];

  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s,n) => s.classList.toggle('active', n === index));
    dots.forEach((d,n) => d.classList.toggle('active', n === index));
  }
  function start() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    clearInterval(timer);
    timer = setInterval(() => show(index + 1), 5000);
  }
  function restart(){ start(); }

  prev.addEventListener('click', () => { show(index - 1); restart(); });
  next.addEventListener('click', () => { show(index + 1); restart(); });
  root.addEventListener('mouseenter', () => clearInterval(timer));
  root.addEventListener('mouseleave', start);
  root.addEventListener('focusin', () => clearInterval(timer));
  root.addEventListener('focusout', start);
  start();
})();
