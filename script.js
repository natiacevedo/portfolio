document.querySelectorAll('.navbar-nav .nav-link').forEach(function(link) {
    link.addEventListener('click', function () {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });

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

  document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const element = entry.target;
        const index = [...document.querySelectorAll('.proyecto')].indexOf(element);
        element.style.animationDelay = `${index * 0.6}s`;
        element.classList.add('animate-in');
        observer.unobserve(element);
      }
    });
  }, {
    threshold: 0.25
  });

  document.querySelectorAll('.proyecto').forEach(card => observer.observe(card));
});

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