
const $ = (s, root = document) => root.querySelector(s);
const $$ = (s, root = document) => Array.from(root.querySelectorAll(s));
const catalogProducts = window.catalogProducts || [];
const catalogCategories = window.catalogCategories || [];

const COPY = {
  it: {
    topNote: 'Catalogo 2026 · Selezione italiana · Specialità italiane autentiche',
    navHome: 'Home', navProducts: 'Prodotti', navQuality: 'Qualità', navCatalog: 'Catalogo', navTerritories: 'Territori', navDoppio: 'Doppio Senso', navContacts: 'Contatti',
    requestCatalog: 'Richiedi il catalogo →',
    heroEyebrow: 'Sapori autentici d’Italia',
    heroTitle: 'Tradizione<br>che unisce<span class="dot">.</span>',
    heroText: 'Una selezione di prodotti italiani tra pasta, riso, salumi, formaggi, miele, sottoli, tonno, tartufi, Doppio Senso e alcolici, scelti per qualità e autenticità.',
    heroBtnPrimary: 'Scopri i nostri prodotti →', heroBtnSecondary: 'Sfoglia il catalogo', heroPoint1: 'Prodotti autentici', heroPoint2: 'Tradizioni regionali', heroPoint3: 'Selezione di qualità',
    categoriesTitle: 'Le nostre categorie', allCategories: 'Tutte le categorie →', catPasta: 'Pasta', catRice: 'Riso', catColdCuts: 'Salumi', catCheese: 'Formaggi', catHoney: 'Miele', catPreserves: 'Sottoli', catTuna: 'Tonno', catTruffles: 'Tartufi', catDoppio: 'Doppio Senso', catDrinks: 'Alcolici',
    featuredEyebrow: 'Dal catalogo 2026', featuredTitle: 'Prodotti in evidenza', discoverAllProducts: 'Scopri tutti i prodotti →', medSea: 'Mar Mediterraneo',
    approachEyebrow: 'Il nostro approccio', brandKicker: 'Il nostro brand', approachTitle: 'Qualità che si riconosce.', approachText: 'Selezioniamo specialità italiane con attenzione alla qualità, alla provenienza e alla tradizione, costruendo un catalogo pensato per clienti professionali in Italia e all’estero.', exploreCatalog: 'Esplora il catalogo →',
    catalogEyebrow: 'Il nostro catalogo', catalogTitle: 'Un viaggio nel gusto italiano.', catalogText: 'Scopri la selezione completa di prodotti d’eccellenza, con categorie, codici, formati e descrizioni raccolti nel catalogo 2026.', browseCatalog: 'Sfoglia il catalogo →',
    rootsEyebrow: 'Le nostre radici', rootsTitle: 'Le regioni d’Italia', rootsText: 'Dai territori italiani nasce una selezione di specialità legate alla loro origine, alla tradizione e alla qualità delle materie prime.', discoverTerritories: 'Scopri i territori →',
    iconicBottleTitle: 'La bottiglia iconica.', formatsEyebrow: 'Formati disponibili', collectionTitle: 'La collezione completa.',
    collectionText: 'Doppio Senso nasce dalla collaborazione tra Noi, la Qualità e Distilleria Morelli, realtà artigianale italiana che produce alcolici dal 1911. Unisce il gusto tradizionale del rum all’innovazione del caramello salato. 35% vol.',
    distributionEyebrow: 'Distribuzione', distributionTitle: 'Dall’Italia, verso nuovi mercati.', distributionText: 'Spedizioni in Italia ed estero, da definire al momento dell’ordine in base alle esigenze del cliente. Consegne su Roma entro il GRA gratuite; per Lazio ed altre regioni si applica un costo variabile.', distributionMeta: 'Gruppo Noi, la qualità srl<br>Viale C. Sabatini, 161 · Roma', contactUs: 'Contattaci →', requestCatalogShort: 'Richiedi il catalogo',
    footerEyebrow: 'Catalogo 2026', footerTitle: 'Vuoi conoscere la selezione completa?', contactUsShort: 'Contattaci', footerBrandText: 'Specialità italiane, territori e tradizione in un catalogo digitale contemporaneo.', footerExplore: 'Esplora', footerCompany: 'Azienda',
    catalogHeroEyebrow: 'Il nostro catalogo', catalogHeroTitle: 'Catalogo Prodotti 2026.', catalogHeroText: 'Sfoglia il catalogo come un libro: due pagine alla volta, dalla copertina fino all’ultima pagina.', browseOnline: 'Sfoglia online', exploreProducts: 'Esplora i prodotti →', pagesLabel: 'Pagine',
    catalogPageEyebrow: 'Catalogo digitale', catalogPageTitle: 'Catalog Listing page', catalogPageTitleIt: 'Catalogo prodotti', catalogPageText: 'Esplora la selezione prodotti, filtra per categoria e apri le schede dettaglio.', productsPageEyebrow: 'La nostra selezione', productsPageTitle: 'Prodotti selezionati', productsPageText: 'Esplora le specialità italiane selezionate, organizzate per categoria, codice e origine. Apri ogni scheda per vedere immagini, descrizione e provenienza.',
    searchPlaceholder: 'Cerca per nome, codice o categoria…', quickFilterTitle: 'Filtra per categoria', allOption: 'Tutte le categorie', resultsLabel: 'risultati', resetFilters: 'Reset filtri', openProduct: 'Apri scheda prodotto', viewAll: 'Vedi tutti i prodotti',
    breadcrumbHome: 'Home', breadcrumbCatalog: 'Catalogo', backToCatalog: '← Torna ai prodotti', openPdf: 'Apri il PDF catalogo',
    codeLabel: 'Codice prodotto', sizeLabel: 'Formato / peso', regionLabel: 'Regione', originLabel: 'Origine', categoryLabel: 'Categoria', detailsLabel: 'Dettagli', relatedTitle: 'Prodotti correlati', productIntroTitle: 'Descrizione', galleryLabel: 'Galleria prodotto',
    emptyState: 'Nessun prodotto trovato. Prova con un’altra categoria o una ricerca diversa.'
  },
  en: {
    topNote: '2026 catalog · Italian selection · Authentic Italian specialties',
    navHome: 'Home', navProducts: 'Products', navQuality: 'Quality', navCatalog: 'Catalog', navTerritories: 'Territories', navDoppio: 'Doppio Senso', navContacts: 'Contacts',
    requestCatalog: 'Request the catalog →',
    heroEyebrow: 'Authentic flavors of Italy',
    heroTitle: 'Tradition<br>that unites<span class="dot">.</span>',
    heroText: 'A curated selection of Italian products including pasta, rice, cured meats, cheeses, honey, preserves, tuna, truffles, Doppio Senso and spirits, selected for quality and authenticity.',
    heroBtnPrimary: 'Discover our products →', heroBtnSecondary: 'Browse the catalog', heroPoint1: 'Authentic products', heroPoint2: 'Regional traditions', heroPoint3: 'Quality selection',
    categoriesTitle: 'Our categories', allCategories: 'All categories →', catPasta: 'Pasta', catRice: 'Rice', catColdCuts: 'Cured meats', catCheese: 'Cheeses', catHoney: 'Honey', catPreserves: 'Preserves', catTuna: 'Tuna', catTruffles: 'Truffles', catDoppio: 'Doppio Senso', catDrinks: 'Spirits',
    featuredEyebrow: 'From the 2026 catalog', featuredTitle: 'Featured products', discoverAllProducts: 'Discover all products →', medSea: 'Mediterranean Sea',
    approachEyebrow: 'Our approach', brandKicker: 'Our brand', approachTitle: 'Recognizable quality.', approachText: 'We select Italian specialties with attention to quality, provenance and tradition, building a catalog designed for professional customers in Italy and abroad.', exploreCatalog: 'Explore the catalog →',
    catalogEyebrow: 'Our catalog', catalogTitle: 'A journey into Italian taste.', catalogText: 'Discover the complete selection of premium products, with categories, codes, sizes and descriptions collected in the 2026 catalog.', browseCatalog: 'Browse the catalog →',
    rootsEyebrow: 'Our roots', rootsTitle: 'The regions of Italy', rootsText: 'From Italian territories comes a selection of specialties rooted in origin, tradition and the quality of raw materials.', discoverTerritories: 'Discover the territories →',
    iconicBottleTitle: 'The iconic bottle.', formatsEyebrow: 'Available formats', collectionTitle: 'The complete collection.',
    collectionText: 'Doppio Senso was born from the collaboration between Noi, la Qualità and Distilleria Morelli, an artisan producer of spirits since 1911. It combines the traditional taste of rum with the innovation of salted caramel. 35% vol.',
    distributionEyebrow: 'Distribution', distributionTitle: 'From Italy to new markets.', distributionText: 'Shipping in Italy and abroad is defined according to order needs. Deliveries within Rome inside the GRA are free; variable costs apply for Lazio and other regions.', distributionMeta: 'Gruppo Noi, la qualità srl<br>Viale C. Sabatini, 161 · Rome', contactUs: 'Contact us →', requestCatalogShort: 'Request the catalog',
    footerEyebrow: '2026 catalog', footerTitle: 'Would you like to know the complete selection?', contactUsShort: 'Contact us', footerBrandText: 'Italian specialties, territories and tradition in a contemporary digital catalog.', footerExplore: 'Explore', footerCompany: 'Company',
    catalogHeroEyebrow: 'Our catalog', catalogHeroTitle: '2026 Product Catalog.', catalogHeroText: 'Browse the catalog like a book: two pages at a time, from the cover to the final page.', browseOnline: 'Browse online', exploreProducts: 'Explore products →', pagesLabel: 'Pages',
    catalogPageEyebrow: 'Digital catalog', catalogPageTitle: 'Catalog listing page', catalogPageTitleIt: 'Product catalog', catalogPageText: 'Browse the product selection, filter by category and open the detail pages.', productsPageEyebrow: 'Our selection', productsPageTitle: 'Selected products', productsPageText: 'Explore selected Italian specialties organized by category, code and origin. Open each product page for images, description and provenance.',
    searchPlaceholder: 'Search by name, code or category…', quickFilterTitle: 'Filter by category', allOption: 'All categories', resultsLabel: 'results', resetFilters: 'Reset filters', openProduct: 'Open product page', viewAll: 'View all products',
    breadcrumbHome: 'Home', breadcrumbCatalog: 'Catalog', backToCatalog: '← Back to products', openPdf: 'Open catalog PDF',
    codeLabel: 'Product code', sizeLabel: 'Format / weight', regionLabel: 'Region', originLabel: 'Origin', categoryLabel: 'Category', detailsLabel: 'Details', relatedTitle: 'Related products', productIntroTitle: 'Description', galleryLabel: 'Product gallery',
    emptyState: 'No products found. Try a different category or search term.'
  }
};

