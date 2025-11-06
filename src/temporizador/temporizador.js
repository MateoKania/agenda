let cronometroInterval;
let cronometroTime = 0;
let isCronometroRunning = false;

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

let temporizadorInterval;
let temporizadorTime;
let isTemporizadorRunning = false;

function startTemporizador() {
  if (!isTemporizadorRunning) {
    const userTime = parseInt(document.getElementById("timeInput").value);
    temporizadorTime = userTime * 60;

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

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

document
  .getElementById("startCronometro")
  .addEventListener("click", startCronometro);
document
  .getElementById("pauseCronometro")
  .addEventListener("click", pauseCronometro);
document
  .getElementById("resetCronometro")
  .addEventListener("click", resetCronometro);

document
  .getElementById("startTemporizador")
  .addEventListener("click", startTemporizador);
document
  .getElementById("pauseTemporizador")
  .addEventListener("click", pauseTemporizador);
document
  .getElementById("resetTemporizador")
  .addEventListener("click", resetTemporizador);
