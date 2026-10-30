// Mejoras opcionales: la página funciona completa sin este archivo.
(function () {
  'use strict';
  document.documentElement.classList.add('js');

  var btn = document.getElementById('menuBtn'), nav = document.getElementById('nav');
  function cerrar() { nav.classList.remove('abierto'); btn.setAttribute('aria-expanded', 'false'); }
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var abierto = nav.classList.toggle('abierto');
      btn.setAttribute('aria-expanded', String(abierto));
    });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) cerrar(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('abierto')) { cerrar(); btn.focus(); }
    });
  }

  var dlg = document.getElementById('vis'), img = document.getElementById('visImg'), cap = document.getElementById('visCap');
  if (dlg && typeof dlg.showModal === 'function') {
    Array.prototype.forEach.call(document.querySelectorAll('.gal-b'), function (a) {
      a.addEventListener('click', function (e) {
        e.preventDefault();
        img.src = a.getAttribute('href');
        img.alt = a.querySelector('img').alt;
        cap.textContent = a.getAttribute('data-cap') || '';
        dlg.showModal();
      });
    });
    document.getElementById('visX').addEventListener('click', function () { dlg.close(); });
    dlg.addEventListener('click', function (e) { if (e.target === dlg) dlg.close(); });
  }
})();