let currentLang = localStorage.getItem('noiLang') || 'it';

function getCopy(key) {
  return (COPY[currentLang] && COPY[currentLang][key]) || (COPY.it && COPY.it[key]) || '';
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('noiLang', lang);
  document.documentElement.lang = lang;
  $$('[data-i18n]').forEach(el => { const key = el.dataset.i18n; if (getCopy(key)) el.textContent = getCopy(key); });
  $$('[data-i18n-html]').forEach(el => { const key = el.dataset.i18nHtml; if (getCopy(key)) el.innerHTML = getCopy(key); });
  $$('[data-i18n-placeholder]').forEach(el => { const key = el.dataset.i18nPlaceholder; if (getCopy(key)) el.setAttribute('placeholder', getCopy(key)); });
  $$('.lang-btn').forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  if ($('#catalogGrid')) { populateCategoryOptions(); renderCatalog(); }
  if ($('#productDetail')) renderProduct();
}

function initLanguageSwitch() {
  $$('.lang-btn').forEach(btn => btn.addEventListener('click', () => applyLanguage(btn.dataset.lang)));
  applyLanguage(currentLang);
}

function initMenu() {
  const menuBtn = $('.menu-btn');
  const nav = $('.main-nav');
  if (!menuBtn || !nav) return;
  menuBtn.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  $$('a', nav).forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }));
}

