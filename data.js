const MOONIE_ROUTINES = [

  {
    id: "soltar-dia",
    name: "Soltar el Día",
    style: "Yin + Restaurativo",
    level: "Suave",
    duration: 30,
    goal: "relajar",
    description: "Una práctica lenta para liberar tensión física y mental al terminar el día.",

    poses: [

      {
        name: "Postura del Niño",
        sanskrit: "Balasana",
        duration: 180,
        type: "postura",
        breathing: "Respira lentamente hacia la espalda y permite que la mandíbula se suavice.",
        instruction: "Lleva las caderas hacia los talones y deja caer el torso hacia delante. Apoya la frente cómodamente.",
        transition: "Muévete lentamente hacia una posición sentada.",
        warning: "Si existe molestia en las rodillas, utiliza una manta o cojín bajo las caderas."
      },

      {
        name: "Mariposa",
        sanskrit: "Baddha Konasana",
        duration: 240,
        type: "postura",
        breathing: "Respira de forma natural, sin intentar profundizar la postura con cada inhalación.",
        instruction: "Siéntate, junta las plantas de los pies y deja que las rodillas se abran. Permite que la columna se incline hacia delante de forma cómoda.",
        transition: "Extiende las piernas y descansa unos instantes.",
        warning: "No empujes las rodillas hacia el suelo."
      },

      {
        name: "Caterpillar",
        sanskrit: "Variante Yin de Paschimottanasana",
        duration: 240,
        type: "postura",
        breathing: "Inhala creando espacio en el torso. Exhala dejando que el cuerpo se relaje.",
        instruction: "Extiende las piernas y permite que el torso se incline hacia ellas. No necesitas alcanzar los pies.",
        transition: "Sal lentamente y permanece sentado unos instantes.",
        warning: "Evita forzar la flexión lumbar."
      },

      {
        name: "Torsión Supina",
        sanskrit: "Supta Matsyendrasana",
        duration: 120,
        type: "lado",
        breathing: "Respira suavemente y permite que el abdomen se relaje.",
        instruction: "Túmbate boca arriba y lleva las rodillas hacia un lado mientras mantienes los hombros cómodamente apoyados.",
        transition: "Vuelve al centro antes de cambiar de lado.",
        warning: "Reduce el rango si aparece tensión lumbar."
      },

      {
        name: "Piernas en la Pared",
        sanskrit: "Viparita Karani",
        duration: 240,
        type: "restaurativa",
        breathing: "Respiración lenta y natural.",
        instruction: "Coloca las piernas elevadas sobre una pared o superficie estable. Deja que los brazos descansen.",
        transition: "Dobla las rodillas antes de girar hacia un lado para salir.",
        warning: "Utiliza una alternativa cómoda si elevar las piernas resulta desagradable."
      },

      {
        name: "Savasana",
        sanskrit: "Shavasana",
        duration: 300,
        type: "descanso",
        breathing: "Deja que la respiración vuelva a su ritmo natural.",
        instruction: "Túmbate boca arriba. Separa ligeramente los pies, relaja las manos y permite que todo el cuerpo descanse.",
        transition: "Para terminar, mueve suavemente dedos de manos y pies.",
        warning: "Puedes utilizar cualquier postura de descanso que resulte más cómoda."
      }

    ]
  },


  {
    id: "caderas-libres",
    name: "Caderas Libres",
    style: "Yin",
    level: "Suave",
    duration: 30,
    goal: "flexibilizar",
    description: "Una práctica Yin centrada en caderas, aductores y piernas.",

    poses: [

      {
        name: "Mariposa",
        sanskrit: "Baddha Konasana",
        duration: 240,
        type: "postura",
        breathing: "Respira hacia el abdomen y las costillas.",
        instruction: "Junta las plantas de los pies y deja que las rodillas se abran sin empujarlas.",
        transition: "Extiende las piernas.",
        warning: "Mantén la postura dentro de un rango cómodo."
      },

      {
        name: "Rebote",
        sanskrit: "Rebound",
        duration: 45,
        type: "rebote",
        breathing: "Respira libremente.",
        instruction: "Túmbate o siéntate cómodamente y observa las sensaciones que aparecen después de la postura.",
        transition: "Prepárate para el siguiente lado.",
        warning: "No busques ninguna sensación concreta."
      },

      {
        name: "Media Mariposa — Derecha",
        sanskrit: "Ardha Baddha Konasana",
        duration: 180,
        type: "lado",
        breathing: "Respira lentamente.",
        instruction: "Una pierna permanece extendida mientras la otra se flexiona. Inclina el torso hacia la pierna extendida sin forzar.",
        transition: "Sal lentamente y cambia de lado.",
        warning: "Evita redondear agresivamente la espalda."
      },

      {
        name: "Rebote",
        sanskrit: "Rebound",
        duration: 30,
        type: "rebote",
        breathing: "Respiración natural.",
        instruction: "Descansa y observa.",
        transition: "Continúa con el otro lado.",
        warning: "Mantén el cuerpo cómodo."
      },

      {
        name: "Media Mariposa — Izquierda",
        sanskrit: "Ardha Baddha Konasana",
        duration: 180,
        type: "lado",
        breathing: "Respira lentamente.",
        instruction: "Una pierna permanece extendida mientras la otra se flexiona. Inclina el torso hacia la pierna extendida sin forzar.",
        transition: "Sal lentamente.",
        warning: "No busques máxima profundidad."
      },

      {
        name: "Rebote",
        sanskrit: "Rebound",
        duration: 30,
        type: "rebote",
        breathing: "Respiración natural.",
        instruction: "Descansa.",
        transition: "Prepárate para el Dragón.",
        warning: "Observa sin juzgar."
      },

      {
        name: "Dragón — Derecha",
        sanskrit: "Variante Yin de Anjaneyasana",
        duration: 180,
        type: "lado",
        breathing: "Respira hacia las zonas que notes tensas sin intentar empujarlas.",
        instruction: "Desde una zancada, coloca las manos o apoyos de forma estable y permite que la pelvis descienda únicamente hasta donde resulte cómodo.",
        transition: "Retrocede lentamente y descansa.",
        warning: "Reduce la amplitud si aparece presión intensa en la rodilla."
      },

      {
        name: "Rebote",
        sanskrit: "Rebound",
        duration: 45,
        type: "rebote",
        breathing: "Respiración libre.",
        instruction: "Descansa y observa.",
        transition: "Cambia de lado.",
        warning: "Sin buscar sensaciones."
      },

      {
        name: "Dragón — Izquierda",
        sanskrit: "Variante Yin de Anjaneyasana",
        duration: 180,
        type: "lado",
        breathing: "Respira lenta y cómodamente.",
        instruction: "Adopta una zancada estable y permite que el cuerpo explore la postura sin forzar.",
        transition: "Sal lentamente.",
        warning: "No fuerces la profundidad."
      },

      {
        name: "Rebote",
        sanskrit: "Rebound",
        duration: 45,
        type: "rebote",
        breathing: "Respiración natural.",
        instruction: "Descansa.",
        transition: "Continúa con Ciervo.",
        warning: "Permanece cómodo."
      },

      {
        name: "Ciervo — Derecha",
        sanskrit: "Mrigasana",
        duration: 180,
        type: "lado",
        breathing: "Respira suavemente.",
        instruction: "Coloca una pierna delante y la otra hacia atrás buscando una posición estable y cómoda para las caderas.",
        transition: "Sal lentamente.",
        warning: "Apoya las manos o utiliza un cojín si necesitas más estabilidad."
      },

      {
        name: "Ciervo — Izquierda",
        sanskrit: "Mrigasana",
        duration: 180,
        type: "lado",
        breathing: "Respira lentamente.",
        instruction: "Cambia la configuración de las piernas y permanece dentro de un rango cómodo.",
        transition: "Sal lentamente.",
        warning: "No fuerces la rotación de las rodillas."
      },

      {
        name: "Savasana",
        sanskrit: "Shavasana",
        duration: 300,
        type: "descanso",
        breathing: "Natural.",
        instruction: "Túmbate y permite que el cuerpo se integre después de la práctica.",
        transition: "Finaliza lentamente.",
        warning: "Utiliza apoyos si los necesitas."
      }

    ]
  },


  {
    id: "yin-nocturno",
    name: "Yin Nocturno",
    style: "Yin",
    level: "Suave",
    duration: 30,
    goal: "dormir",
    description: "Una práctica lenta para crear una transición tranquila hacia la noche.",

    poses: [

      {
        name: "Postura del Niño",
        sanskrit: "Balasana",
        duration: 180,
        type: "postura",
        breathing: "Respiración nasal tranquila.",
        instruction: "Descansa el torso sobre las piernas o un apoyo.",
        transition: "Sube lentamente.",
        warning: "Adapta la postura a tus rodillas."
      },

      {
        name: "Mariposa",
        sanskrit: "Baddha Konasana",
        duration: 300,
        type: "postura",
        breathing: "Lenta y natural.",
        instruction: "Junta las plantas de los pies y relaja progresivamente la musculatura.",
        transition: "Extiende las piernas.",
        warning: "No empujes las rodillas."
      },

      {
        name: "Caterpillar",
        sanskrit: "Variante Yin de Paschimottanasana",
        duration: 300,
        type: "postura",
        breathing: "Respira suavemente.",
        instruction: "Inclínate hacia delante desde las caderas y deja que el torso se vuelva pesado.",
        transition: "Sal lentamente.",
        warning: "No fuerces la columna."
      },

      {
        name: "Cisne Dormido — Derecha",
        sanskrit: "Variante Yin de Eka Pada Rajakapotasana",
        duration: 240,
        type: "lado",
        breathing: "Respiración tranquila.",
        instruction: "Adopta una posición de apertura de cadera utilizando apoyos bajo la pelvis si son necesarios.",
        transition: "Sal muy lentamente.",
        warning: "Utiliza una alternativa si la rodilla no está cómoda."
      },

      {
        name: "Cisne Dormido — Izquierda",
        sanskrit: "Variante Yin de Eka Pada Rajakapotasana",
        duration: 240,
        type: "lado",
        breathing: "Respiración natural.",
        instruction: "Cambia de lado y encuentra una posición estable.",
        transition: "Sal lentamente.",
        warning: "No fuerces la rotación de la rodilla."
      },

      {
        name: "Torsión Supina",
        sanskrit: "Supta Matsyendrasana",
        duration: 120,
        type: "postura",
        breathing: "Lenta y natural.",
        instruction: "Túmbate boca arriba y deja caer las piernas hacia un lado dentro de un rango cómodo.",
        transition: "Vuelve al centro.",
        warning: "Reduce el rango si notas molestia."
      },

      {
        name: "Piernas en la Pared",
        sanskrit: "Viparita Karani",
        duration: 180,
        type: "restaurativa",
        breathing: "Respiración natural.",
        instruction: "Eleva las piernas y deja que el peso del cuerpo descanse.",
        transition: "Dobla las rodillas antes de salir.",
        warning: "No necesitas utilizar una pared si no resulta cómoda."
      },

      {
        name: "Savasana",
        sanskrit: "Shavasana",
        duration: 300,
        type: "descanso",
        breathing: "Natural.",
        instruction: "Permanece completamente quieta y permite que la respiración encuentre su propio ritmo.",
        transition: "Finaliza moviendo suavemente el cuerpo.",
        warning: "Puedes cambiar de postura si necesitas comodidad."
      }

    ]
  }

];
