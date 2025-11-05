const frases = [
  "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
  "No sueñes tu vida, vive tu sueño.",
  "La disciplina es el puente entre metas y logros.",
  "Haz hoy lo que otros no quieren, para lograr mañana lo que otros no pueden.",
  "Cada día es una nueva oportunidad para mejorar.",
  "Cree en ti mismo y todo será posible.",
  "La constancia vence la resistencia.",
  "El único límite es el que te pones a ti mismo.",
  "No te rindas, cada fracaso es un paso hacia el éxito.",
  "El esfuerzo de hoy será la recompensa de mañana.",
  "Aprende a disfrutar del camino, no solo del destino.",
  "Tus hábitos diarios determinan tu futuro.",
  "Si quieres resultados diferentes, no hagas siempre lo mismo.",
  "La motivación te impulsa, el hábito te mantiene.",
  "No dejes para mañana lo que puedes hacer hoy.",
  "Pequeños cambios llevan a grandes resultados.",
  "El miedo es solo una barrera que puedes superar.",
  "La paciencia y la perseverancia son tus mejores aliados.",
  "Con cada paso estás más cerca de tu meta.",
  "Rodéate de personas que te inspiren a crecer.",
  "Aprende de los errores y sigue adelante.",
  "El éxito no es casualidad, es esfuerzo constante.",
  "Confía en tu intuición y en tu capacidad.",
  "Todo logro comienza con la decisión de intentarlo.",
  "No esperes el momento perfecto, créalo.",
  "La actitud positiva atrae oportunidades.",
  "Cada día es una página en blanco de tu historia.",
  "El cambio empieza dentro de ti.",
  "No compares tu camino con el de los demás.",
  "El trabajo duro supera al talento cuando el talento no trabaja duro.",
  "Visualiza tu éxito y trabaja para alcanzarlo.",
  "La constancia es más poderosa que la fuerza.",
  "Nunca es tarde para reinventarte.",
  "El fracaso es solo el primer intento hacia el éxito.",
  "Sé la mejor versión de ti mismo cada día.",
  "Aprende a levantarte cada vez que caes.",
  "El optimismo es la fe que conduce al logro.",
  "La clave del éxito es empezar antes de estar listo.",
  "Transforma tus sueños en objetivos y tus objetivos en acciones.",
  "Cada esfuerzo cuenta, por pequeño que parezca.",
  "No te conformes con menos de lo que mereces.",
  "El cambio requiere acción, no solo intención.",
  "Cree que puedes y ya estás a mitad de camino.",
  "El éxito no es la clave de la felicidad; la felicidad es la clave del éxito.",
  "Tu mente es tu herramienta más poderosa.",
  "No dejes que las dudas detengan tu progreso.",
  "Aprovecha cada oportunidad que la vida te da.",
  "La acción es la clave para todo logro.",
  "El futuro pertenece a quienes creen en la belleza de sus sueños.",
  "No te detengas hasta estar orgulloso.",
  "Cada día es una nueva oportunidad para aprender.",
  "La pasión mueve montañas.",
  "Haz que cada día cuente.",
  "El éxito es la suma de pequeños pasos diarios.",
  "Nunca subestimes el poder de la perseverancia.",
  "La diferencia entre ordinario y extraordinario es ese pequeño extra.",
  "La autodisciplina es el camino hacia la libertad.",
  "Cambia tus pensamientos y cambiarás tu mundo.",
  "No temas empezar de nuevo, es una oportunidad de crecer.",
  "Los grandes logros requieren tiempo y paciencia.",
  "No busques la aprobación de otros, busca la tuya propia.",
  "Cada desafío es una oportunidad para mejorar.",
  "El aprendizaje constante es la clave del éxito.",
  "Confía en el proceso, incluso cuando no veas resultados inmediatos.",
  "La gratitud convierte lo que tenemos en suficiente.",
  "El éxito viene a quienes trabajan mientras esperan.",
  "No hay límites, solo los que tú te impones.",
  "Persiste, incluso cuando sea difícil.",
  "Cada día es una nueva batalla, lucha por tus sueños.",
  "No te compares, compite contigo mismo.",
  "La excelencia no es un acto, es un hábito.",
  "Cree en el poder de tus acciones.",
  "El esfuerzo constante vence al talento sin disciplina.",
  "El éxito comienza con un pequeño paso.",
  "No sueñes en pequeño, sueña en grande y actúa.",
  "El progreso es mejor que la perfección.",
  "Cada día que trabajas en ti, estás más cerca de tu meta.",
  "El coraje no es la ausencia de miedo, sino avanzar a pesar de él.",
  "Transforma los obstáculos en oportunidades.",
  "La paciencia es amarga, pero sus frutos son dulces.",
  "Haz que cada momento cuente.",
  "El éxito no es final, el fracaso no es fatal: lo que cuenta es el coraje.",
  "Los sueños grandes requieren acciones grandes.",
  "La determinación de hoy define tu mañana.",
  "El cambio positivo comienza en ti.",
  "El verdadero crecimiento ocurre fuera de tu zona de confort.",
  "La acción constante crea resultados extraordinarios.",
  "Nunca dejes de aprender, nunca dejes de crecer.",
  "Tu actitud determina tu dirección.",
  "Cada esfuerzo pequeño suma en grande.",
  "No te rindas, la victoria puede estar a la vuelta de la esquina.",
  "La motivación te da el impulso, la disciplina te lleva al final.",
  "Los límites existen solo en tu mente.",
  "Haz más de lo que te da miedo hacer.",
  "El éxito requiere enfoque y persistencia.",
  "No esperes por la oportunidad, créala.",
  "Tu futuro depende de lo que haces hoy.",
  "Lo que hoy parece difícil será tu orgullo mañana.",
  "La pasión + acción = resultados.",
  "El cambio no ocurre esperando, sino actuando.",
  "Persigue la excelencia, no la perfección.",
  "Cada día es una nueva oportunidad para avanzar.",
  "La grandeza empieza con un pequeño paso.",
  "Lo imposible solo tarda un poco más.",
  "Si puedes soñarlo, puedes lograrlo.",
];
async function actualizarFrase() {
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  document.getElementById("motivate").textContent = frases[indiceAleatorio];
  localStorage.setItem("ultimaFrase", frases[indiceAleatorio]);
}

