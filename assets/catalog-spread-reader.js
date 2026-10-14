(() => {
  const total = 32;
  const leftImg = document.getElementById('spreadLeftImage');
  const rightImg = document.getElementById('spreadRightImage');
  const leftNum = document.getElementById('spreadLeftNumber');
  const rightNum = document.getElementById('spreadRightNumber');
  const leftBtn = document.getElementById('spreadLeft');
  const rightBtn = document.getElementById('spreadRight');
  const book = document.getElementById('spreadBook');
  const status = document.getElementById('spreadStatus');
  const prev = document.getElementById('spreadPrev');
  const next = document.getElementById('spreadNext');
  const pageBtns = Array.from(document.querySelectorAll('.spread-page-btn'));
  if (!book || !leftImg || !rightImg) return;

  let leftPage = 1;
  let busy = false;
  const srcFor = n => `assets/catalog-pages/page-${String(n).padStart(2,'0')}.webp`;
  const normalizeLeft = page => {
    const p = Math.max(1, Math.min(total, Number(page) || 1));
    if (p === total) return total - 1;
    return p % 2 === 0 ? p - 1 : p;
  };

  function setButtons() {
    pageBtns.forEach(btn => {
      const p = Number(btn.dataset.page);
      const active = p === leftPage || p === leftPage + 1;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-current', active ? 'page' : 'false');
    });
    prev.disabled = leftPage <= 1;
    next.disabled = leftPage >= total - 1;
  }

  function updateSpread(newLeft) {
    leftPage = normalizeLeft(newLeft);
    const rightPage = Math.min(total, leftPage + 1);
    leftImg.src = srcFor(leftPage);
    rightImg.src = srcFor(rightPage);
    leftImg.alt = `Catalogo Prodotti 2026 pagina ${leftPage}`;
    rightImg.alt = `Catalogo Prodotti 2026 pagina ${rightPage}`;
    leftNum.textContent = leftPage;
    rightNum.textContent = rightPage;
    leftBtn.dataset.page = leftPage;
    rightBtn.dataset.page = rightPage;
    leftBtn.setAttribute('aria-label', `Apri pagina ${leftPage}`);
    rightBtn.setAttribute('aria-label', `Apri pagina ${rightPage}`);
    status.textContent = (document.documentElement.lang === 'en') ? `Pages ${leftPage}–${rightPage} of ${total}` : `Pagine ${leftPage}–${rightPage} di ${total}`;
    setButtons();
  }

  function turnTo(targetLeft, direction) {
    if (busy) return;
    const normalized = normalizeLeft(targetLeft);
    if (normalized === leftPage) return;
    busy = true;
    const out = direction > 0 ? 'spread-turn-out-next' : 'spread-turn-out-prev';
    const enter = direction > 0 ? 'spread-turn-in-next' : 'spread-turn-in-prev';
    book.classList.remove('spread-turn-out-next','spread-turn-out-prev','spread-turn-in-next','spread-turn-in-prev');
    book.classList.add(out);
    window.setTimeout(() => {
      updateSpread(normalized);
      book.classList.remove(out);
      book.classList.add(enter);
      window.setTimeout(() => {
        book.classList.remove(enter);
        busy = false;
      }, 480);
    }, 300);
  }

  prev.addEventListener('click', () => turnTo(leftPage - 2, -1));
  next.addEventListener('click', () => turnTo(leftPage + 2, 1));
  pageBtns.forEach(btn => btn.addEventListener('click', () => {
    const target = normalizeLeft(btn.dataset.page);
    turnTo(target, target > leftPage ? 1 : -1);
  }));

  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') turnTo(leftPage + 2, 1);
    if (e.key === 'ArrowLeft') turnTo(leftPage - 2, -1);
  });

  // Optional single-page zoom when a catalog page itself is clicked.
  const lightbox = document.getElementById('spreadLightbox');
  const lightImg = document.getElementById('spreadLightboxImage');
  const lightLabel = document.getElementById('spreadLightboxLabel');
  let lightPage = 1;
  function openLight(page) {
    lightPage = Math.max(1, Math.min(total, page));
    lightImg.src = srcFor(lightPage);
    lightLabel.textContent = (document.documentElement.lang === 'en') ? `Page ${lightPage} / ${total}` : `Pagina ${lightPage} / ${total}`;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden','false');
    document.body.classList.add('spread-modal-open');
  }
  function closeLight() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden','true');
    document.body.classList.remove('spread-modal-open');
  }
  leftBtn.addEventListener('click', () => openLight(leftPage));
  rightBtn.addEventListener('click', () => openLight(leftPage + 1));
  lightbox.querySelector('.spread-lightbox-close')?.addEventListener('click', closeLight);
  lightbox.querySelector('.spread-lightbox-nav.prev')?.addEventListener('click', () => {
    lightPage = Math.max(1, lightPage - 1); lightImg.src = srcFor(lightPage); lightLabel.textContent = (document.documentElement.lang === 'en') ? `Page ${lightPage} / ${total}` : `Pagina ${lightPage} / ${total}`;
  });
  lightbox.querySelector('.spread-lightbox-nav.next')?.addEventListener('click', () => {
    lightPage = Math.min(total, lightPage + 1); lightImg.src = srcFor(lightPage); lightLabel.textContent = (document.documentElement.lang === 'en') ? `Page ${lightPage} / ${total}` : `Pagina ${lightPage} / ${total}`;
  });
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLight(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLight(); });

  updateSpread(1);
})();

document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setTimeout(() => updateSpread(leftPage), 0)));
