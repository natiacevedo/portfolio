  // 26 de diciembre a las 19:30 (hora Uruguay UTC-3)
  const targetDate = new Date("2026-12-26T19:30:00-04:30").getTime();

  const countdown = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
      clearInterval(countdown);
      document.getElementById("countdown").innerHTML = "¡Llegó el gran día! 💍";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days.toString().padStart(2, "0");
    document.getElementById("hours").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minutes").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").innerText = seconds.toString().padStart(2, "0");
  }, 1000);

  /* Musica */

/*     const music = document.getElementById("background-music");
    const button = document.getElementById("music-toggle");

    let isPlaying = false;

    button.addEventListener("click", () => {
        if (isPlaying) {
        music.pause();
        button.innerHTML = "▶️ Música";
        } else {
        music.play();
        button.innerHTML = "⏸️ Pausar";
        }
        isPlaying = !isPlaying;
    });


    function reproducirVideo() {
  const video = document.querySelector("#videoBoda");

  if (video) {
    video.play();
  }
} */



document.addEventListener("DOMContentLoaded", function () {

  const fotos = Array.from(
    document.querySelectorAll(
      ".galeria-personalizada .galeria-foto img"
    )
  );

  const visor = document.getElementById("visorGaleria");
  const imagenAmpliada = document.getElementById("imagenAmpliada");

  const cerrar = visor.querySelector(".visor-cerrar");
  const anterior = visor.querySelector(".visor-anterior");
  const siguiente = visor.querySelector(".visor-siguiente");

  let indiceActual = 0;
  let elementoAnterior = null;

  function mostrarFoto(indice) {
    indiceActual = (indice + fotos.length) % fotos.length;
    imagenAmpliada.src = fotos[indiceActual].src;
    imagenAmpliada.alt = fotos[indiceActual].alt;
  }

  function abrirVisor(indice) {
    elementoAnterior = document.activeElement;
    mostrarFoto(indice);
    visor.classList.add("activo");
    visor.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    cerrar.focus();
  }

  function cerrarVisor() {
    visor.classList.remove("activo");
    visor.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    imagenAmpliada.removeAttribute("src");
    if (elementoAnterior) elementoAnterior.focus();
  }

  fotos.forEach((foto, indice) => {
    foto.addEventListener("click", () => abrirVisor(indice));
    foto.setAttribute("tabindex", "0");
    foto.setAttribute("role", "button");
    foto.setAttribute("aria-label", "Ampliar " + foto.alt);

    foto.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        abrirVisor(indice);
      }
    });
  });

  siguiente.addEventListener("click", () => {
    mostrarFoto(indiceActual + 1);
  });

  anterior.addEventListener("click", () => {
    mostrarFoto(indiceActual - 1);
  });

  cerrar.addEventListener("click", cerrarVisor);

  visor.addEventListener("click", (e) => {
    if (e.target === visor) cerrarVisor();
  });

  document.addEventListener("keydown", (e) => {
    if (!visor.classList.contains("activo")) return;

    if (e.key === "Escape") cerrarVisor();
    if (e.key === "ArrowRight") mostrarFoto(indiceActual + 1);
    if (e.key === "ArrowLeft") mostrarFoto(indiceActual - 1);

    if (e.key === "Tab") {
      const controles = [cerrar, anterior, siguiente];
      const indice = controles.indexOf(document.activeElement);

      if (e.shiftKey && (indice <= 0)) {
        e.preventDefault();
        siguiente.focus();
      } else if (!e.shiftKey && indice === controles.length - 1) {
        e.preventDefault();
        cerrar.focus();
      }
    }
  });

});





