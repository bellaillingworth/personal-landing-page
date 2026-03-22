// Smooth scroll active nav highlighting
(function () {
  var sections = document.querySelectorAll('main section[id], main header[id]');
  var navLinks = document.querySelectorAll('.nav-links a');

  function onScroll() {
    var scrollY = window.scrollY + 80;
    sections.forEach(function (section) {
      if (
        scrollY >= section.offsetTop &&
        scrollY < section.offsetTop + section.offsetHeight
      ) {
        navLinks.forEach(function (link) {
          link.removeAttribute('aria-current');
          if (link.getAttribute('href') === '#' + section.id) {
            link.setAttribute('aria-current', 'page');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
