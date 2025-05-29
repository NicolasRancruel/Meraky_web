// 🕒 Año automático en el footer
document.addEventListener("DOMContentLoaded", function () {
  const año = document.getElementById("anio");
  if (año) {
    año.textContent = new Date().getFullYear();
  }

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

  // 📩 Formulario contacto (solo en index.html)
  const formulario = document.querySelector(".formulario-contacto");
  const mensajeExito = document.getElementById("mensaje-exito");

  if (formulario) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      const datos = new FormData(formulario);
      const url = formulario.action;

      fetch(url, {
        method: 'POST',
        body: datos,
        headers: {
          'Accept': 'application/json'
        }
      })
        .then(respuesta => {
          if (respuesta.ok) {
            mensajeExito.classList.add('mostrar');
            formulario.reset();
            setTimeout(() => {
              mensajeExito.classList.remove('mostrar');
            }, 4000);
          } else {
            alert('Ocurrió un error al enviar el mensaje. Intenta más tarde.');
          }
        });
    });
  }
});

  const puntos = document.querySelectorAll(".punto");

  puntos.forEach(punto => {
    punto.addEventListener("mouseenter", () => {
      // Cerrar todos los tooltips primero
      document.querySelectorAll(".tooltip-personalizado").forEach(t => {
        t.classList.remove("activo");
      });

      // Abrir solo el de este punto
      const tooltip = punto.querySelector(".tooltip-personalizado");
      if (tooltip) {
        tooltip.classList.add("activo");
      }
    });

    punto.addEventListener("mouseleave", () => {
      const tooltip = punto.querySelector(".tooltip-personalizado");
      if (tooltip) {
        tooltip.classList.remove("activo");
      }
    });
  });

window.addEventListener("scroll", function () {
  const header = document.getElementById("main-header");
  if (window.scrollY > 60) {
    header.classList.add("fondo-azul");
    header.classList.remove("transparente");
  } else {
    header.classList.add("transparente");
    header.classList.remove("fondo-azul");
  }
});