/* Dejar true por ahora. Si decidís prohibir acompañantes para todos, cambiar a false. */

  const PERMITIR_ACOMPANANTES = true;
  const formulario = document.getElementById('formConfirmacion');
  const valor = nombre => formulario.querySelector(`[name="${nombre}"]:checked`)?.value || '';
  const mostrar = (id, condicion) => document.getElementById(id).classList.toggle('oculto', !condicion);
  function actualizar() {
    const asiste = valor('asiste') === 'Sí';
    const acompana = asiste && PERMITIR_ACOMPANANTES && valor('acompana') === 'Sí';
    const restriccion = asiste && valor('restriccion') === 'Sí';
    const restriccionAcomp = acompana && valor('restriccionAcomp') === 'Sí';
    mostrar('camposAsistencia', asiste);
    mostrar('campoAcompanantes', asiste && PERMITIR_ACOMPANANTES);
    mostrar('datosAcompanante', acompana);
    mostrar('cajaDetalle', restriccion);
    mostrar('cajaDetalleAcomp', restriccionAcomp);
    document.getElementById('nombreAcompanante').required = acompana;
    document.getElementById('detalle').required = restriccion;
    document.getElementById('detalleAcomp').required = restriccionAcomp;
  }
  formulario.addEventListener('change', actualizar);
  actualizar();
  formulario.addEventListener('submit', e => {
    e.preventDefault();
    actualizar();
    if (!formulario.reportValidity()) return;
    const asiste = valor('asiste') === 'Sí';
    const acompana = asiste && PERMITIR_ACOMPANANTES && valor('acompana') === 'Sí';
    const datos = {
      nombre: document.getElementById('nombre').value,
      apellido: document.getElementById('apellido').value,
      asiste: valor('asiste'),
      acompana: acompana ? 'Sí' : 'No',
      nombreAcompanante: acompana ? document.getElementById('nombreAcompanante').value : '',
      restriccion: asiste ? valor('restriccion') : 'No',
      detalle: asiste ? document.getElementById('detalle').value : '',
      restriccionAcomp: acompana ? valor('restriccionAcomp') : 'No',
      detalleAcomp: acompana ? document.getElementById('detalleAcomp').value : '',
      cancion: asiste ? document.getElementById('cancion').value : '',
      mensaje: document.getElementById('mensaje').value
    };
    const btn = document.getElementById('enviar');
    const estado = document.getElementById('estado');
    btn.disabled = true;
    estado.className = 'estado';
    estado.textContent = 'Enviando confirmación...';
    google.script.run
      .withSuccessHandler(() => {
        estado.className = 'estado exito';
        estado.textContent = '¡Gracias! Tu respuesta quedó registrada correctamente.';
        formulario.reset();
        actualizar();
        btn.disabled = false;
      })
      .withFailureHandler(error => {
        estado.className = 'estado error';
        estado.textContent = 'No pudimos guardar la respuesta. Intentá nuevamente. ' + (error?.message || '');
        btn.disabled = false;
      })
      .guardarConfirmacion(datos);
  });


async function copiarCuenta(numero, boton) {
    const textoOriginal = boton.innerHTML;

    try {
        await navigator.clipboard.writeText(numero);
        boton.textContent = "✓ ¡Copiado!";

        setTimeout(() => {
            boton.innerHTML = textoOriginal;
        }, 2000);
    } catch (error) {
        alert("No se pudo copiar. Seleccioná el número manualmente.");
    }
}


async function copiarCuenta(numero, boton) {
    const textoOriginal = boton.textContent;

    try {
        await navigator.clipboard.writeText(numero);
        boton.textContent = "✓ ¡Copiado!";

        setTimeout(() => {
            boton.textContent = textoOriginal;
        }, 2000);

    } catch (error) {
        alert("No se pudo copiar el número. Podés seleccionarlo manualmente.");
    }
}


/* =========================================
   APARICIÓN SUAVE AL HACER SCROLL
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const elementos = document.querySelectorAll(
        "#siguiente-seccion > div, " +
        ".celebracion, " +
        ".galeria-foto, " +
        ".formulario"
    );

    if (window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches) {
        return;
    }

    if (!("IntersectionObserver" in window)) {
        return;
    }

    elementos.forEach((elemento) => {
        elemento.classList.add("revelar");
    });

    document.body.classList.add("animaciones-activas");

    const observador = new IntersectionObserver(
        (entradas) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visible");
                    observador.unobserve(entrada.target);
                }
            });
        },
        {
            threshold: 0.08,
            rootMargin: "0px 0px 40px 0px"
        }
    );

    elementos.forEach((elemento) => {
        observador.observe(elemento);
    });

});

