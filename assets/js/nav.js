(function () {
  var openBtn = document.querySelector('[data-nav-open]');
  var closeBtn = document.querySelector('[data-nav-close]');
  var drawer = document.querySelector('[data-nav-drawer]');
  var scrim = document.querySelector('[data-nav-scrim]');

  if (!openBtn || !drawer || !scrim) return;

  function openNav() {
    drawer.classList.add('is-open');
    scrim.classList.add('is-open');
    document.body.classList.add('nav-open');
    openBtn.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    drawer.classList.remove('is-open');
    scrim.classList.remove('is-open');
    document.body.classList.remove('nav-open');
    openBtn.setAttribute('aria-expanded', 'false');
  }

  openBtn.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);
  scrim.addEventListener('click', closeNav);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });
})();
