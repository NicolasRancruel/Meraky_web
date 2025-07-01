document.addEventListener('DOMContentLoaded', () => {
  // Header scroll transparente a azul
  const header = document.getElementById('main-header');
  if (header) {
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Menú hamburguesa
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Mostrar año actual en el footer automáticamente
  const anio = document.getElementById('anio');
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }
});
