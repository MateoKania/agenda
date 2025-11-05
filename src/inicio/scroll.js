const buscar = document.querySelector("main");
const botonDer = document.getElementById("scrollDer");
const botonIzq = document.getElementById("scrollIzq");

const secciones = Array.from(buscar.querySelectorAll(".snap-start"));

let indiceActual = 0;

botonDer.addEventListener("click", () => {
  indiceActual = (indiceActual + 1) % secciones.length;
  secciones[indiceActual].scrollIntoView({
    behavior: "smooth",
    inline: "start",
  });
});

botonIzq.addEventListener("click", () => {
  indiceActual = (indiceActual - 1 + secciones.length) % secciones.length;
  secciones[indiceActual].scrollIntoView({
    behavior: "smooth",
    inline: "start",
  });
});

document.addEventListener("keydown", (event) => {
  const activo = document.activeElement;
  const parteActiva =
    activo.tagName === "INPUT" || activo.tagName === "TEXTAREA";
  if (parteActiva) return;
  if (event.key === "ArrowRight") {
    indiceActual = (indiceActual + 1) % secciones.length;
    secciones[indiceActual].scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  }

  if (event.key === "ArrowLeft") {
    indiceActual = (indiceActual - 1 + secciones.length) % secciones.length;
    secciones[indiceActual].scrollIntoView({
      behavior: "smooth",
      inline: "start",
    });
  }
});