function initYear() {
  const year = $('[data-year]');
  if (year) year.textContent = new Date().getFullYear();
}

function initHeroSlider() {
  const slides = $$('.hero-slide');
  const dots = $$('.dot-btn');
  if (!slides.length) return;
  let currentSlide = 0;
  const showSlide = (index) => {
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
    dots.forEach((dot, i) => dot.classList.toggle('is-active', i === index));
    currentSlide = index;
  };
  if (slides.length > 1) {
    let timer = setInterval(() => showSlide((currentSlide + 1) % slides.length), 4500);
    dots.forEach((dot, i) => dot.addEventListener('click', () => {
      showSlide(i);
      clearInterval(timer);
      timer = setInterval(() => showSlide((currentSlide + 1) % slides.length), 4500);
    }));
  }
}

function getProductText(product, key) {
  const value = product[key];
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[currentLang] || value.it || '';
}

function slugify(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function geographyLabel(product) {
  const region = getProductText(product,'region').toLowerCase();
  const generic = ['italia','italy','mar mediterraneo','mediterranean sea'];
  return generic.includes(region) ? getCopy('originLabel') : getCopy('regionLabel');
}

function productCardMarkup(product) {
  return `
    <article class="catalog-card-item">
      <a class="catalog-card-link" href="product.html?slug=${product.slug}">
        <img src="${product.image}" alt="${getProductText(product,'name')}" loading="lazy" decoding="async">
      </a>
      <div class="catalog-card-body">
        <span class="catalog-card-tag">${product.category}</span>
        <h3><a href="product.html?slug=${product.slug}">${getProductText(product,'name')}</a></h3>
        <div class="catalog-card-meta"><span>${getCopy('codeLabel')}: ${product.code}</span><span>${product.size}</span></div>
        <p>${getProductText(product,'excerpt')}</p>
        <div class="catalog-card-footer">
          <span class="catalog-origin">${geographyLabel(product)}: ${getProductText(product,'region')}</span>
          <a class="text-link small-link" href="product.html?slug=${product.slug}">${getCopy('openProduct')}</a>
        </div>
      </div>
    </article>`;
}

function populateCategoryOptions() {
  const select = $('#catalogCategory');
  if (!select) return;
  const current = select.value || 'Tutti';
  select.innerHTML = catalogCategories.map(cat => `<option value="${cat}">${cat === 'Tutti' ? getCopy('allOption') : cat}</option>`).join('');
  select.value = catalogCategories.includes(current) ? current : 'Tutti';
}

function initCatalogFilters() {
  const search = $('#catalogSearch');
  const select = $('#catalogCategory');
  const reset = $('#resetFilters');
  if (!search || !select) return;
  search.addEventListener('input', renderCatalog);
  select.addEventListener('change', renderCatalog);
  reset && reset.addEventListener('click', () => {
    search.value = '';
    select.value = 'Tutti';
    const url = new URL(window.location.href);
    url.searchParams.delete('category');
    history.replaceState({}, '', url);
    renderCatalog();
  });
  const params = new URLSearchParams(window.location.search);
  const category = params.get('category');
  if (category) {
    const match = catalogCategories.find(c => slugify(c) === slugify(category) || c.toLowerCase() === category.toLowerCase());
    if (match) select.value = match;
  }
}

function renderFilterChips() {
  const wrap = $('#quickFilters');
  if (!wrap) return;
  const current = $('#catalogCategory')?.value || 'Tutti';
  wrap.innerHTML = '';
  catalogCategories.forEach(cat => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'filter-chip' + (cat === current ? ' is-active' : '');
    btn.textContent = cat === 'Tutti' ? getCopy('allOption') : cat;
    btn.addEventListener('click', () => {
      $('#catalogCategory').value = cat;
      renderCatalog();
    });
    wrap.appendChild(btn);
  });
}

