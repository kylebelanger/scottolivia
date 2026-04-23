(function () {
  function buildNav(links) {
    const desktopLinks = links.map(l => `<a href="${l.href}">${l.label}</a>`).join('\n          ');
    const mobileLinks  = links.map(l => `<a href="${l.href}">${l.label}</a>`).join('\n    ');
    return `<nav>
    <span class="nav__logo"><a href="big-screen.html"><img src="logo/big-text.png" alt="Scott Olivia"></a></span>
    <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </button>
    <ul class="nav__links">
      <li>
        <div class="nav-menu" id="mainMenu" aria-expanded="false">
          ${desktopLinks}
        </div>
      </li>
      <li>
        <button class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="mainMenu">
          <span class="hamburger"></span>
          <span class="menu-text-open">Menu</span>
        </button>
      </li>
    </ul>
  </nav>
  <div class="mobile-overlay" id="mobileOverlay">
    <button class="mobile-overlay__close" id="mobileOverlayClose" aria-label="Close menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
        <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    </button>
    ${mobileLinks}
  </div>`;
  }

  function buildFooter() {
    return `<footer class="site-footer" id="siteFooter">
    <img class="footer__logo" src="logo/big-text.png" alt="Scott Olivia">
    <ul class="footer__links">
      <li><a href="big-screen.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <p class="footer__text">&copy; 2026 Scott Olivia LLC. Washington D.C. All rights reserved.
      <button class="privacy-trigger" id="privacyTrigger">Privacy Policy</button>
    </p>
  </footer>`;
  }

  function buildPrivacyModal() {
    return `<div class="privacy-modal" id="privacyModal" role="dialog" aria-modal="true" aria-labelledby="privacyModalTitle">
    <div class="privacy-modal__backdrop" id="privacyBackdrop"></div>
    <div class="privacy-modal__card">
      <div class="privacy-modal__header">
        <h2 class="privacy-modal__title" id="privacyModalTitle">Privacy Policy</h2>
        <button class="privacy-modal__close" id="privacyClose" aria-label="Close">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
      <div class="privacy-modal__body">
        <p class="privacy-modal__updated">Last updated: April 2026</p>

        <h3 class="privacy-modal__section">About Us</h3>
        <p>This Privacy Policy applies to Scott Olivia LLC, a limited liability company registered in Washington, D.C. ("Scott Olivia," "we," "us," or "our"). We operate the website scottolivia.com and are committed to protecting your privacy.</p>

        <h3 class="privacy-modal__section">Information We Collect</h3>
        <p>Scott Olivia LLC collects email addresses when you request early access or reach out through our contact form. We also automatically collect anonymised interaction data — such as pages viewed, scroll depth, and clicks — to better understand how visitors use our site.</p>

        <h3 class="privacy-modal__section">How We Use Your Information</h3>
        <p>Your information is used solely to:</p>
        <ul>
          <li>Respond to your inquiries and fulfil requests</li>
          <li>Send updates about our collections, if you have opted in</li>
          <li>Analyse and improve the browsing experience on our website</li>
        </ul>

        <h3 class="privacy-modal__section">What We Do Not Do</h3>
        <p>Scott Olivia LLC does not sell, rent, trade, or transfer your personal information — including your email address — to any third party for commercial purposes, ever.</p>

        <h3 class="privacy-modal__section">Page Interaction Tracking</h3>
        <p>We capture anonymised interactions on our website (such as scroll behaviour, clicks, and time on page) to offer a better, more personalised customer experience. This data is never linked to your personal identity and is never shared with advertisers or third parties.</p>

        <h3 class="privacy-modal__section">Cookies</h3>
        <p>We use essential cookies to ensure basic site functionality. We may also use analytics cookies to understand aggregate visitor behaviour. You may disable cookies in your browser settings, though some features may be affected.</p>

        <h3 class="privacy-modal__section">Data Security</h3>
        <p>Scott Olivia LLC takes reasonable precautions to protect your personal information. Your email and contact details are stored securely and accessed only by authorised personnel.</p>

        <h3 class="privacy-modal__section">Governing Law</h3>
        <p>This Privacy Policy is governed by the laws of Washington, D.C. and applicable federal law. By using our website, you consent to the data practices described herein.</p>

        <h3 class="privacy-modal__section">Contact</h3>
        <p>For any privacy-related questions, please contact Scott Olivia LLC at <a href="mailto:hello@scottolivia.com">hello@scottolivia.com</a>.</p>
      </div>
    </div>
  </div>`;
  }

  function initNavBehavior(keepMenuOpen) {
    const menuToggle    = document.getElementById('menuToggle');
    const menuNav       = document.getElementById('mainMenu');
    const menuLinks     = menuNav.querySelectorAll('a');
    const mobileBtn     = document.getElementById('mobileMenuBtn');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileClose   = document.getElementById('mobileOverlayClose');
    const mobileLinks   = mobileOverlay.querySelectorAll('a');

    function toggleMenu() {
      const isOpen = !menuNav.classList.contains('open');
      menuNav.classList.toggle('open', isOpen);
      menuToggle.classList.toggle('open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      menuNav.setAttribute('aria-expanded', String(isOpen));
    }
    function closeMenu() {
      menuNav.classList.remove('open');
      menuToggle.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      menuNav.setAttribute('aria-expanded', 'false');
    }
    function openMobileMenu()  { mobileOverlay.classList.add('open');    document.body.style.overflow = 'hidden'; }
    function closeMobileMenu() { mobileOverlay.classList.remove('open'); document.body.style.overflow = ''; }

    menuToggle.addEventListener('click', toggleMenu);
    if (!keepMenuOpen) {
      menuLinks.forEach(link => link.addEventListener('click', closeMenu));
    }
    mobileBtn.addEventListener('click', openMobileMenu);
    mobileClose.addEventListener('click', closeMobileMenu);
    mobileLinks.forEach(a => a.addEventListener('click', closeMobileMenu));
    document.addEventListener('keydown', e => {
      if (e.key !== 'Escape') return;
      if (menuNav.classList.contains('open'))       closeMenu();
      if (mobileOverlay.classList.contains('open')) closeMobileMenu();
    });
  }

  function initPrivacyModal() {
    document.body.insertAdjacentHTML('beforeend', buildPrivacyModal());

    const modal    = document.getElementById('privacyModal');
    const backdrop = document.getElementById('privacyBackdrop');
    const closeBtn = document.getElementById('privacyClose');
    const trigger  = document.getElementById('privacyTrigger');

    function openModal()  { modal.classList.add('open'); document.body.style.overflow = 'hidden'; }
    function closeModal() { modal.classList.remove('open'); document.body.style.overflow = ''; }

    trigger.addEventListener('click', openModal);
    backdrop.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
    });
  }

  window.initShared = function (links, options) {
    options = options || {};
    document.getElementById('so-nav').outerHTML    = buildNav(links);
    document.getElementById('so-footer').outerHTML = buildFooter();
    initNavBehavior(options.openMenuOnDesktop && window.innerWidth > 640);
    initPrivacyModal();

    if (options.openMenuOnDesktop && window.innerWidth > 640) {
      const menuNav    = document.getElementById('mainMenu');
      const menuToggle = document.getElementById('menuToggle');
      menuNav.classList.add('open');
      menuToggle.classList.add('open');
      menuNav.setAttribute('aria-expanded', 'true');
      menuToggle.setAttribute('aria-expanded', 'true');
    }

    const navAnchors = document.querySelectorAll('.nav-menu a');
    function setActiveLink(href) {
      navAnchors.forEach(a => a.classList.toggle('nav-active', a.getAttribute('href') === href));
    }

    if (options.activeHref) setActiveLink(options.activeHref);

    if (options.trackSections) {
      const hashLinks = links.filter(l => l.href.startsWith('#'));
      const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) setActiveLink('#' + entry.target.id);
        });
      }, { rootMargin: '-10% 0px -80% 0px' });

      hashLinks.forEach(function (l) {
        var el = document.querySelector(l.href);
        if (el) observer.observe(el);
      });
    }
  };
})();
