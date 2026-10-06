/* =========================================================
   MOONIE YOGA 🌙🪷
   ASANA LIBRARY
   Biblioteca completa de posturas
   Imágenes: Wikimedia Commons
   ========================================================= */

const COMMONS = "https://commons.wikimedia.org/wiki/Special:Redirect/file/";

function img(file) {
  return {
    url: COMMONS + encodeURIComponent(file),
    source: "Wikimedia Commons",
    sourcePage: "https://commons.wikimedia.org/wiki/Category:Asanas_by_name",
    license: "Consultar licencia del archivo original",
    author: "Consultar ficha del archivo original"
  };
}

const MOONIE_ASANAS = [

/* =========================================================
   01 — BALASANA
   ========================================================= */

{
  id: "balasana",
  name: "Postura del niño",
  sanskrit: "बालासन",
  transliteration: "Bālāsana",
  family: "Flexión hacia delante",
  category: "Restaurativo",
  level: "Principiante",
  image: img("Balasana.jpg"),

  shortDescription:
    "Postura de descanso con el tronco hacia delante y las caderas hacia los talones.",

  execution: [
    "Comienza de rodillas.",
    "Lleva las caderas lentamente hacia los talones.",
    "Inclina el tronco hacia delante.",
    "Apoya la frente en la esterilla o en un soporte.",
    "Puedes mantener los brazos hacia delante o relajarlos junto al cuerpo.",
    "Deja que el abdomen y la espalda se relajen progresivamente."
  ],

  breathing:
    "Respira lenta y silenciosamente. Deja que cada inspiración expanda la espalda y cada espiración suavice el cuerpo.",

  anatomy:
    "Flexión de caderas y rodillas, con participación de tobillos. La columna permanece en flexión cómoda. El grado de apertura de las rodillas modifica la sensación en caderas, abdomen y espalda.",

  benefits: [
    "Favorece una sensación de descanso.",
    "Reduce la demanda física de la práctica.",
    "Permite observar la respiración posterior.",
    "Puede utilizarse como postura de transición."
  ],

  precautions: [
    "Utiliza un bolster o cojín si la frente no llega cómodamente al suelo.",
    "Separa las rodillas si necesitas más espacio abdominal."
  ],

  contraindications: [
    "Evitar o modificar si existe dolor importante de rodillas o tobillos."
  ],

  redFlags: [
    "Dolor agudo.",
    "Hormigueo persistente.",
    "Pérdida de sensibilidad."
  ],

  props: ["Bolster", "Cojín", "Manta"],
  duration: "1–5 minutos",

  variations: [
    "Rodillas juntas.",
    "Rodillas separadas.",
    "Brazos hacia delante.",
    "Brazos junto al cuerpo.",
    "Frente sobre soporte."
  ]
},

/* =========================================================
   02 — TADASANA
   ========================================================= */

{
  id: "tadasana",
  name: "Postura de la montaña",
  sanskrit: "ताडासन",
  transliteration: "Tāḍāsana",
  family: "De pie",
  category: "Hatha",
  level: "Principiante",
  image: img("Mountain Pose.jpg"),

  shortDescription:
    "Postura fundamental de pie utilizada para desarrollar conciencia corporal y alineación.",

  execution: [
    "Coloca los pies aproximadamente al ancho de las caderas.",
    "Distribuye el peso entre talón, base del dedo gordo y base del quinto dedo.",
    "Alarga las piernas sin bloquear las rodillas.",
    "Alarga la columna hacia arriba.",
    "Relaja hombros y mandíbula.",
    "Mantén la cabeza equilibrada sobre el tronco."
  ],

  breathing:
    "Respiración nasal tranquila, manteniendo una sensación de estabilidad.",

  anatomy:
    "Trabajo global de miembros inferiores, musculatura postural, pies, pelvis y columna.",

  benefits: [
    "Mejora la conciencia de la postura.",
    "Prepara para otras posturas de pie.",
    "Favorece el equilibrio."
  ],

  precautions: [
    "Mantén las rodillas suaves.",
    "Si existe inestabilidad, practica cerca de una pared."
  ],

  contraindications: [],
  redFlags: ["Mareo intenso", "Pérdida de equilibrio"],

  props: ["Pared opcional"],
  duration: "30 segundos–2 minutos",

  variations: [
    "Brazos junto al cuerpo.",
    "Manos en oración.",
    "Brazos por encima de la cabeza."
  ]
},

/* =========================================================
   03 — SUKHASANA
   ========================================================= */

{
  id: "sukhasana",
  name: "Postura fácil",
  sanskrit: "सुखासन",
  transliteration: "Sukhāsana",
  family: "Sentada",
  category: "Meditación",
  level: "Principiante",
  image: img("Sukhasana.jpg"),

  shortDescription:
    "Postura sentada sencilla utilizada para respiración, meditación y preparación.",

  execution: [
    "Siéntate con las piernas cruzadas.",
    "Eleva las caderas sobre un cojín si es necesario.",
    "Alarga la columna.",
    "Relaja hombros y rostro.",
    "Apoya las manos sobre los muslos."
  ],

  breathing:
    "Respira de manera natural, procurando que la inspiración y la espiración sean suaves.",

  anatomy:
    "Flexión de caderas y rodillas con estabilización de la columna.",

  benefits: [
    "Facilita la práctica de respiración.",
    "Favorece la quietud.",
    "Puede utilizarse como postura inicial."
  ],

  precautions: [
    "Eleva la pelvis si las rodillas quedan muy por encima de las caderas."
  ],

  contraindications: [],
  redFlags: ["Dolor agudo de rodilla o cadera"],

  props: ["Cojín", "Manta", "Bloque"],
  duration: "2–20 minutos",

  variations: [
    "Piernas cruzadas.",
    "Pelvis elevada.",
    "Sentado sobre bolster."
  ]
},

/* =========================================================
   04 — BADDHA KONASANA
   ========================================================= */

{
  id: "baddha-konasana",
  name: "Postura de la mariposa",
  sanskrit: "बद्ध कोणासन",
  transliteration: "Baddha Koṇāsana",
  family: "Apertura de caderas",
  category: "Yin",
  level: "Principiante",
  image: img("Advanced version of Baddha Konasana.jpg"),

  shortDescription:
    "Postura sentada con las plantas de los pies juntas y las rodillas abiertas.",

  execution: [
    "Siéntate sobre la esterilla.",
    "Junta las plantas de los pies.",
    "Acerca los talones según resulte cómodo.",
    "Permite que las rodillas desciendan sin empujarlas.",
    "Alarga la columna.",
    "En Yin puedes inclinar lentamente el torso hacia delante."
  ],

  breathing:
    "Respira hacia el abdomen y las costillas laterales. Evita forzar la amplitud.",

  anatomy:
    "Combina abducción y rotación externa de cadera con flexión de rodilla.",

  benefits: [
    "Moviliza las caderas.",
    "Puede crear sensación de espacio en la zona interna de los muslos.",
    "Es útil en prácticas Yin."
  ],

  precautions: [
    "Apoya las rodillas sobre bloques si existe demasiada tensión.",
    "No presiones las rodillas hacia el suelo."
  ],

  contraindications: [],
  redFlags: [
    "Dolor agudo en la ingle.",
    "Dolor de rodilla."
  ],

  props: ["Bloques", "Cojín", "Bolster"],
  duration: "2–5 minutos",

  variations: [
    "Vertical.",
    "Flexión hacia delante.",
    "Pies más alejados.",
    "Rodillas apoyadas."
  ]
},

/* =========================================================
   05 — PASCHIMOTTANASANA
   ========================================================= */

{
  id: "paschimottanasana",
  name: "Pinza sentada",
  sanskrit: "पश्चिमोत्तानासन",
  transliteration: "Paścimottānāsana",
  family: "Flexión",
  category: "Hatha / Yin",
  level: "Intermedio",
  image: img("Paschimottanasana.jpg"),

  shortDescription:
    "Flexión sentada hacia las piernas con énfasis en la movilidad posterior.",

  execution: [
    "Siéntate con las piernas extendidas.",
    "Flexiona ligeramente las rodillas si lo necesitas.",
    "Inspira y alarga la columna.",
    "Espira e inclínate desde las caderas.",
    "Permite que las manos descansen donde lleguen cómodamente.",
    "Relaja cuello y mandíbula."
  ],

  breathing:
    "Inspira para crear longitud y espira para permitir una flexión cómoda.",

  anatomy:
    "Flexión de cadera y flexión progresiva de la columna. Participan isquiotibiales, glúteos y musculatura posterior.",

  benefits: [
    "Moviliza la cadena posterior.",
    "Puede favorecer una sensación de calma.",
    "Útil en Hatha y Yin."
  ],

  precautions: [
    "No busques tocar los pies a cualquier precio.",
    "Mantén las rodillas ligeramente flexionadas si existe mucha tensión."
  ],

  contraindications: [
    "Modificar ante dolor lumbar agudo."
  ],

  redFlags: [
    "Dolor irradiado.",
    "Hormigueo.",
    "Pérdida de fuerza."
  ],

  props: ["Cinturón", "Bolster", "Manta"],
  duration: "1–5 minutos",

  variations: [
    "Rodillas flexionadas.",
    "Cinturón en los pies.",
    "Bolster bajo el torso."
  ]
},

/* =========================================================
   06 — JANU SIRSASANA
   ========================================================= */

{
  id: "janu-sirsasana",
  name: "Cabeza a la rodilla",
  sanskrit: "जानुशीर्षासन",
  transliteration: "Jānuśīrṣāsana",
  family: "Flexión",
  category: "Yin / Hatha",
  level: "Intermedio",
  image: img("Jānuśīrṣāsana.jpg"),

  shortDescription:
    "Flexión sentada asimétrica con una pierna extendida y otra flexionada.",

  execution: [
    "Extiende una pierna.",
    "Flexiona la otra llevando la planta del pie hacia el muslo.",
    "Gira el tronco hacia la pierna extendida.",
    "Inspira y alarga la columna.",
    "Espira e inclínate desde la cadera.",
    "Mantén ambos lados de la pelvis lo más estables posible."
  ],

  breathing:
    "Respira de manera lenta y continua.",

  anatomy:
    "Combina flexión de cadera, extensión de rodilla y rotación externa de la cadera flexionada.",

  benefits: [
    "Moviliza la cadena posterior.",
    "Trabaja de forma asimétrica.",
    "Útil para explorar diferencias entre ambos lados."
  ],

  precautions: [
    "No fuerces la rodilla de la pierna flexionada.",
    "Utiliza soporte bajo la pelvis si necesitas más altura."
  ],

  contraindications: [],
  redFlags: ["Dolor agudo en rodilla o espalda"],

  props: ["Cinturón", "Bolster", "Manta"],
  duration: "1–4 minutos por lado",

  variations: [
    "Pierna flexionada más abierta.",
    "Torso apoyado sobre bolster.",
    "Rodilla extendida suavemente."
  ]
},

/* =========================================================
   07 — UPAVISTHA KONASANA
   ========================================================= */

{
  id: "upavistha-konasana",
  name: "Ángulo sentado",
  sanskrit: "उपविष्ट कोणासन",
  transliteration: "Upaviṣṭha Koṇāsana",
  family: "Apertura de piernas",
  category: "Yin / Hatha",
  level: "Intermedio",
  image: img("Upavistha Konasana.jpg"),

  shortDescription:
    "Postura sentada con las piernas abiertas.",

  execution: [
    "Siéntate y abre las piernas progresivamente.",
    "Mantén las rodillas orientadas hacia el techo.",
    "Eleva la columna.",
    "Puedes permanecer vertical o inclinarte hacia delante.",
    "No necesitas alcanzar el suelo."
  ],

  breathing:
    "Respiración lenta y amplia.",

  anatomy:
    "Abducción de cadera, extensión de rodillas y demanda de movilidad de la cadena posterior.",

  benefits: [
    "Explora la movilidad de caderas.",
    "Puede trabajar aductores de manera gradual."
  ],

  precautions: [
    "No abras las piernas hasta el límite.",
    "Reduce la amplitud si aparece dolor."
  ],

  contraindications: [],
  redFlags: ["Dolor agudo en ingle o rodilla"],

  props: ["Cojín", "Bolster", "Bloques"],
  duration: "1–4 minutos",

  variations: [
    "Vertical.",
    "Flexión frontal.",
    "Bolster bajo el torso."
  ]
},

/* =========================================================
   08 — BHUJANGASANA
   ========================================================= */

{
  id: "bhujangasana",
  name: "Cobra",
  sanskrit: "भुजङ्गासन",
  transliteration: "Bhujaṅgāsana",
  family: "Extensión",
  category: "Hatha / Vinyasa",
  level: "Principiante–Intermedio",
  image: img("Bhujangasana.jpg"),

  shortDescription:
    "Extensión de columna realizada tumbado boca abajo.",

  execution: [
    "Túmbate boca abajo.",
    "Coloca las manos cerca de las costillas.",
    "Alarga las piernas hacia atrás.",
    "Inspira y eleva suavemente el pecho.",
    "Utiliza la musculatura de la espalda antes que la fuerza de los brazos.",
    "Mantén los hombros alejados de las orejas."
  ],

  breathing:
    "Inspira durante la extensión y espira para mantener o salir suavemente.",

  anatomy:
    "Extensión de columna, extensión de cadera y estabilización escapular.",

  benefits: [
    "Fortalece progresivamente la musculatura posterior.",
    "Moviliza la extensión de columna.",
    "Puede formar parte de Vinyasa."
  ],

  precautions: [
    "No colapses la zona lumbar.",
    "La altura no determina la calidad de la postura."
  ],

  contraindications: [
    "Modificar si la extensión lumbar provoca dolor."
  ],

  redFlags: [
    "Dolor lumbar agudo.",
    "Dolor irradiado hacia las piernas."
  ],

  props: ["Manta bajo pelvis opcional"],
  duration: "20–60 segundos",

  variations: [
    "Cobra baja.",
    "Cobra media.",
    "Cobra dinámica."
  ]
},

/* =========================================================
   09 — SALAMBA BHUJANGASANA / SPHINX
   ========================================================= */

{
  id: "sphinx",
  name: "Esfinge",
  sanskrit: "सलम्ब भुजङ्गासन",
  transliteration: "Salamba Bhujaṅgāsana",
  family: "Extensión",
  category: "Yin",
  level: "Principiante",
  image: img("IMG 0549 2 Sphinx.jpg"),

  shortDescription:
    "Extensión suave de columna apoyada sobre antebrazos.",

  execution: [
    "Túmbate boca abajo.",
    "Coloca los antebrazos delante del cuerpo.",
    "Mantén los codos aproximadamente bajo los hombros.",
    "Presiona suavemente los antebrazos.",
    "Permite una extensión cómoda de la columna.",
    "Mantén las piernas relajadas."
  ],

  breathing:
    "Respira de forma amplia hacia las costillas.",

  anatomy:
    "Extensión de columna con carga reducida sobre los brazos.",

  benefits: [
    "Introduce extensión de columna de forma gradual.",
    "Puede utilizarse como postura Yin.",
    "Favorece conciencia de la zona anterior del cuerpo."
  ],

  precautions: [
    "Aleja los codos si la extensión resulta demasiado intensa.",
    "Reduce el tiempo si aparece molestia lumbar."
  ],

  contraindications: [
    "Modificar ante dolor lumbar agudo."
  ],

  redFlags: [
    "Dolor agudo.",
    "Dolor irradiado."
  ],

  props: ["Bolster", "Manta"],
  duration: "2–5 minutos",

  variations: [
    "Esfinge baja.",
    "Esfinge con brazos más adelantados.",
    "Antebrazos sobre bolster."
  ]
},

/* =========================================================
   10 — ADHO MUKHA SVANASANA
   ========================================================= */

{
  id: "adho-mukha-svanasana",
  name: "Perro boca abajo",
  sanskrit: "अधोमुखश्वानासन",
  transliteration: "Adho Mukha Śvānāsana",
  family: "Inversión suave",
  category: "Vinyasa / Hatha",
  level: "Principiante",
  image: img("Downwarddog.JPG"),

  shortDescription:
    "Postura de apoyo en manos y pies con las caderas elevadas.",

  execution: [
    "Comienza a cuatro apoyos.",
    "Apoya manos firmemente.",
    "Eleva las rodillas.",
    "Lleva las caderas hacia arriba y atrás.",
    "Alarga la columna.",
    "Mantén las rodillas flexionadas si necesitas liberar tensión."
  ],

  breathing:
    "Respira de manera regular y evita contener el aire.",

  anatomy:
    "Carga sobre manos y cintura escapular, extensión de hombros y flexión de cadera.",

  benefits: [
    "Integra fuerza y movilidad.",
    "Prepara transiciones de Vinyasa.",
    "Trabaja la cadena posterior."
  ],

  precautions: [
    "No necesitas apoyar los talones.",
    "Distribuye el peso entre manos y pies."
  ],

  contraindications: [
    "Modificar ante molestias importantes de muñeca."
  ],

  redFlags: [
    "Hormigueo persistente en manos.",
    "Dolor agudo."
  ],

  props: ["Bloques"],
  duration: "30 segundos–2 minutos",

  variations: [
    "Rodillas flexionadas.",
    "Pedaleo suave.",
    "Talones elevados."
  ]
},

/* =========================================================
   11 — PHALAKASANA
   ========================================================= */

{
  id: "phalakasana",
  name: "Plancha",
  sanskrit: "फलाकासन",
  transliteration: "Phalakāsana",
  family: "Apoyo de brazos",
  category: "Fuerza",
  level: "Principiante–Intermedio",
  image: img("Phalakasana.jpg"),

  shortDescription:
    "Postura de apoyo frontal utilizada para desarrollar fuerza global.",

  execution: [
    "Coloca las manos bajo los hombros.",
    "Extiende las piernas hacia atrás.",
    "Activa abdomen y piernas.",
    "Mantén una línea funcional entre cabeza, tronco y piernas.",
    "Respira sin bloquear."
  ],

  breathing:
    "Respiración continua y estable.",

  anatomy:
    "Trabajo integrado de hombros, brazos, abdomen, glúteos y piernas.",

  benefits: [
    "Desarrolla fuerza.",
    "Prepara Chaturanga.",
    "Mejora la estabilidad del tronco."
  ],

  precautions: [
    "Apoya las rodillas para reducir carga.",
    "No dejes caer la zona lumbar."
  ],

  contraindications: [],
  redFlags: ["Dolor de muñeca", "Dolor de hombro"],

  props: ["Esterilla"],
  duration: "15–60 segundos",

  variations: [
    "Rodillas apoyadas.",
    "Plancha alta.",
    "Plancha baja."
  ]
},

/* =========================================================
   12 — CHATURANGA
   ========================================================= */

{
  id: "chaturanga",
  name: "Bastón de cuatro apoyos",
  sanskrit: "चतुरङ्ग दण्डासन",
  transliteration: "Caturaṅga Daṇḍāsana",
  family: "Apoyo de brazos",
  category: "Vinyasa / Fuerza",
  level: "Intermedio",
  image: img("Chaturanga Dandasana.jpg"),

  shortDescription:
    "Transición de fuerza en la que el cuerpo desciende manteniendo control.",

  execution: [
    "Comienza desde plancha.",
    "Lleva ligeramente los hombros hacia delante.",
    "Flexiona los codos manteniéndolos próximos al tronco.",
    "Desciende sólo hasta donde puedas controlar.",
    "Mantén abdomen y piernas activos."
  ],

  breathing:
    "Inspira para preparar y espira durante el descenso.",

  anatomy:
    "Flexión de codos y extensión de muñecas con estabilización de hombros y tronco.",

  benefits: [
    "Desarrolla fuerza de brazos y tronco.",
    "Prepara transiciones de Vinyasa."
  ],

  precautions: [
    "Practica con rodillas apoyadas si todavía no controlas la postura.",
    "No es necesario bajar hasta el suelo."
  ],

  contraindications: [
    "Modificar ante dolor de muñeca u hombro."
  ],

  redFlags: [
    "Dolor agudo de hombro.",
    "Pérdida de control del tronco."
  ],

  props: ["Bloques opcionales"],
  duration: "5–20 segundos",

  variations: [
    "Rodillas apoyadas.",
    "Descenso parcial.",
    "Chaturanga completo."
  ]
},

/* =========================================================
   13 — URDHVA MUKHA SVANASANA
   ========================================================= */

{
  id: "urdhva-mukha-svanasana",
  name: "Perro boca arriba",
  sanskrit: "ऊर्ध्वमुखश्वानासन",
  transliteration: "Ūrdhva Mukha Śvānāsana",
  family: "Extensión",
  category: "Vinyasa",
  level: "Intermedio",
  image: img("Urdhva Mukha Svanasana.jpg"),

  shortDescription:
    "Extensión activa de columna con apoyo principal en manos y empeines.",

  execution: [
    "Desde una posición boca abajo, coloca las manos junto al tórax.",
    "Presiona las manos.",
    "Eleva el pecho.",
    "Mantén los muslos separados del suelo si es cómodo.",
    "Alarga la columna.",
    "Mantén los hombros alejados de las orejas."
  ],

  breathing:
    "Inspira para crear longitud y extensión.",

  anatomy:
    "Extensión de columna y cadera con fuerte participación de hombros y brazos.",

  benefits: [
    "Desarrolla fuerza posterior.",
    "Forma parte de algunas transiciones Vinyasa."
  ],

  precautions: [
    "No fuerces la zona lumbar.",
    "Utiliza Cobra como alternativa."
  ],

  contraindications: [
    "Modificar ante dolor lumbar u hombros."
  ],

  redFlags: ["Dolor agudo", "Hormigueo"],

  props: [],
  duration: "10–30 segundos",

  variations: [
    "Cobra.",
    "Perro boca arriba dinámico."
  ]
},

/* =========================================================
   14 — VIRABHADRASANA I
   ========================================================= */

{
  id: "virabhadrasana-i",
  name: "Guerrero I",
  sanskrit: "वीरभद्रासन I",
  transliteration: "Vīrabhadrāsana I",
  family: "De pie",
  category: "Hatha / Vinyasa",
  level: "Principiante",
  image: img("Virabhadrasana I - Warrior Pose I.jpg"),

  shortDescription:
    "Postura de pie con base amplia y brazos elevados.",

  execution: [
    "Da un paso largo hacia atrás.",
    "Flexiona la rodilla delantera.",
    "Gira ligeramente la pelvis hacia delante según tu movilidad.",
    "Eleva los brazos.",
    "Alarga la columna.",
    "Mantén el peso distribuido entre ambos pies."
  ],

  breathing:
    "Respiración estable, utilizando la espiración para asentarte en la postura.",

  anatomy:
    "Fortalecimiento de piernas y glúteos, extensión de cadera posterior y elevación de brazos.",

  benefits: [
    "Fortalece piernas.",
    "Mejora estabilidad.",
    "Prepara secuencias de pie."
  ],

  precautions: [
    "Reduce la longitud de la zancada si la pelvis no puede estabilizarse."
  ],

  contraindications: [],
  redFlags: ["Dolor de rodilla", "Pérdida de equilibrio"],

  props: ["Pared opcional"],
  duration: "30–60 segundos por lado",

  variations: [
    "Talón posterior elevado.",
    "Talón posterior apoyado.",
    "Brazos abiertos."
  ]
},

/* =========================================================
   15 — VIRABHADRASANA II
   ========================================================= */

{
  id: "virabhadrasana-ii",
  name: "Guerrero II",
  sanskrit: "वीरभद्रासन II",
  transliteration: "Vīrabhadrāsana II",
  family: "De pie",
  category: "Hatha / Vinyasa",
  level: "Principiante",
  image: img("WarriorII.jpg"),

  shortDescription:
    "Postura de pie con piernas abiertas y brazos extendidos.",

  execution: [
    "Abre las piernas ampliamente.",
    "Gira un pie hacia fuera.",
    "Flexiona la rodilla delantera.",
    "Extiende los brazos a ambos lados.",
    "Mantén la mirada sobre la mano delantera.",
    "Alarga el torso."
  ],

  breathing:
    "Respira de manera continua y estable.",

  anatomy:
    "Fortalecimiento de cuádriceps, glúteos y musculatura estabilizadora de cadera.",

  benefits: [
    "Fortalece piernas.",
    "Mejora resistencia postural.",
    "Trabaja coordinación."
  ],

  precautions: [
    "Alinea la rodilla aproximadamente con el pie.",
    "No permitas que la rodilla colapse hacia dentro."
  ],

  contraindications: [],
  redFlags: ["Dolor agudo de rodilla o cadera"],

  props: ["Pared opcional"],
  duration: "30–60 segundos por lado",

  variations: [
    "Rodilla menos flexionada.",
    "Base más corta.",
    "Brazos relajados."
  ]
},

/* =========================================================
   16 — VIRABHADRASANA III
   ========================================================= */

{
  id: "virabhadrasana-iii",
  name: "Guerrero III",
  sanskrit: "वीरभद्रासन III",
  transliteration: "Vīrabhadrāsana III",
  family: "Equilibrio",
  category: "Hatha",
  level: "Intermedio",
  image: img("Tuladandasana - Virabhadrasana III.jpg"),

  shortDescription:
    "Equilibrio sobre una pierna con el tronco inclinado hacia delante.",

  execution: [
    "Comienza de pie.",
    "Traslada progresivamente el peso a una pierna.",
    "Inclina el tronco hacia delante.",
    "Extiende la pierna posterior.",
    "Mantén las caderas aproximadamente niveladas.",
    "Extiende los brazos o mantenlos junto al torso."
  ],

  breathing:
    "Respira de forma continua mientras mantienes la estabilidad.",

  anatomy:
    "Trabajo de glúteos, isquiotibiales, pantorrillas, core y musculatura estabilizadora del pie.",

  benefits: [
    "Mejora equilibrio.",
    "Desarrolla fuerza de pierna.",
    "Trabaja coordinación."
  ],

  precautions: [
    "Utiliza una pared.",
    "No sacrifiques la estabilidad por elevar más la pierna."
  ],

  contraindications: [],
  redFlags: ["Dolor agudo", "Inestabilidad marcada"],

  props: ["Pared", "Bloques"],
  duration: "15–45 segundos por lado",

  variations: [
    "Manos en pared.",
    "Manos en bloques.",
    "Brazos extendidos."
  ]
},

/* =========================================================
   17 — TRIKONASANA
   ========================================================= */

{
  id: "trikonasana",
  name: "Triángulo",
  sanskrit: "त्रिकोणासन",
  transliteration: "Trikoṇāsana",
  family: "De pie",
  category: "Hatha",
  level: "Principiante–Intermedio",
  image: img("Trikonasana.jpg"),

  shortDescription:
    "Postura lateral de pie con piernas extendidas y torso inclinado.",

  execution: [
    "Separa las piernas.",
    "Gira un pie hacia fuera.",
    "Extiende ambos brazos.",
    "Inclina el tronco hacia la pierna delantera.",
    "Apoya la mano en la pierna o en un bloque.",
    "Extiende el otro brazo hacia arriba si resulta cómodo."
  ],

  breathing:
    "Respira ampliamente hacia las costillas.",

  anatomy:
    "Combina abducción de cadera, extensión de rodillas y flexión lateral del tronco.",

  benefits: [
    "Trabaja piernas.",
    "Moviliza el tronco lateral.",
    "Desarrolla estabilidad."
  ],

  precautions: [
    "Usa bloque para evitar colapsar el torso."
  ],

  contraindications: [],
  redFlags: ["Mareo", "Dolor agudo"],

  props: ["Bloque"],
  duration: "30–60 segundos por lado",

  variations: [
    "Mano en bloque.",
    "Mano en espinilla.",
    "Brazo superior elevado."
  ]
},

/* =========================================================
   18 — ARDHA CHANDRASANA
   ========================================================= */

{
  id: "ardha-chandrasana",
  name: "Media luna",
  sanskrit: "अर्धचन्द्रासन",
  transliteration: "Ardha Candrāsana",
  family: "Equilibrio",
  category: "Hatha",
  level: "Intermedio",
  image: img("Ardha Candrāsana-half-moon.jpg"),

  shortDescription:
    "Equilibrio lateral sobre una pierna con el torso abierto.",

  execution: [
    "Desde una postura de pie, inclina el tronco hacia delante.",
    "Apoya una mano sobre un bloque.",
    "Eleva la pierna posterior.",
    "Abre progresivamente la pelvis.",
    "Extiende el brazo superior.",
    "Mantén la mirada en un punto estable."
  ],

  breathing:
    "Respiración tranquila y estable.",

  anatomy:
    "Trabajo de glúteo medio, musculatura del pie, cadera y core.",

  benefits: [
    "Mejora equilibrio.",
    "Fortalece la pierna de apoyo.",
    "Trabaja apertura de cadera."
  ],

  precautions: [
    "Utiliza bloque y pared.",
    "No necesitas abrir completamente la pelvis."
  ],

  contraindications: [],
  redFlags: ["Pérdida repetida del equilibrio", "Dolor agudo"],

  props: ["Bloque", "Pared"],
  duration: "15–40 segundos por lado",

  variations: [
    "Pared.",
    "Bloque alto.",
    "Pierna posterior menos elevada."
  ]
},

/* =========================================================
   19 — VRKSHASANA
   ========================================================= */

{
  id: "vrikshasana",
  name: "Árbol",
  sanskrit: "वृक्षासन",
  transliteration: "Vṛkṣāsana",
  family: "Equilibrio",
  category: "Hatha",
  level: "Principiante",
  image: img("Postura da Árvore Yoga.jpg"),

  shortDescription:
    "Equilibrio de pie con una pierna y la otra apoyada de forma progresiva.",

  execution: [
    "Comienza en Tadasana.",
    "Traslada el peso a una pierna.",
    "Coloca la otra planta en tobillo, pantorrilla o muslo, evitando la rodilla.",
    "Junta las manos o elévalas.",
    "Mantén la mirada fija."
  ],

  breathing:
    "Respiración nasal lenta.",

  anatomy:
    "Estabilización de pie, tobillo, rodilla y cadera.",

  benefits: [
    "Desarrolla equilibrio.",
    "Mejora concentración corporal.",
    "Fortalece la pierna de apoyo."
  ],

  precautions: [
    "No apoyes el pie directamente sobre la rodilla."
  ],

  contraindications: [],
  redFlags: ["Dolor", "Inestabilidad importante"],

  props: ["Pared"],
  duration: "20–60 segundos por lado",

  variations: [
    "Pie en tobillo.",
    "Pie en pantorrilla.",
    "Pie en muslo."
  ]
},

/* =========================================================
   20 — UTKATASANA
   ========================================================= */

{
  id: "utkatasana",
  name: "Silla",
  sanskrit: "उत्कटासन",
  transliteration: "Utkatāsana",
  family: "De pie",
  category: "Fuerza",
  level: "Principiante",
  image: img("Utkatasana.jpg"),

  shortDescription:
    "Postura de fuerza con flexión de rodillas y caderas.",

  execution: [
    "Colócate de pie.",
    "Flexiona las rodillas y lleva las caderas hacia atrás.",
    "Mantén el peso distribuido sobre los pies.",
    "Eleva los brazos.",
    "Alarga la columna.",
    "Mantén el abdomen activo."
  ],

  breathing:
    "Respira de manera continua.",

  anatomy:
    "Fortalecimiento de cuádriceps, glúteos y musculatura estabilizadora.",

  benefits: [
    "Fortalece piernas.",
    "Desarrolla resistencia postural."
  ],

  precautions: [
    "Reduce la flexión de rodillas si resulta excesiva.",
    "Mantén el peso en todo el pie."
  ],

  contraindications: [],
  redFlags: ["Dolor de rodilla"],

  props: ["Pared"],
  duration: "20–60 segundos",

  variations: [
    "Brazos al frente.",
    "Brazos arriba.",
    "Sentadilla más alta."
  ]
},

/* =========================================================
   21 — MALASANA
   ========================================================= */

{
  id: "malasana",
  name: "Guirnalda",
  sanskrit: "मालासन",
  transliteration: "Mālāsana",
  family: "Sentadilla",
  category: "Movilidad",
  level: "Intermedio",
  image: img("Upaveśāsana.jpg"),

  shortDescription:
    "Sentadilla profunda utilizada para explorar movilidad de tobillos, caderas y columna.",

  execution: [
    "Separa los pies.",
    "Flexiona las rodillas.",
    "Desciende las caderas.",
    "Abre suavemente las rodillas.",
    "Mantén el torso largo.",
    "Puedes apoyar los talones sobre una manta."
  ],

  breathing:
    "Respiración lenta.",

  anatomy:
    "Flexión profunda de rodillas y caderas, con dorsiflexión de tobillo.",

  benefits: [
    "Moviliza caderas y tobillos.",
    "Fortalece piernas.",
    "Puede preparar para posturas de suelo."
  ],

  precautions: [
    "Eleva los talones si necesitas.",
    "No fuerces las rodillas hacia fuera."
  ],

  contraindications: [],
  redFlags: ["Dolor agudo de rodilla o tobillo"],

  props: ["Manta", "Bloque"],
  duration: "30 segundos–2 minutos",

  variations: [
    "Talones elevados.",
    "Caderas sobre bloque.",
    "Manos en oración."
  ]
},

/* =========================================================
   22 — SETU BANDHASANA
   ========================================================= */

{
  id: "setu-bandhasana",
  name: "Puente",
  sanskrit: "सेतु बन्धासन",
  transliteration: "Setu Bandhāsana",
  family: "Extensión",
  category: "Hatha / Fuerza",
  level: "Principiante",
  image: img("Setubandhasan.jpg"),

  shortDescription:
    "Extensión de cadera y columna realizada tumbado boca arriba.",

  execution: [
    "Túmbate boca arriba.",
    "Flexiona las rodillas.",
    "Apoya los pies cerca de la pelvis.",
    "Presiona los pies.",
    "Eleva la pelvis.",
    "Mantén las rodillas aproximadamente alineadas con los pies."
  ],

  breathing:
    "Inspira para preparar y espira suavemente mientras estabilizas.",

  anatomy:
    "Extensión de cadera con participación de glúteos, isquiotibiales y musculatura posterior.",

  benefits: [
    "Fortalece la cadena posterior.",
    "Moviliza la extensión de cadera.",
    "Puede formar parte de prácticas Hatha."
  ],

  precautions: [
    "No hiperextiendas el cuello.",
    "Mantén la barbilla natural."
  ],

  contraindications: [],
  redFlags: ["Dolor cervical o lumbar agudo"],

  props: ["Bloque"],
  duration: "20–60 segundos",

  variations: [
    "Puente dinámico.",
    "Puente mantenido.",
    "Bloque bajo el sacro."
  ]
},

/* =========================================================
   23 — SUPTA BADDHA KONASANA
   ========================================================= */

{
  id: "supta-baddha-konasana",
  name: "Mariposa tumbada",
  sanskrit: "सुप्त बद्ध कोणासन",
  transliteration: "Supta Baddha Koṇāsana",
  family: "Supina",
  category: "Restaurativo",
  level: "Principiante",
  image: img("Supta Baddha Konasana.jpg"),

  shortDescription:
    "Versión tumbada de Baddha Konasana.",

  execution: [
    "Túmbate boca arriba.",
    "Junta las plantas de los pies.",
    "Deja caer las rodillas hacia los lados.",
    "Apoya cada rodilla sobre un soporte si es necesario.",
    "Relaja brazos y mandíbula."
  ],

  breathing:
    "Respiración tranquila y amplia.",

  anatomy:
    "Rotación externa y abducción de caderas con apoyo del cuerpo.",

  benefits: [
    "Favorece descanso.",
    "Puede utilizarse en prácticas restaurativas."
  ],

  precautions: [
    "Apoya las piernas si existe tensión."
  ],

  contraindications: [],
  redFlags: ["Dolor de cadera o rodilla"],

  props: ["Bolsters", "Cojines", "Mantas"],
  duration: "3–10 minutos",

  variations: [
    "Soporte bajo ambas rodillas.",
    "Bolster longitudinal bajo espalda.",
    "Versión sin soporte."
  ]
},

/* =========================================================
   24 — VIPARITA KARANI
   ========================================================= */

{
  id: "viparita-karani",
  name: "Piernas en la pared",
  sanskrit: "विपरीतकरणी",
  transliteration: "Viparīta Karaṇī",
  family: "Supina",
  category: "Restaurativo",
  level: "Principiante",
  image: img("Viparita Karani.jpg"),

  shortDescription:
    "Postura restaurativa con las piernas elevadas.",

  execution: [
    "Siéntate cerca de una pared.",
    "Gira el cuerpo y lleva las piernas hacia arriba.",
    "Acomoda la pelvis según resulte cómodo.",
    "Relaja el abdomen.",
    "Deja los brazos descansar."
  ],

  breathing:
    "Respiración lenta y natural.",

  anatomy:
    "Posición supina con caderas y piernas elevadas y bajo esfuerzo muscular.",

  benefits: [
    "Favorece una práctica de descanso.",
    "Permite permanecer quieto durante varios minutos.",
    "Útil al final de sesiones suaves."
  ],

  precautions: [
    "Aléjate de la pared si sientes demasiada tensión posterior."
  ],

  contraindications: [],
  redFlags: ["Mareo", "Malestar significativo"],

  props: ["Manta", "Bolster"],
  duration: "3–15 minutos",

  variations: [
    "Pelvis neutra.",
    "Bolster bajo pelvis.",
    "Rodillas ligeramente flexionadas."
  ]
},

/* =========================================================
   25 — SUPTA MATSYENDRASANA
   ========================================================= */

{
  id: "supta-matsyendrasana",
  name: "Torsión supina",
  sanskrit: "सुप्त मत्स्येन्द्रासन",
  transliteration: "Supta Matsyendrāsana",
  family: "Torsión",
  category: "Yin / Restaurativo",
  level: "Principiante",
  image: img("Jathara Parivartanasana.jpg"),

  shortDescription:
    "Torsión tumbada utilizada como postura de integración.",

  execution: [
    "Túmbate boca arriba.",
    "Flexiona las rodillas.",
    "Lleva ambas piernas hacia un lado.",
    "Mantén hombros relajados.",
    "Gira la cabeza sólo si resulta cómodo.",
    "Repite hacia el otro lado."
  ],

  breathing:
    "Respira hacia las costillas laterales y posteriores.",

  anatomy:
    "Rotación de columna combinada con movimiento de cadera.",

  benefits: [
    "Favorece movilidad rotacional.",
    "Puede utilizarse para finalizar una práctica."
  ],

  precautions: [
    "Reduce el rango si los hombros se levantan del suelo."
  ],

  contraindications: [],
  redFlags: ["Dolor agudo o irradiado"],

  props: ["Bolster", "Cojín"],
  duration: "1–3 minutos por lado",

  variations: [
    "Rodillas juntas.",
    "Pierna inferior extendida.",
    "Soporte bajo las rodillas."
  ]
},

/* =========================================================
   26 — SAVASANA
   ========================================================= */

{
  id: "savasana",
  name: "Postura del cadáver",
  sanskrit: "शवासन",
  transliteration: "Śavāsana",
  family: "Supina",
  category: "Relajación",
  level: "Todos",
  image: img("Savasana.jpg"),

  shortDescription:
    "Postura final de descanso completamente tumbada.",

  execution: [
    "Túmbate boca arriba.",
    "Separa ligeramente los pies.",
    "Deja los brazos a los lados.",
    "Relaja hombros, mandíbula y rostro.",
    "Permite que el cuerpo descanse.",
    "Permanece inmóvil sin forzar."
  ],

  breathing:
    "Deja que la respiración vuelva a su ritmo natural.",

  anatomy:
    "Posición neutra y de descarga muscular relativa.",

  benefits: [
    "Favorece la integración de la práctica.",
    "Permite observar cambios en respiración y sensaciones."
  ],

  precautions: [
    "Coloca una manta bajo las rodillas si la zona lumbar lo agradece.",
    "Utiliza manta para mantener temperatura."
  ],

  contraindications: [],
  redFlags: [],

  props: ["Manta", "Bolster", "Cojín"],
  duration: "3–15 minutos",

  variations: [
    "Rodillas apoyadas.",
    "Bolster bajo rodillas.",
    "Versión lateral si estar boca arriba no resulta cómodo."
  ]
},

/* =========================================================
   27 — VAJRASANA
   ========================================================= */

{
  id: "vajrasana",
  name: "Postura del diamante",
  sanskrit: "वज्रासन",
  transliteration: "Vajrāsana",
  family: "Arrodillada",
  category: "Meditación",
  level: "Principiante",
  image: img("Vajrasana.jpg"),

  shortDescription:
    "Postura arrodillada utilizada tradicionalmente para meditación y respiración.",

  execution: [
    "Arrodíllate.",
    "Lleva las caderas hacia los talones.",
    "Mantén el torso erguido.",
    "Apoya las manos sobre los muslos."
  ],

  breathing:
    "Respiración natural.",

  anatomy:
    "Flexión de rodillas y tobillos con estabilización del tronco.",

  benefits: [
    "Facilita prácticas sentadas.",
    "Favorece estabilidad."
  ],

  precautions: [
    "Coloca un cojín entre caderas y talones si lo necesitas."
  ],

  contraindications: [
    "Modificar ante molestias importantes de rodillas o tobillos."
  ],

  redFlags: ["Entumecimiento persistente"],

  props: ["Bolster", "Cojín", "Manta"],
  duration: "1–15 minutos",

  variations: [
    "Cojín entre talones y pelvis.",
    "Rodillas ligeramente separadas."
  ]
},

/* =========================================================
   28 — GOMUKHASANA
   ========================================================= */

{
  id: "gomukhasana",
  name: "Cara de vaca",
  sanskrit: "गोमुखासन",
  transliteration: "Gomukhāsana",
  family: "Caderas / Hombros",
  category: "Hatha",
  level: "Intermedio",
  image: img("Gomukhasana.jpg"),

  shortDescription:
    "Postura sentada que combina trabajo de caderas y hombros.",

  execution: [
    "Cruza una pierna sobre la otra.",
    "Acomoda las rodillas una sobre otra según tu movilidad.",
    "Eleva un brazo y llévalo detrás de la cabeza.",
    "Lleva el otro brazo por detrás desde abajo.",
    "Utiliza un cinturón si las manos no llegan."
  ],

  breathing:
    "Respira lentamente manteniendo espacio en el pecho.",

  anatomy:
    "Combina rotación de cadera con diferentes posiciones de hombro.",

  benefits: [
    "Trabaja movilidad de caderas.",
    "Explora movilidad de hombros."
  ],

  precautions: [
    "No fuerces la unión de las manos."
  ],

  contraindications: [],
  redFlags: ["Dolor de hombro o rodilla"],

  props: ["Cinturón", "Manta"],
  duration: "30–90 segundos por lado",

  variations: [
    "Piernas sencillas.",
    "Cinturón entre manos.",
    "Sólo brazos."
  ]
},

/* =========================================================
   29 — GARUDASANA
   ========================================================= */

{
  id: "garudasana",
  name: "Águila",
  sanskrit: "गरुडासन",
  transliteration: "Garuḍāsana",
  family: "Equilibrio",
  category: "Hatha",
  level: "Intermedio",
  image: img("Garudasana.jpg"),

  shortDescription:
    "Equilibrio de pie con piernas y brazos entrelazados.",

  execution: [
    "Comienza de pie.",
    "Flexiona ligeramente las rodillas.",
    "Cruza una pierna sobre la otra.",
    "Si puedes, engancha el pie detrás de la pantorrilla.",
    "Cruza los brazos delante del pecho.",
    "Mantén la mirada fija."
  ],

  breathing:
    "Respira de manera continua.",

  anatomy:
    "Trabajo de equilibrio, estabilización de cadera y coordinación de hombros.",

  benefits: [
    "Desarrolla equilibrio.",
    "Trabaja coordinación.",
    "Fortalece la pierna de apoyo."
  ],

  precautions: [
    "No es necesario enganchar completamente el pie."
  ],

  contraindications: [],
  redFlags: ["Dolor de rodilla"],

  props: ["Pared"],
  duration: "20–45 segundos por lado",

  variations: [
    "Piernas sin enganchar.",
    "Brazos sencillos.",
    "Pared."
  ]
},

/* =========================================================
   30 — NATARAJASANA
   ========================================================= */

{
  id: "natarajasana",
  name: "Bailarín",
  sanskrit: "नटराजासन",
  transliteration: "Naṭarājāsana",
  family: "Equilibrio / Extensión",
  category: "Hatha",
  level: "Intermedio",
  image: img("Natarajasana.jpg"),

  shortDescription:
    "Equilibrio sobre una pierna combinado con extensión de cadera y columna.",

  execution: [
    "Comienza de pie.",
    "Flexiona una rodilla.",
    "Sujeta el pie o tobillo.",
    "Inclina ligeramente el tronco hacia delante.",
    "Extiende la pierna posterior progresivamente.",
    "Utiliza una pared si lo necesitas."
  ],

  breathing:
    "Respiración estable.",

  anatomy:
    "Equilibrio unilateral con extensión de cadera y movilidad de hombro.",

  benefits: [
    "Trabaja equilibrio.",
    "Fortalece la pierna de apoyo.",
    "Integra movilidad y coordinación."
  ],

  precautions: [
    "No fuerces la extensión lumbar.",
    "Utiliza cinturón si no alcanzas el pie."
  ],

  contraindications: [],
  redFlags: ["Dolor de rodilla o espalda"],

  props: ["Cinturón", "Pared"],
  duration: "15–40 segundos por lado",

  variations: [
    "Cinturón.",
    "Pared.",
    "Pierna posterior menos elevada."
  ]
},

/* =========================================================
   31 — HALASANA
   ========================================================= */

{
  id: "halasana",
  name: "Arado",
  sanskrit: "हलासन",
  transliteration: "Halāsana",
  family: "Inversión",
  category: "Hatha",
  level: "Avanzado",
  image: img("Halasana.jpg"),

  shortDescription:
    "Inversión en la que las piernas se desplazan por detrás de la cabeza.",

  execution: [
    "Practica sólo cuando tengas experiencia suficiente.",
    "Eleva las piernas desde una posición supina.",
    "Lleva las piernas progresivamente hacia atrás.",
    "Mantén el peso distribuido sin comprimir el cuello.",
    "Sal lentamente."
  ],

  breathing:
    "Respiración tranquila, sin contener el aire.",

  anatomy:
    "Flexión de cadera con posición invertida del tronco.",

  benefits: [
    "Forma parte de algunas prácticas tradicionales de Hatha.",
    "Desarrolla control corporal."
  ],

  precautions: [
    "No gires la cabeza mientras estás en la postura.",
    "Debe enseñarse progresivamente."
  ],

  contraindications: [
    "No adecuada para todas las personas.",
    "Evitar si existe dolor o lesión cervical."
  ],

  redFlags: [
    "Presión o dolor cervical.",
    "Mareo.",
    "Alteraciones visuales."
  ],

  props: ["Mantas"],
  duration: "10–60 segundos",

  variations: [
    "Piernas apoyadas sobre soporte.",
    "Preparación con piernas elevadas."
  ]
},

/* =========================================================
   32 — SARVANGASANA
   ========================================================= */

{
  id: "sarvangasana",
  name: "Postura sobre los hombros",
  sanskrit: "सर्वाङ्गासन",
  transliteration: "Sarvāṅgāsana",
  family: "Inversión",
  category: "Hatha",
  level: "Avanzado",
  image: img("Sarvangasana.jpg"),

  shortDescription:
    "Inversión avanzada tradicional que requiere preparación específica.",

  execution: [
    "Debe aprenderse progresivamente.",
    "Utiliza mantas bajo los hombros cuando corresponda.",
    "Eleva las piernas de forma controlada.",
    "Mantén el cuello estable.",
    "No gires la cabeza.",
    "Sal lentamente."
  ],

  breathing:
    "Respiración tranquila y continua.",

  anatomy:
    "Inversión con demanda de estabilización de hombros y tronco.",

  benefits: [
    "Forma parte de determinadas secuencias tradicionales.",
    "Desarrolla control corporal."
  ],

  precautions: [
    "No debe aprenderse sin preparación.",
    "El cuello debe permanecer estable."
  ],

  contraindications: [
    "No practicar con lesiones cervicales.",
    "Requiere valoración individual en determinadas situaciones."
  ],

  redFlags: [
    "Dolor cervical.",
    "Mareo.",
    "Alteraciones visuales."
  ],

  props: ["Mantas"],
  duration: "10–60 segundos",

  variations: [
    "Preparación con piernas elevadas.",
    "Variaciones asistidas."
  ]
},

/* =========================================================
   33 — SIRSASANA
   ========================================================= */

{
  id: "sirsasana",
  name: "Parada sobre la cabeza",
  sanskrit: "शीर्षासन",
  transliteration: "Śīrṣāsana",
  family: "Inversión",
  category: "Hatha",
  level: "Avanzado",
  image: img("Sirsasana.jpg"),

  shortDescription:
    "Inversión avanzada que requiere una preparación técnica considerable.",

  execution: [
    "Practica con supervisión adecuada si estás aprendiendo.",
    "Prepara hombros y cintura escapular.",
    "Construye primero la base con antebrazos y manos.",
    "Eleva las caderas.",
    "Progresa sin saltar.",
    "Mantén el control durante entrada y salida."
  ],

  breathing:
    "Respiración estable. Nunca contengas el aire deliberadamente.",

  anatomy:
    "Gran demanda de cintura escapular, brazos, tronco y control espacial.",

  benefits: [
    "Desarrolla equilibrio avanzado.",
    "Trabaja control corporal."
  ],

  precautions: [
    "No practicar sin preparación.",
    "No saltar para entrar.",
    "Utiliza pared al principio."
  ],

  contraindications: [
    "Debe evitarse ante determinadas lesiones cervicales u oculares."
  ],

  redFlags: [
    "Dolor cervical.",
    "Mareo.",
    "Dolor de cabeza intenso.",
    "Alteraciones visuales."
  ],

  props: ["Pared", "Manta"],
  duration: "5–30 segundos",

  variations: [
    "Preparación con pies en suelo.",
    "Pared.",
    "Entrada controlada."
  ]
},

/* =========================================================
   34 — BAKASANA
   ========================================================= */

{
  id: "bakasana",
  name: "Cuervo",
  sanskrit: "बकासन",
  transliteration: "Bakāsana",
  family: "Equilibrio de brazos",
  category: "Fuerza",
  level: "Avanzado",
  image: img("Bakasana.jpg"),

  shortDescription:
    "Equilibrio sobre las manos con las rodillas apoyadas sobre los brazos.",

  execution: [
    "Coloca las manos en el suelo.",
    "Separa los dedos.",
    "Eleva las caderas.",
    "Coloca las rodillas sobre los brazos.",
    "Traslada el peso hacia delante.",
    "Eleva progresivamente los pies."
  ],

  breathing:
    "Respira de manera estable y controlada.",

  anatomy:
    "Gran demanda de muñecas, hombros, core y flexores de cadera.",

  benefits: [
    "Desarrolla fuerza de brazos.",
    "Mejora equilibrio.",
    "Trabaja coordinación."
  ],

  precautions: [
    "Practica sobre una superficie estable.",
    "Puedes utilizar un cojín delante para practicar."
  ],

  contraindications: [
    "Modificar ante lesiones de muñeca u hombro."
  ],

  redFlags: [
    "Dolor agudo de muñeca.",
    "Pérdida brusca de control."
  ],

  props: ["Cojín", "Bloques"],
  duration: "5–30 segundos",

  variations: [
    "Pies elevados uno a uno.",
    "Cuervo con soporte.",
    "Bakasana completo."
  ]
},

/* =========================================================
   35 — PINCHA MAYURASANA
   ========================================================= */

{
  id: "pincha-mayurasana",
  name: "Equilibrio sobre antebrazos",
  sanskrit: "पिञ्च मयूरासन",
  transliteration: "Piñcha Mayūrāsana",
  family: "Inversión",
  category: "Fuerza",
  level: "Avanzado",
  image: img("Pincha Mayurasana.jpg"),

  shortDescription:
    "Equilibrio invertido sobre antebrazos.",

  execution: [
    "Prepara hombros y antebrazos.",
    "Coloca los antebrazos paralelos.",
    "Eleva las caderas.",
    "Practica primero con un pie.",
    "Progresivamente lleva las piernas hacia arriba.",
    "Utiliza una pared."
  ],

  breathing:
    "Respiración estable.",

  anatomy:
    "Alta demanda de hombros, escápulas, core y equilibrio.",

  benefits: [
    "Desarrolla fuerza de hombros.",
    "Mejora equilibrio avanzado."
  ],

  precautions: [
    "Progresión gradual.",
    "No utilizar impulso excesivo."
  ],

  contraindications: [],
  redFlags: ["Dolor de hombro", "Mareo"],

  props: ["Pared", "Correa"],
  duration: "5–30 segundos",

  variations: [
    "Preparación con pies en pared.",
    "Una pierna.",
    "Completa."
  ]
},

/* =========================================================
   36 — USTRASANA
   ========================================================= */

{
  id: "ustrasana",
  name: "Camello",
  sanskrit: "उष्ट्रासन",
  transliteration: "Uṣṭrāsana",
  family: "Extensión",
  category: "Hatha",
  level: "Intermedio",
  image: img("Ustrasana.jpg"),

  shortDescription:
    "Extensión de columna realizada desde una posición de rodillas.",

  execution: [
    "Arrodíllate con las caderas sobre las rodillas.",
    "Apoya las manos en la pelvis.",
    "Eleva el pecho.",
    "Extiende la columna progresivamente.",
    "Sólo lleva las manos a los talones si puedes mantener control.",
    "Sal elevando primero el pecho."
  ],

  breathing:
    "Inspira para crear longitud y espira para estabilizar.",

  anatomy:
    "Extensión de columna y cadera con trabajo de muslos y hombros.",

  benefits: [
    "Moviliza la extensión de columna.",
    "Trabaja la parte anterior del cuerpo."
  ],

  precautions: [
    "No colapses la zona lumbar.",
    "Comienza con manos en pelvis."
  ],

  contraindications: [],
  redFlags: ["Dolor lumbar o cervical"],

  props: ["Bloques"],
  duration: "20–60 segundos",

  variations: [
    "Manos en pelvis.",
    "Manos en bloques.",
    "Manos en talones."
  ]
},

/* =========================================================
   37 — ANAHATASANA
   ========================================================= */

{
  id: "anahatasana",
  name: "Corazón derretido",
  sanskrit: "अनाहतासन",
  transliteration: "Anāhatāsana",
  family: "Extensión de hombros",
  category: "Yin",
  level: "Principiante",
  image: img("Anahatasana.jpg"),

  shortDescription:
    "Postura de rodillas que lleva el pecho hacia el suelo mientras las caderas permanecen elevadas.",

  execution: [
    "Comienza a cuatro apoyos.",
    "Mantén las caderas sobre las rodillas.",
    "Camina las manos hacia delante.",
    "Deja descender el pecho progresivamente.",
    "Mantén el cuello cómodo."
  ],

  breathing:
    "Respira hacia las costillas posteriores.",

  anatomy:
    "Flexión de hombros y extensión torácica.",

  benefits: [
    "Trabaja movilidad de hombros.",
    "Puede generar apertura del pecho."
  ],

  precautions: [
    "Reduce el rango si hay molestia de hombro."
  ],

  contraindications: [],
  redFlags: ["Dolor agudo de hombro"],

  props: ["Bolster", "Bloque"],
  duration: "1–4 minutos",

  variations: [
    "Pecho sobre bolster.",
    "Brazos más separados.",
    "Brazos más juntos."
  ]
},

/* =========================================================
   38 — MARJARYASANA / BITILASANA
   ========================================================= */

{
  id: "cat-cow",
  name: "Gato–vaca",
  sanskrit: "मार्जरीआसन / बितिलासन",
  transliteration: "Mārjaryāsana / Bitilāsana",
  family: "Movilidad espinal",
  category: "Movilidad",
  level: "Principiante",
  image: img("Cat Cow Yoga.jpg"),

  shortDescription:
    "Movimiento dinámico de flexión y extensión de columna.",

  execution: [
    "Colócate a cuatro apoyos.",
    "Inspira mientras llevas el pecho hacia delante.",
    "Espira mientras redondeas la columna.",
    "Mueve la columna de forma gradual.",
    "Coordina respiración y movimiento."
  ],

  breathing:
    "Inspira en extensión y espira en flexión.",

  anatomy:
    "Movilización segmentaria de la columna y estabilización de hombros y caderas.",

  benefits: [
    "Prepara la columna.",
    "Coordina respiración y movimiento."
  ],

  precautions: [
    "Reduce el rango si existe dolor."
  ],

  contraindications: [],
  redFlags: ["Dolor irradiado"],

  props: ["Esterilla"],
  duration: "1–3 minutos",

  variations: [
    "Movimiento lento.",
    "Movimiento amplio.",
    "Movimiento pequeño."
  ]
},

/* =========================================================
   39 — BALANCE TABLE
   ========================================================= */

{
  id: "bird-dog",
  name: "Mesa equilibrada",
  sanskrit: "Vyāghrāsana",
  transliteration: "Vyāghrāsana",
  family: "Equilibrio",
  category: "Hatha / Movilidad",
  level: "Principiante",
  image: img("Vyaghrasana.jpg"),

  shortDescription:
    "Equilibrio a cuatro apoyos extendiendo brazo y pierna contrarios.",

  execution: [
    "Comienza a cuatro apoyos.",
    "Activa suavemente el abdomen.",
    "Extiende una pierna hacia atrás.",
    "Extiende el brazo contrario.",
    "Mantén la pelvis estable.",
    "Regresa lentamente y cambia de lado."
  ],

  breathing:
    "Inspira para extender y espira para regresar.",

  anatomy:
    "Trabajo de core, glúteos, hombros y musculatura estabilizadora.",

  benefits: [
    "Mejora estabilidad.",
    "Trabaja coordinación.",
    "Prepara equilibrios."
  ],

  precautions: [
    "Reduce la amplitud si la pelvis rota."
  ],

  contraindications: [],
  redFlags: ["Dolor de muñeca u hombro"],

  props: ["Esterilla"],
  duration: "30–60 segundos por lado",

  variations: [
    "Sólo pierna.",
    "Sólo brazo.",
    "Brazo y pierna."
  ]
},

/* =========================================================
   40 — PURVOTTANASANA
   ========================================================= */

{
  id: "purvottanasana",
  name: "Plano inclinado",
  sanskrit: "पूर्वोत्तानासन",
  transliteration: "Pūrvottānāsana",
  family: "Extensión",
  category: "Fuerza",
  level: "Intermedio",
  image: img("Purvottanasana.jpg"),

  shortDescription:
    "Postura de fuerza y extensión con el cuerpo apoyado en manos y pies.",

  execution: [
    "Siéntate con las piernas extendidas.",
    "Coloca las manos detrás de la pelvis.",
    "Presiona manos y pies.",
    "Eleva las caderas.",
    "Activa glúteos y piernas.",
    "Mantén el cuello cómodo."
  ],

  breathing:
    "Respiración estable.",

  anatomy:
    "Extensión de hombros y cadera con activación de cadena posterior.",

  benefits: [
    "Fortalece brazos y piernas.",
    "Trabaja cadena posterior."
  ],

  precautions: [
    "Flexiona las rodillas para reducir la intensidad."
  ],

  contraindications: [],
  redFlags: ["Dolor de muñeca u hombro"],

  props: ["Bloques"],
  duration: "10–30 segundos",

  variations: [
    "Rodillas flexionadas.",
    "Piernas extendidas.",
    "Bloques bajo manos."
  ]
},

/* =========================================================
   41 — NAVASANA
   ========================================================= */

{
  id: "navasana",
  name: "Barco",
  sanskrit: "नावासन",
  transliteration: "Nāvāsana",
  family: "Core",
  category: "Fuerza",
  level: "Intermedio",
  image: img("Navasana.jpg"),

  shortDescription:
    "Postura sentada de equilibrio y fortalecimiento abdominal.",

  execution: [
    "Siéntate con las rodillas flexionadas.",
    "Inclina ligeramente el torso hacia atrás.",
    "Eleva los pies.",
    "Mantén el pecho abierto.",
    "Extiende las piernas sólo si puedes mantener control."
  ],

  breathing:
    "Respira de forma continua.",

  anatomy:
    "Trabajo de flexores de cadera, abdomen y estabilizadores del tronco.",

  benefits: [
    "Fortalece el core.",
    "Mejora estabilidad."
  ],

  precautions: [
    "Mantén las rodillas flexionadas si la postura completa compromete la espalda."
  ],

  contraindications: [],
  redFlags: ["Dolor lumbar agudo"],

  props: ["Cinturón"],
  duration: "15–45 segundos",

  variations: [
    "Rodillas flexionadas.",
    "Piernas extendidas.",
    "Pies apoyados."
  ]
},

/* =========================================================
   42 — VIRASANA
   ========================================================= */

{
  id: "virasana",
  name: "Héroe",
  sanskrit: "वीरासन",
  transliteration: "Vīrāsana",
  family: "Arrodillada",
  category: "Hatha",
  level: "Intermedio",
  image: img("Virasana.jpg"),

  shortDescription:
    "Postura sentada entre los talones.",

  execution: [
    "Arrodíllate.",
    "Separa ligeramente los pies.",
    "Desciende las caderas entre los talones.",
    "Alarga la columna.",
    "Utiliza soporte si lo necesitas."
  ],

  breathing:
    "Respiración natural.",

  anatomy:
    "Flexión profunda de rodillas y posición específica de tobillos.",

  benefits: [
    "Puede utilizarse para meditación.",
    "Trabaja movilidad de tobillo y rodilla."
  ],

  precautions: [
    "Usa un bolster bajo las caderas."
  ],

  contraindications: [
    "Precaución especial ante molestias de rodillas."
  ],

  redFlags: ["Dolor o entumecimiento persistente"],

  props: ["Bolster", "Bloque", "Manta"],
  duration: "30 segundos–5 minutos",

  variations: [
    "Caderas elevadas.",
    "Rodillas ligeramente separadas."
  ]
},

/* =========================================================
   43 — PADMASANA
   ========================================================= */

{
  id: "padmasana",
  name: "Loto",
  sanskrit: "पद्मासन",
  transliteration: "Padmāsana",
  family: "Sentada",
  category: "Meditación",
  level: "Avanzado",
  image: img("Padmasana.jpg"),

  shortDescription:
    "Postura sentada tradicional con las piernas cruzadas en rotación externa.",

  execution: [
    "Siéntate con la columna elevada.",
    "Lleva una pierna hacia una posición de rotación externa.",
    "Coloca el pie sobre el muslo contrario sólo si existe suficiente movilidad.",
    "Repite con la otra pierna.",
    "Mantén la columna natural."
  ],

  breathing:
    "Respiración lenta y natural.",

  anatomy:
    "Requiere considerable rotación externa de cadera.",

  benefits: [
    "Puede proporcionar una base estable para meditación en personas con suficiente movilidad."
  ],

  precautions: [
    "Nunca fuerces la posición.",
    "La movilidad debe proceder de la cadera, no de la rodilla."
  ],

  contraindications: [
    "No adecuada si provoca dolor de rodilla."
  ],

  redFlags: ["Dolor agudo de rodilla o cadera"],

  props: ["Cojín", "Manta"],
  duration: "30 segundos–20 minutos",

  variations: [
    "Medio loto.",
    "Sukhasana.",
    "Siddhasana."
  ]
},

/* =========================================================
   44 — SIDDHASANA
   ========================================================= */

{
  id: "siddhasana",
  name: "Postura perfecta",
  sanskrit: "सिद्धासन",
  transliteration: "Siddhāsana",
  family: "Sentada",
  category: "Meditación",
  level: "Intermedio",
  image: img("Siddhasana.svg"),

  shortDescription:
    "Postura sentada tradicional utilizada para meditación.",

  execution: [
    "Siéntate con las piernas cruzadas de forma estructurada.",
    "Coloca los pies y talones según tu movilidad.",
    "Eleva la pelvis sobre un cojín si es necesario.",
    "Alarga la columna."
  ],

  breathing:
    "Respiración natural o práctica de pranayama suave.",

  anatomy:
    "Flexión de caderas y rodillas con estabilización axial.",

  benefits: [
    "Proporciona una base estable para meditación.",
    "Favorece la quietud."
  ],

  precautions: [
    "Utiliza soporte bajo la pelvis."
  ],

  contraindications: [],
  redFlags: ["Entumecimiento persistente"],

  props: ["Cojín", "Manta"],
  duration: "2–30 minutos",

  variations: [
    "Pelvis elevada.",
    "Piernas cruzadas sencillas."
  ]
},

/* =========================================================
   45 — PADAHASTASANA / UTTANASANA
   ========================================================= */

{
  id: "uttanasana",
  name: "Pinza de pie",
  sanskrit: "उत्तानासन",
  transliteration: "Uttānāsana",
  family: "Flexión",
  category: "Hatha / Vinyasa",
  level: "Principiante",
  image: img("Uttanasana.jpg"),

  shortDescription:
    "Flexión hacia delante desde la posición de pie.",

  execution: [
    "Comienza de pie.",
    "Flexiona ligeramente las rodillas.",
    "Inclínate desde las caderas.",
    "Deja que el torso descienda.",
    "Relaja el cuello.",
    "Mantén las manos en piernas, bloques o suelo."
  ],

  breathing:
    "Inspira para alargar y espira para suavizar la flexión.",

  anatomy:
    "Flexión de cadera con participación de isquiotibiales y columna.",

  benefits: [
    "Moviliza cadena posterior.",
    "Se utiliza frecuentemente en Vinyasa."
  ],

  precautions: [
    "Flexiona las rodillas si existe mucha tensión."
  ],

  contraindications: [],
  redFlags: ["Dolor irradiado", "Mareo"],

  props: ["Bloques"],
  duration: "20–60 segundos",

  variations: [
    "Rodillas flexionadas.",
    "Manos en bloques.",
    "Piernas más separadas."
  ]
},

/* =========================================================
   46 — PRASARITA PADOTTANASANA
   ========================================================= */

{
  id: "prasarita-padottanasana",
  name: "Flexión de piernas separadas",
  sanskrit: "प्रसारित पादोत्तानासन",
  transliteration: "Prasārita Pādottānāsana",
  family: "Flexión",
  category: "Hatha",
  level: "Intermedio",
  image: img("Prasarita Padottanasana.jpg"),

  shortDescription:
    "Flexión hacia delante con piernas separadas.",

  execution: [
    "Separa ampliamente los pies.",
    "Mantén las piernas activas.",
    "Inclínate desde las caderas.",
    "Lleva las manos al suelo o bloques.",
    "Mantén el cuello relajado."
  ],

  breathing:
    "Respiración lenta.",

  anatomy:
    "Abducción de cadera y flexión de cadera.",

  benefits: [
    "Moviliza cadena posterior.",
    "Fortalece piernas."
  ],

  precautions: [
    "Reduce la amplitud de la base si necesitas."
  ],

  contraindications: [],
  redFlags: ["Dolor agudo"],

  props: ["Bloques"],
  duration: "30–90 segundos",

  variations: [
    "Manos en bloques.",
    "Cabeza hacia el suelo.",
    "Torso parcialmente elevado."
  ]
},

/* =========================================================
   47 — UTTHITA PARSVAKONASANA
   ========================================================= */

{
  id: "utthita-parsvakonasana",
  name: "Ángulo lateral extendido",
  sanskrit: "उत्थित पार्श्वकोणासन",
  transliteration: "Utthita Pārśvakoṇāsana",
  family: "De pie",
  category: "Hatha",
  level: "Intermedio",
  image: img("Utthita Parsvakonasana.jpg"),

  shortDescription:
    "Postura de pie que combina fuerza de piernas con inclinación lateral.",

  execution: [
    "Adopta una base similar al Guerrero II.",
    "Flexiona la rodilla delantera.",
    "Apoya el antebrazo sobre el muslo o la mano en un bloque.",
    "Extiende el brazo superior.",
    "Alarga el lateral del torso."
  ],

  breathing:
    "Respira hacia las costillas laterales.",

  anatomy:
    "Trabajo de piernas, cadera y flexión lateral del tronco.",

  benefits: [
    "Fortalece piernas.",
    "Moviliza el torso lateral."
  ],

  precautions: [
    "Utiliza bloque para mantener espacio en el torso."
  ],

  contraindications: [],
  redFlags: ["Dolor de rodilla o espalda"],

  props: ["Bloque"],
  duration: "30–60 segundos por lado",

  variations: [
    "Antebrazo en muslo.",
    "Mano en bloque.",
    "Brazo superior extendido."
  ]
},

/* =========================================================
   48 — MARICHYASANA
   ========================================================= */

{
  id: "marichyasana",
  name: "Postura de Marichi",
  sanskrit: "मरीच्यासन",
  transliteration: "Marīcyāsana",
  family: "Torsión / Flexión",
  category: "Hatha",
  level: "Intermedio",
  image: img("Marichyasana.jpg"),

  shortDescription:
    "Postura sentada que combina torsión y flexión.",

  execution: [
    "Siéntate con una pierna extendida.",
    "Flexiona la otra.",
    "Gira el tronco hacia la pierna flexionada.",
    "Alarga la columna antes de profundizar.",
    "Mantén la torsión cómoda."
  ],

  breathing:
    "Inspira para alargar la columna y espira para mantener la rotación sin forzar.",

  anatomy:
    "Rotación de columna combinada con flexión de cadera.",

  benefits: [
    "Trabaja movilidad torácica.",
    "Combina varias acciones corporales."
  ],

  precautions: [
    "No utilices los brazos para forzar la torsión."
  ],

  contraindications: [],
  redFlags: ["Dolor agudo o irradiado"],

  props: ["Cinturón"],
  duration: "30–90 segundos por lado",

  variations: [
    "Sin agarre.",
    "Con cinturón.",
    "Torsión suave."
  ]
},

/* =========================================================
   49 — MATSYASANA
   ========================================================= */

{
  id: "matsyasana",
  name: "Pez",
  sanskrit: "मत्स्यासन",
  transliteration: "Matsyāsana",
  family: "Extensión",
  category: "Hatha",
  level: "Intermedio",
  image: img("Matsyasana.jpg"),

  shortDescription:
    "Extensión de columna y apertura torácica realizada tumbado.",

  execution: [
    "Túmbate boca arriba.",
    "Apoya los antebrazos.",
    "Eleva suavemente el pecho.",
    "Permite una extensión controlada.",
    "Mantén el cuello cómodo."
  ],

  breathing:
    "Respira hacia las costillas superiores y laterales.",

  anatomy:
    "Extensión torácica y apertura de la parte anterior del cuerpo.",

  benefits: [
    "Moviliza extensión torácica.",
    "Trabaja apertura anterior."
  ],

  precautions: [
    "No comprimas el cuello."
  ],

  contraindications: [],
  redFlags: ["Dolor cervical"],

  props: ["Bolster", "Bloques"],
  duration: "20–60 segundos",

  variations: [
    "Bolster longitudinal.",
    "Bloques bajo espalda."
  ]
},

/* =========================================================
   50 — SALABHASANA
   ========================================================= */

{
  id: "salabhasana",
  name: "Langosta",
  sanskrit: "शलभासन",
  transliteration: "Śalabhāsana",
  family: "Extensión",
  category: "Hatha / Fuerza",
  level: "Intermedio",
  image: img("Salabhasana.jpg"),

  shortDescription:
    "Extensión posterior tumbado boca abajo.",

  execution: [
    "Túmbate boca abajo.",
    "Alarga las piernas.",
    "Eleva ligeramente piernas y pecho.",
    "Mantén el cuello largo.",
    "Activa glúteos y espalda sin comprimir."
  ],

  breathing:
    "Respiración continua.",

  anatomy:
    "Fortalecimiento de extensores de columna, glúteos y musculatura posterior.",

  benefits: [
    "Fortalece la cadena posterior.",
    "Mejora control de extensión."
  ],

  precautions: [
    "Haz una versión baja si la extensión resulta intensa."
  ],

  contraindications: [],
  redFlags: ["Dolor lumbar agudo"],

  props: ["Manta"],
  duration: "10–30 segundos",

  variations: [
    "Sólo piernas.",
    "Sólo pecho.",
    "Piernas y pecho."
  ]
}

];

/* =========================================================
   FUNCIONES AUXILIARES
   ========================================================= */

function getAsanaById(id) {
  return MOONIE_ASANAS.find(asana => asana.id === id);
}

function getAsanasByCategory(category) {
  return MOONIE_ASANAS.filter(
    asana => asana.category === category
  );
}

function getAsanasByLevel(level) {
  return MOONIE_ASANAS.filter(
    asana => asana.level === level
  );
}

function searchAsanas(query) {
  const q = query.toLowerCase().trim();

  return MOONIE_ASANAS.filter(asana =>
    asana.name.toLowerCase().includes(q) ||
    asana.sanskrit.toLowerCase().includes(q) ||
    asana.transliteration.toLowerCase().includes(q) ||
    asana.family.toLowerCase().includes(q) ||
    asana.category.toLowerCase().includes(q)
  );
}

/* =========================================================
   COMPATIBILIDAD
   ========================================================= */

window.MOONIE_ASANAS = MOONIE_ASANAS;
window.getAsanaById = getAsanaById;
window.getAsanasByCategory = getAsanasByCategory;
window.getAsanasByLevel = getAsanasByLevel;
window.searchAsanas = searchAsanas;
