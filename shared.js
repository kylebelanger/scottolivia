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
    <p class="footer__text">&copy; 2026 Scott Olivia LLC. All rights reserved.</p>
    <ul class="footer__links">
      <li><a href="big-screen.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
  </footer>`;
  }

  function initNavBehavior() {
    const menuToggle   = document.getElementById('menuToggle');
    const menuNav      = document.getElementById('mainMenu');
    const menuLinks    = menuNav.querySelectorAll('a');
    const mobileBtn    = document.getElementById('mobileMenuBtn');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileClose  = document.getElementById('mobileOverlayClose');
    const mobileLinks  = mobileOverlay.querySelectorAll('a');

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
    menuLinks.forEach(link => link.addEventListener('click', closeMenu));
    mobileBtn.addEventListener('click', openMobileMenu);
    mobileClose.addEventListener('click', closeMobileMenu);
    mobileLinks.forEach(a => a.addEventListener('click', closeMobileMenu));
    document.addEventListener('keydown', e => {
      if (e.key !== 'Escape') return;
      if (menuNav.classList.contains('open'))      closeMenu();
      if (mobileOverlay.classList.contains('open')) closeMobileMenu();
    });
  }

  window.initShared = function (links) {
    document.getElementById('so-nav').outerHTML    = buildNav(links);
    document.getElementById('so-footer').outerHTML = buildFooter();
    initNavBehavior();
  };
})();