function renderCatalog() {
  const grid = $('#catalogGrid');
  if (!grid) return;
  const searchValue = ($('#catalogSearch')?.value || '').trim().toLowerCase();
  const currentCategory = ($('#catalogCategory')?.value || 'Tutti');
  const filtered = catalogProducts.filter(product => {
    const hay = [getProductText(product,'name'), product.code, product.category, getProductText(product,'excerpt')].join(' ').toLowerCase();
    const matchesSearch = !searchValue || hay.includes(searchValue);
    const matchesCategory = currentCategory === 'Tutti' || product.category === currentCategory;
    return matchesSearch && matchesCategory;
  });
  renderFilterChips();
  const count = $('#catalogCount');
  if (count) count.textContent = `${filtered.length} ${getCopy('resultsLabel')}`;
  if (!filtered.length) {
    grid.innerHTML = `<div class="catalog-empty">${getCopy('emptyState')}</div>`;
    return;
  }
  grid.innerHTML = filtered.map(productCardMarkup).join('');
}

function initCatalogPage() {
  if (!$('#catalogGrid')) return;
  populateCategoryOptions();
  initCatalogFilters();
  renderCatalog();
}

function initGallery() {
  const main = $('#productMainImage');
  const thumbs = $$('.gallery-thumb');
  if (!main || !thumbs.length) return;
  thumbs.forEach(btn => btn.addEventListener('click', () => {
    const src = btn.dataset.src;
    if (!src) return;
    main.src = src;
    main.alt = btn.dataset.alt || main.alt;
    thumbs.forEach(b => b.classList.remove('is-active'));
    btn.classList.add('is-active');
  }));
}

