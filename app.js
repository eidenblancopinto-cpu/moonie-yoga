/* =========================================================
   MOONIE YOGA 🌙🪷
   APP.JS — CONTROL PRINCIPAL DE LA APLICACIÓN
   ========================================================= */

(() => {
  "use strict";

  /* ---------------------------------------------------------
     ESTADO
     --------------------------------------------------------- */

  let currentRoutine = null;
  let currentSequence = [];
  let currentIndex = 0;
  let timerSeconds = 0;
  let timerInterval = null;
  let isRunning = false;

  let completedRoutines = JSON.parse(
    localStorage.getItem("moonie_completed_routines") || "[]"
  );

  let completedAsanas = JSON.parse(
    localStorage.getItem("moonie_completed_asanas") || "[]"
  );

  /* ---------------------------------------------------------
     REFERENCIAS
     --------------------------------------------------------- */

  const $ = (id) => document.getElementById(id);

  const homeRoutines = $("homeRoutines");
  const allRoutines = $("allRoutines");
  const practice = $("practice");
  const timer = $("timer");

  const poseName = $("poseName");
  const poseSanskrit = $("poseSanskrit");
  const poseIllustration = $("poseIllustration");
  const nextPose = $("nextPose");
  const stepCounter = $("stepCounter");
  const progress = $("progress");

  const routineName = $("routineName");
  const poseInformation = $("poseInformation");
  const playButton = $("playButton");

  const asanaList = $("asanaList");
  const explore = $("explore");
  const progressScreen = $("progressScreen");

  const completedCount = $("completedCount");

  const asanaModal = $("asanaModal");
  const asanaModalContent = $("asanaModalContent");

  /* ---------------------------------------------------------
     DATOS
     --------------------------------------------------------- */

  const ROUTINES = Array.isArray(window.MOONIE_ROUTINES)
    ? window.MOONIE_ROUTINES
    : [];

  const POSES = Array.isArray(window.MOONIE_POSES)
    ? window.MOONIE_POSES
    : [];

  console.log("🌙 Moonie Yoga");
  console.log("Prácticas cargadas:", ROUTINES.length);
  console.log("Asanas cargadas:", POSES.length);

  /* ---------------------------------------------------------
     UTILIDADES
     --------------------------------------------------------- */

  function formatTime(seconds) {
    seconds = Math.max(0, Math.floor(seconds));

    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  }

  function saveProgress() {
    localStorage.setItem(
      "moonie_completed_routines",
      JSON.stringify(completedRoutines)
    );

    localStorage.setItem(
      "moonie_completed_asanas",
      JSON.stringify(completedAsanas)
    );
  }

  function getRoutineName(routine) {
    return (
      routine?.name ||
      routine?.title ||
      routine?.nombre ||
      "Práctica Moonie"
    );
  }

  function getRoutineDescription(routine) {
    return (
      routine?.description ||
      routine?.descripcion ||
      routine?.subtitle ||
      "Una práctica creada para acompañarte hoy."
    );
  }

  function getRoutineDuration(routine) {
    if (typeof routine?.duration === "number") {
      return routine.duration;
    }

    if (typeof routine?.durationMinutes === "number") {
      return routine.durationMinutes;
    }

    if (Array.isArray(routine?.sequence)) {
      return Math.ceil(
        routine.sequence.reduce(
          (total, item) => total + Number(item.duration || 0),
          0
        ) / 60
      );
    }

    return 20;
  }

  function getSequence(routine) {
    if (!routine) return [];

    if (Array.isArray(routine.sequence)) {
      return routine.sequence;
    }

    if (Array.isArray(routine.poses)) {
      return routine.poses;
    }

    if (Array.isArray(routine.asanas)) {
      return routine.asanas;
    }

    return [];
  }

  function getPoseId(item) {
    if (!item) return "";

    if (typeof item === "string") {
      return item;
    }

    return (
      item.pose ||
      item.asana ||
      item.id ||
      item.slug ||
      item.name ||
      ""
    );
  }

  function getPoseData(item) {
    const id = getPoseId(item);

    if (!id) return null;

    return (
      POSES.find((pose) => {
        return (
          pose.id === id ||
          pose.slug === id ||
          pose.name === id ||
          pose.sanskrit === id
        );
      }) || null
    );
  }

  function getItemDuration(item) {
    if (!item) return 60;

    if (typeof item.duration === "number") {
      return item.duration;
    }

    if (typeof item.seconds === "number") {
      return item.seconds;
    }

    return 60;
  }

  function getPoseName(item) {
    const pose = getPoseData(item);

    if (pose) {
      return pose.name || pose.title || pose.sanskrit || "Asana";
    }

    if (typeof item === "string") {
      return item;
    }

    return item?.name || item?.title || "Asana";
  }

  function getPoseSanskrit(item) {
    const pose = getPoseData(item);

    return (
      pose?.sanskrit ||
      pose?.transliteration ||
      pose?.sanscrito ||
      ""
    );
  }

  function getPoseImage(item) {
    const pose = getPoseData(item);

    return (
      pose?.image ||
      pose?.imageUrl ||
      pose?.illustration ||
      pose?.image_url ||
      ""
    );
  }

  /* ---------------------------------------------------------
     NAVEGACIÓN
     --------------------------------------------------------- */

  function hideScreens() {
    document
      .querySelectorAll(".screen, section[data-screen]")
      .forEach((screen) => {
        screen.style.display = "none";
      });
  }

  function showElement(element) {
    if (!element) return;

    element.style.display = "";
    element.classList.add("active");
  }

  function showScreen(screen) {
    hideScreens();

    if (screen) {
      screen.style.display = "";
      screen.classList.add("active");
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function openHome() {
    showScreen(homeRoutines);
  }

  function openRoutines() {
    showScreen(allRoutines);
    renderAllRoutines();
  }

  function openExplore() {
    showScreen(explore);
  }

  function openAsanas() {
    showScreen(asanaList);
    renderAsanas();
  }

  function openProgress() {
    showScreen(progressScreen);
    renderProgress();
  }

  /* ---------------------------------------------------------
     CREAR TARJETA DE PRÁCTICA
     --------------------------------------------------------- */

  function createRoutineCard(routine, number) {
    const card = document.createElement("article");

    card.className = "routine-card";

    const name = getRoutineName(routine);
    const description = getRoutineDescription(routine);
    const duration = getRoutineDuration(routine);

    card.innerHTML = `
      <div class="routine-number">${number}</div>

      <div class="routine-card-content">
        <h3>${escapeHTML(name)}</h3>

        <p>${escapeHTML(description)}</p>

        <div class="routine-meta">
          <span>🕯️ ${duration} min</span>
          <span>🧘‍♀️ ${getSequence(routine).length} pasos</span>
        </div>

        <button class="routine-start">
          Empezar práctica
        </button>
      </div>
    `;

    const button = card.querySelector(".routine-start");

    button.addEventListener("click", (event) => {
      event.stopPropagation();
      startRoutine(routine);
    });

    card.addEventListener("click", () => {
      startRoutine(routine);
    });

    return card;
  }

  /* ---------------------------------------------------------
     MOSTRAR LAS 60 PRÁCTICAS
     --------------------------------------------------------- */

  function renderAllRoutines() {
    if (!allRoutines) return;

    let container = allRoutines.querySelector(".routines-container");

    if (!container) {
      container = document.createElement("div");
      container.className = "routines-container";

      allRoutines.appendChild(container);
    }

    container.innerHTML = "";

    if (!ROUTINES.length) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>🌙 No hay prácticas cargadas</h3>
          <p>Comprueba que data.js se ha guardado correctamente.</p>
        </div>
      `;

      return;
    }

    /* IMPORTANTE:
       NO hacemos slice()
       NO limitamos a 5, 10, 20...
       Se muestran TODAS.
    */

    ROUTINES.forEach((routine, index) => {
      const card = createRoutineCard(routine, index + 1);
      container.appendChild(card);
    });

    console.log(
      `🌙 Se han mostrado ${ROUTINES.length} prácticas de ${ROUTINES.length}`
    );
  }

  /* ---------------------------------------------------------
     PRÁCTICAS DESTACADAS EN INICIO
     --------------------------------------------------------- */

  function renderHomeRoutines() {
    if (!homeRoutines) return;

    const container =
      homeRoutines.querySelector(".home-routines-container") ||
      homeRoutines.querySelector(".routines-container");

    if (!container) return;

    container.innerHTML = "";

    ROUTINES.slice(0, 6).forEach((routine, index) => {
      container.appendChild(
        createRoutineCard(routine, index + 1)
      );
    });
  }

  /* ---------------------------------------------------------
     INICIAR PRÁCTICA
     --------------------------------------------------------- */

  function startRoutine(routine) {
    if (!routine) return;

    currentRoutine = routine;
    currentSequence = getSequence(routine);
    currentIndex = 0;

    if (!currentSequence.length) {
      alert(
        "Esta práctica todavía no tiene una secuencia de asanas."
      );
      return;
    }

    if (routineName) {
      routineName.textContent = getRoutineName(routine);
    }

    if (practice) {
      showScreen(practice);
    }

    loadCurrentPose();

    if (timer) {
      timerSeconds = getItemDuration(currentSequence[0]);
    }

    updateTimerDisplay();
    updateStepCounter();
    updateProgressBar();
  }

  /* ---------------------------------------------------------
     CARGAR ASANA ACTUAL
     --------------------------------------------------------- */

  function loadCurrentPose() {
    const item = currentSequence[currentIndex];

    if (!item) {
      finishRoutine();
      return;
    }

    const pose = getPoseData(item);

    if (poseName) {
      poseName.textContent = getPoseName(item);
    }

    if (poseSanskrit) {
      poseSanskrit.textContent = getPoseSanskrit(item);
    }

    if (nextPose) {
      const nextItem = currentSequence[currentIndex + 1];

      nextPose.textContent = nextItem
        ? `Siguiente: ${getPoseName(nextItem)}`
        : "Última postura";
    }

    if (poseInformation) {
      poseInformation.innerHTML = buildPoseInformation(
        pose,
        item
      );
    }

    if (poseIllustration) {
      const image = getPoseImage(item);

      if (image) {
        poseIllustration.innerHTML = `
          <img
            src="${escapeAttribute(image)}"
            alt="${escapeAttribute(getPoseName(item))}"
          >
        `;
      } else {
        poseIllustration.innerHTML = `
          <div class="pose-placeholder">
            🧘‍♀️
          </div>
        `;
      }
    }

    timerSeconds = getItemDuration(item);

    updateTimerDisplay();
    updateStepCounter();
    updateProgressBar();
  }

  /* ---------------------------------------------------------
     INFORMACIÓN DE ASANA
     --------------------------------------------------------- */

  function buildPoseInformation(pose, item) {
    if (!pose) {
      return `
        <p>
          Mantén una respiración lenta y cómoda.
          No fuerces el rango de movimiento.
        </p>
      `;
    }

    const sections = [];

    if (pose.instructions || pose.execution || pose.ejecucion) {
      sections.push(`
        <div class="pose-section">
          <h4>✨ Ejecución</h4>
          <p>
            ${escapeHTML(
              pose.instructions ||
              pose.execution ||
              pose.ejecucion
            )}
          </p>
        </div>
      `);
    }

    if (pose.breathing || pose.respiracion) {
      sections.push(`
        <div class="pose-section">
          <h4>🌬️ Respiración</h4>
          <p>
            ${escapeHTML(
              pose.breathing || pose.respiracion
            )}
          </p>
        </div>
      `);
    }

    if (pose.benefits || pose.beneficios) {
      sections.push(`
        <div class="pose-section">
          <h4>🌿 Beneficios</h4>
          <p>
            ${escapeHTML(
              pose.benefits || pose.beneficios
            )}
          </p>
        </div>
      `);
    }

    if (pose.anatomy || pose.anatomia) {
      sections.push(`
        <div class="pose-section">
          <h4>🦴 Anatomía</h4>
          <p>
            ${escapeHTML(
              pose.anatomy || pose.anatomia
            )}
          </p>
        </div>
      `);
    }

    if (pose.precautions || pose.precauciones) {
      sections.push(`
        <div class="pose-section">
          <h4>⚠️ Precauciones</h4>
          <p>
            ${escapeHTML(
              pose.precautions || pose.precauciones
            )}
          </p>
        </div>
      `);
    }

    return sections.join("");
  }

  /* ---------------------------------------------------------
     TIMER
     --------------------------------------------------------- */

  function updateTimerDisplay() {
    if (!timer) return;

    const display =
      timer.querySelector(".timer-display") ||
      $("timerDisplay");

    if (display) {
      display.textContent = formatTime(timerSeconds);
    }
  }

  function updateStepCounter() {
    if (!stepCounter) return;

    stepCounter.textContent =
      `${currentIndex + 1} / ${currentSequence.length}`;
  }

  function updateProgressBar() {
    if (!progress) return;

    const percentage =
      currentSequence.length > 0
        ? ((currentIndex + 1) / currentSequence.length) * 100
        : 0;

    if (progress.tagName === "PROGRESS") {
      progress.value = percentage;
    } else {
      progress.style.width = `${percentage}%`;
    }
  }

  function startTimer() {
    if (isRunning) return;

    isRunning = true;

    updatePlayButton();

    timerInterval = setInterval(() => {
      if (timerSeconds > 0) {
        timerSeconds--;

        updateTimerDisplay();
      } else {
        nextPoseStep();
      }
    }, 1000);
  }

  function pauseTimer() {
    isRunning = false;

    clearInterval(timerInterval);
    timerInterval = null;

    updatePlayButton();
  }

  function resetTimer() {
    pauseTimer();

    const item = currentSequence[currentIndex];

    timerSeconds = getItemDuration(item);

    updateTimerDisplay();
  }

  function updatePlayButton() {
    if (!playButton) return;

    playButton.textContent = isRunning
      ? "⏸ Pausar"
      : "▶️ Continuar";
  }

  function nextPoseStep() {
    vibrate([80]);

    if (currentIndex < currentSequence.length - 1) {
      currentIndex++;

      loadCurrentPose();

      if (isRunning) {
        timerSeconds = getItemDuration(
          currentSequence[currentIndex]
        );

        updateTimerDisplay();
      }

      return;
    }

    finishRoutine();
  }

  function previousPoseStep() {
    if (currentIndex <= 0) return;

    currentIndex--;

    loadCurrentPose();

    if (isRunning) {
      timerSeconds = getItemDuration(
        currentSequence[currentIndex]
      );

      updateTimerDisplay();
    }
  }

  /* ---------------------------------------------------------
     FINALIZAR PRÁCTICA
     --------------------------------------------------------- */

  function finishRoutine() {
    pauseTimer();

    vibrate([150, 100, 150, 100, 250]);

    if (currentRoutine?.id) {
      if (!completedRoutines.includes(currentRoutine.id)) {
        completedRoutines.push(currentRoutine.id);
      }
    }

    saveProgress();

    alert(
      `🌙✨ ¡Práctica completada!\n\n${getRoutineName(
        currentRoutine
      )}`
    );

    renderProgress();
  }

  /* ---------------------------------------------------------
     VIBRACIÓN
     --------------------------------------------------------- */

  function vibrate(pattern) {
    try {
      if (
        navigator.vibrate &&
        localStorage.getItem("moonie_vibration") !== "off"
      ) {
        navigator.vibrate(pattern);
      }
    } catch (error) {
      console.log("Vibración no disponible.");
    }
  }

  /* ---------------------------------------------------------
     ASANAS
     --------------------------------------------------------- */

  function renderAsanas() {
    if (!asanaList) return;

    let container =
      asanaList.querySelector(".asanas-container");

    if (!container) {
      container = document.createElement("div");
      container.className = "asanas-container";

      asanaList.appendChild(container);
    }

    container.innerHTML = "";

    if (!POSES.length) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>🧘‍♀️ No hay asanas cargadas</h3>
        </div>
      `;

      return;
    }

    POSES.forEach((pose, index) => {
      const card = document.createElement("article");

      card.className = "asana-card";

      const image =
        pose.image ||
        pose.imageUrl ||
        pose.illustration ||
        "";

      card.innerHTML = `
        <div class="asana-image">
          ${
            image
              ? `<img src="${escapeAttribute(
                  image
                )}" alt="${escapeAttribute(
                  pose.name || "Asana"
                )}">`
              : "🧘‍♀️"
          }
        </div>

        <div class="asana-content">
          <span class="asana-number">${index + 1}</span>

          <h3>
            ${escapeHTML(
              pose.name ||
                pose.title ||
                "Asana"
            )}
          </h3>

          <p>
            ${escapeHTML(
              pose.sanskrit ||
                pose.transliteration ||
                ""
            )}
          </p>

          <button class="asana-open">
            Ver postura
          </button>
        </div>
      `;

      card
        .querySelector(".asana-open")
        .addEventListener("click", () => {
          openAsana(pose);
        });

      container.appendChild(card);
    });
  }

  function openAsana(pose) {
    if (!asanaModal || !asanaModalContent) return;

    asanaModalContent.innerHTML = `
      <div class="asana-detail">

        <h2>
          ${escapeHTML(
            pose.name ||
              pose.title ||
              "Asana"
          )}
        </h2>

        <h3>
          ${escapeHTML(
            pose.sanskrit ||
              pose.transliteration ||
              ""
          )}
        </h3>

        ${
          pose.image ||
          pose.imageUrl ||
          pose.illustration
            ? `
              <img
                src="${escapeAttribute(
                  pose.image ||
                    pose.imageUrl ||
                    pose.illustration
                )}"
                alt="${escapeAttribute(
                  pose.name || "Asana"
                )}"
              >
            `
            : `
              <div class="pose-placeholder">
                🧘‍♀️
              </div>
            `
        }

        ${detailSection(
          "✨ Ejecución",
          pose.instructions ||
            pose.execution ||
            pose.ejecucion
        )}

        ${detailSection(
          "🌬️ Respiración",
          pose.breathing ||
            pose.respiracion
        )}

        ${detailSection(
          "🦴 Anatomía",
          pose.anatomy ||
            pose.anatomia
        )}

        ${detailSection(
          "🌿 Beneficios",
          pose.benefits ||
            pose.beneficios
        )}

        ${detailSection(
          "⚠️ Precauciones",
          pose.precautions ||
            pose.precauciones
        )}

        ${detailSection(
          "🚫 Contraindicaciones",
          pose.contraindications ||
            pose.contraindicaciones
        )}

        ${detailSection(
          "🔄 Variaciones",
          pose.variations ||
            pose.variaciones
        )}

      </div>
    `;

    asanaModal.style.display = "flex";
  }

  function detailSection(title, text) {
    if (!text) return "";

    return `
      <section class="asana-detail-section">
        <h4>${title}</h4>
        <p>${escapeHTML(text)}</p>
      </section>
    `;
  }

  function closeAsanaModal() {
    if (asanaModal) {
      asanaModal.style.display = "none";
    }
  }

  /* ---------------------------------------------------------
     PROGRESO
     --------------------------------------------------------- */

  function renderProgress() {
    if (!progressScreen) return;

    if (completedCount) {
      completedCount.textContent =
        completedRoutines.length;
    }

    const percentage =
      ROUTINES.length > 0
        ? Math.round(
            (completedRoutines.length /
              ROUTINES.length) *
              100
          )
        : 0;

    let progressText =
      progressScreen.querySelector(".progress-percentage");

    if (!progressText) {
      progressText = document.createElement("div");
      progressText.className =
        "progress-percentage";

      progressScreen.appendChild(progressText);
    }

    progressText.textContent =
      `${percentage}% completado`;
  }

  /* ---------------------------------------------------------
     BOTONES Y EVENTOS
     --------------------------------------------------------- */

  function setupNavigation() {
    document.addEventListener("click", (event) => {
      const target = event.target.closest(
        "[data-screen], [data-nav]"
      );

      if (!target) return;

      const destination =
        target.dataset.screen ||
        target.dataset.nav;

      if (!destination) return;

      if (
        destination === "home" ||
        destination === "inicio"
      ) {
        openHome();
      }

      if (
        destination === "routines" ||
        destination === "practices" ||
        destination === "practicas"
      ) {
        openRoutines();
      }

      if (
        destination === "explore" ||
        destination === "explorar"
      ) {
        openExplore();
      }

      if (
        destination === "asanas" ||
        destination === "poses"
      ) {
        openAsanas();
      }

      if (
        destination === "progress" ||
        destination === "progreso"
      ) {
        openProgress();
      }
    });

    if (playButton) {
      playButton.addEventListener("click", () => {
        if (isRunning) {
          pauseTimer();
        } else {
          startTimer();
        }
      });
    }

    const nextButton =
      $("nextPoseButton") ||
      document.querySelector(
        "[data-action='next-pose']"
      );

    if (nextButton) {
      nextButton.addEventListener(
        "click",
        nextPoseStep
      );
    }

    const previousButton =
      $("previousPoseButton") ||
      document.querySelector(
        "[data-action='previous-pose']"
      );

    if (previousButton) {
      previousButton.addEventListener(
        "click",
        previousPoseStep
      );
    }

    const resetButton =
      $("resetTimer") ||
      document.querySelector(
        "[data-action='reset-timer']"
      );

    if (resetButton) {
      resetButton.addEventListener(
        "click",
        resetTimer
      );
    }

    const closeModal =
      document.querySelector(
        "[data-action='close-asana']"
      );

    if (closeModal) {
      closeModal.addEventListener(
        "click",
        closeAsanaModal
      );
    }

    if (asanaModal) {
      asanaModal.addEventListener(
        "click",
        (event) => {
          if (event.target === asanaModal) {
            closeAsanaModal();
          }
        }
      );
    }
  }

  /* ---------------------------------------------------------
     BÚSQUEDA DE PRÁCTICAS
     --------------------------------------------------------- */

  function setupRoutineSearch() {
    const search =
      document.querySelector(
        "#routineSearch"
      );

    if (!search) return;

    search.addEventListener("input", () => {
      const query =
        search.value
          .trim()
          .toLowerCase();

      const cards =
        allRoutines?.querySelectorAll(
          ".routine-card"
        );

      if (!cards) return;

      cards.forEach((card, index) => {
        const routine =
          ROUTINES[index];

        const text =
          `${getRoutineName(
            routine
          )} ${getRoutineDescription(
            routine
          )}`.toLowerCase();

        card.style.display =
          !query || text.includes(query)
            ? ""
            : "none";
      });
    });
  }

  /* ---------------------------------------------------------
     ESCAPE HTML
     --------------------------------------------------------- */

  function escapeHTML(value) {
    if (value === null || value === undefined) {
      return "";
    }

    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function escapeAttribute(value) {
    return escapeHTML(value);
  }

  /* ---------------------------------------------------------
     INICIALIZACIÓN
     --------------------------------------------------------- */

  function init() {
    console.log("🌙 Inicializando Moonie Yoga...");

    console.log(
      `🧘‍♀️ Prácticas disponibles: ${ROUTINES.length}`
    );

    console.log(
      `🌿 Asanas disponibles: ${POSES.length}`
    );

    setupNavigation();
    setupRoutineSearch();

    renderHomeRoutines();
    renderAllRoutines();
    renderAsanas();
    renderProgress();

    /*
      Dejamos la pantalla de inicio visible.
    */

    if (homeRoutines) {
      showScreen(homeRoutines);
    }

    console.log(
      "✨ Moonie Yoga está lista."
    );
  }

  /* ---------------------------------------------------------
     ARRANQUE
     --------------------------------------------------------- */

  if (
    document.readyState ===
    "loading"
  ) {
    document.addEventListener(
      "DOMContentLoaded",
      init
    );
  } else {
    init();
  }

})();
