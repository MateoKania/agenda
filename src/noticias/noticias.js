let noticiasActualidadGuardadas = localStorage.getItem("NoticiasActualidad");
let noticiasDeportesGuardadas = localStorage.getItem("NoticiasDeportes");

const apikeyNoticias = import.meta.env.VITE_APIKEY_NOTICIAS;

const llamadaApiActualidad = async () => {
  try {
    const res = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${apikeyNoticias}&language=es&country=es&category=top`,
    );
    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error("La llamada da error", error);
    return [];
  }
};

const llamadaApiDeportes = async () => {
  try {
    const res = await fetch(
      `https://newsdata.io/api/1/latest?apikey=${apikeyNoticias}&language=es&country=es&category=sports`,
    );
    const data = await res.json();

    return data.results;
  } catch (error) {
    console.error("La llamada da error", error);
    return [];
  }
};

const guardarActualidad = async () => {
  const resultado = await llamadaApiActualidad();

  const sinDuplicados = resultado.filter(
    (noticia, index, self) =>
      index ===
      self.findIndex(
        (n) =>
          n.title.trim().toLowerCase() === noticia.title.trim().toLowerCase(),
      ),
  );
  localStorage.setItem(
    "NoticiasActualidad",
    JSON.stringify(sinDuplicados.slice(0, 10)),
  );
};

const guardarDeportes = async () => {
  const resultado = await llamadaApiDeportes();

  const sinDuplicados = resultado.filter(
    (noticia, index, self) =>
      index ===
      self.findIndex(
        (n) =>
          n.title.trim().toLowerCase() === noticia.title.trim().toLowerCase(),
      ),
  );
  localStorage.setItem(
    "NoticiasDeportes",
    JSON.stringify(sinDuplicados.slice(0, 10)),
  );
};

const recuperarActualidad = async () => {
  let resultado = localStorage.getItem("NoticiasActualidad");
  if (resultado === null) {
    resultado = [];
  } else {
    resultado = JSON.parse(resultado);
  }
  document.getElementById("actualidad").innerHTML = "";
  resultado.forEach((element) => {
    const noticia = document.createElement("article");
    noticia.className = "p-2 mb-2 w-full sm:w-4/5 lg:w-3/5 mx-auto";
    const titulo = document.createElement("h3");
    titulo.textContent = element.title;
    titulo.className = "text-xl sm:text-2xl md:text-3xl text-center mb-2 px-2";
    const fotoNoticia = document.createElement("img");
    fotoNoticia.src = element.image_url;
    fotoNoticia.className =
      "w-full sm:w-4/5 h-auto object-cover items-center mx-auto rounded-md";
    const descripcion = document.createElement("p");
    descripcion.textContent = element.description;
    descripcion.className =
      "w-full sm:w-4/5 text-start mx-auto items-center text-sm sm:text-base px-2";
    const rallaAbajo = document.createElement("hr");
    rallaAbajo.className = "w-fix mt-2";
    noticia.appendChild(titulo);
    noticia.appendChild(fotoNoticia);
    noticia.appendChild(descripcion);
    noticia.appendChild(rallaAbajo);

    document.getElementById("actualidad").appendChild(noticia);
  });
};

const recuperarDeportes = async () => {
  let guardadas = localStorage.getItem("NoticiasDeportes");
  if (guardadas === null) {
    guardadas = [];
  } else {
    guardadas = JSON.parse(guardadas);
  }
  document.getElementById("deportes").innerHTML = "";
  guardadas.forEach((element) => {
    const noticia = document.createElement("article");
    noticia.className = "p-2 mb-2 w-full sm:w-4/5 lg:w-3/5 mx-auto";
    const titulo = document.createElement("h3");
    titulo.className = "text-xl sm:text-2xl md:text-3xl text-center mb-2 px-2";
    titulo.textContent = element.title;
    const fotoNoticia = document.createElement("img");
    fotoNoticia.src = element.image_url;
    fotoNoticia.className =
      "w-full sm:w-4/5 h-auto object-cover items-center mx-auto rounded-md";
    const descripcion = document.createElement("p");
    descripcion.textContent = element.description;
    descripcion.className =
      "w-full sm:w-4/5 text-start mx-auto items-center text-sm sm:text-base px-2";
    noticia.appendChild(titulo);
    noticia.appendChild(fotoNoticia);
    noticia.appendChild(descripcion);
    document.getElementById("deportes").appendChild(noticia);
  });
};

window.addEventListener("DOMContentLoaded", async () => {
  if (!localStorage.getItem("NoticiasActualidad")) {
    await guardarActualidad();
  }
  if (!localStorage.getItem("NoticiasDeportes")) {
    await guardarDeportes();
  }

  await recuperarActualidad();
  await recuperarDeportes();
  setInterval(recuperarActualidad, 3600000);
  setInterval(recuperarDeportes, 3600000);
});

const botonRecarga = document.getElementById("botonActualizar");

botonRecarga.addEventListener("click", async () => {
  await guardarActualidad();
  await guardarDeportes();
  await recuperarActualidad();
  await recuperarDeportes();
});
