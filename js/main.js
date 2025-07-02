// Header cambia de transparente a azul al hacer scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Mostrar año actual en el footer automáticamente
document.addEventListener('DOMContentLoaded', () => {
  const anio = document.getElementById('anio');
  if (anio) {
    anio.textContent = new Date().getFullYear();
  }
});

// Tooltip táctil en móvil
document.querySelectorAll('.esqueleto-interactivo .punto').forEach(function(punto) {
  punto.addEventListener('touchstart', function(e) {
    // Cierra otros tooltips
    document.querySelectorAll('.esqueleto-interactivo .punto').forEach(function(pt) {
      if (pt !== punto) pt.classList.remove('show-tooltip');
    });
    punto.classList.toggle('show-tooltip');
    e.stopPropagation();
  });
});

// Cierra tooltips si tocas fuera
document.body.addEventListener('touchstart', function() {
  document.querySelectorAll('.esqueleto-interactivo .punto').forEach(function(pt) {
    pt.classList.remove('show-tooltip');
  });
});

  // 🧭 Swiper carrusel (solo en index.html)
  if (document.querySelector(".mySwiper")) {
    const swiper = new Swiper(".mySwiper", {
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }