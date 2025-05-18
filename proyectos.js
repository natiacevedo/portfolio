const proyectos = {
      homesapiens: {
        titulo: "Home Sapiens",
        tipo: "Web desarrollada con código (HTML, CSS y JS)",
        herramientas: "Visual Studio Code. HTML, CSS y JS",
        descripcion: "Sitio desarrollado para una empresa de diseño de interiores.",
        imagen: "img/Scene-10.png",
        link: "https://www.homesapiens.com"
      },
      byluli: {
        titulo: "Byluli",
        tipo: "Web fullstack",
        herramientas: "Visual Studio Code. HTML, CSS y JS",
        descripcion: "Tienda online con diseño responsive.",
        imagen: "img/byluli-mockup.png",
        link: "https://www.byluli.com"
      },
      mare: {
        titulo: "Mare",
        tipo: "Sitio web diseñado en WIX",
        herramientas: "Wix",
        descripcion: "Sitio con agenda de citas online.",
        imagen: "img/mare.png",
        link: "https://www.mare.com"
      },
      charlies: {
        titulo: "Charlie's Hybrid Training",
        tipo: "Sitio web diseñado en WIX",
        herramientas: "Wix Studio, Figma",
        descripcion: "Web para gimnasio híbrido con diseño funcional.",
        imagen: "img/charlies.png",
        link: "https://www.charlies.com.uy"
      },
      chevroni: {
        titulo: "Chevroni",
        tipo: "Sitio web desarrollado con código",
        herramientas: "HTML y CSS",
        descripcion: "Sitio web para vivero con catálogo online para desktop.",
        imagen: "img/chevroni.png",
        link: "https://www.chevroni.com"
    },
    chevronifigma:{
        titulo: "Chevroni",
        tipo: "Prototipo de web diseñado en Figma",
        herramientas: "Figma",
        descripcion: "Diseño para vivero con catálogo online.",
        imagen: "img/chevronifigma.png",
        link: "https://www.chevroni.com"
    }
};

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const contenedor = document.getElementById("proyecto");
    const p = proyectos[id];

    if (p) {
      document.title = p.titulo;
      contenedor.innerHTML = `
        <h1 class="m-4">${p.titulo}</h1>
        <p><strong>Tipo de desarrollo:</strong> ${p.tipo}</p>
        <p><strong>Herramientas:</strong> ${p.herramientas}</p>
        <p><strong>Descripción:</strong> ${p.descripcion}</p>
        <div class="my-4">
          <img src="${p.imagen}" alt="Mockup de ${p.titulo}" style="width:100%; max-width:800px;" />
        </div>
        <a href="${p.link}" target="_blank" class="button">Ver sitio en vivo</a>
      `;
    } else {
      contenedor.innerHTML = `<h1>Proyecto no encontrado 😕</h1>`;
    }