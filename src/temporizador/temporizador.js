// Variables para el cronómetro
let cronometroInterval;
let cronometroTime = 0;
let isCronometroRunning = false;

// Funciones del cronómetro
function startCronometro() {
  if (!isCronometroRunning) {
    cronometroInterval = setInterval(() => {
      cronometroTime++;
      document.getElementById("cronometro").innerText =
        formatTime(cronometroTime);
    }, 1000);
    isCronometroRunning = true;
  }
}

function pauseCronometro() {
  clearInterval(cronometroInterval);
  isCronometroRunning = false;
}

function resetCronometro() {
  pauseCronometro();
  cronometroTime = 0;
  document.getElementById("cronometro").innerText = "00:00:00";
}

// Temporizador
let temporizadorInterval;
let temporizadorTime;
let isTemporizadorRunning = false;

function startTemporizador() {
  if (!isTemporizadorRunning) {
    const userTime = parseInt(document.getElementById("timeInput").value);
    temporizadorTime = userTime * 60; // Convertir a segundos

    temporizadorInterval = setInterval(() => {
      temporizadorTime--;
      document.getElementById("temporizador").innerText =
        formatTime(temporizadorTime);
      if (temporizadorTime <= 0) {
        resetTemporizador();
        alert("¡Tiempo completado!");
      }
    }, 1000);
    isTemporizadorRunning = true;
  }
}

function pauseTemporizador() {
  clearInterval(temporizadorInterval);
  isTemporizadorRunning = false;
}

function resetTemporizador() {
  pauseTemporizador();
  document.getElementById("temporizador").innerText = "00:00:00";
}

// Formato de tiempo (HH:MM:SS)
function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Event listeners para los botones del cronómetro
document
  .getElementById("startCronometro")
  .addEventListener("click", startCronometro);
document
  .getElementById("pauseCronometro")
  .addEventListener("click", pauseCronometro);
document
  .getElementById("resetCronometro")
  .addEventListener("click", resetCronometro);

// Event listeners para los botones del temporizador
document
  .getElementById("startTemporizador")
  .addEventListener("click", startTemporizador);
document
  .getElementById("pauseTemporizador")
  .addEventListener("click", pauseTemporizador);
document
  .getElementById("resetTemporizador")
  .addEventListener("click", resetTemporizador);
