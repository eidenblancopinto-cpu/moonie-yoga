/* =========================================
   MOONIE YOGA — APP CORE
========================================= */

let activeRoutine = null;
let activePose = 0;
let secondsLeft = 0;
let timer = null;
let isRunning = false;

const settings = {
  vibration: localStorage.getItem("moonieVibration") !== "false"
};


/* =========================================
   UTILIDADES
========================================= */

function formatTime(seconds) {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;

  return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}


function vibrate(pattern) {
  if (settings.vibration && navigator.vibrate) {
    navigator.vibrate(pattern);
  }
}


/* =========================================
   NAVEGACIÓN
========================================= */

function showScreen(id, button = null) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
  }

  document.querySelectorAll(".nav-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  if (button) {
    button.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================
   RUTINAS
========================================= */

function renderRoutines(list = MOONIE_ROUTINES) {

  const html = list.map(routine => {

    return `
      <div class="routine"
           onclick="openRoutine('${routine.id}')">

        <div class="routine-top">
          <h3>${routine.name}</h3>

          <span class="badge">
            ${routine.duration} min
          </span>
        </div>

        <p>
          ${routine.style} · ${routine.level}
        </p>

        <p>
          ${routine.description}
        </p>

      </div>
    `;

  }).join("");

  const home = document.getElementById("homeRoutines");
  const all = document.getElementById("allRoutines");

  if (home) {
    home.innerHTML = MOONIE_ROUTINES
      .slice(0, 5)
      .map(routine => routineCard(routine))
      .join("");
  }

  if (all) {
    all.innerHTML = html;
  }
}


function routineCard(routine) {

  return `
    <div class="routine"
         onclick="openRoutine('${routine.id}')">

      <div class="routine-top">

        <h3>${routine.name}</h3>

        <span class="badge">
          ${routine.duration} min
        </span>

      </div>

      <p>
        ${routine.style} · ${routine.level}
      </p>

    </div>
  `;
}


/* =========================================
   ABRIR RUTINA
========================================= */

function openRoutine(id) {

  const routine = MOONIE_ROUTINES.find(
    item => item.id === id
  );

  if (!routine) return;

  activeRoutine = routine;
  activePose = 0;

  secondsLeft =
    routine.poses[0].duration;

  isRunning = false;

  clearInterval(timer);

  updatePracticeScreen();

  showScreen("practice");

}


/* =========================================
   TEMPORIZADOR
========================================= */

function startTimer() {

  if (!activeRoutine) return;

  if (isRunning) return;

  isRunning = true;

  updatePlayButton();

  timer = setInterval(() => {

    secondsLeft--;

    if (secondsLeft <= 0) {

      goToNextPose();

      return;
    }

    updatePracticeScreen();

  }, 1000);
}


function pauseTimer() {

  isRunning = false;

  clearInterval(timer);

  updatePlayButton();
}


function toggleTimer() {

  if (isRunning) {
    pauseTimer();
  } else {
    startTimer();
  }
}


function resetPractice() {

  if (!activeRoutine) return;

  clearInterval(timer);

  isRunning = false;
  activePose = 0;

  secondsLeft =
    activeRoutine.poses[0].duration;

  updatePracticeScreen();
  updatePlayButton();
}


/* =========================================
   POSTURAS
========================================= */

function goToNextPose() {

  if (!activeRoutine) return;

  if (
    activePose >=
    activeRoutine.poses.length - 1
  ) {

    completeRoutine();

    return;
  }

  activePose++;

  secondsLeft =
    activeRoutine.poses[activePose].duration;

  vibrate([55]);

  updatePracticeScreen();
}


function goToPreviousPose() {

  if (!activeRoutine) return;

  if (activePose === 0) return;

  activePose--;

  secondsLeft =
    activeRoutine.poses[activePose].duration;

  vibrate([55]);

  updatePracticeScreen();
}


/* =========================================
   ACTUALIZAR PANTALLA
========================================= */

function updatePracticeScreen() {

  if (!activeRoutine) return;

  const pose =
    activeRoutine.poses[activePose];

  const next =
    activeRoutine.poses[activePose + 1];

  const timerElement =
    document.getElementById("timer");

  const poseElement =
    document.getElementById("poseName");

  const nextElement =
    document.getElementById("nextPose");

  const counterElement =
    document.getElementById("stepCounter");

  const progressElement =
    document.getElementById("progress");

  const routineElement =
    document.getElementById("routineName");


  if (routineElement) {
    routineElement.textContent =
      activeRoutine.name;
  }


  if (timerElement) {
    timerElement.textContent =
      formatTime(secondsLeft);
  }


  if (poseElement) {
    poseElement.textContent =
      pose.name;
  }


  if (nextElement) {

    nextElement.textContent =
      next
        ? `Siguiente: ${next.name}`
        : "Última postura 🌙";
  }


  if (counterElement) {

    counterElement.textContent =
      `${activePose + 1} / ${activeRoutine.poses.length}`;
  }


  if (progressElement) {

    const percentage =
      ((activePose) /
      activeRoutine.poses.length) * 100;

    progressElement.style.width =
      `${percentage}%`;
  }

  updatePoseInformation(pose);
}


/* =========================================
   INFORMACIÓN DE LA POSTURA
========================================= */

function updatePoseInformation(pose) {

  const info =
    document.getElementById("poseInformation");

  if (!info) return;

  info.innerHTML = `

    <div class="asana-card">

      <h3>${pose.name}</h3>

      <p>
        <strong>${pose.sanskrit}</strong>
      </p>

      <p>
        ${pose.instruction}
      </p>

      <p>
        🫁 <strong>Respiración:</strong><br>
        ${pose.breathing}
      </p>

      <p>
        🔄 <strong>Transición:</strong><br>
        ${pose.transition}
      </p>

      <p>
        ⚠️ <strong>Precaución:</strong><br>
        ${pose.warning}
      </p>

    </div>
  `;
}


/* =========================================
   BOTÓN PLAY
========================================= */

function updatePlayButton() {

  const button =
    document.getElementById("playButton");

  if (!button) return;

  button.textContent =
    isRunning
      ? "Ⅱ Pausar"
      : "▶ Comenzar";
}


/* =========================================
   FINALIZAR
========================================= */

function completeRoutine() {

  clearInterval(timer);

  isRunning = false;

  vibrate([
    55,
    90,
    55,
    90,
    55
  ]);

  let completed =
    Number(
      localStorage.getItem(
        "moonieCompleted"
      ) || 0
    );

  completed++;

  localStorage.setItem(
    "moonieCompleted",
    completed
  );

  activePose =
    activeRoutine.poses.length - 1;

  secondsLeft = 0;

  updatePracticeScreen();

  const timerElement =
    document.getElementById("timer");

  const poseElement =
    document.getElementById("poseName");

  const nextElement =
    document.getElementById("nextPose");

  if (timerElement) {
    timerElement.textContent = "✨";
  }

  if (poseElement) {
    poseElement.textContent =
      "Práctica completada";
  }

  if (nextElement) {
    nextElement.textContent =
      "Namaste 🌙";
  }

  updateProgress();
  updatePlayButton();
}


/* =========================================
   ASANAS
========================================= */

function renderAsanas() {

  const container =
    document.getElementById("asanaList");

  if (!container) return;

  container.innerHTML =
    MOONIE_ASANAS.map(asana => {

      return `

        <div class="asana-card"
             onclick="openAsana('${asana.id}')">

          <h3>
            ${asana.name}
          </h3>

          <p>
            <strong>
              ${asana.sanskrit}
            </strong>
          </p>

          <p>
            ${asana.shortDescription}
          </p>

          <p>
            ${asana.level} ·
            ${asana.family}
          </p>

        </div>

      `;

    }).join("");
}


/* =========================================
   FICHA DE ASANA
========================================= */

function openAsana(id) {

  const asana =
    MOONIE_ASANAS.find(
      item => item.id === id
    );

  if (!asana) return;

  const container =
    document.getElementById("asanaList");

  if (!container) return;

  container.innerHTML = `

    <button class="back"
            onclick="renderAsanas()">

      ← Volver a asanas

    </button>

    <div class="hero">

      <div class="moon">
        🪷
      </div>

      <h1>
        ${asana.name}
      </h1>

      <p>
        ${asana.sanskrit}
      </p>

      <p>
        ${asana.shortDescription}
      </p>

    </div>


    <div class="asana-card">

      <h3>🧘‍♀️ Ejecución</h3>

      ${asana.execution
        .map((step, index) =>
          `<p>${index + 1}. ${step}</p>`
        )
        .join("")}

    </div>


    <div class="asana-card">

      <h3>🫁 Respiración</h3>

      <p>
        ${asana.breathing}
      </p>

    </div>


    <div class="asana-card">

      <h3>🦴 Anatomía</h3>

      <p>
        ${asana.anatomy.primary}
      </p>

      <p>
        <strong>Zonas:</strong>
        ${asana.anatomy.areas.join(", ")}
      </p>

    </div>


    <div class="asana-card">

      <h3>✨ Beneficios</h3>

      ${asana.benefits
        .map(item => `<p>• ${item}</p>`)
        .join("")}

    </div>


    <div class="asana-card">

      <h3>⚠️ Precauciones</h3>

      ${asana.precautions
        .map(item => `<p>• ${item}</p>`)
        .join("")}

    </div>


    <div class="asana-card">

      <h3>🚨 Señales para detenerse</h3>

      ${asana.redFlags
        .map(item => `<p>• ${item}</p>`)
        .join("")}

    </div>


    <div class="asana-card">

      <h3>🪷 Material</h3>

      ${asana.props
        .map(item => `<p>• ${item}</p>`)
        .join("")}

    </div>


    <div class="asana-card">

      <h3>🔄 Variaciones</h3>

      ${asana.variations
        .map(item => `<p>• ${item}</p>`)
        .join("")}

    </div>

  `;
}


/* =========================================
   FILTROS
========================================= */

function filterNeed(goal) {

  const filtered =
    MOONIE_ROUTINES.filter(
      routine => routine.goal === goal
    );

  const container =
    document.getElementById("allRoutines");

  if (!container) return;

  container.innerHTML =
    filtered.map(routineCard).join("");

  showScreen("explore");
}


function filterStyle(style) {

  const filtered =
    MOONIE_ROUTINES.filter(
      routine =>
        routine.style
          .toLowerCase()
          .includes(style.toLowerCase())
    );

  const container =
    document.getElementById("allRoutines");

  if (!container) return;

  container.innerHTML =
    filtered.map(routineCard).join("");

  showScreen("explore");
}


/* =========================================
   PROGRESO
========================================= */

function updateProgress() {

  const element =
    document.getElementById(
      "completedCount"
    );

  if (!element) return;

  element.textContent =
    localStorage.getItem(
      "moonieCompleted"
    ) || "0";
}


/* =========================================
   INICIALIZACIÓN
========================================= */

function initMoonieYoga() {

  renderRoutines();

  renderAsanas();

  updateProgress();

  updatePlayButton();

  console.log(
    "🌙 Moonie Yoga iniciada correctamente"
  );
}


document.addEventListener(
  "DOMContentLoaded",
  initMoonieYoga
);
