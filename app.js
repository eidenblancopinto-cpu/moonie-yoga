/* =========================================================
   MOONIE YOGA — APP.JS
   Renderizado de rutinas + asanas + cronómetro
   Compatible con:
   - MOONIE_ROUTINES
   - MOONIE_POSES
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     ESTADO DE LA APP
     ======================================================= */

  let activeRoutine = null;
  let activePose = 0;
  let secondsLeft = 0;
  let timer = null;
  let isRunning = false;

  /* =======================================================
     ELEMENTOS DEL DOM
     ======================================================= */

  const routinesContainer =
    document.getElementById("routines") ||
    document.getElementById("routine-list") ||
    document.getElementById("routines-container");

  const routineDetail =
    document.getElementById("routine-detail");

  const routineTitle =
    document.getElementById("routine-title");

  const routineDescription =
    document.getElementById("routine-description");

  const posesContainer =
    document.getElementById("poses") ||
    document.getElementById("poses-container") ||
    document.getElementById("pose-list");

  const poseName =
    document.getElementById("pose-name");

  const poseSanskrit =
    document.getElementById("pose-sanskrit");

  const poseInstructions =
    document.getElementById("pose-instructions") ||
    document.getElementById("pose-instruction");

  const poseBreathing =
    document.getElementById("pose-breathing");

  const poseTransition =
    document.getElementById("pose-transition");

  const poseWarning =
    document.getElementById("pose-warning");

  const timerDisplay =
    document.getElementById("timer") ||
    document.getElementById("timer-display") ||
    document.getElementById("countdown");

  const progressDisplay =
    document.getElementById("progress");

  const progressBar =
    document.getElementById("progress-bar");

  const startButton =
    document.getElementById("start-timer") ||
    document.getElementById("start");

  const pauseButton =
    document.getElementById("pause-timer") ||
    document.getElementById("pause");

  const resetButton =
    document.getElementById("reset-timer") ||
    document.getElementById("reset");

  const nextButton =
    document.getElementById("next-pose") ||
    document.getElementById("next");

  const previousButton =
    document.getElementById("previous-pose") ||
    document.getElementById("previous");


  /* =======================================================
     UTILIDADES
     ======================================================= */

  function formatTime(totalSeconds) {
    totalSeconds = Math.max(0, Math.floor(totalSeconds));

    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    return (
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0")
    );
  }


  function getPoseDuration(pose) {

    if (!pose) return 30;

    let duration = pose.duration;

    /*
      Puede venir como:
      30
      "30"
      "00:30"
      "1:30"
      "2 min"
      "60 segundos"
    */

    if (typeof duration === "number") {
      return Math.max(1, Math.round(duration));
    }

    if (typeof duration === "string") {

      duration = duration.trim().toLowerCase();

      // MM:SS
      if (duration.includes(":")) {
        const parts = duration.split(":");

        const minutes = parseInt(parts[0], 10) || 0;
        const seconds = parseInt(parts[1], 10) || 0;

        return Math.max(1, minutes * 60 + seconds);
      }

      // segundos
      if (
        duration.includes("seg") ||
        duration.includes("second") ||
        duration.includes("s")
      ) {
        const value = parseFloat(duration);
        if (!isNaN(value)) return Math.max(1, Math.round(value));
      }

      // minutos
      if (
        duration.includes("min") ||
        duration.includes("minute") ||
        duration.includes("m")
      ) {
        const value = parseFloat(duration);
        if (!isNaN(value)) {
          return Math.max(1, Math.round(value * 60));
        }
      }

      // número escrito como texto
      const numeric = parseFloat(duration);

      if (!isNaN(numeric)) {
        return Math.max(1, Math.round(numeric));
      }
    }

    return 30;
  }


  function stopTimer() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }

    isRunning = false;
  }


  function updateTimerDisplay() {

    if (timerDisplay) {
      timerDisplay.textContent = formatTime(secondsLeft);
    }
  }


  /* =======================================================
     OBTENER RUTINAS
     ======================================================= */

  function getRoutines() {

    if (
      typeof MOONIE_ROUTINES !== "undefined" &&
      Array.isArray(MOONIE_ROUTINES)
    ) {
      return MOONIE_ROUTINES;
    }

    if (
      typeof window.MOONIE_ROUTINES !== "undefined" &&
      Array.isArray(window.MOONIE_ROUTINES)
    ) {
      return window.MOONIE_ROUTINES;
    }

    console.error(
      "MOONIE_ROUTINES no está disponible."
    );

    return [];
  }


  /* =======================================================
     NORMALIZAR ASANAS
     ======================================================= */

  function normalizePose(pose) {

    if (!pose) {
      return {
        name: "Asana",
        sanskrit: "",
        duration: 30,
        instruction: "",
        breathing: "",
        transition: "",
        warning: ""
      };
    }

    /*
      Si la rutina guarda un ID:
      "downward-dog"
      buscamos la información completa
      en MOONIE_POSES.
    */

    if (
      typeof pose === "string" ||
      typeof pose === "number"
    ) {

      const id = String(pose);

      if (
        typeof MOONIE_POSES !== "undefined" &&
        MOONIE_POSES
      ) {

        const catalogPose =
          MOONIE_POSES[id] ||
          MOONIE_POSES.find?.(
            item =>
              String(item.id) === id ||
              String(item.slug) === id
          );

        if (catalogPose) {
          return catalogPose;
        }
      }

      return {
        id,
        name: id,
        sanskrit: "",
        duration: 30,
        instruction: "",
        breathing: "",
        transition: "",
        warning: ""
      };
    }

    return pose;
  }


  /* =======================================================
     MOSTRAR TODAS LAS RUTINAS
     ======================================================= */

  function renderRoutines() {

    const routines = getRoutines();

    if (!routinesContainer) {
      console.warn(
        "No se encontró el contenedor de rutinas."
      );
      return;
    }

    routinesContainer.innerHTML = "";

    if (!routines.length) {

      routinesContainer.innerHTML = `
        <div class="empty-state">
          <h3>No hay prácticas disponibles</h3>
          <p>
            Comprueba que <strong>data.js</strong>
            se carga antes de <strong>app.js</strong>.
          </p>
        </div>
      `;

      return;
    }

    routines.forEach((routine, index) => {

      const card = document.createElement("article");

      card.className = "routine-card";

      card.dataset.routineId =
        routine.id ?? index;

      const number =
        routine.number ??
        index + 1;

      const name =
        routine.name ??
        `Práctica ${number}`;

      const style =
        routine.style ??
        "Yoga";

      const level =
        routine.level ??
        "";

      const duration =
        routine.duration ??
        "";

      const description =
        routine.description ??
        "";

      card.innerHTML = `
        <div class="routine-card-inner">

          <span class="routine-number">
            ${number}
          </span>

          <div class="routine-card-content">

            <h3>
              ${escapeHTML(name)}
            </h3>

            <div class="routine-meta">
              ${style ? `<span>${escapeHTML(style)}</span>` : ""}
              ${level ? `<span>${escapeHTML(level)}</span>` : ""}
              ${duration ? `<span>${escapeHTML(String(duration))}</span>` : ""}
            </div>

            ${
              description
                ? `<p>${escapeHTML(description)}</p>`
                : ""
            }

            <button
              class="routine-open"
              type="button"
              data-index="${index}"
            >
              Comenzar práctica
            </button>

          </div>

        </div>
      `;

      card
        .querySelector(".routine-open")
        .addEventListener("click", () => {

          openRoutine(index);

        });

      routinesContainer.appendChild(card);

    });

    console.log(
      `Moonie Yoga: ${routines.length} prácticas cargadas.`
    );
  }


  /* =======================================================
     ABRIR UNA RUTINA
     ======================================================= */

  function openRoutine(index) {

    const routines = getRoutines();

    const routine = routines[index];

    if (!routine) {
      console.error(
        "No se encontró la rutina:",
        index
      );
      return;
    }

    stopTimer();

    activeRoutine = routine;
    activePose = 0;

    const poses =
      Array.isArray(routine.poses)
        ? routine.poses
        : [];

    if (!poses.length) {

      console.warn(
        "La rutina no tiene asanas:",
        routine
      );

      if (routineDetail) {
        routineDetail.hidden = false;
        routineDetail.innerHTML = `
          <div class="empty-state">
            <h3>${escapeHTML(
              routine.name || "Práctica"
            )}</h3>

            <p>
              Esta práctica todavía no contiene
              asanas correctamente cargadas.
            </p>
          </div>
        `;
      }

      return;
    }

    if (routineDetail) {
      routineDetail.hidden = false;
      routineDetail.style.display = "";
    }

    if (routineTitle) {
      routineTitle.textContent =
        routine.name ||
        `Práctica ${index + 1}`;
    }

    if (routineDescription) {
      routineDescription.textContent =
        routine.description || "";
    }

    renderPoseList();

    loadPose(0);

    /*
      Llevar al usuario a la práctica.
    */

    if (routineDetail) {

      routineDetail.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  }


  /* =======================================================
     MOSTRAR LISTA DE ASANAS
     ======================================================= */

  function renderPoseList() {

    if (!posesContainer || !activeRoutine) {
      return;
    }

    const poses =
      Array.isArray(activeRoutine.poses)
        ? activeRoutine.poses
        : [];

    posesContainer.innerHTML = "";

    poses.forEach((rawPose, index) => {

      const pose =
        normalizePose(rawPose);

      const item =
        document.createElement("button");

      item.type = "button";

      item.className =
        "pose-list-item";

      if (index === activePose) {
        item.classList.add("active");
      }

      item.dataset.poseIndex =
        index;

      item.innerHTML = `
        <span class="pose-list-number">
          ${index + 1}
        </span>

        <span class="pose-list-text">

          <strong>
            ${escapeHTML(
              pose.name ||
              `Asana ${index + 1}`
            )}
          </strong>

          ${
            pose.sanskrit
              ? `<small>${escapeHTML(
                  pose.sanskrit
                )}</small>`
              : ""
          }

        </span>

        <span class="pose-list-duration">
          ${formatTime(
            getPoseDuration(pose)
          )}
        </span>
      `;

      item.addEventListener(
        "click",
        () => {

          stopTimer();

          loadPose(index);

        }
      );

      posesContainer.appendChild(item);

    });

  }


  /* =======================================================
     CARGAR ASANA
     ======================================================= */

  function loadPose(index) {

    if (!activeRoutine) {
      return;
    }

    const poses =
      Array.isArray(activeRoutine.poses)
        ? activeRoutine.poses
        : [];

    if (!poses.length) {
      return;
    }

    if (index < 0) {
      index = 0;
    }

    if (index >= poses.length) {
      index = poses.length - 1;
    }

    activePose = index;

    const pose =
      normalizePose(poses[index]);

    secondsLeft =
      getPoseDuration(pose);

    updateTimerDisplay();

    /* Nombre */

    if (poseName) {
      poseName.textContent =
        pose.name ||
        `Asana ${index + 1}`;
    }

    /* Sánscrito */

    if (poseSanskrit) {

      poseSanskrit.textContent =
        pose.sanskrit || "";

      poseSanskrit.style.display =
        pose.sanskrit ? "" : "none";

    }

    /* Instrucciones */

    if (poseInstructions) {

      poseInstructions.innerHTML =
        formatText(
          pose.instruction ||
          pose.instructions ||
          pose.description ||
          ""
        );

    }

    /* Respiración */

    if (poseBreathing) {

      poseBreathing.innerHTML =
        formatText(
          pose.breathing ||
          ""
        );

      poseBreathing.parentElement.style.display =
        pose.breathing ? "" : "none";
    }

    /* Transición */

    if (poseTransition) {

      poseTransition.innerHTML =
        formatText(
          pose.transition ||
          ""
        );

      poseTransition.parentElement.style.display =
        pose.transition ? "" : "none";
    }

    /* Precauciones */

    if (poseWarning) {

      poseWarning.innerHTML =
        formatText(
          pose.warning ||
          pose.precautions ||
          ""
        );

      poseWarning.parentElement.style.display =
        (
          pose.warning ||
          pose.precautions
        )
          ? ""
          : "none";
    }

    updatePoseList();

    updateProgress();

  }


  /* =======================================================
     ACTUALIZAR LISTA DE ASANAS
     ======================================================= */

  function updatePoseList() {

    if (!posesContainer) {
      return;
    }

    const items =
      posesContainer.querySelectorAll(
        ".pose-list-item"
      );

    items.forEach((item, index) => {

      item.classList.toggle(
        "active",
        index === activePose
      );

    });

  }


  /* =======================================================
     PROGRESO
     ======================================================= */

  function updateProgress() {

    if (!activeRoutine) {
      return;
    }

    const poses =
      Array.isArray(activeRoutine.poses)
        ? activeRoutine.poses
        : [];

    const total =
      poses.length;

    const current =
      activePose + 1;

    if (progressDisplay) {

      progressDisplay.textContent =
        `${current} / ${total}`;

    }

    if (progressBar) {

      const percentage =
        total > 0
          ? (current / total) * 100
          : 0;

      progressBar.style.width =
        `${percentage}%`;

    }

  }


  /* =======================================================
     CRONÓMETRO
     ======================================================= */

  function startTimer() {

    if (!activeRoutine) {
      return;
    }

    if (isRunning) {
      return;
    }

    if (secondsLeft <= 0) {
      secondsLeft = 1;
    }

    isRunning = true;

    timer = setInterval(() => {

      secondsLeft--;

      updateTimerDisplay();

      if (secondsLeft <= 0) {

        stopTimer();

        nextPose();

      }

    }, 1000);

  }


  function pauseTimer() {

    stopTimer();

    updateTimerDisplay();

  }


  function resetTimer() {

    stopTimer();

    if (!activeRoutine) {
      return;
    }

    const poses =
      Array.isArray(activeRoutine.poses)
        ? activeRoutine.poses
        : [];

    const pose =
      normalizePose(
        poses[activePose]
      );

    secondsLeft =
      getPoseDuration(pose);

    updateTimerDisplay();

  }


  /* =======================================================
     SIGUIENTE ASANA
     ======================================================= */

  function nextPose() {

    if (!activeRoutine) {
      return;
    }

    const poses =
      Array.isArray(activeRoutine.poses)
        ? activeRoutine.poses
        : [];

    if (
      activePose <
      poses.length - 1
    ) {

      loadPose(
        activePose + 1
      );

      return;

    }

    /*
      Hemos terminado la última asana.
    */

    stopTimer();

    showRoutineFinished();

  }


  /* =======================================================
     ASANA ANTERIOR
     ======================================================= */

  function previousPose() {

    if (!activeRoutine) {
      return;
    }

    stopTimer();

    if (activePose > 0) {

      loadPose(
        activePose - 1
      );

    }

  }


  /* =======================================================
     FINAL DE LA PRÁCTICA
     ======================================================= */

  function showRoutineFinished() {

    secondsLeft = 0;

    updateTimerDisplay();

    if (progressDisplay) {

      const total =
        activeRoutine.poses?.length || 0;

      progressDisplay.textContent =
        `${total} / ${total}`;

    }

    /*
      Pequeña señal visual.
    */

    if (routineDetail) {

      routineDetail.classList.add(
        "routine-completed"
      );

      setTimeout(() => {

        routineDetail.classList.remove(
          "routine-completed"
        );

      }, 2500);

    }

    console.log(
      "Práctica completada:",
      activeRoutine.name
    );

  }


  /* =======================================================
     BOTONES
     ======================================================= */

  if (startButton) {

    startButton.addEventListener(
      "click",
      startTimer
    );

  }

  if (pauseButton) {

    pauseButton.addEventListener(
      "click",
      pauseTimer
    );

  }

  if (resetButton) {

    resetButton.addEventListener(
      "click",
      resetTimer
    );

  }

  if (nextButton) {

    nextButton.addEventListener(
      "click",
      nextPose
    );

  }

  if (previousButton) {

    previousButton.addEventListener(
      "click",
      previousPose
    );

  }


  /* =======================================================
     ESCAPE HTML
     ======================================================= */

  function escapeHTML(value) {

    if (value === null ||
        value === undefined) {
      return "";
    }

    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  }


  /* =======================================================
     FORMATEAR TEXTO
     ======================================================= */

  function formatText(value) {

    if (
      value === null ||
      value === undefined
    ) {
      return "";
    }

    return escapeHTML(value)
      .replace(/\n/g, "<br>");

  }


  /* =======================================================
     TECLADO
     ======================================================= */

  document.addEventListener(
    "keydown",
    event => {

      /*
        No interferir si la persona está
        escribiendo en un input.
      */

      const tag =
        event.target?.tagName;

      if (
        tag === "INPUT" ||
        tag === "TEXTAREA"
      ) {
        return;
      }

      if (event.code === "Space") {

        event.preventDefault();

        if (isRunning) {
          pauseTimer();
        } else {
          startTimer();
        }

      }

      if (
        event.key === "ArrowRight"
      ) {

        nextPose();

      }

      if (
        event.key === "ArrowLeft"
      ) {

        previousPose();

      }

    }
  );


  /* =======================================================
     INICIALIZAR
     ======================================================= */

  renderRoutines();

  console.log(
    "🌙 Moonie Yoga iniciado correctamente."
  );

});



