/* ================================
   Cierra el menú hamburguesa al hacer clic en un link
================================ */
document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
  link.addEventListener('click', function () {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
    if (bsCollapse) {
      bsCollapse.hide();
    }
  });
});

/* ================================
   Animación: texto "sobre mí"
================================ */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  const textElement = document.querySelector('.sobremi-text');
  if (textElement) {
    observer.observe(textElement);
  }
});

/* ================================
   Animación: proyectos (todas a la vez)
================================ */
document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.25
  });

  document.querySelectorAll('.proyecto').forEach(card => observer.observe(card));
});

/* ================================
   Animación: fade-in-up general
================================ */
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  });

  const el = document.querySelector('.fade-in-up');
  if (el) {
    observer.observe(el);
  }
});

/* ================================
   Función para filtrar proyectos + reiniciar animaciones
================================ */
function reiniciarAnimaciones() {
  const visibles = document.querySelectorAll('.col[data-tipo]:not([style*="display: none"]) .proyecto');
  visibles.forEach(card => {
    card.classList.remove('animate-in');
    void card.offsetWidth; // fuerza reflow para reiniciar animación
    card.classList.add('animate-in');
  });
}

function filtrarProyectos(tipo) {
  const proyectos = document.querySelectorAll('.col[data-tipo]');
  proyectos.forEach(proyecto => {
    const tipoProyecto = proyecto.getAttribute('data-tipo');
    if (tipo === 'todos' || tipoProyecto === tipo) {
      proyecto.style.display = 'block';
    } else {
      proyecto.style.display = 'none';
    }
  });

  // Reiniciar animaciones en los visibles
  setTimeout(reiniciarAnimaciones, 100);
}