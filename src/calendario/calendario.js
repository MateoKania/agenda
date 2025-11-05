import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";

document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");

  const calendar = new Calendar(calendarEl, {
    locale: esLocale,
    plugins: [dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin],
    initialView: "dayGridWeek",
    selectable: true,
    editable: true,

    headerToolbar: {
      left: "prev,next today,prevYear",
      center: "title",
      right: "nextYear,dayGridMonth,dayGridWeek",
    },
    buttonText: {
      prevYear: "Año -",
      nextYear: "Año +",
      prev: "Mes/Sem -",
      next: "Mes/Sem +",
    },

    firstDay: 1,

    selectable: true,
    editable: true,
  });

  calendar.render();
});
