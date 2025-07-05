// Header cambia de transparente a azul al hacer scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  if (!header) return;
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

// 🧭 Swiper carrusel (index.html y páginas con más de un carrusel)
if (document.querySelectorAll('.mySwiper').length) {
  const swipers = document.querySelectorAll('.mySwiper');
  swipers.forEach((swiperEl) => {
    new Swiper(swiperEl, {
      loop: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false,
      },
      pagination: {
        el: swiperEl.querySelector('.swiper-pagination'),
        clickable: true,
      },
      navigation: {
        nextEl: swiperEl.querySelector('.swiper-button-next'),
        prevEl: swiperEl.querySelector('.swiper-button-prev'),
      },
    });
  });
}