const apikeyMotivate = import.meta.env.VITE_APIKEY_MOTIVATE;

document.addEventListener("DOMContentLoaded", () => {
  const fraseGuardada = localStorage.getItem("ultimaFrase");
  if (fraseGuardada) {
    document.getElementById("motivate").textContent = fraseGuardada;
  } else {
    actualizarFrase();
  }
});
setInterval(actualizarFrase, 3600000);
document
  .getElementById("actualizar")
  .addEventListener("click", actualizarFrase);

async function llamadaRes() {
  const res = await fetch(
    `https://api.unsplash.com/photos/random?query=landscape&client_id=${apikeyMotivate}`,
  );
  const data = await res.json();

  const imagen = data.urls.full;

  const section = document.getElementById("Imagen");
  section.style.backgroundImage = `url(${imagen})`;

  section.style.backgroundSize = "cover";
  section.style.backgroundPosition = "center";
  section.style.backgroundRepeat = "no-repeat";
  localStorage.setItem("ultimaImagen", imagen);
}

document.addEventListener("DOMContentLoaded", () => {
  const imagenGuardada = localStorage.getItem("ultimaImagen");
  const section = document.getElementById("Imagen");
  if (imagenGuardada) {
    section.style.backgroundImage = `url(${imagenGuardada})`;

    section.style.backgroundSize = "cover";
    section.style.backgroundPosition = "center";
    section.style.backgroundRepeat = "no-repeat";
  } else {
    llamadaRes();
  }
  setInterval(llamadaRes, 3600000);
});