function renderProduct() {
  const container = $('#productDetail');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug') || catalogProducts[0]?.slug;
  const product = catalogProducts.find(item => item.slug === slug) || catalogProducts[0];
  if (!product) return;

  const productName = getProductText(product,'name');
  document.title = `${productName} | Noi, la qualità`;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) metaDescription.setAttribute('content', `${productName} - ${getProductText(product,'excerpt')}`.slice(0, 160));
  $('#breadcrumbCurrent').textContent = productName;
  $('#productCategory').textContent = product.category;
  $('#productName').textContent = getProductText(product,'name');
  $('#productExcerpt').textContent = getProductText(product,'excerpt');
  $('#productMainImage').src = product.gallery[0];
  $('#productMainImage').alt = getProductText(product,'name');
  const thumbs = $('#productThumbs');
  thumbs.innerHTML = product.gallery.map((src, i) => `
    <button type="button" class="gallery-thumb${i===0 ? ' is-active' : ''}" data-src="${src}" data-alt="${getProductText(product,'name')}">
      <img src="${src}" alt="${getProductText(product,'name')} thumbnail ${i+1}" loading="lazy" decoding="async">
    </button>`).join('');

  $('#productSpecs').innerHTML = `
    <div class="spec-item"><span>${getCopy('codeLabel')}</span><strong>${product.code}</strong></div>
    <div class="spec-item"><span>${getCopy('sizeLabel')}</span><strong>${product.size}</strong></div>
    <div class="spec-item"><span>${getCopy('regionLabel')}</span><strong>${getProductText(product,'region')}</strong></div>
    <div class="spec-item"><span>${getCopy('categoryLabel')}</span><strong>${product.category}</strong></div>`;

  $('#originNote').textContent = getProductText(product,'origin');
  $('#productDescription').textContent = getProductText(product,'description');
  const detailList = $('#productDetailsList');
  detailList.innerHTML = (product.details[currentLang] || product.details.it || []).map(item => `<li>${item}</li>`).join('');

  const related = catalogProducts.filter(item => item.category === product.category && item.slug !== product.slug).slice(0, 3);
  $('#relatedGrid').innerHTML = related.length ? related.map(productCardMarkup).join('') : catalogProducts.filter(item => item.slug !== product.slug).slice(0, 3).map(productCardMarkup).join('');
  initGallery();
}

