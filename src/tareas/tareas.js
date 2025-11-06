const tarea = document.getElementById("Tarea");
const botonAñadir = document.getElementById("GuardarTarea");

const tareaGuardada = botonAñadir.addEventListener("click", function () {
  const texto = tarea.value;
  const ahora = new Date();
  const fechaHora = ahora.toLocaleString();

  const tareaFecha = { Tarea: texto, FechaHora: fechaHora };

  let listaTareas = localStorage.getItem("Tareas");
  if (listaTareas === null) {
    listaTareas = [];
  } else {
    listaTareas = JSON.parse(listaTareas);
  }

  listaTareas.push(tareaFecha);
  localStorage.setItem("Tareas", JSON.stringify(listaTareas));

  const fila = document.createElement("tr");
  const celdaTarea = document.createElement("td");
  celdaTarea.textContent = tareaFecha.Tarea;
  const celdaFecha = document.createElement("td");
  celdaFecha.textContent = tareaFecha.FechaHora;
  const celdaBoton = document.createElement("button");
  celdaBoton.className = "bg-red-500 rounded text-white cursor-pointer p-2";
  celdaBoton.textContent = "Acabada";

  celdaBoton.addEventListener("click", (event) => {
    const datoTarea = celdaTarea.textContent;
    const fechaNueva = new Date();
    const fechaNuevaAhora = fechaNueva.toLocaleString();
    const celdasNuevas = { Tarea: datoTarea, Fecha: fechaNuevaAhora };

    const filaNueva = document.createElement("tr");
    const celdaTareaNueva = document.createElement("td");
    celdaTareaNueva.textContent = celdasNuevas.Tarea;
    const celdaFechaNueva = document.createElement("td");
    celdaFechaNueva.textContent = celdasNuevas.Fecha;
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className =
      "bg-red-500 rounded text-white cursor-pointer p-2";

    botonEliminar.addEventListener("click", function () {
      const tareaTexto = celdaTareaNueva.textContent;
      const tareaFecha = celdaFechaNueva.textContent;

      let listaAcabadas =
        JSON.parse(localStorage.getItem("TareasAcabadas")) || [];
      listaAcabadas = listaAcabadas.filter(
        (t) => t.Tarea !== tareaTexto || t.Fecha !== tareaFecha,
      );
      localStorage.setItem("TareasAcabadas", JSON.stringify(listaAcabadas));
      filaNueva.remove();
    });

    const celdaEliminar = document.createElement("td");
    celdaEliminar.appendChild(botonEliminar);
    filaNueva.appendChild(celdaTareaNueva);
    filaNueva.appendChild(celdaFechaNueva);
    filaNueva.appendChild(celdaEliminar);
    document.getElementById("cuerpoTabla2").appendChild(filaNueva);

    let listaAcabadas = localStorage.getItem("TareasAcabadas");
    if (listaAcabadas === null) {
      listaAcabadas = [];
    } else {
      listaAcabadas = JSON.parse(listaAcabadas);
    }

    listaAcabadas.push(celdasNuevas);
    localStorage.setItem("TareasAcabadas", JSON.stringify(listaAcabadas));

    listaTareas = listaTareas.filter(
      (t) =>
        t.Tarea !== tareaFecha.Tarea || t.FechaHora !== tareaFecha.FechaHora,
    );
    localStorage.setItem("Tareas", JSON.stringify(listaTareas));
    fila.remove();
  });

  fila.appendChild(celdaTarea);
  fila.appendChild(celdaFecha);
  fila.appendChild(celdaBoton);
  document.getElementById("cuerpoTabla1").appendChild(fila);

  tarea.value = "";
  preventDefault();
});

