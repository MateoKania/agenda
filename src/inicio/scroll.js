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

// const toggle = document.getElementById("menu-toggle");
// const menu = document.getElementById("menu");

// toggle.addEventListener("click", () => {
//   menu.classList.toggle("hidden");
//   menu.classList.toggle("-translate-x-full");
// });

const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const links = document.querySelectorAll(".menu-link");

toggle.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  menu.classList.toggle("-translate-x-full");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 640) {
      menu.classList.add("hidden");
      menu.classList.add("-translate-x-full");
    }
  });
});
