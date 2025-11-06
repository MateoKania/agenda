const inputCiudad = document.getElementById("ciudadBuscar");
const botonBuscar = document.getElementById("botonBuscarTiempo");
const nombreCiudad = document.getElementById("nombreCiudad");
const apikeyTiempo = import.meta.env.VITE_APIKEY_TIEMPO;

function guardarAlRecargar() {
  localStorage.setItem("guardarCiudad", inputCiudad.value);
}

async function buscarClima() {
  const cogerCiudad = inputCiudad.value.toLowerCase();
  guardarAlRecargar();

  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cogerCiudad}&APPID=${apikeyTiempo}&units=metric`,
  );

  const data = await res.json();

  console.log(data);

  function primeraMayus(texto) {
    return texto.charAt(0).toUpperCase() + texto.slice(1).toLowerCase();
  }

  nombreCiudad.textContent = primeraMayus(cogerCiudad);
  document.getElementById("temperatura").textContent =
    " " + data.main.temp + "ºC";
  document.getElementById("sensacion").textContent =
    data.main.feels_like + " °C";
  document.getElementById("humedad").textContent = data.main.humidity + " %";
  document.getElementById("viento").textContent = data.wind.speed + " m/s";
  document.getElementById("nubes").textContent = data.clouds.all + " %";

  function convertirAHoras(x) {
    const fecha = new Date(x * 1000);
    return fecha.toLocaleTimeString("es-ES", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }
  const amanecer = data.sys.sunrise;
  document.getElementById("salidaSol").textContent =
    convertirAHoras(amanecer) + "h";
  const anochecer = data.sys.sunset;
  document.getElementById("puestaSol").textContent =
    convertirAHoras(anochecer) + "h";
  document.getElementById("nivelMar").textContent = data.main.sea_level;
  document.getElementById("visibilidad").textContent =
    data.visibility / 1000 + "Km";

  const iconoUrl = await fetch(
    `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`,
  );

  document.getElementById("icono").innerHTML =
    `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Icono del tiempo" class="w-40 h-40">`;

  const fondoClase = obtenerFondoPorIcono(icono);
  const divFondo = document.getElementById("fondoClima");
  divFondo.className = `mx-auto mt-10 flex h-3/5 w-4/5 rounded-2xl border-2 border-white ${fondoClase}`;

  inputCiudad.value = "";
}

botonBuscar.addEventListener("click", buscarClima);
inputCiudad.addEventListener("keydown", function (e) {
  const boton = e.key === "Enter";
  if (boton) {
    buscarClima();
    e.preventDefault();
  }
});

async function recuperarAlRecargar() {
  const ciudadGuardada = localStorage.getItem("guardarCiudad");
  inputCiudad.value = ciudadGuardada;
  await buscarClima();
}

window.onload = recuperarAlRecargar;
