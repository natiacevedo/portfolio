const diseños = {
    chk: {
        titulo: "CHK - Diseño Logotipo",
        tipo: "Rediseño de logo para CHK - Estudio Jurídico.",
        herramientas: "Adobe Illustrator",
        objetivo: "Rediseñar el logo de CHK para reflejar su nueva identidad corporativa, integrando una mirada jurídica moderna con un enfoque centrado en el coaching ontológico, la confianza y el acompañamiento estratégico.",
        imagen: "img/chk-diseño.jpg",
        fecha: "2025",
      },
    redes:{
        titulo: "Diseños redes sociales",
        tipo: "Diseño gráfico para comunicación digital",
        herramientas: "Adobe Illustrator, Photoshop",
        objetivo: "Diseño de piezas gráficas para redes sociales, alineadas a la identidad visual de cada marca y pensadas para comunicar de forma clara, atractiva y coherente en entornos digitales.",
        imagen: "img/mockups.png",
        fecha: "2025"
      }
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const contenedor = document.getElementById("diseño");
const p = diseños[id];

if (p) {
  document.title = p.titulo + " | Natalia Acevedo";

  contenedor.innerHTML = `
    <div class="proyecto-detalle d-flex" style="gap:20px; flex-wrap:wrap;">
      <div class="info" style="flex:1; min-width:300px; padding:1rem;">
        <h2 class="my-4">${p.titulo}</h2>
        <p><strong>Tipo:</strong> ${p.tipo}</p>
        <p><strong>Herramientas:</strong> ${p.herramientas}</p>
        <p><strong>Año:</strong> ${p.fecha}</p>
        <p><strong>Objetivo:</strong> ${p.objetivo}</p>
      </div>
      <div class="imagen" style="flex:1; min-width:300px; padding:1rem;">
        <img 
          src="${p.imagen}" 
          alt="Diseño gráfico ${p.titulo}" 
          style="width:100%; height:auto; border-radius:8px;"
        />
      </div>
    </div>
  `;
} else {
  contenedor.innerHTML = `<h1>Diseño no encontrado 😕</h1>`;
}