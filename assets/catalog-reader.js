
(() => {
  const lightbox = document.getElementById('catalogLightbox');
  const image = document.getElementById('catalogLightboxImage');
  const number = document.getElementById('catalogLightboxNumber');
  const flip = document.getElementById('catalogFlipPage');
  if (!lightbox || !image || !number || !flip) return;
  let current = 1;
  const total = 32;
  const srcFor = n => `assets/catalog-pages/page-${String(n).padStart(2,'0')}.webp`;
  function animateTo(n, direction = 1) {
    n = Math.max(1, Math.min(total, n));
    const outClass = direction >= 0 ? 'turn-out-left' : 'turn-out-right';
    const inClass = direction >= 0 ? 'turn-in-right' : 'turn-in-left';
    flip.classList.remove('turn-out-left','turn-out-right','turn-in-left','turn-in-right');
    flip.classList.add(outClass);
    setTimeout(() => {
      current = n;
      image.src = srcFor(current);
      image.alt = `Catalogo Prodotti 2026 - pagina ${current}`;
      number.textContent = `Pagina ${current} / ${total}`;
      flip.classList.remove(outClass);
      flip.classList.add(inClass);
      setTimeout(() => flip.classList.remove(inClass), 420);
    }, 250);
  }
  function openPage(n) {
    current = n;
    image.src = srcFor(current);
    number.textContent = `Pagina ${current} / ${total}`;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.classList.add('catalog-modal-open');
    flip.classList.add('turn-in-right');
    setTimeout(() => flip.classList.remove('turn-in-right'), 420);
  }
  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden','true');
    document.body.classList.remove('catalog-modal-open');
  }
  document.querySelectorAll('.book-page').forEach(btn => btn.addEventListener('click', () => openPage(Number(btn.dataset.page))));
  document.querySelector('.catalog-lightbox-close')?.addEventListener('click', close);
  document.querySelector('.catalog-lightbox-nav.prev')?.addEventListener('click', () => animateTo(current - 1, -1));
  document.querySelector('.catalog-lightbox-nav.next')?.addEventListener('click', () => animateTo(current + 1, 1));
  lightbox.addEventListener('click', e => { if (e.target === lightbox) close(); });
  document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowRight') animateTo(current + 1, 1);
    if (e.key === 'ArrowLeft') animateTo(current - 1, -1);
  });
  document.querySelectorAll('[data-jump-page]').forEach(btn => btn.addEventListener('click', () => {
    const n=Number(btn.dataset.jumpPage);
    const target=document.querySelector(`.book-page[data-page="${n}"]`);
    if (!target) return;
    target.scrollIntoView({behavior:'smooth',block:'center'});
    target.classList.add('page-focus');
    setTimeout(()=>target.classList.remove('page-focus'),900);
  }));
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('is-visible');
  }), {threshold:.12});
  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
})();
