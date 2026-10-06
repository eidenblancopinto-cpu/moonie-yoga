const MOONIE_ROUTINES = [

  {
    id: "despertar-solar",
    name: "Despertar Solar",
    style: "Hatha",
    category: "Matutino",
    level: "Principiante",
    duration: 15,
    goal: "energy",

    description:
      "Una práctica suave para despertar el cuerpo, movilizar la columna y comenzar el día con presencia.",

    poses: [

      {
        name: "Respiración inicial",
        sanskrit: "Sukhasana",
        duration: 60,
        instruction:
          "Siéntate cómodamente con la columna larga. Relaja hombros y mandíbula. Observa tu respiración sin intentar modificarla.",
        breathing:
          "Inhala suavemente por la nariz y exhala de forma tranquila.",
        transition:
          "Lleva lentamente las manos al suelo y prepárate para comenzar a movilizar la columna.",
        warning:
          "No fuerces la postura sentada. Puedes sentarte sobre un cojín."
      },

      {
        name: "Gato–Vaca",
        sanskrit: "Marjaryasana–Bitilasana",
        duration: 90,
        instruction:
          "Colócate a cuatro apoyos. Al inhalar abre el pecho y alarga la columna. Al exhalar redondea suavemente la espalda.",
        breathing:
          "Inhala al abrir el pecho. Exhala al redondear la columna.",
        transition:
          "Después de varias repeticiones vuelve a una posición neutra.",
        warning:
          "Evita colapsar el cuello o realizar movimientos bruscos."
      },

      {
        name: "Perro mirando abajo",
        sanskrit: "Adho Mukha Svanasana",
        duration: 60,
        instruction:
          "Desde cuatro apoyos eleva las caderas formando una V invertida. Mantén las rodillas ligeramente flexionadas si lo necesitas.",
        breathing:
          "Respira lentamente por la nariz.",
        transition:
          "Camina lentamente hacia las manos.",
        warning:
          "No necesitas llevar los talones al suelo."
      },

      {
        name: "Pinza de pie",
        sanskrit: "Uttanasana",
        duration: 60,
        instruction:
          "De pie, flexiona las rodillas y deja que el torso se incline hacia delante desde las caderas.",
        breathing:
          "Exhala al entrar y mantén una respiración tranquila.",
        transition:
          "Flexiona las rodillas y comienza a subir lentamente.",
        warning:
          "No tires de la cabeza hacia las piernas."
      },

      {
        name: "Guerrero II",
        sanskrit: "Virabhadrasana II",
        duration: 90,
        instruction:
          "Abre las piernas, gira el pie delantero hacia fuera y flexiona suavemente la rodilla. Extiende los brazos a ambos lados.",
        breathing:
          "Respira de forma continua y estable.",
        transition:
          "Estira la pierna y vuelve al centro antes de cambiar de lado.",
        warning:
          "Mantén la rodilla aproximadamente alineada con el pie."
      },

      {
        name: "Postura del niño",
        sanskrit: "Balasana",
        duration: 90,
        instruction:
          "Lleva las caderas hacia los talones y descansa el torso sobre los muslos. Puedes separar las rodillas.",
        breathing:
          "Respira hacia las costillas posteriores.",
        transition:
          "Apoya las manos y vuelve lentamente a cuatro apoyos.",
        warning:
          "Utiliza un cojín bajo el torso si necesitas más comodidad."
      },

      {
        name: "Savasana",
        sanskrit: "Savasana",
        duration: 180,
        instruction:
          "Túmbate boca arriba y permite que todo el cuerpo descanse. Suelta progresivamente la tensión.",
        breathing:
          "Deja que la respiración encuentre su propio ritmo.",
        transition:
          "Cuando termine la práctica, mueve suavemente dedos de manos y pies.",
        warning:
          "Si estar boca arriba resulta incómodo, cambia de posición."
      }

    ]
  },


  {
    id: "soltar-el-dia",
    name: "Soltar el Día",
    style: "Yin + Restaurativo",
    category: "Nocturno",
    level: "Todos",
    duration: 20,
    goal: "relax",

    description:
      "Una práctica tranquila para disminuir el ritmo después del día y crear espacio para descansar.",

    poses: [

      {
        name: "Mariposa",
        sanskrit: "Baddha Konasana",
        duration: 180,
        instruction:
          "Une las plantas de los pies y deja que las rodillas se abran. Permite que la espalda encuentre una posición cómoda.",
        breathing:
          "Respira lentamente, alargando especialmente la exhalación sin forzarla.",
        transition:
          "Cierra las piernas lentamente y estira las piernas hacia delante.",
        warning:
          "No presiones las rodillas hacia el suelo."
      },

      {
        name: "Oruga",
        sanskrit: "Paschimottanasana",
        duration: 240,
        instruction:
          "Extiende las piernas cómodamente y deja que el torso se incline hacia delante desde las caderas.",
        breathing:
          "Respira hacia la parte posterior del cuerpo.",
        transition:
          "Sube lentamente vértebra por vértebra.",
        warning:
          "Mantén las rodillas ligeramente flexionadas si notas tensión excesiva."
      },

      {
        name: "Esfinge",
        sanskrit: "Salamba Bhujangasana",
        duration: 180,
        instruction:
          "Túmbate boca abajo y apóyate sobre los antebrazos. Mantén el pecho abierto sin hundir la zona lumbar.",
        breathing:
          "Respira suavemente hacia las costillas.",
        transition:
          "Baja lentamente el torso y gira hacia un lado.",
        warning:
          "Reduce la altura si notas compresión lumbar."
      },

      {
        name: "Giro supino",
        sanskrit: "Supta Matsyendrasana",
        duration: 120,
        instruction:
          "Túmbate boca arriba y deja caer las rodillas hacia un lado mientras mantienes los hombros relajados.",
        breathing:
          "Respira tranquilamente hacia el abdomen y las costillas.",
        transition:
          "Vuelve al centro antes de cambiar de lado.",
        warning:
          "Reduce el giro si aparece molestia lumbar."
      },

      {
        name: "Piernas en la pared",
        sanskrit: "Viparita Karani",
        duration: 180,
        instruction:
          "Eleva las piernas apoyándolas en una pared o sobre un soporte cómodo. Deja que el cuerpo se relaje.",
        breathing:
          "Respiración lenta y natural.",
        transition:
          "Dobla las rodillas y gira suavemente hacia un lado antes de incorporarte.",
        warning:
          "Sal de la postura si notas presión o incomodidad."
      },

      {
        name: "Savasana",
        sanskrit: "Savasana",
        duration: 180,
        instruction:
          "Descansa completamente. No necesitas conseguir nada durante estos últimos minutos.",
        breathing:
          "Deja que la respiración suceda de forma natural.",
        transition:
          "Permanece unos instantes antes de volver a moverte.",
        warning:
          "Busca una posición que puedas mantener cómodamente."
      }

    ]
  },


  {
    id: "yin-caderas-libres",
    name: "Caderas Libres",
    style: "Yin",
    category: "Caderas",
    level: "Todos",
    duration: 30,
    goal: "flexibility",

    description:
      "Una práctica lenta centrada en explorar la movilidad y las sensaciones de la región de las caderas.",

    poses: [

      {
        name: "Mariposa",
        sanskrit: "Baddha Konasana",
        duration: 240,
        instruction:
          "Une las plantas de los pies y permite que las rodillas desciendan sin empujarlas.",
        breathing:
          "Respira lentamente y observa las sensaciones.",
        transition:
          "Cierra las piernas y descansa.",
        warning:
          "Busca intensidad moderada, nunca dolor."
      },

      {
        name: "Medio cordón",
        sanskrit: "Half Butterfly",
        duration: 180,
        instruction:
          "Extiende una pierna y flexiona la otra. Inclina suavemente el torso hacia la pierna extendida.",
        breathing:
          "Respira hacia la espalda y la parte posterior de la pierna.",
        transition:
          "Vuelve al centro y cambia de lado.",
        warning:
          "No rebotes ni fuerces la flexión."
      },

      {
        name: "Dragón",
        sanskrit: "Dragon",
        duration: 180,
        instruction:
          "Desde una posición de zancada baja permite que las caderas desciendan de forma gradual.",
        breathing:
          "Respira lenta y continuamente.",
        transition:
          "Retrocede hacia una posición cómoda de descanso.",
        warning:
          "Ajusta la distancia de los pies para reducir la intensidad."
      },

      {
        name: "Cisne dormido",
        sanskrit: "Sleeping Swan",
        duration: 240,
        instruction:
          "Coloca una pierna delante y extiende la otra hacia atrás. Inclínate hacia delante solo hasta encontrar una intensidad sostenible.",
        breathing:
          "Respira de manera amplia y tranquila.",
        transition:
          "Sal lentamente y cambia de lado.",
        warning:
          "Si la rodilla delantera se siente incómoda, cambia la posición."
      },

      {
        name: "Ciervo",
        sanskrit: "Deer",
        duration: 180,
        instruction:
          "Coloca ambas piernas flexionadas hacia un lado y permite que el torso se incline suavemente.",
        breathing:
          "Respira hacia las zonas donde percibas tensión.",
        transition:
          "Vuelve al centro antes de cambiar de lado.",
        warning:
          "Utiliza soporte bajo las caderas si es necesario."
      },

      {
        name: "Savasana",
        sanskrit: "Savasana",
        duration: 240,
        instruction:
          "Túmbate y permite que el cuerpo integre la práctica.",
        breathing:
          "Respira naturalmente.",
        transition:
          "Permanece unos instantes en quietud.",
        warning:
          "Ajusta la posición para estar completamente cómodo."
      }

    ]
  }

];
