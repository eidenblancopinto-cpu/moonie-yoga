/* =========================================================
   MOONIE YOGA 🌙🪷
   ASANA LIBRARY
   Version: 2.0
   ========================================================= */

const COMMONS = "https://commons.wikimedia.org/wiki/Special:Redirect/file/";

function commonsImage(filename) {
  return COMMONS + encodeURIComponent(filename);
}

const ASANAS = [

  /* =======================================================
     1. BALASANA
     ======================================================= */

  {
    id: "balasana",
    name: "Postura del niño",
    sanskrit: "बालासन",
    transliteration: "Bālāsana",
    family: "Flexión hacia delante",
    category: "Restaurativo",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose1.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Postura de descanso que flexiona suavemente caderas y columna.",

    execution: [
      "Comienza de rodillas sobre la esterilla.",
      "Junta los dedos gordos de los pies y separa ligeramente las rodillas.",
      "Lleva lentamente la pelvis hacia los talones.",
      "Inclina el torso hacia delante desde las caderas.",
      "Apoya la frente sobre la esterilla o sobre un soporte.",
      "Deja los brazos hacia delante o junto al cuerpo.",
      "Permite que el abdomen descanse sin comprimir la respiración."
    ],

    breathing:
      "Respira lentamente por la nariz. Deja que cada inspiración expanda la espalda y cada exhalación facilite la relajación.",

    anatomy:
      "Flexión de caderas, flexión de rodillas y flexión global de la columna. Puede producir una sensación de elongación en la musculatura posterior.",

    benefits: [
      "Favorece el descanso.",
      "Reduce la exigencia de la práctica.",
      "Moviliza suavemente caderas y columna.",
      "Puede utilizarse como postura de integración."
    ],

    precautions: [
      "Coloca un cojín entre glúteos y talones si las rodillas necesitan espacio.",
      "Utiliza soporte bajo la frente si el cuello queda incómodo."
    ],

    contraindications: [
      "Dolor agudo de rodilla.",
      "Molestia importante de tobillo.",
      "Situaciones en las que la flexión profunda de cadera resulte incómoda."
    ],

    redFlags: [
      "Dolor punzante.",
      "Hormigueo.",
      "Pérdida de fuerza.",
      "Dolor irradiado."
    ],

    props: [
      "Cojín",
      "Bolster",
      "Manta"
    ],

    duration: "1–5 minutos",

    variations: [
      "Rodillas juntas.",
      "Rodillas separadas.",
      "Brazos hacia delante.",
      "Brazos junto al cuerpo.",
      "Frente sobre bolster."
    ]
  },


  /* =======================================================
     2. BADDHA KONASANA
     ======================================================= */

  {
    id: "baddha-konasana",
    name: "Mariposa",
    sanskrit: "बद्धकोणासन",
    transliteration: "Baddha Koṇāsana",
    family: "Apertura de caderas",
    category: "Yin / Hatha",
    level: "Principiante",

    image: {
      url: commonsImage("Baddha Konasana...jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Baddha_Konasana",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Postura sentada con las plantas de los pies juntas.",

    execution: [
      "Siéntate con las piernas extendidas.",
      "Flexiona las rodillas.",
      "Acerca los pies hacia la pelvis.",
      "Une las plantas de los pies.",
      "Deja que las rodillas se abran hacia los lados.",
      "Mantén la pelvis estable.",
      "Puedes permanecer erguido o inclinar ligeramente el torso hacia delante."
    ],

    breathing:
      "Inspira alargando la columna. Exhala permitiendo que las caderas se relajen sin empujar las rodillas.",

    anatomy:
      "Abducción y rotación externa de cadera. Las rodillas permanecen flexionadas y los aductores reciben parte importante de la carga.",

    benefits: [
      "Moviliza la articulación de la cadera.",
      "Trabaja la musculatura aductora.",
      "Puede utilizarse como preparación para flexiones hacia delante.",
      "Muy habitual en Yin Yoga."
    ],

    precautions: [
      "No empujes las rodillas hacia el suelo.",
      "Eleva la pelvis sobre una manta si la espalda se redondea excesivamente."
    ],

    contraindications: [
      "Dolor agudo de rodilla.",
      "Lesiones recientes de cadera."
    ],

    redFlags: [
      "Dolor agudo en rodilla.",
      "Sensación de bloqueo.",
      "Dolor punzante en la ingle."
    ],

    props: [
      "Manta",
      "Bloques",
      "Cojines bajo las rodillas"
    ],

    duration: "2–5 minutos",

    variations: [
      "Mariposa erguida.",
      "Mariposa hacia delante.",
      "Mariposa con soporte bajo rodillas.",
      "Supta Baddha Konasana."
    ]
  },


  /* =======================================================
     3. HALF BUTTERFLY
     ======================================================= */

  {
    id: "half-butterfly",
    name: "Media mariposa",
    sanskrit: "Ardha Baddha Konasana",
    transliteration: "Ardha Baddha Koṇāsana",
    family: "Flexión asimétrica",
    category: "Yin",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose2.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Variación asimétrica que combina una pierna extendida con otra flexionada.",

    execution: [
      "Siéntate con ambas piernas extendidas.",
      "Flexiona una rodilla.",
      "Lleva la planta del pie hacia el muslo contrario.",
      "Deja que la rodilla flexionada repose cómodamente.",
      "Alarga la columna.",
      "Inclínate lentamente sobre la pierna extendida.",
      "Relaja el cuello."
    ],

    breathing:
      "Inspira para alargar la columna y exhala para profundizar únicamente si el cuerpo lo permite.",

    anatomy:
      "Combina flexión de cadera, extensión de rodilla en la pierna extendida y apertura de la cadera contraria.",

    benefits: [
      "Moviliza isquiotibiales.",
      "Trabaja de forma asimétrica.",
      "Puede ayudar a identificar diferencias entre ambos lados."
    ],

    precautions: [
      "Mantén la rodilla flexionada cómoda.",
      "No fuerces la inclinación."
    ],

    contraindications: [
      "Lesión aguda de rodilla.",
      "Dolor lumbar agudo."
    ],

    redFlags: [
      "Dolor eléctrico.",
      "Hormigueo.",
      "Dolor irradiado."
    ],

    props: [
      "Manta",
      "Cinturón",
      "Bolster"
    ],

    duration: "2–4 minutos por lado",

    variations: [
      "Torso vertical.",
      "Flexión suave.",
      "Flexión profunda con soporte."
    ]
  },


  /* =======================================================
     4. SPHINX
     ======================================================= */

  {
    id: "sphinx",
    name: "Esfinge",
    sanskrit: "सलम्ब भुजङ्गासन",
    transliteration: "Salamba Bhujangāsana",
    family: "Extensión de columna",
    category: "Yin",
    level: "Principiante",

    image: {
      url: commonsImage("IMG 0549 2 Sphinx.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Salamba_Bhujangasana",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Extensión suave de la columna realizada tumbado boca abajo.",

    execution: [
      "Túmbate boca abajo.",
      "Coloca los antebrazos sobre la esterilla.",
      "Sitúa los codos aproximadamente debajo o ligeramente por delante de los hombros.",
      "Presiona suavemente los antebrazos.",
      "Eleva el pecho sin colapsar la zona lumbar.",
      "Mantén las piernas relajadas.",
      "Busca longitud antes que altura."
    ],

    breathing:
      "Respira de forma natural. Evita bloquear el abdomen o contener la respiración.",

    anatomy:
      "Extensión de la columna con participación de musculatura extensora vertebral. La posición también implica extensión de cadera y trabajo de estabilización escapular.",

    benefits: [
      "Moviliza la extensión de la columna.",
      "Puede resultar agradable después de flexiones prolongadas.",
      "Trabaja suavemente la cadena posterior."
    ],

    precautions: [
      "Reduce la altura si notas compresión lumbar.",
      "Aleja los codos si necesitas una extensión más suave."
    ],

    contraindications: [
      "Dolor lumbar agudo.",
      "Molestias importantes en hombros."
    ],

    redFlags: [
      "Dolor punzante lumbar.",
      "Dolor irradiado.",
      "Hormigueo."
    ],

    props: [
      "Manta",
      "Bolster bajo pecho si procede"
    ],

    duration: "2–5 minutos",

    variations: [
      "Esfinge baja.",
      "Esfinge con brazos más adelantados.",
      "Baby Cobra."
    ]
  },


  /* =======================================================
     5. DRAGON
     ======================================================= */

  {
    id: "dragon",
    name: "Dragón",
    sanskrit: "Anjaneyasana / variantes Yin",
    transliteration: "Añjaneyāsana",
    family: "Apertura de caderas",
    category: "Yin",
    level: "Intermedio",

    image: {
      url: commonsImage("Ашва Санчаланасана.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Familia de posturas de zancada utilizadas en Yin para trabajar cadera y cadena anterior.",

    execution: [
      "Comienza desde cuatro apoyos.",
      "Lleva un pie entre las manos.",
      "Desplaza progresivamente la pelvis hacia delante.",
      "Mantén la pierna trasera extendida o apoya la rodilla.",
      "Permite que el torso permanezca erguido o descienda.",
      "Ajusta la posición hasta encontrar una intensidad sostenible."
    ],

    breathing:
      "Respira lenta y profundamente sin utilizar la respiración para forzar el rango.",

    anatomy:
      "Puede implicar extensión de cadera de la pierna trasera, flexión de cadera de la delantera y carga variable sobre flexores de cadera, aductores y glúteos.",

    benefits: [
      "Moviliza la cadera.",
      "Trabaja diferentes líneas de la musculatura alrededor de la pelvis.",
      "Muy utilizado en secuencias Yin."
    ],

    precautions: [
      "Utiliza bloques para elevar las manos.",
      "Reduce la amplitud si aparece presión incómoda en la rodilla."
    ],

    contraindications: [
      "Lesiones recientes de rodilla.",
      "Dolor agudo de cadera."
    ],

    redFlags: [
      "Dolor agudo.",
      "Hormigueo.",
      "Pérdida de fuerza."
    ],

    props: [
      "Bloques",
      "Manta",
      "Bolster"
    ],

    duration: "2–4 minutos por lado",

    variations: [
      "Dragón alto.",
      "Dragón bajo.",
      "Dragón con manos sobre bloques.",
      "Dragón lateral."
    ]
  },


  /* =======================================================
     6. DEER
     ======================================================= */

  {
    id: "deer",
    name: "Ciervo",
    sanskrit: "Mṛgāsana",
    transliteration: "Mṛgāsana",
    family: "Rotación de cadera",
    category: "Yin",
    level: "Intermedio",

    image: {
      url: commonsImage("Bpose13.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Postura sentada asimétrica que combina diferentes posiciones de las piernas.",

    execution: [
      "Siéntate cómodamente.",
      "Flexiona ambas piernas.",
      "Deja una rodilla hacia delante y otra hacia un lateral.",
      "Busca una pelvis estable.",
      "Alarga la columna.",
      "Puedes permanecer erguido o inclinarte ligeramente hacia delante.",
      "Repite hacia el otro lado."
    ],

    breathing:
      "Respiración nasal lenta y continua.",

    anatomy:
      "Combina rotación interna y externa de cadera dependiendo de la configuración de las piernas.",

    benefits: [
      "Movilidad multidireccional de cadera.",
      "Trabajo asimétrico.",
      "Puede utilizarse como preparación para torsiones."
    ],

    precautions: [
      "No fuerces ninguna rodilla hacia el suelo.",
      "Coloca soporte bajo las caderas si la pelvis se desequilibra."
    ],

    contraindications: [
      "Dolor agudo de rodilla o cadera."
    ],

    redFlags: [
      "Dolor punzante.",
      "Bloqueo articular."
    ],

    props: [
      "Manta",
      "Cojín"
    ],

    duration: "2–4 minutos por lado",

    variations: [
      "Ciervo erguido.",
      "Ciervo con flexión.",
      "Ciervo con torsión."
    ]
  },


  /* =======================================================
     7. SLEEPING SWAN
     ======================================================= */

  {
    id: "sleeping-swan",
    name: "Cisne dormido",
    sanskrit: "Eka Pada Rajakapotasana",
    transliteration: "Eka Pāda Rājakapotāsana",
    family: "Apertura de cadera",
    category: "Yin",
    level: "Intermedio",

    image: {
      url: commonsImage("Mr-yoga-yogananda 1.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Eka_Pada_Rajakapotasana",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Variación Yin del pigeon pose utilizada para trabajar la región de la cadera.",

    execution: [
      "Desde cuatro apoyos lleva una pierna hacia delante.",
      "Coloca la tibia en una posición cómoda, sin necesidad de paralelizarla al borde de la esterilla.",
      "Extiende la pierna posterior.",
      "Asegura una base estable.",
      "Desciende progresivamente el torso.",
      "Apoya la frente o el pecho sobre un soporte."
    ],

    breathing:
      "Respira lentamente y utiliza cada exhalación para reducir tensión innecesaria.",

    anatomy:
      "La pierna delantera combina flexión, abducción y rotación externa de cadera. La pierna posterior se aproxima a una posición de extensión de cadera.",

    benefits: [
      "Movilización de caderas.",
      "Trabajo asimétrico.",
      "Puede integrarse en secuencias Yin profundas."
    ],

    precautions: [
      "No busques una posición extrema.",
      "Utiliza un bolster debajo del torso.",
      "Mantén la pelvis apoyada de forma estable."
    ],

    contraindications: [
      "Dolor agudo de rodilla.",
      "Lesiones recientes de cadera."
    ],

    redFlags: [
      "Dolor punzante en rodilla.",
      "Hormigueo.",
      "Dolor irradiado."
    ],

    props: [
      "Bolster",
      "Bloques",
      "Manta"
    ],

    duration: "2–5 minutos por lado",

    variations: [
      "Cisne alto.",
      "Cisne dormido.",
      "Cisne con soporte."
    ]
  },


  /* =======================================================
     8. CATERPILLAR
     ======================================================= */

  {
    id: "caterpillar",
    name: "Oruga",
    sanskrit: "Paschimottanasana",
    transliteration: "Paścimottānāsana",
    family: "Flexión hacia delante",
    category: "Yin",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose8.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Flexión sentada hacia delante con las piernas extendidas.",

    execution: [
      "Siéntate con las piernas extendidas.",
      "Flexiona ligeramente las rodillas si es necesario.",
      "Alarga la columna.",
      "Inclina la pelvis y después permite que el torso avance.",
      "Deja que la espalda se redondee progresivamente si resulta cómodo.",
      "Relaja cabeza y cuello.",
      "No tires de los pies para aumentar el rango."
    ],

    breathing:
      "Respira hacia la parte posterior del cuerpo.",

    anatomy:
      "Flexión de cadera y columna con extensión de rodilla. La intensidad varía según la movilidad de isquiotibiales y pelvis.",

    benefits: [
      "Trabaja la cadena posterior.",
      "Favorece una práctica introspectiva.",
      "Muy utilizada en Yin."
    ],

    precautions: [
      "Dobla las rodillas si la tensión posterior es excesiva.",
      "Evita forzar la columna."
    ],

    contraindications: [
      "Dolor lumbar agudo.",
      "Lesión reciente de isquiotibiales."
    ],

    redFlags: [
      "Dolor irradiado.",
      "Hormigueo.",
      "Dolor agudo."
    ],

    props: [
      "Manta",
      "Bolster",
      "Cinturón"
    ],

    duration: "2–5 minutos",

    variations: [
      "Rodillas flexionadas.",
      "Piernas extendidas.",
      "Bolster sobre piernas.",
      "Cinturón alrededor de los pies."
    ]
  },


  /* =======================================================
     9. ANAHATASANA
     ======================================================= */

  {
    id: "anahatasana",
    name: "Corazón derretido",
    sanskrit: "अनाहतासन",
    transliteration: "Anāhatāsana",
    family: "Extensión torácica",
    category: "Yin",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose19.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Postura de cuatro apoyos con brazos extendidos que moviliza hombros y columna torácica.",

    execution: [
      "Comienza en cuatro apoyos.",
      "Mantén las caderas aproximadamente sobre las rodillas.",
      "Camina las manos hacia delante.",
      "Permite que el pecho descienda gradualmente.",
      "Mantén la pelvis estable.",
      "Apoya la frente o el mentón según la versión elegida."
    ],

    breathing:
      "Respira suavemente expandiendo las costillas.",

    anatomy:
      "Extensión torácica y flexión de hombros. La columna lumbar puede participar si no se estabiliza adecuadamente la pelvis.",

    benefits: [
      "Movilidad de hombros.",
      "Extensión torácica.",
      "Trabajo suave de la cadena anterior."
    ],

    precautions: [
      "Evita colapsar la zona lumbar.",
      "Reduce el rango si existe molestia de hombros."
    ],

    contraindications: [
      "Lesión aguda de hombro.",
      "Dolor lumbar que empeora con extensión."
    ],

    redFlags: [
      "Dolor punzante.",
      "Hormigueo.",
      "Dolor irradiado."
    ],

    props: [
      "Bolster",
      "Bloques"
    ],

    duration: "2–4 minutos",

    variations: [
      "Frente apoyada.",
      "Mentón apoyado.",
      "Brazos separados.",
      "Brazos en forma de cactus."
    ]
  },


  /* =======================================================
     10. SUPINE TWIST
     ======================================================= */

  {
    id: "supine-twist",
    name: "Torsión supina",
    sanskrit: "Jathara Parivartanasana",
    transliteration: "Jaṭhara Parivartanāsana",
    family: "Torsión",
    category: "Restaurativo",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose24.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Torsión tumbada que moviliza suavemente la columna.",

    execution: [
      "Túmbate boca arriba.",
      "Flexiona las rodillas.",
      "Lleva ambas piernas hacia un lado.",
      "Mantén hombros cómodamente apoyados.",
      "Gira la cabeza solo si el cuello está cómodo.",
      "Respira durante la permanencia.",
      "Repite hacia el otro lado."
    ],

    breathing:
      "Respira lentamente y evita utilizar la exhalación para empujar las piernas más lejos.",

    anatomy:
      "Rotación de la columna y movimiento de caderas. La intensidad depende de la posición de las piernas y de la movilidad individual.",

    benefits: [
      "Movilidad rotacional.",
      "Sensación de liberación al final de la práctica.",
      "Transición adecuada hacia Savasana."
    ],

    precautions: [
      "Coloca un bolster bajo las rodillas.",
      "No fuerces los hombros contra el suelo."
    ],

    contraindications: [
      "Dolor agudo de columna.",
      "Lesión reciente de cadera."
    ],

    redFlags: [
      "Dolor irradiado.",
      "Hormigueo.",
      "Dolor agudo."
    ],

    props: [
      "Bolster",
      "Manta"
    ],

    duration: "1–3 minutos por lado",

    variations: [
      "Rodillas juntas.",
      "Piernas separadas.",
      "Piernas sobre bolster.",
      "Brazos en cruz."
    ]
  },


  /* =======================================================
     11. VIPARITA KARANI
     ======================================================= */

  {
    id: "viparita-karani",
    name: "Piernas en la pared",
    sanskrit: "विपरीतकरणी",
    transliteration: "Viparīta Karaṇī",
    family: "Inversión suave",
    category: "Restaurativo",
    level: "Principiante",

    image: {
      url: commonsImage("Mr-yoga-reclined-bound-angle.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Viparita_Karani",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Postura restaurativa con las piernas elevadas.",

    execution: [
      "Siéntate lateralmente junto a una pared.",
      "Gira el cuerpo y lleva las piernas hacia arriba.",
      "Acomoda los glúteos a una distancia cómoda de la pared.",
      "Deja que los brazos descansen.",
      "Relaja mandíbula, hombros y abdomen.",
      "Permanece sin buscar ninguna intensidad."
    ],

    breathing:
      "Respiración lenta y natural.",

    anatomy:
      "Flexión de cadera con piernas elevadas y baja demanda muscular.",

    benefits: [
      "Favorece el descanso.",
      "Es adecuada para prácticas restaurativas.",
      "Puede utilizarse antes de Savasana."
    ],

    precautions: [
      "No necesitas acercarte completamente a la pared.",
      "Sal de la postura lentamente."
    ],

    contraindications: [
      "Situaciones médicas en las que las inversiones estén desaconsejadas."
    ],

    redFlags: [
      "Mareo intenso.",
      "Dolor.",
      "Dificultad respiratoria."
    ],

    props: [
      "Pared",
      "Manta",
      "Bolster"
    ],

    duration: "3–10 minutos",

    variations: [
      "Piernas directamente en pared.",
      "Rodillas ligeramente flexionadas.",
      "Bolster bajo pelvis."
    ]
  },


  /* =======================================================
     12. SAVASANA
     ======================================================= */

  {
    id: "savasana",
    name: "Postura del cadáver",
    sanskrit: "शवासन",
    transliteration: "Śavāsana",
    family: "Reposo",
    category: "Meditación / Restaurativo",
    level: "Todos",

    image: {
      url: commonsImage("Bpose20.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Postura final de descanso e integración.",

    execution: [
      "Túmbate boca arriba.",
      "Separa ligeramente los pies.",
      "Deja los brazos a los lados.",
      "Coloca la cabeza de forma cómoda.",
      "Cierra los ojos si lo deseas.",
      "Permite que el peso del cuerpo descanse sobre la esterilla.",
      "Observa la respiración sin modificarla."
    ],

    breathing:
      "Respiración natural. No necesitas controlar el ritmo.",

    anatomy:
      "Postura de mínima demanda muscular voluntaria.",

    benefits: [
      "Favorece la integración de la práctica.",
      "Permite observar la respiración.",
      "Reduce la demanda física de la sesión."
    ],

    precautions: [
      "Utiliza soporte bajo las rodillas si la zona lumbar está incómoda.",
      "Utiliza una manta para mantener temperatura."
    ],

    contraindications: [],

    redFlags: [
      "Ninguna específica; abandona la postura si aparece dolor o dificultad respiratoria."
    ],

    props: [
      "Bolster",
      "Manta",
      "Cojín ocular"
    ],

    duration: "3–15 minutos",

    variations: [
      "Rodillas apoyadas.",
      "Piernas sobre bolster.",
      "Savasana lateral."
    ]
  },


  /* =======================================================
     13. DOWNWARD DOG
     ======================================================= */

  {
    id: "downward-dog",
    name: "Perro boca abajo",
    sanskrit: "अधोमुखश्वानासन",
    transliteration: "Adho Mukha Śvānāsana",
    family: "Inversión",
    category: "Hatha / Vinyasa",
    level: "Principiante",

    image: {
      url: commonsImage("Downward-Facing-Dog.JPG"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/File:Downward-Facing-Dog.JPG",
      license: "Consultar licencia del archivo"
    },

    shortDescription:
      "Postura fundamental de apoyo en manos y pies.",

    execution: [
      "Comienza en cuatro apoyos.",
      "Coloca manos ligeramente por delante de hombros.",
      "Eleva las rodillas.",
      "Lleva las caderas hacia atrás y arriba.",
      "Mantén las rodillas flexionadas si es necesario.",
      "Alarga la columna.",
      "Empuja suavemente el suelo con las manos."
    ],

    breathing:
      "Respira de forma estable y continua.",

    anatomy:
      "Flexión de hombros, extensión de cadera y trabajo de brazos, piernas y musculatura estabilizadora.",

    benefits: [
      "Fortalece brazos.",
      "Moviliza hombros.",
      "Trabaja la cadena posterior.",
      "Es una transición habitual en Vinyasa."
    ],

    precautions: [
      "Dobla las rodillas para priorizar longitud de columna.",
      "Reduce la carga si las muñecas molestan."
    ],

    contraindications: [
      "Dolor agudo de muñeca u hombro."
    ],

    redFlags: [
      "Dolor punzante.",
      "Hormigueo.",
      "Pérdida de fuerza."
    ],

    props: [
      "Bloques",
      "Correa"
    ],

    duration: "5–60 segundos",

    variations: [
      "Rodillas flexionadas.",
      "Pedaleo de piernas.",
      "Tres patas.",
      "Perro dinámico."
    ]
  },


  /* =======================================================
     14. WARRIOR I
     ======================================================= */

  {
    id: "warrior-one",
    name: "Guerrero I",
    sanskrit: "वीरभद्रासन I",
    transliteration: "Vīrabhadrāsana I",
    family: "De pie",
    category: "Hatha / Vinyasa",
    level: "Principiante",

    image: {
      url: commonsImage("Virabhadrasana I - Warrior Pose I.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Virabhadrasana_I",
      license: "Consultar licencia del archivo"
    },

    shortDescription:
      "Postura de pie que combina fuerza, estabilidad y movilidad.",

    execution: [
      "Desde una posición de pie, lleva una pierna hacia atrás.",
      "Flexiona la rodilla delantera.",
      "Mantén la pelvis estable.",
      "Apoya el talón trasero según la versión.",
      "Eleva los brazos.",
      "Alarga la columna.",
      "Mantén la respiración fluida."
    ],

    breathing:
      "Inspira alargando el torso. Exhala manteniendo estabilidad.",

    anatomy:
      "Flexión de la cadera y rodilla delanteras, extensión de cadera posterior y elevación de brazos.",

    benefits: [
      "Fortalece piernas.",
      "Mejora estabilidad.",
      "Trabaja coordinación y postura."
    ],

    precautions: [
      "Reduce la amplitud de la zancada si la pelvis se descontrola.",
      "No bloquees la rodilla."
    ],

    contraindications: [
      "Dolor agudo de rodilla o cadera."
    ],

    redFlags: [
      "Dolor punzante.",
      "Pérdida de equilibrio repetida acompañada de síntomas."
    ],

    props: [
      "Bloques",
      "Pared"
    ],

    duration: "20–60 segundos por lado",

    variations: [
      "Rodilla menos flexionada.",
      "Talón posterior elevado.",
      "Brazos separados.",
      "Brazos arriba."
    ]
  },


  /* =======================================================
     15. WARRIOR II
     ======================================================= */

  {
    id: "warrior-two",
    name: "Guerrero II",
    sanskrit: "वीरभद्रासन II",
    transliteration: "Vīrabhadrāsana II",
    family: "De pie",
    category: "Hatha / Vinyasa",
    level: "Principiante",

    image: {
      url: commonsImage("Warrier Pose.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Virabhadrasana_II",
      license: "Consultar licencia del archivo"
    },

    shortDescription:
      "Postura de pie con piernas separadas y brazos abiertos.",

    execution: [
      "Separa ampliamente los pies.",
      "Gira un pie hacia delante.",
      "Flexiona la rodilla delantera.",
      "Mantén la otra pierna extendida.",
      "Abre los brazos a la altura de los hombros.",
      "Mira hacia la mano delantera.",
      "Mantén el torso vertical."
    ],

    breathing:
      "Respira de manera uniforme.",

    anatomy:
      "Trabajo de piernas, abducción de brazos y estabilidad de pelvis y tronco.",

    benefits: [
      "Fortalece piernas.",
      "Desarrolla estabilidad.",
      "Trabaja resistencia postural."
    ],

    precautions: [
      "La rodilla delantera debe acompañar la dirección del pie.",
      "No necesitas bajar mucho."
    ],

    contraindications: [
      "Dolor agudo de rodilla."
    ],

    redFlags: [
      "Dolor punzante.",
      "Sensación de inestabilidad articular."
    ],

    props: [
      "Pared",
      "Bloques"
    ],

    duration: "20–60 segundos por lado",

    variations: [
      "Postura alta.",
      "Postura más profunda.",
      "Brazos modificados."
    ]
  },


  /* =======================================================
     16. WARRIOR III
     ======================================================= */

  {
    id: "warrior-three",
    name: "Guerrero III",
    sanskrit: "वीरभद्रासन III",
    transliteration: "Vīrabhadrāsana III",
    family: "Equilibrio",
    category: "Hatha / Vinyasa",
    level: "Intermedio",

    image: {
      url: commonsImage("Tuladandasana - Virabhadrasana III.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Virabhadrasana_III",
      license: "Consultar licencia del archivo"
    },

    shortDescription:
      "Equilibrio sobre una pierna con el torso inclinado hacia delante.",

    execution: [
      "Comienza de pie.",
      "Traslada el peso a una pierna.",
      "Inclina el torso hacia delante.",
      "Extiende la pierna posterior.",
      "Mantén las caderas aproximadamente niveladas.",
      "Extiende los brazos hacia delante o hacia los lados.",
      "Busca longitud antes que altura."
    ],

    breathing:
      "Respira de forma estable y evita contener la respiración.",

    anatomy:
      "Trabajo intenso de estabilización de tobillo, rodilla, cadera y tronco.",

    benefits: [
      "Mejora equilibrio.",
      "Fortalece cadena posterior.",
      "Trabaja concentración."
    ],

    precautions: [
      "Practica cerca de una pared.",
      "Mantén una microflexión de la rodilla de apoyo."
    ],

    contraindications: [
      "Lesión aguda de tobillo o rodilla."
    ],

    redFlags: [
      "Dolor.",
      "Mareo.",
      "Pérdida de fuerza."
    ],

    props: [
      "Pared",
      "Bloques"
    ],

    duration: "10–30 segundos por lado",

    variations: [
      "Manos en bloques.",
      "Brazos abiertos.",
      "Brazos hacia delante.",
      "Rodilla de apoyo ligeramente flexionada."
    ]
  },


  /* =======================================================
     17. TRIANGLE
     ======================================================= */

  {
    id: "triangle",
    name: "Triángulo",
    sanskrit: "त्रिकोणासन",
    transliteration: "Trikoṇāsana",
    family: "De pie",
    category: "Hatha",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose7.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Trikonasana",
      license: "Consultar licencia del archivo"
    },

    shortDescription:
      "Postura lateral de pie con piernas separadas.",

    execution: [
      "Separa los pies.",
      "Gira el pie delantero.",
      "Extiende ambas piernas sin bloquear las rodillas.",
      "Inclina el torso hacia el lado de la pierna delantera.",
      "Apoya la mano sobre pierna, bloque o suelo.",
      "Eleva el brazo contrario.",
      "Mantén el pecho abierto."
    ],

    breathing:
      "Inspira alargando la columna y exhala manteniendo la posición.",

    anatomy:
      "Combina abducción de cadera, inclinación lateral del tronco y trabajo de estabilidad de piernas.",

    benefits: [
      "Fortalece piernas.",
      "Moviliza el tronco lateralmente.",
      "Trabaja estabilidad."
    ],

    precautions: [
      "Utiliza un bloque para evitar colapsar el torso.",
      "No fuerces la mano al suelo."
    ],

    contraindications: [
      "Dolor lumbar agudo."
    ],

    redFlags: [
      "Dolor punzante.",
      "Mareo."
    ],

    props: [
      "Bloque"
    ],

    duration: "20–45 segundos por lado",

    variations: [
      "Mano en bloque.",
      "Mano en espinilla.",
      "Brazo superior extendido."
    ]
  },


  /* =======================================================
     18. HALF MOON
     ======================================================= */

  {
    id: "half-moon",
    name: "Media luna",
    sanskrit: "अर्धचन्द्रासन",
    transliteration: "Ardha Candrāsana",
    family: "Equilibrio",
    category: "Hatha",
    level: "Intermedio",

    image: {
      url: commonsImage("Ardha Candrāsana-half-moon.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Ardha_Chandrasana",
      license: "Consultar licencia del archivo"
    },

    shortDescription:
      "Equilibrio lateral sobre una pierna.",

    execution: [
      "Comienza desde una postura de pie.",
      "Inclina el torso hacia delante.",
      "Apoya una mano sobre un bloque.",
      "Eleva la pierna posterior.",
      "Abre progresivamente la pelvis.",
      "Eleva el brazo superior.",
      "Mantén la pierna de apoyo estable."
    ],

    breathing:
      "Respira de forma constante.",

    anatomy:
      "Estabilización de tobillo y cadera con trabajo de glúteos, musculatura lateral del tronco y hombros.",

    benefits: [
      "Mejora equilibrio.",
      "Fortalece la pierna de apoyo.",
      "Trabaja coordinación."
    ],

    precautions: [
      "Utiliza un bloque.",
      "Practica junto a una pared."
    ],

    contraindications: [
      "Lesiones recientes de tobillo o rodilla."
    ],

    redFlags: [
      "Dolor agudo.",
      "Mareo.",
      "Pérdida repentina de equilibrio."
    ],

    props: [
      "Bloque",
      "Pared"
    ],

    duration: "10–30 segundos por lado",

    variations: [
      "Bloque alto.",
      "Bloque bajo.",
      "Espalda contra pared.",
      "Media luna con brazo elevado."
    ]
  },


  /* =======================================================
     19. TREE
     ======================================================= */

  {
    id: "tree",
    name: "Árbol",
    sanskrit: "वृक्षासन",
    transliteration: "Vṛkṣāsana",
    family: "Equilibrio",
    category: "Hatha",
    level: "Principiante",

    image: {
      url: commonsImage("Postura da Árvore Yoga.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Vrikshasana",
      license: "Consultar licencia del archivo"
    },

    shortDescription:
      "Equilibrio de pie con una pierna.",

    execution: [
      "Colócate de pie.",
      "Traslada el peso a una pierna.",
      "Coloca la planta del otro pie en el tobillo, pantorrilla o muslo.",
      "Evita apoyar directamente sobre la rodilla.",
      "Junta las manos frente al pecho o eleva los brazos.",
      "Mantén la mirada fija."
    ],

    breathing:
      "Respira lenta y regularmente.",

    anatomy:
      "Estabilización de tobillo, rodilla, cadera y musculatura profunda del tronco.",

    benefits: [
      "Mejora equilibrio.",
      "Favorece concentración.",
      "Fortalece la pierna de apoyo."
    ],

    precautions: [
      "Utiliza pared si es necesario.",
      "No coloques el pie sobre la rodilla."
    ],

    contraindications: [
      "Lesión aguda de tobillo o rodilla."
    ],

    redFlags: [
      "Dolor.",
      "Mareo."
    ],

    props: [
      "Pared"
    ],

    duration: "20–60 segundos por lado",

    variations: [
      "Pie en tobillo.",
      "Pie en pantorrilla.",
      "Pie en muslo.",
      "Brazos arriba."
    ]
  },


  /* =======================================================
     20. BOAT
     ======================================================= */

  {
    id: "boat",
    name: "Barca",
    sanskrit: "नावासन",
    transliteration: "Nāvāsana",
    family: "Fuerza del centro",
    category: "Hatha / Fuerza",
    level: "Intermedio",

    image: {
      url: commonsImage("Boat pose.JPG"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Nāvāsana",
      license: "Consultar licencia del archivo"
    },

    shortDescription:
      "Equilibrio sentado que desarrolla fuerza del tronco.",

    execution: [
      "Siéntate con las rodillas flexionadas.",
      "Inclina ligeramente el torso hacia atrás.",
      "Eleva los pies.",
      "Mantén la columna larga.",
      "Extiende las piernas progresivamente.",
      "Eleva los brazos.",
      "Mantén la respiración."
    ],

    breathing:
      "Respira sin bloquear el abdomen.",

    anatomy:
      "Alta demanda de flexores de cadera y musculatura abdominal, además de estabilización del tronco.",

    benefits: [
      "Fortalece el centro.",
      "Mejora estabilidad.",
      "Desarrolla control corporal."
    ],

    precautions: [
      "Mantén rodillas flexionadas si la espalda pierde estabilidad.",
      "No fuerces la extensión de piernas."
    ],

    contraindications: [
      "Dolor lumbar agudo."
    ],

    redFlags: [
      "Dolor lumbar.",
      "Hormigueo."
    ],

    props: [
      "Manta"
    ],

    duration: "10–30 segundos",

    variations: [
      "Rodillas flexionadas.",
      "Media barca.",
      "Barca completa.",
      "Manos detrás de muslos."
    ]
  },


  /* =======================================================
     21. BRIDGE
     ======================================================= */

  {
    id: "bridge",
    name: "Puente",
    sanskrit: "सेतु बन्ध सर्वाङ्गासन",
    transliteration: "Setu Bandha Sarvāṅgāsana",
    family: "Extensión de columna",
    category: "Hatha",
    level: "Principiante",

    image: {
      url: commonsImage("Setubandhasan.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Setu_Bandhasana",
      license: "Consultar licencia del archivo"
    },

    shortDescription:
      "Extensión de cadera y columna realizada tumbado boca arriba.",

    execution: [
      "Túmbate boca arriba.",
      "Flexiona las rodillas.",
      "Coloca los pies aproximadamente bajo las rodillas.",
      "Presiona los pies contra el suelo.",
      "Eleva progresivamente la pelvis.",
      "Mantén las rodillas alineadas.",
      "Desciende lentamente."
    ],

    breathing:
      "Inspira al elevar y respira de forma estable durante la permanencia.",

    anatomy:
      "Extensión de cadera y columna con participación de glúteos, isquiotibiales y musculatura posterior.",

    benefits: [
      "Fortalece la cadena posterior.",
      "Moviliza extensión de cadera.",
      "Puede utilizarse como preparación para extensiones más intensas."
    ],

    precautions: [
      "No abras excesivamente las rodillas.",
      "Evita comprimir el cuello."
    ],

    contraindications: [
      "Dolor lumbar agudo.",
      "Lesiones cervicales relevantes."
    ],

    redFlags: [
      "Dolor punzante.",
      "Hormigueo.",
      "Mareo."
    ],

    props: [
      "Bloque"
    ],

    duration: "20–60 segundos",

    variations: [
      "Puente dinámico.",
      "Puente sostenido.",
      "Puente con bloque.",
      "Puente con brazos."
    ]
  },


  /* =======================================================
     22. CAT COW
     ======================================================= */

  {
    id: "cat-cow",
    name: "Gato-vaca",
    sanskrit: "Marjaryasana / Bitilasana",
    transliteration: "Mārjaryāsana / Bitilāsana",
    family: "Movilidad de columna",
    category: "Movilidad",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose16.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual antes de redistribuir"
    },

    shortDescription:
      "Movimiento dinámico de flexión y extensión de la columna.",

    execution: [
      "Colócate en cuatro apoyos.",
      "Manos bajo hombros y rodillas bajo caderas.",
      "Inspira mientras llevas el pecho hacia delante y extiendes la columna.",
      "Exhala mientras redondeas la espalda.",
      "Coordina el movimiento con la respiración.",
      "Repite lentamente."
    ],

    breathing:
      "Inspiración para extensión y exhalación para flexión, sin necesidad de forzar el movimiento.",

    anatomy:
      "Moviliza sucesivamente diferentes segmentos de la columna.",

    benefits: [
      "Calienta la columna.",
      "Mejora coordinación respiración-movimiento.",
      "Prepara para prácticas dinámicas."
    ],

    precautions: [
      "Reduce el rango si existe dolor de muñecas."
    ],

    contraindications: [
      "Dolor agudo de muñeca o columna."
    ],

    redFlags: [
      "Dolor punzante.",
      "Hormigueo."
    ],

    props: [
      "Manta bajo rodillas"
    ],

    duration: "1–3 minutos",

    variations: [
      "Movimiento lento.",
      "Movimiento ondulatorio.",
      "Círculos de columna."
    ]
  },


  /* =======================================================
     23. COBRA
     ======================================================= */

  {
    id: "cobra",
    name: "Cobra",
    sanskrit: "भुजङ्गासन",
    transliteration: "Bhujaṅgāsana",
    family: "Extensión de columna",
    category: "Hatha / Vinyasa",
    level: "Intermedio",

    image: {
      url: commonsImage("Bhujangasana.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Bhujangasana",
      license: "Consultar licencia del archivo"
    },

    shortDescription:
      "Extensión activa de la columna desde posición tumbada.",

    execution: [
      "Túmbate boca abajo.",
      "Coloca las manos cerca de las costillas.",
      "Presiona suavemente los empeines.",
      "Eleva el pecho utilizando principalmente la musculatura de la espalda.",
      "Mantén los hombros alejados de las orejas.",
      "No necesitas elevar mucho el torso."
    ],

    breathing:
      "Inspira al elevar el pecho y respira con naturalidad.",

    anatomy:
      "Extensión vertebral con participación de extensores de columna, hombros y musculatura posterior.",

    benefits: [
      "Fortalece espalda.",
      "Moviliza extensión.",
      "Forma parte de muchas secuencias Vinyasa."
    ],

    precautions: [
      "No fuerces la extensión lumbar.",
      "Mantén codos ligeramente flexionados."
    ],

    contraindications: [
      "Dolor lumbar agudo."
    ],

    redFlags: [
      "Dolor punzante.",
      "Dolor irradiado."
    ],

    props: [
      "Manta"
    ],

    duration: "10–30 segundos",

    variations: [
      "Baby Cobra.",
      "Cobra baja.",
      "Cobra tradicional."
    ]
  },


  /* =======================================================
     24. CHILD'S POSE
     ======================================================= */

  {
    id: "child-pose-wide",
    name: "Niño con piernas abiertas",
    sanskrit: "Balāsana",
    transliteration: "Bālāsana",
    family: "Descanso",
    category: "Restaurativo",
    level: "Principiante",

    image: {
      url: commonsImage("Pose 1.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Variación amplia de Balasana.",

    execution: [
      "Separa las rodillas.",
      "Lleva la pelvis hacia los talones.",
      "Alarga los brazos.",
      "Apoya la frente.",
      "Relaja hombros."
    ],

    breathing:
      "Respiración lenta hacia la espalda.",

    anatomy:
      "Flexión de cadera y columna con rodillas flexionadas.",

    benefits: [
      "Descanso.",
      "Movilidad de cadera.",
      "Relajación."
    ],

    precautions: [
      "Utiliza soporte bajo la frente."
    ],

    contraindications: [
      "Dolor agudo de rodilla."
    ],

    redFlags: [
      "Dolor agudo."
    ],

    props: [
      "Bolster",
      "Manta"
    ],

    duration: "1–5 minutos",

    variations: [
      "Frente sobre soporte.",
      "Brazos hacia atrás.",
      "Rodillas muy abiertas."
    ]
  },


  /* =======================================================
     25. STAFF POSE
     ======================================================= */

  {
    id: "dandasana",
    name: "Bastón",
    sanskrit: "दण्डासन",
    transliteration: "Daṇḍāsana",
    family: "Sentado",
    category: "Hatha",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose3.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Postura sentada de alineación fundamental.",

    execution: [
      "Siéntate con las piernas extendidas.",
      "Apoya las manos junto a las caderas.",
      "Alarga la columna.",
      "Flexiona ligeramente las rodillas si es necesario.",
      "Mantén los pies activos."
    ],

    breathing:
      "Respira manteniendo la columna larga.",

    anatomy:
      "Flexión de cadera y extensión de rodillas con estabilización del tronco.",

    benefits: [
      "Prepara flexiones.",
      "Ayuda a observar la alineación.",
      "Fortalece la postura sentada."
    ],

    precautions: [
      "Si la pelvis cae hacia atrás, siéntate sobre una manta."
    ],

    contraindications: [],

    redFlags: [
      "Dolor lumbar."
    ],

    props: [
      "Manta"
    ],

    duration: "30–90 segundos",

    variations: [
      "Rodillas flexionadas.",
      "Espalda contra pared."
    ]
  },


  /* =======================================================
     26. STAFF / FORWARD FOLD
     ======================================================= */

  {
    id: "seated-forward-fold",
    name: "Pinza sentada",
    sanskrit: "Paścimottānāsana",
    transliteration: "Paścimottānāsana",
    family: "Flexión",
    category: "Hatha / Yin",
    level: "Intermedio",

    image: {
      url: commonsImage("Bpose18.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Flexión sentada hacia delante.",

    execution: [
      "Comienza en Dandasana.",
      "Inspira y alarga la columna.",
      "Inclina la pelvis hacia delante.",
      "Desciende el torso.",
      "Relaja el cuello.",
      "Mantén las rodillas flexionadas si es necesario."
    ],

    breathing:
      "Respira hacia la espalda y las costillas posteriores.",

    anatomy:
      "Flexión de cadera y columna y extensión de rodillas.",

    benefits: [
      "Moviliza cadena posterior.",
      "Trabaja flexión de cadera."
    ],

    precautions: [
      "No tires de los pies.",
      "Utiliza cinturón si es necesario."
    ],

    contraindications: [
      "Dolor lumbar agudo."
    ],

    redFlags: [
      "Dolor irradiado."
    ],

    props: [
      "Cinturón",
      "Bolster"
    ],

    duration: "1–5 minutos",

    variations: [
      "Rodillas flexionadas.",
      "Bolster sobre piernas."
    ]
  },


  /* =======================================================
     27. SHOELACE
     ======================================================= */

  {
    id: "shoelace",
    name: "Cordones",
    sanskrit: "Gomukhāsana",
    transliteration: "Gomukhāsana",
    family: "Caderas",
    category: "Yin",
    level: "Intermedio",

    image: {
      url: commonsImage("Bpose22.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Postura sentada que coloca las piernas cruzadas de manera asimétrica.",

    execution: [
      "Siéntate con las piernas flexionadas.",
      "Cruza una pierna sobre la otra.",
      "Apila las rodillas aproximadamente.",
      "Ajusta los pies hacia los lados.",
      "Mantén la pelvis estable.",
      "Inclínate hacia delante si deseas."
    ],

    breathing:
      "Respira lentamente sin forzar las caderas.",

    anatomy:
      "Rotación interna y externa de cadera dependiendo del lado.",

    benefits: [
      "Movilidad de cadera.",
      "Trabajo asimétrico."
    ],

    precautions: [
      "Utiliza manta bajo las caderas."
    ],

    contraindications: [
      "Dolor agudo de rodilla o cadera."
    ],

    redFlags: [
      "Dolor punzante."
    ],

    props: [
      "Manta",
      "Bolster"
    ],

    duration: "2–4 minutos por lado",

    variations: [
      "Torso erguido.",
      "Flexión hacia delante.",
      "Soporte bajo pelvis."
    ]
  },


  /* =======================================================
     28. DRAGONFLY
     ======================================================= */

  {
    id: "dragonfly",
    name: "Libélula",
    sanskrit: "Upaviṣṭha Koṇāsana",
    transliteration: "Upaviṣṭha Koṇāsana",
    family: "Aductores",
    category: "Yin",
    level: "Intermedio",

    image: {
      url: commonsImage("Bpose13.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Flexión sentada con las piernas ampliamente separadas.",

    execution: [
      "Siéntate con las piernas abiertas.",
      "Flexiona ligeramente las rodillas si lo necesitas.",
      "Alarga la columna.",
      "Inclina el torso hacia delante.",
      "Deja que los brazos descansen."
    ],

    breathing:
      "Respira hacia la parte posterior de las costillas.",

    anatomy:
      "Abducción de caderas y flexión del tronco.",

    benefits: [
      "Moviliza aductores.",
      "Trabaja caderas."
    ],

    precautions: [
      "No fuerces la apertura."
    ],

    contraindications: [
      "Lesiones agudas de cadera."
    ],

    redFlags: [
      "Dolor punzante."
    ],

    props: [
      "Bolster",
      "Manta"
    ],

    duration: "2–5 minutos",

    variations: [
      "Piernas menos abiertas.",
      "Bolster delante.",
      "Flexión lateral."
    ]
  },


  /* =======================================================
     29. SADDLE
     ======================================================= */

  {
    id: "saddle",
    name: "Sillín",
    sanskrit: "Virasana / Supta Virasana",
    transliteration: "Vīrāsana",
    family: "Extensión",
    category: "Yin",
    level: "Intermedio",

    image: {
      url: commonsImage("Bpose23.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Virasana",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Postura Yin de extensión que puede trabajar muslos y flexores de cadera.",

    execution: [
      "Comienza arrodillado.",
      "Separa los pies y lleva la pelvis hacia el espacio entre ellos.",
      "Utiliza soporte bajo la pelvis.",
      "Permanece erguido o inclínate hacia atrás progresivamente.",
      "Detente antes de sentir compresión dolorosa."
    ],

    breathing:
      "Respira de forma suave.",

    anatomy:
      "Flexión de rodilla y extensión de cadera variable.",

    benefits: [
      "Moviliza la cadena anterior.",
      "Puede trabajar flexores de cadera."
    ],

    precautions: [
      "Utiliza mucho soporte.",
      "No fuerces la rodilla."
    ],

    contraindications: [
      "Problemas importantes de rodilla."
    ],

    redFlags: [
      "Dolor punzante de rodilla."
    ],

    props: [
      "Bolster",
      "Bloques",
      "Mantas"
    ],

    duration: "1–4 minutos",

    variations: [
      "Sillín erguido.",
      "Sillín reclinado.",
      "Sillín con bolster."
    ]
  },


  /* =======================================================
     30. DOLPHIN
     ======================================================= */

  {
    id: "dolphin",
    name: "Delfín",
    sanskrit: "Ardha Pincha Mayūrāsana",
    transliteration: "Ardha Piñcha Mayūrāsana",
    family: "Fuerza / Inversión",
    category: "Hatha",
    level: "Intermedio",

    image: {
      url: commonsImage("Bpose9.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Postura sobre antebrazos que fortalece hombros y tronco.",

    execution: [
      "Coloca los antebrazos sobre la esterilla.",
      "Eleva las caderas.",
      "Camina los pies hacia las manos.",
      "Empuja el suelo con los antebrazos.",
      "Mantén la cabeza libre.",
      "Regresa lentamente."
    ],

    breathing:
      "Respira sin bloquear el abdomen.",

    anatomy:
      "Carga sobre hombros, brazos y musculatura estabilizadora del tronco.",

    benefits: [
      "Fortalece hombros.",
      "Prepara inversiones."
    ],

    precautions: [
      "No cargues el cuello.",
      "Reduce tiempo si los hombros se fatigan."
    ],

    contraindications: [
      "Lesión aguda de hombro."
    ],

    redFlags: [
      "Dolor cervical.",
      "Hormigueo."
    ],

    props: [
      "Bloques"
    ],

    duration: "15–45 segundos",

    variations: [
      "Delfín estático.",
      "Delfín dinámico.",
      "Rodillas apoyadas."
    ]
  },


  /* =======================================================
     31. PLANK
     ======================================================= */

  {
    id: "plank",
    name: "Plancha",
    sanskrit: "Phalakasana",
    transliteration: "Phalakāsana",
    family: "Fuerza",
    category: "Vinyasa / Fuerza",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose4.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Postura de apoyo que fortalece el cuerpo completo.",

    execution: [
      "Desde cuatro apoyos lleva las piernas hacia atrás.",
      "Coloca hombros aproximadamente sobre muñecas.",
      "Empuja el suelo.",
      "Activa abdomen y piernas.",
      "Mantén una línea estable desde cabeza hasta talones.",
      "Puedes apoyar las rodillas."
    ],

    breathing:
      "Respira de forma continua.",

    anatomy:
      "Alta demanda de estabilización del tronco, hombros, cadera y piernas.",

    benefits: [
      "Fortalece el centro.",
      "Fortalece brazos.",
      "Mejora estabilidad."
    ],

    precautions: [
      "Apoya rodillas si es necesario."
    ],

    contraindications: [
      "Dolor agudo de muñeca u hombro."
    ],

    redFlags: [
      "Dolor punzante.",
      "Pérdida de fuerza."
    ],

    props: [
      "Manta"
    ],

    duration: "10–60 segundos",

    variations: [
      "Rodillas apoyadas.",
      "Plancha completa.",
      "Plancha lateral."
    ]
  },


  /* =======================================================
     32. SIDE PLANK
     ======================================================= */

  {
    id: "side-plank",
    name: "Plancha lateral",
    sanskrit: "Vasiṣṭhāsana",
    transliteration: "Vasiṣṭhāsana",
    family: "Equilibrio / Fuerza",
    category: "Hatha / Vinyasa",
    level: "Intermedio",

    image: {
      url: commonsImage("Bpose5.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Postura lateral de fuerza y estabilidad.",

    execution: [
      "Desde plancha desplaza el peso hacia una mano.",
      "Gira el cuerpo lateralmente.",
      "Apoya un pie sobre el otro o coloca una rodilla en el suelo.",
      "Eleva la cadera.",
      "Extiende el brazo superior."
    ],

    breathing:
      "Respira de manera constante.",

    anatomy:
      "Trabajo intenso de hombro, oblicuos, glúteos y musculatura estabilizadora.",

    benefits: [
      "Fortalece el core.",
      "Mejora estabilidad lateral."
    ],

    precautions: [
      "Apoya la rodilla inferior para modificar."
    ],

    contraindications: [
      "Dolor agudo de muñeca u hombro."
    ],

    redFlags: [
      "Dolor punzante.",
      "Hormigueo."
    ],

    props: [
      "Manta"
    ],

    duration: "10–30 segundos por lado",

    variations: [
      "Rodilla inferior apoyada.",
      "Piernas extendidas.",
      "Brazo superior arriba."
    ]
  },


  /* =======================================================
     33. CHAIR
     ======================================================= */

  {
    id: "chair",
    name: "Silla",
    sanskrit: "Utkatāsana",
    transliteration: "Utkatāsana",
    family: "Fuerza",
    category: "Hatha",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose6.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Postura de pie con flexión de rodillas y caderas.",

    execution: [
      "Ponte de pie.",
      "Flexiona caderas y rodillas.",
      "Lleva la pelvis hacia atrás.",
      "Mantén el peso distribuido en los pies.",
      "Eleva los brazos.",
      "Mantén el pecho amplio."
    ],

    breathing:
      "Respira continuamente.",

    anatomy:
      "Fortalecimiento de cuádriceps, glúteos y musculatura estabilizadora.",

    benefits: [
      "Fortalece piernas.",
      "Mejora resistencia."
    ],

    precautions: [
      "No necesitas bajar mucho.",
      "Mantén las rodillas siguiendo la dirección de los pies."
    ],

    contraindications: [
      "Dolor agudo de rodilla."
    ],

    redFlags: [
      "Dolor punzante."
    ],

    props: [
      "Pared"
    ],

    duration: "15–45 segundos",

    variations: [
      "Silla alta.",
      "Silla profunda.",
      "Brazos delante."
    ]
  },


  /* =======================================================
     34. EASY POSE
     ======================================================= */

  {
    id: "easy-pose",
    name: "Postura fácil",
    sanskrit: "सुखासन",
    transliteration: "Sukhāsana",
    family: "Meditación",
    category: "Meditación / Pranayama",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose10.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Postura sentada sencilla para respiración y meditación.",

    execution: [
      "Siéntate con las piernas cruzadas.",
      "Eleva ligeramente la pelvis si lo necesitas.",
      "Alarga la columna.",
      "Relaja hombros.",
      "Apoya las manos sobre muslos."
    ],

    breathing:
      "Respira lentamente por la nariz.",

    anatomy:
      "Postura sentada con demanda muscular moderada.",

    benefits: [
      "Facilita prácticas de respiración.",
      "Favorece meditación."
    ],

    precautions: [
      "Siéntate sobre una manta."
    ],

    contraindications: [],

    redFlags: [
      "Dolor intenso de cadera o rodilla."
    ],

    props: [
      "Manta",
      "Cojín de meditación"
    ],

    duration: "2–30 minutos",

    variations: [
      "Piernas cruzadas.",
      "Piernas una delante de otra.",
      "Sentado sobre soporte."
    ]
  },


  /* =======================================================
     35. VAJRASANA
     ======================================================= */

  {
    id: "vajrasana",
    name: "Postura del diamante",
    sanskrit: "वज्रासन",
    transliteration: "Vajrāsana",
    family: "Arrodillado",
    category: "Meditación / Hatha",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose11.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Postura arrodillada utilizada para meditación y respiración.",

    execution: [
      "Arrodíllate.",
      "Lleva los glúteos hacia los talones.",
      "Mantén la columna vertical.",
      "Apoya las manos sobre los muslos.",
      "Relaja hombros."
    ],

    breathing:
      "Respiración nasal natural.",

    anatomy:
      "Flexión de rodillas y tobillos con estabilización del tronco.",

    benefits: [
      "Postura estable para pranayama.",
      "Facilita meditación."
    ],

    precautions: [
      "Utiliza un bloque o cojín entre pelvis y talones."
    ],

    contraindications: [
      "Dolor importante de rodillas o tobillos."
    ],

    redFlags: [
      "Dolor punzante.",
      "Hormigueo."
    ],

    props: [
      "Cojín",
      "Bloque"
    ],

    duration: "1–20 minutos",

    variations: [
      "Sentado sobre soporte.",
      "Rodillas ligeramente separadas."
    ]
  },


  /* =======================================================
     36. CORPSE SIDE
     ======================================================= */

  {
    id: "side-savasana",
    name: "Descanso lateral",
    sanskrit: "Śavāsana variante",
    transliteration: "Śavāsana",
    family: "Reposo",
    category: "Restaurativo",
    level: "Todos",

    image: {
      url: commonsImage("Bpose12.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Variación lateral de descanso.",

    execution: [
      "Túmbate sobre un lado.",
      "Coloca un cojín bajo la cabeza.",
      "Flexiona ligeramente las piernas.",
      "Apoya una mano sobre el abdomen.",
      "Relaja todo el cuerpo."
    ],

    breathing:
      "Respiración libre.",

    anatomy:
      "Postura de baja demanda muscular.",

    benefits: [
      "Alternativa cómoda a Savasana."
    ],

    precautions: [
      "Asegura que el cuello quede alineado."
    ],

    contraindications: [],

    redFlags: [],

    props: [
      "Cojín",
      "Manta"
    ],

    duration: "3–15 minutos",

    variations: [
      "Piernas flexionadas.",
      "Piernas extendidas.",
      "Bolster entre rodillas."
    ]
  },


  /* =======================================================
     37. HALF SPLIT
     ======================================================= */

  {
    id: "half-split",
    name: "Media apertura",
    sanskrit: "Ardha Hanumānāsana",
    transliteration: "Ardha Hanumānāsana",
    family: "Isquiotibiales",
    category: "Hatha / Yin",
    level: "Intermedio",

    image: {
      url: commonsImage("Bpose14.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Extensión de una pierna desde una posición de zancada.",

    execution: [
      "Comienza desde una zancada.",
      "Lleva la pelvis hacia atrás.",
      "Extiende la pierna delantera.",
      "Flexiona ligeramente la rodilla.",
      "Alarga la columna.",
      "Inclínate hacia delante desde la cadera."
    ],

    breathing:
      "Respira sin forzar.",

    anatomy:
      "Extensión de rodilla y flexión de cadera.",

    benefits: [
      "Moviliza isquiotibiales.",
      "Prepara Hanumanasana."
    ],

    precautions: [
      "Mantén rodilla ligeramente flexionada."
    ],

    contraindications: [
      "Lesión reciente de isquiotibiales."
    ],

    redFlags: [
      "Dolor punzante.",
      "Dolor irradiado."
    ],

    props: [
      "Bloques"
    ],

    duration: "30–90 segundos por lado",

    variations: [
      "Rodilla flexionada.",
      "Pierna más extendida.",
      "Manos en bloques."
    ]
  },


  /* =======================================================
     38. LOW LUNGE
     ======================================================= */

  {
    id: "low-lunge",
    name: "Zancada baja",
    sanskrit: "Anjaneyāsana",
    transliteration: "Añjaneyāsana",
    family: "Caderas",
    category: "Hatha / Vinyasa",
    level: "Principiante",

    image: {
      url: commonsImage("Ашва Санчаланасана.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Zancada con la rodilla posterior apoyada.",

    execution: [
      "Desde cuatro apoyos lleva un pie hacia delante.",
      "Apoya la rodilla posterior.",
      "Ajusta la distancia.",
      "Eleva el torso.",
      "Mantén pelvis estable."
    ],

    breathing:
      "Respira de manera continua.",

    anatomy:
      "Extensión de cadera posterior y flexión de cadera delantera.",

    benefits: [
      "Moviliza flexores de cadera.",
      "Prepara secuencias de pie."
    ],

    precautions: [
      "Coloca manta bajo la rodilla."
    ],

    contraindications: [
      "Dolor agudo de rodilla."
    ],

    redFlags: [
      "Dolor punzante."
    ],

    props: [
      "Manta",
      "Bloques"
    ],

    duration: "30–90 segundos por lado",

    variations: [
      "Torso vertical.",
      "Brazos arriba.",
      "Zancada lateral."
    ]
  },


  /* =======================================================
     39. HAPPY BABY
     ======================================================= */

  {
    id: "happy-baby",
    name: "Bebé feliz",
    sanskrit: "Ānanda Bālāsana",
    transliteration: "Ānanda Bālāsana",
    family: "Caderas",
    category: "Restaurativo",
    level: "Principiante",

    image: {
      url: commonsImage("Bpose15.jpg"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Asana_tutorial_drawings",
      license: "Verificar licencia individual"
    },

    shortDescription:
      "Postura tumbada que moviliza caderas.",

    execution: [
      "Túmbate boca arriba.",
      "Flexiona las rodillas hacia el pecho.",
      "Sujeta pies, tobillos o muslos.",
      "Lleva suavemente las rodillas hacia los lados.",
      "Mantén el sacro cómodo."
    ],

    breathing:
      "Respira lentamente.",

    anatomy:
      "Flexión y abducción de cadera.",

    benefits: [
      "Moviliza caderas.",
      "Relaja la zona lumbar."
    ],

    precautions: [
      "No tires de los pies."
    ],

    contraindications: [
      "Lesión aguda de cadera."
    ],

    redFlags: [
      "Dolor punzante."
    ],

    props: [
      "Cinturón"
    ],

    duration: "1–3 minutos",

    variations: [
      "Sujetar muslos.",
      "Sujetar pies.",
      "Movimiento suave."
    ]
  },


  /* =======================================================
     40. LEGS UP WALL
     ======================================================= */

  {
    id: "legs-up-wall",
    name: "Piernas arriba",
    sanskrit: "Viparīta Karaṇī",
    transliteration: "Viparīta Karaṇī",
    family: "Restaurativo",
    category: "Yin / Restaurativo",
    level: "Principiante",

    image: {
      url: commonsImage("A style of sarvangasana.JPG"),
      source: "Wikimedia Commons",
      sourcePage: "https://commons.wikimedia.org/wiki/Category:Viparita_Karani",
      license: "Consultar licencia del archivo"
    },

    shortDescription:
      "Versión restaurativa con piernas elevadas.",

    execution: [
      "Túmbate cerca de una pared.",
      "Eleva las piernas.",
      "Acomoda pelvis y cabeza.",
      "Relaja brazos.",
      "Mantén la mandíbula suave."
    ],

    breathing:
      "Respiración natural.",

    anatomy:
      "Baja demanda muscular y posición invertida suave.",

    benefits: [
      "Descanso.",
      "Preparación para relajación."
    ],

    precautions: [
      "Sal lentamente."
    ],

    contraindications: [
      "Condiciones en las que las inversiones estén desaconsejadas."
    ],

    redFlags: [
      "Mareo intenso.",
      "Dolor."
    ],

    props: [
      "Pared",
      "Bolster",
      "Manta"
    ],

    duration: "3–10 minutos",

    variations: [
      "Piernas en pared.",
      "Piernas sobre silla.",
      "Bolster bajo pelvis."
    ]
  }

];


/* =========================================================
   UTILIDADES
   ========================================================= */

function getAsanaById(id) {
  return ASANAS.find(asana => asana.id === id);
}

function searchAsanas(query) {
  const text = query.toLowerCase().trim();

  return ASANAS.filter(asana =>
    asana.name.toLowerCase().includes(text) ||
    asana.sanskrit.toLowerCase().includes(text) ||
    asana.transliteration.toLowerCase().includes(text) ||
    asana.category.toLowerCase().includes(text) ||
    asana.family.toLowerCase().includes(text)
  );
}

function getAsanasByCategory(category) {
  return ASANAS.filter(asana =>
    asana.category.toLowerCase() === category.toLowerCase()
  );
}

function getAsanasByLevel(level) {
  return ASANAS.filter(asana =>
    asana.level.toLowerCase() === level.toLowerCase()
  );
}

function getAsanasByFamily(family) {
  return ASANAS.filter(asana =>
    asana.family.toLowerCase() === family.toLowerCase()
  );
}


/* =========================================================
   COMPATIBILIDAD CON LA APP
   ========================================================= */

const MOONIE_ASANAS = ASANAS;


/* =========================================================
   IMAGEN SEGURA
   ========================================================= */

function getAsanaImage(asana) {

  if (
    asana &&
    asana.image &&
    asana.image.url
  ) {
    return asana.image.url;
  }

  return "";
}


/* =========================================================
   EXPORT GLOBAL
   ========================================================= */

window.MOONIE_ASANAS = ASANAS;
window.ASANAS = ASANAS;
window.getAsanaById = getAsanaById;
window.searchAsanas = searchAsanas;
window.getAsanasByCategory = getAsanasByCategory;
window.getAsanasByLevel = getAsanasByLevel;
window.getAsanasByFamily = getAsanasByFamily;
window.getAsanaImage = getAsanaImage;
