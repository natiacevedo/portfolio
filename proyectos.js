const proyectos = {
      homesapiens: {
        titulo: "Home Sapiens",
        tipo: "Web desarrollada con código.",
        herramientas: "Visual Studio Code - HTML, CSS y JS.",
        objetivo: "Desarrollo web para obligatorio de la carrera de Diseñador Digital - Universidad ORT del Uruguay",
        descripcion: "Home Sapiens es un estudio de diseño de interiores enfocado en transformar hogares con identidad. La web fue pensada para destacar visualmente el impacto de sus proyectos, integrando una sección de antes y después, testimonios de clientes satisfechos y un formulario de contacto claro y accesible. El diseño equilibra estética y funcionalidad, reflejando el estilo de la marca y facilitando la navegación tanto desde desktop como desde dispositivos móviles.",
        imagen: "img/Scene-10.png",
        fecha: "2024",
        link: "https://homesapiens.netlify.app/"
      },
      byluli: {
        titulo: "Byluli",
        tipo: "Web fullstack desarrollada en Visual Studio Code.",
        herramientas: "Visual Studio Code - HTML, CSS, JS y Render.",
        objetivo: "Desarrollo web para obligatorio de la carrera de Diseñador Digital - Universidad ORT del Uruguay",
        descripcion: "Desarrollé una tienda online fullstack para ByLuli, una marca de pastelería artesanal. El sitio permite a los usuarios registrarse, explorar los productos, agregar ítems al carrito. Además, incluye una sección Sobre ByLuli para transmitir los valores de la marca, un formulario de contacto y un diseño responsive que garantiza una experiencia fluida desde cualquier dispositivo. El proyecto fue pensado para facilitar la autogestión del catálogo y ofrecer una experiencia de compra clara, cuidada y alineada con la estética de la marca.",
        imagen: "img/byluli-mockup.png",
        fecha: "2024",
        link: "https://bylulifront.onrender.com/"
      },
      mare: {
        titulo: "Mare",
        tipo: "Sitio web diseñado en WIX",
        herramientas: "Wix",
        descripcion: "Maré es una clínica de medicina estética que combina tecnología, bienestar y cuidado personal. El objetivo principal del sitio fue facilitar la experiencia de sus pacientes, permitiendo la gestión de turnos online, registro de usuarios y la visualización clara de todos los tratamientos disponibles. La web también incluye una sección Sobre Maré, integración con el feed de Instagram para mostrar contenido actualizado, y un diseño responsive que acompaña la estética moderna y minimalista de la marca.",
        objetivo: "Proyecto realizado en Omni, agencia de marketing digital.",
        imagen: "img/mare.png",
        fecha: "2025",
        link: "https://www.mareclinica.com/"
      },
      charlies: {
        titulo: "Charlie's Hybrid Training",
        tipo: "Sitio web diseñado en WIX",
        herramientas: "Wix Studio, Figma",
        descripcion: "Charlie’s es un gimnasio especializado en hybrid training. El sitio web fue creado con el objetivo de ofrecer una plataforma dinámica y funcional para sus miembros actuales y potenciales. El sitio permite a los usuarios explorar los distintos planes de entrenamiento, sus distintos "hubs", diferenciar los tipos de clases con videos referenciales, inscribirse y contactar directamente con el equipo. También se trabajó en transmitir la energía y el enfoque del gimnasio a través de una estética potente, moderna y alineada con su identidad visual.",
        objetivo: "Proyecto realizado en Omni, agencia de marketing digital.",
        imagen: "img/charlies.png",
        fecha: "2024",
        link: "https://www.somoscharlies.com/"
      },
      chevroni: {
        titulo: "Chevroni",
        tipo: "Sitio web desarrollado con código",
        herramientas: "HTML y CSS",
        descripcion: "Sitio web para Chevroni, una empresa dedicada a la venta de plantas artificiales de todo tipo. En esta web para desktop se puede ver su catálogo completo, filtrar los productos, añadirlos al carrito y contactarse con ellos.",
        objetivo: "Desarrollo web para obligatorio de la carrera de Diseñador Digital - Universidad ORT del Uruguay",
        imagen: "img/chevroni.png",
        fecha: "2023",
        link: "https://www.chevroni.com"
    },
    chevronifigma:{
        titulo: "Chevroni",
        tipo: "Prototipo de web diseñado en Figma",
        herramientas: "Figma",
        descripcion: "Diseño de prototipo de sitio web para Chevroni, una empresa dedicada a la venta de plantas artificiales de todo tipo.",
        objetivo: "Desarrollo de prototipo para obligatorio de la carrera de Diseñador Digital - Universidad ORT del Uruguay",
        imagen: "img/prototipado.png",
        link: "https://www.figma.com/proto/CxrPtpITxIO09ihp385N3V/Untitled?page-id=0%3A1&node-id=33-61&viewport=298%2C231%2C0.06&t=f7rYL6LxmOp9FHBy-1&scaling=scale-down-width&content-scaling=fixed"
    }
};

    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const contenedor = document.getElementById("proyecto");
    const p = proyectos[id];

    if (p) {
      document.title = p.titulo;
      contenedor.innerHTML = `
      <div class="proyecto-detalle">
        <div class="p-4">
          <h2 class="my-4">${p.titulo}</h2>
          <p><strong>Tipo de desarrollo:</strong> ${p.tipo}</p>
          <p><strong>Herramientas:</strong> ${p.herramientas}</p>
          <p><strong>Año:</strong> ${p.fecha}.</p>
          <p class="my-4"><strong>Objetivo:</strong> ${p.objetivo}</p>
          <a href="${p.link}" target="_blank" class="button2 text-decoration-none">Visitar sitio</a>
        </div>
        <div class="mb-4">
        <img src="${p.imagen}" alt="Mockup de ${p.titulo}" style="width:100%; max-width:800px;" />
        </div>
        </div>
        <p class="proyecto-descripcion"><strong>Descripción:</strong> ${p.descripcion}</p>
      `;
    } else {
      contenedor.innerHTML = `<h1>Proyecto no encontrado 😕</h1>`;
    }