function mostrarTareasGuardadas() {
  let listaTareas = localStorage.getItem("Tareas");
  if (listaTareas === null) {
    listaTareas = [];
  } else {
    listaTareas = JSON.parse(listaTareas);
  }

  listaTareas.forEach(function (tareaFecha) {
    const fila = document.createElement("tr");
    const celdaTarea = document.createElement("td");
    celdaTarea.textContent = tareaFecha.Tarea;
    const celdaFecha = document.createElement("td");
    celdaFecha.textContent = tareaFecha.FechaHora;
    const celdaBoton = document.createElement("td");
    const boton = document.createElement("button");
    boton.className = "bg-red-500 rounded text-white cursor-pointer p-2";
    boton.textContent = "Acabada";
    celdaBoton.appendChild(boton);

    fila.appendChild(celdaTarea);
    fila.appendChild(celdaFecha);
    fila.appendChild(celdaBoton);
    document.getElementById("cuerpoTabla1").appendChild(fila);

    boton.addEventListener("click", (event) => {
      const datoTarea = celdaTarea.textContent;
      const fechaNueva = new Date();
      const fechaNuevaAhora = fechaNueva.toLocaleString();
      const celdasNuevas = { Tarea: datoTarea, Fecha: fechaNuevaAhora };

      const filaNueva = document.createElement("tr");
      const celdaTareaNueva = document.createElement("td");
      celdaTareaNueva.textContent = celdasNuevas.Tarea;
      const celdaFechaNueva = document.createElement("td");
      celdaFechaNueva.textContent = celdasNuevas.Fecha;
      const botonEliminar = document.createElement("button");
      botonEliminar.textContent = "Eliminar";

      botonEliminar.addEventListener("click", function () {
        const tareaTexto = celdaTareaNueva.textContent;
        const tareaFecha = celdaFechaNueva.textContent;

        let listaAcabadas =
          JSON.parse(localStorage.getItem("TareasAcabadas")) || [];
        listaAcabadas = listaAcabadas.filter(
          (t) => t.Tarea !== tareaTexto || t.Fecha !== tareaFecha,
        );
        localStorage.setItem("TareasAcabadas", JSON.stringify(listaAcabadas));
        filaNueva.remove();
      });

      const celdaEliminar = document.createElement("td");
      celdaEliminar.appendChild(botonEliminar);
      filaNueva.appendChild(celdaTareaNueva);
      filaNueva.appendChild(celdaFechaNueva);
      filaNueva.appendChild(celdaEliminar);
      document.getElementById("cuerpoTabla2").appendChild(filaNueva);

      let listaAcabadas = localStorage.getItem("TareasAcabadas");
      if (listaAcabadas === null) {
        listaAcabadas = [];
      } else {
        listaAcabadas = JSON.parse(listaAcabadas);
      }

      listaAcabadas.push(celdasNuevas);
      localStorage.setItem("TareasAcabadas", JSON.stringify(listaAcabadas));

      listaTareas = listaTareas.filter(
        (t) =>
          t.Tarea !== tareaFecha.Tarea || t.FechaHora !== tareaFecha.FechaHora,
      );
      localStorage.setItem("Tareas", JSON.stringify(listaTareas));
      fila.remove();
    });
  });
}

function mostrarTareasAcabadas() {
  let listaAcabadas = localStorage.getItem("TareasAcabadas");
  if (listaAcabadas === null) {
    listaAcabadas = [];
  } else {
    listaAcabadas = JSON.parse(listaAcabadas);
  }

  listaAcabadas.forEach(function (tareaAcabada) {
    const fila = document.createElement("tr");
    const celdaTarea = document.createElement("td");
    celdaTarea.textContent = tareaAcabada.Tarea;
    const celdaFecha = document.createElement("td");
    celdaFecha.textContent = tareaAcabada.Fecha;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.className =
      "bg-red-500 rounded text-white cursor-pointer p-2";

    botonEliminar.addEventListener("click", function () {
      const tareaTexto = celdaTarea.textContent;
      const tareaFecha = celdaFecha.textContent;

      listaAcabadas = listaAcabadas.filter(
        (t) => t.Tarea !== tareaTexto || t.Fecha !== tareaFecha,
      );
      localStorage.setItem("TareasAcabadas", JSON.stringify(listaAcabadas));
      fila.remove();
    });

    const celdaBoton = document.createElement("td");
    celdaBoton.appendChild(botonEliminar);
    fila.appendChild(celdaTarea);
    fila.appendChild(celdaFecha);
    fila.appendChild(celdaBoton);
    document.getElementById("cuerpoTabla2").appendChild(fila);
  });
}

mostrarTareasGuardadas();
mostrarTareasAcabadas();