function getAiReply(message) {
  const q = message.toLowerCase();
  if (/(catalog|catalogo|pdf)/.test(q)) return currentLang === 'it' ? 'Il catalogo digitale permette di filtrare i prodotti per categoria e aprire le schede dettaglio.' : 'The digital catalog lets you filter products by category and open detail pages.';
  if (/(pasta|riso|salumi|formaggi|miele|tonno|tartu)/.test(q)) return currentLang === 'it' ? 'Trovi queste categorie nella pagina catalogo. Posso aiutarti a individuare un prodotto specifico.' : 'You can find these categories in the catalog page. I can help you identify a specific product.';
  if (/(doppio|senso|bottigl|formati)/.test(q)) return currentLang === 'it' ? 'Doppio Senso è presentato nella home e nelle schede prodotto con i principali formati di gamma.' : 'Doppio Senso is presented on the homepage and in the product pages with the main range formats.';
  if (/(sped|shipping|estero|italia|distrib)/.test(q)) return currentLang === 'it' ? 'La distribuzione copre Italia ed estero; i dettagli operativi vengono definiti in base alle esigenze dell’ordine.' : 'Distribution covers Italy and abroad; operational details are defined according to the order needs.';
  return currentLang === 'it' ? 'Posso aiutarti con prodotti, catalogo, territori, distribuzione e contatti.' : 'I can help you with products, catalog, territories, distribution and contacts.';
}

function initLiveChat() {
  const liveBtn = $('.floating-live');
  const chatPanel = $('.live-chat-panel');
  const chatClose = $('.live-chat-close');
  const chatForm = $('.live-chat-form');
  const chatInput = $('.live-chat-input');
  const chatMessages = $('.live-chat-messages');
  if (!liveBtn || !chatPanel || !chatForm || !chatInput || !chatMessages) return;
  let aiReplyCount = 0;
  let handedOff = false;
  const setOpen = (open) => {
    chatPanel.classList.toggle('is-open', open);
    chatPanel.setAttribute('aria-hidden', open ? 'false' : 'true');
    liveBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open) setTimeout(() => chatInput.focus(), 120);
  };
  const add = (text, type='ai') => {
    const msg = document.createElement('div');
    msg.className = `chat-message ${type === 'user' ? 'chat-user' : type === 'handoff' ? 'chat-handoff' : 'chat-ai'}`;
    msg.textContent = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };
  liveBtn.addEventListener('click', () => setOpen(!chatPanel.classList.contains('is-open')));
  chatClose && chatClose.addEventListener('click', () => setOpen(false));
  chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = chatInput.value.trim();
    if (!text) return;
    add(text, 'user');
    chatInput.value = '';
    if (handedOff) {
      setTimeout(() => add(currentLang === 'it' ? 'Il tuo messaggio è stato inoltrato al team del sito.' : 'Your message has been forwarded to the site team.', 'handoff'), 420);
      return;
    }
    aiReplyCount += 1;
    setTimeout(() => {
      add(getAiReply(text), 'ai');
      if (aiReplyCount >= 3 && !handedOff) {
        handedOff = true;
        setTimeout(() => add(currentLang === 'it' ? 'Ora la conversazione passa al team per assistenza umana.' : 'The conversation is now handed off to the team for human assistance.', 'handoff'), 500);
      }
    }, 460);
  });
}

initMenu();
initLanguageSwitch();
initYear();
initHeroSlider();
initCatalogPage();
renderProduct();
initLiveChat();


function initProductsHeroMotion(){
  const slides = Array.from(document.querySelectorAll('[data-motion-product]'));
  const dotsWrap = document.querySelector('.motion-product-dots');
  if (!slides.length || !dotsWrap) return;
  let current = 0;
  let timer = null;
  dotsWrap.innerHTML = slides.map((_,i)=>`<i class="${i===0?'is-active':''}" aria-hidden="true"></i>`).join('');
  const dots = Array.from(dotsWrap.children);
  const show = next => {
    if (next === current) return;
    const old = slides[current];
    const incoming = slides[next];
    old.classList.add('is-exit');
    old.classList.remove('is-active');
    incoming.classList.remove('is-exit');
    requestAnimationFrame(()=>incoming.classList.add('is-active'));
    dots.forEach((d,i)=>d.classList.toggle('is-active',i===next));
    setTimeout(()=>old.classList.remove('is-exit'),850);
    current = next;
  };
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
    timer = setInterval(()=>show((current+1)%slides.length),3200);
    document.addEventListener('visibilitychange',()=>{
      if(document.hidden){clearInterval(timer); timer=null;}
      else if(!timer){timer=setInterval(()=>show((current+1)%slides.length),3200);}
    });
  }
}

initProductsHeroMotion();
