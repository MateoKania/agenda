const fecha = () => {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth() + 1;
  const ano = fecha.getFullYear();
  const fechaHoy = `${dia}/${mes}/${ano}`;

  document.getElementById("fecha").textContent = fechaHoy;
};

setInterval(fecha, 1000);

const hora = () => {
  const date = new Date();
  const hora =
    date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  const minutos =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

  const horas = `${hora}:${minutos}`;

  document.getElementById("hora").textContent = horas;
};
setInterval(hora, 1000);
