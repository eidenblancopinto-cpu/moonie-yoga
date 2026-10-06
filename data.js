/* ============================================================
   🌙 MOONIE YOGA — DATA.JS
   CATÁLOGO DEFINITIVO DE 60 RUTINAS
   ============================================================ */

const MOONIE_POSES = {

  sukhasana: {
    name: "Postura fácil",
    sanskrit: "Sukhasana",
    instruction: "Siéntate cómodamente con la columna alargada. Relaja hombros, mandíbula y manos.",
    breathing: "Respira lenta y suavemente por la nariz.",
    transition: "Permanece unos segundos observando la respiración antes de continuar.",
    warning: "Si la pelvis cae hacia atrás, siéntate sobre una manta o cojín.",
    modification: "Utiliza un soporte bajo la pelvis.",
    rebound: 0
  },

  tadasana: {
    name: "Montaña",
    sanskrit: "Tadasana",
    instruction: "Ponte de pie con los pies estables. Alarga la columna desde la coronilla y distribuye el peso entre ambos pies.",
    breathing: "Inhala creciendo hacia arriba y exhala manteniendo estabilidad.",
    transition: "Flexiona ligeramente las rodillas antes de pasar a la siguiente postura.",
    warning: "No bloquees las rodillas.",
    modification: "Separa ligeramente los pies.",
    rebound: 0
  },

  catCow: {
    name: "Gato-Vaca",
    sanskrit: "Marjaryasana-Bitilasana",
    instruction: "Colócate a cuatro apoyos. Alterna entre redondear suavemente la columna y llevar el pecho hacia delante.",
    breathing: "Inhala al abrir el pecho y exhala al redondear la espalda.",
    transition: "Regresa a una columna neutra.",
    warning: "No fuerces el cuello ni la zona lumbar.",
    modification: "Reduce el rango de movimiento.",
    rebound: 0
  },

  balasana: {
    name: "Postura del niño",
    sanskrit: "Balasana",
    instruction: "Lleva las caderas hacia los talones y permite que el torso descanse hacia delante.",
    breathing: "Respira hacia la parte posterior de las costillas.",
    transition: "Camina las manos hacia el cuerpo y vuelve lentamente a cuatro apoyos.",
    warning: "Separa las rodillas si necesitas más espacio.",
    modification: "Coloca un cojín bajo el torso.",
    rebound: 20
  },

  balasanaWide: {
    name: "Postura del niño amplia",
    sanskrit: "Balasana",
    instruction: "Separa las rodillas y lleva las caderas hacia los talones mientras el torso descansa entre las piernas.",
    breathing: "Respira hacia la espalda.",
    transition: "Vuelve lentamente a cuatro apoyos.",
    warning: "No fuerces la flexión de cadera.",
    modification: "Utiliza un bolster o varios cojines.",
    rebound: 20
  },

  uttanasana: {
    name: "Pinza de pie",
    sanskrit: "Uttanasana",
    instruction: "Flexiona el torso desde las caderas y deja caer la cabeza sin buscar profundidad.",
    breathing: "Inhala al alargar la espalda y exhala al relajarte.",
    transition: "Dobla las rodillas y sube lentamente.",
    warning: "Mantén las rodillas flexionadas si notas demasiada tensión.",
    modification: "Apoya las manos sobre bloques.",
    rebound: 0
  },

  adhoMukha: {
    name: "Perro boca abajo",
    sanskrit: "Adho Mukha Svanasana",
    instruction: "Eleva las caderas formando una V invertida. Prioriza la longitud de la espalda sobre bajar los talones.",
    breathing: "Respira profundamente hacia las costillas.",
    transition: "Flexiona las rodillas antes de salir.",
    warning: "No fuerces los hombros.",
    modification: "Mantén las rodillas flexionadas.",
    rebound: 0
  },

  butterfly: {
    name: "Mariposa",
    sanskrit: "Baddha Konasana",
    instruction: "Une las plantas de los pies y deja que las rodillas se abran de forma natural.",
    breathing: "Respira lentamente y permite que el cuerpo se acomode.",
    transition: "Junta las rodillas y estira las piernas.",
    warning: "No empujes las rodillas hacia el suelo.",
    modification: "Coloca cojines bajo las rodillas.",
    rebound: 30
  },

  halfButterflyL: {
    name: "Media mariposa izquierda",
    sanskrit: "Ardha Baddha Konasana",
    instruction: "Extiende la pierna izquierda y lleva la planta del pie derecho hacia el muslo.",
    breathing: "Inhala al alargar la columna y exhala al inclinarte.",
    transition: "Regresa lentamente y cambia de lado.",
    warning: "No fuerces la flexión de la pierna extendida.",
    modification: "Coloca una manta bajo la pelvis.",
    rebound: 30
  },

  halfButterflyR: {
    name: "Media mariposa derecha",
    sanskrit: "Ardha Baddha Konasana",
    instruction: "Extiende la pierna derecha y lleva la planta del pie izquierdo hacia el muslo.",
    breathing: "Inhala al crear longitud y exhala al relajarte.",
    transition: "Regresa lentamente.",
    warning: "Mantén la rodilla cómoda.",
    modification: "Flexiona ligeramente la rodilla extendida.",
    rebound: 30
  },

  caterpillar: {
    name: "Oruga",
    sanskrit: "Paschimottanasana",
    instruction: "Siéntate con las piernas extendidas y permite que el torso avance desde las caderas.",
    breathing: "Inhala al alargar la espalda y exhala relajando el torso.",
    transition: "Sube lentamente vértebra a vértebra.",
    warning: "No busques tocar los pies.",
    modification: "Flexiona las rodillas o utiliza un bolster.",
    rebound: 30
  },

  dragonL: {
    name: "Dragón izquierdo",
    sanskrit: "Dragon",
    instruction: "Adelanta el pie izquierdo y lleva la rodilla derecha hacia el suelo. Permite que la pelvis se acomode sin forzar.",
    breathing: "Respira hacia la pelvis y la parte anterior de la cadera.",
    transition: "Retrocede lentamente y cambia de lado.",
    warning: "Protege la rodilla posterior con una manta.",
    modification: "Apoya las manos sobre bloques.",
    rebound: 30
  },

  dragonR: {
    name: "Dragón derecho",
    sanskrit: "Dragon",
    instruction: "Adelanta el pie derecho y lleva la rodilla izquierda hacia el suelo.",
    breathing: "Respira lentamente hacia la pelvis.",
    transition: "Retrocede con cuidado.",
    warning: "Reduce la profundidad ante molestias en rodilla o cadera.",
    modification: "Eleva las manos sobre bloques.",
    rebound: 30
  },

  dragonfly: {
    name: "Libélula",
    sanskrit: "Upavistha Konasana",
    instruction: "Separa ampliamente las piernas y permite que el torso avance desde las caderas.",
    breathing: "Inhala al alargar la columna y exhala al relajarte.",
    transition: "Vuelve lentamente a una posición erguida.",
    warning: "No fuerces la apertura.",
    modification: "Flexiona ligeramente las rodillas.",
    rebound: 30
  },

  sphinx: {
    name: "Esfinge",
    sanskrit: "Salamba Bhujangasana",
    instruction: "Túmbate boca abajo y apóyate sobre los antebrazos. Eleva suavemente el pecho.",
    breathing: "Respira hacia el abdomen y las costillas.",
    transition: "Desciende lentamente y descansa boca abajo.",
    warning: "No colapses la zona lumbar.",
    modification: "Aleja los codos del cuerpo para reducir la extensión.",
    rebound: 30
  },

  cobra: {
    name: "Cobra",
    sanskrit: "Bhujangasana",
    instruction: "Desde el suelo, eleva progresivamente el pecho manteniendo los hombros lejos de las orejas.",
    breathing: "Inhala al elevar y exhala al descender.",
    transition: "Baja lentamente.",
    warning: "La altura no es el objetivo.",
    modification: "Mantén los codos flexionados.",
    rebound: 30
  },

  anahatasana: {
    name: "Corazón derretido",
    sanskrit: "Anahatasana",
    instruction: "Desde cuatro apoyos, camina las manos hacia delante y permite que el pecho descienda suavemente.",
    breathing: "Respira hacia el pecho y las costillas.",
    transition: "Vuelve lentamente a cuatro apoyos.",
    warning: "No fuerces los hombros.",
    modification: "Coloca un cojín bajo el pecho.",
    rebound: 30
  },

  deerL: {
    name: "Ciervo izquierdo",
    sanskrit: "Mrigasana",
    instruction: "Coloca la pierna izquierda delante y la derecha hacia atrás en una posición cómoda de rotación.",
    breathing: "Respira hacia la cadera delantera.",
    transition: "Sal lentamente y cambia de lado.",
    warning: "La rodilla debe permanecer cómoda.",
    modification: "Coloca soporte bajo la cadera.",
    rebound: 30
  },

  deerR: {
    name: "Ciervo derecho",
    sanskrit: "Mrigasana",
    instruction: "Coloca la pierna derecha delante y la izquierda hacia atrás.",
    breathing: "Respira lentamente hacia la pelvis.",
    transition: "Sal con cuidado.",
    warning: "Reduce la rotación si aparece molestia.",
    modification: "Utiliza un cojín bajo la cadera.",
    rebound: 30
  },

  shoelaceL: {
    name: "Cordón de zapato izquierdo",
    sanskrit: "Gomukhasana",
    instruction: "Cruza las piernas colocando la izquierda en la posición superior.",
    breathing: "Respira hacia las caderas.",
    transition: "Descruza lentamente.",
    warning: "No fuerces las rodillas.",
    modification: "Siéntate sobre un cojín.",
    rebound: 30
  },

  shoelaceR: {
    name: "Cordón de zapato derecho",
    sanskrit: "Gomukhasana",
    instruction: "Cruza las piernas colocando la derecha en la posición superior.",
    breathing: "Mantén una respiración lenta.",
    transition: "Descruza cuidadosamente.",
    warning: "No fuerces la alineación.",
    modification: "Utiliza soporte bajo la pelvis.",
    rebound: 30
  },

  sleepingSwanL: {
    name: "Cisne dormido izquierdo",
    sanskrit: "Eka Pada Rajakapotasana",
    instruction: "Lleva la pierna izquierda delante y extiende la derecha hacia atrás. Inclina el torso si resulta cómodo.",
    breathing: "Respira hacia la cadera delantera.",
    transition: "Sal lentamente y cambia de lado.",
    warning: "No fuerces la rodilla.",
    modification: "Coloca un cojín bajo la cadera.",
    rebound: 30
  },

  sleepingSwanR: {
    name: "Cisne dormido derecho",
    sanskrit: "Eka Pada Rajakapotasana",
    instruction: "Lleva la pierna derecha delante y extiende la izquierda hacia atrás.",
    breathing: "Respira profundamente sin forzar.",
    transition: "Sal lentamente.",
    warning: "Reduce la amplitud si hay molestia.",
    modification: "Utiliza soporte bajo la cadera.",
    rebound: 30
  },

  saddle: {
    name: "Silla Yin",
    sanskrit: "Supta Virasana",
    instruction: "Desde las rodillas, siéntate entre los talones utilizando soporte y reclínate solo hasta donde sea cómodo.",
    breathing: "Respira hacia el abdomen y el pecho.",
    transition: "Regresa lentamente utilizando las manos.",
    warning: "Evita esta postura si genera dolor importante en las rodillas.",
    modification: "Siéntate sobre un bloque o utiliza un bolster.",
    rebound: 30
  },

  twistL: {
    name: "Torsión supina izquierda",
    sanskrit: "Supta Matsyendrasana",
    instruction: "Túmbate boca arriba y deja caer las piernas suavemente hacia la izquierda.",
    breathing: "Exhala al permitir que las piernas se acomoden.",
    transition: "Vuelve al centro y cambia de lado.",
    warning: "No fuerces la rotación.",
    modification: "Coloca un cojín bajo las rodillas.",
    rebound: 20
  },

  twistR: {
    name: "Torsión supina derecha",
    sanskrit: "Supta Matsyendrasana",
    instruction: "Túmbate boca arriba y lleva las piernas suavemente hacia la derecha.",
    breathing: "Respira de forma tranquila.",
    transition: "Vuelve al centro.",
    warning: "Mantén el movimiento cómodo.",
    modification: "Utiliza soporte bajo las rodillas.",
    rebound: 20
  },

  legsWall: {
    name: "Piernas en la pared",
    sanskrit: "Viparita Karani",
    instruction: "Coloca las piernas apoyadas en una pared y permite que el cuerpo descanse.",
    breathing: "Respira lentamente por la nariz.",
    transition: "Dobla las rodillas y gira hacia un lado antes de levantarte.",
    warning: "Sal lentamente de la postura.",
    modification: "Puedes colocar un cojín bajo la pelvis.",
    rebound: 20
  },

  savasana: {
    name: "Relajación final",
    sanskrit: "Savasana",
    instruction: "Túmbate boca arriba y permite que todo el cuerpo descanse.",
    breathing: "Deja que la respiración vuelva a su ritmo natural.",
    transition: "Mueve lentamente dedos de manos y pies antes de incorporarte.",
    warning: "Utiliza una manta para mantenerte cómodo.",
    modification: "Coloca un cojín bajo las rodillas.",
    rebound: 0
  },

  bridge: {
    name: "Puente",
    sanskrit: "Setu Bandhasana",
    instruction: "Túmbate boca arriba, apoya los pies y eleva suavemente la pelvis.",
    breathing: "Inhala al elevar y exhala al descender.",
    transition: "Baja lentamente la espalda.",
    warning: "No comprimas el cuello.",
    modification: "Reduce la altura.",
    rebound: 20
  },

  bridgeSupported: {
    name: "Puente restaurativo",
    sanskrit: "Setu Bandhasana",
    instruction: "Eleva suavemente la pelvis y coloca un soporte estable bajo el sacro.",
    breathing: "Respira lentamente.",
    transition: "Retira el soporte y desciende con control.",
    warning: "El soporte debe estar bajo el sacro, nunca bajo la zona lumbar.",
    modification: "Reduce la altura del soporte.",
    rebound: 20
  },

  happyBaby: {
    name: "Bebé feliz",
    sanskrit: "Ananda Balasana",
    instruction: "Túmbate boca arriba y acerca las rodillas hacia las axilas mientras sujetas los pies o las piernas.",
    breathing: "Respira profundamente hacia el abdomen.",
    transition: "Suelta lentamente.",
    warning: "No tires de las piernas.",
    modification: "Sujeta detrás de los muslos.",
    rebound: 20
  },

  kneesChest: {
    name: "Rodillas al pecho",
    sanskrit: "Apanasana",
    instruction: "Acerca suavemente ambas rodillas hacia el pecho.",
    breathing: "Exhala al acercar las piernas.",
    transition: "Suelta lentamente.",
    warning: "Mantén los hombros relajados.",
    modification: "Trabaja una pierna cada vez.",
    rebound: 15
  },

  wideForward: {
    name: "Flexión amplia",
    sanskrit: "Prasarita Padottanasana",
    instruction: "Separa las piernas y flexiona el torso desde las caderas.",
    breathing: "Inhala creando longitud y exhala relajando.",
    transition: "Sube lentamente.",
    warning: "No bloquees las rodillas.",
    modification: "Apoya las manos sobre bloques.",
    rebound: 20
  },

  malasana: {
    name: "Guirnalda",
    sanskrit: "Malasana",
    instruction: "Separa los pies y desciende en una sentadilla cómoda.",
    breathing: "Respira de forma estable.",
    transition: "Apoya las manos antes de subir.",
    warning: "No fuerces la flexión de las rodillas.",
    modification: "Coloca un bloque bajo la pelvis.",
    rebound: 15
  },

  warrior1L: {
    name: "Guerrero I izquierdo",
    sanskrit: "Virabhadrasana I",
    instruction: "Coloca la pierna izquierda delante y eleva los brazos mientras estabilizas las piernas.",
    breathing: "Inhala al crecer y exhala manteniendo estabilidad.",
    transition: "Regresa al centro.",
    warning: "Mantén la rodilla delantera alineada.",
    modification: "Acorta la distancia entre los pies.",
    rebound: 0
  },

  warrior1R: {
    name: "Guerrero I derecho",
    sanskrit: "Virabhadrasana I",
    instruction: "Coloca la pierna derecha delante y eleva los brazos.",
    breathing: "Respira profundamente.",
    transition: "Regresa al centro.",
    warning: "No dejes que la rodilla colapse hacia dentro.",
    modification: "Reduce la flexión de la rodilla.",
    rebound: 0
  },

  warrior2L: {
    name: "Guerrero II izquierdo",
    sanskrit: "Virabhadrasana II",
    instruction: "Abre las piernas, flexiona la rodilla izquierda y extiende los brazos.",
    breathing: "Respira de manera constante.",
    transition: "Estira la pierna y cambia de lado.",
    warning: "Mantén la rodilla alineada con el pie.",
    modification: "Reduce la flexión.",
    rebound: 0
  },

  warrior2R: {
    name: "Guerrero II derecho",
    sanskrit: "Virabhadrasana II",
    instruction: "Flexiona la rodilla derecha y extiende los brazos lateralmente.",
    breathing: "Mantén una respiración estable.",
    transition: "Regresa al centro.",
    warning: "Mantén el pie posterior estable.",
    modification: "Reduce la profundidad.",
    rebound: 0
  },

  warrior3L: {
    name: "Guerrero III izquierdo",
    sanskrit: "Virabhadrasana III",
    instruction: "Inclina el torso hacia delante mientras elevas la pierna derecha hacia atrás, equilibrándote sobre la izquierda.",
    breathing: "Respira lentamente manteniendo el centro activo.",
    transition: "Regresa al apoyo con control.",
    warning: "No bloquees la rodilla de apoyo.",
    modification: "Utiliza una pared o bloques.",
    rebound: 0
  },

  warrior3R: {
    name: "Guerrero III derecho",
    sanskrit: "Virabhadrasana III",
    instruction: "Inclina el torso hacia delante mientras elevas la pierna izquierda hacia atrás.",
    breathing: "Mantén una respiración estable.",
    transition: "Regresa lentamente a la posición de pie.",
    warning: "No fuerces el equilibrio.",
    modification: "Utiliza una pared.",
    rebound: 0
  },

  triangleL: {
    name: "Triángulo izquierdo",
    sanskrit: "Trikonasana",
    instruction: "Extiende la pierna izquierda y alarga el torso lateralmente antes de inclinarte.",
    breathing: "Inhala creando espacio y exhala suavemente.",
    transition: "Sube lentamente.",
    warning: "No bloquees la rodilla.",
    modification: "Utiliza un bloque.",
    rebound: 0
  },

  triangleR: {
    name: "Triángulo derecho",
    sanskrit: "Trikonasana",
    instruction: "Extiende la pierna derecha y alarga el torso antes de inclinarte.",
    breathing: "Respira lentamente.",
    transition: "Regresa al centro.",
    warning: "No bloquees la rodilla.",
    modification: "Utiliza un bloque.",
    rebound: 0
  },

  treeL: {
    name: "Árbol izquierdo",
    sanskrit: "Vrikshasana",
    instruction: "Equilíbrate sobre la pierna izquierda y coloca la otra pierna en una posición cómoda.",
    breathing: "Respira lentamente manteniendo la mirada estable.",
    transition: "Baja el pie con control.",
    warning: "No apoyes el pie directamente sobre la rodilla.",
    modification: "Apoya los dedos del pie en el suelo.",
    rebound: 0
  },

  treeR: {
    name: "Árbol derecho",
    sanskrit: "Vrikshasana",
    instruction: "Equilíbrate sobre la pierna derecha y coloca la otra pierna cómodamente.",
    breathing: "Mantén una respiración estable.",
    transition: "Baja lentamente.",
    warning: "No apoyes el pie sobre la rodilla.",
    modification: "Utiliza una pared.",
    rebound: 0
  },

  chair: {
    name: "Silla",
    sanskrit: "Utkatasana",
    instruction: "Flexiona las rodillas y lleva las caderas hacia atrás como si fueras a sentarte.",
    breathing: "Inhala al alargar el torso y exhala estabilizando.",
    transition: "Estira lentamente las piernas.",
    warning: "Mantén las rodillas alineadas con los pies.",
    modification: "Reduce la profundidad.",
    rebound: 0
  },

  plank: {
    name: "Plancha",
    sanskrit: "Phalakasana",
    instruction: "Mantén el cuerpo en una línea estable desde la cabeza hasta los pies.",
    breathing: "Respira continuamente.",
    transition: "Apoya las rodillas antes de salir.",
    warning: "Evita hundir la zona lumbar.",
    modification: "Apoya las rodillas.",
    rebound: 0
  },

  chaturanga: {
    name: "Plancha baja",
    sanskrit: "Chaturanga Dandasana",
    instruction: "Desde plancha, flexiona los codos manteniéndolos cerca del cuerpo.",
    breathing: "Exhala al bajar.",
    transition: "Apoya las rodillas si necesitas modificar.",
    warning: "No bajes más de lo que puedas controlar.",
    modification: "Realiza la postura con las rodillas apoyadas.",
    rebound: 0
  },

  boat: {
    name: "Barca",
    sanskrit: "Navasana",
    instruction: "Equilibra el cuerpo sobre los isquiones manteniendo el pecho abierto.",
    breathing: "Respira de forma estable.",
    transition: "Baja lentamente.",
    warning: "No redondees excesivamente la espalda.",
    modification: "Mantén las rodillas flexionadas.",
    rebound: 0
  },

  boatPrep: {
    name: "Barca preparatoria",
    sanskrit: "Navasana",
    instruction: "Mantén las rodillas flexionadas y eleva ligeramente los pies mientras mantienes el pecho abierto.",
    breathing: "Respira continuamente.",
    transition: "Baja los pies lentamente.",
    warning: "Evita colapsar la espalda.",
    modification: "Mantén un pie en el suelo.",
    rebound: 0
  },

  sidePlankL: {
    name: "Plancha lateral izquierda",
    sanskrit: "Vasisthasana",
    instruction: "Apóyate sobre una mano y el lateral del pie mientras elevas las caderas.",
    breathing: "Respira de forma estable.",
    transition: "Baja con control.",
    warning: "No colapses el hombro.",
    modification: "Apoya la rodilla inferior.",
    rebound: 0
  },

  sidePlankR: {
    name: "Plancha lateral derecha",
    sanskrit: "Vasisthasana",
    instruction: "Apóyate sobre una mano y el lateral del pie mientras elevas las caderas.",
    breathing: "Respira lentamente.",
    transition: "Baja con control.",
    warning: "Mantén el hombro estable.",
    modification: "Apoya la rodilla inferior.",
    rebound: 0
  },

  dolphin: {
    name: "Delfín",
    sanskrit: "Ardha Pincha Mayurasana",
    instruction: "Apoya los antebrazos y eleva las caderas manteniendo la espalda larga.",
    breathing: "Respira profundamente.",
    transition: "Baja las rodillas.",
    warning: "No cargues excesivamente el cuello.",
    modification: "Aleja los pies.",
    rebound: 20
  },

  locust: {
    name: "Langosta",
    sanskrit: "Salabhasana",
    instruction: "Túmbate boca abajo y eleva suavemente pecho, piernas o brazos.",
    breathing: "Inhala al elevar y exhala al descender.",
    transition: "Descansa boca abajo.",
    warning: "Evita comprimir la zona lumbar.",
    modification: "Eleva solo el pecho o solo las piernas.",
    rebound: 20
  },

  lowLungeL: {
    name: "Zancada baja izquierda",
    sanskrit: "Anjaneyasana",
    instruction: "Coloca el pie izquierdo delante y apoya la rodilla posterior.",
    breathing: "Inhala al alargar el torso.",
    transition: "Cambia de lado lentamente.",
    warning: "Protege la rodilla posterior.",
    modification: "Utiliza una manta bajo la rodilla.",
    rebound: 20
  },

  lowLungeR: {
    name: "Zancada baja derecha",
    sanskrit: "Anjaneyasana",
    instruction: "Coloca el pie derecho delante y apoya la rodilla posterior.",
    breathing: "Respira lentamente.",
    transition: "Sal con control.",
    warning: "No fuerces la cadera.",
    modification: "Reduce la amplitud.",
    rebound: 20
  },

  halfSplitL: {
    name: "Media apertura izquierda",
    sanskrit: "Ardha Hanumanasana",
    instruction: "Desde la zancada, lleva las caderas atrás y extiende la pierna izquierda.",
    breathing: "Inhala al alargar y exhala suavemente.",
    transition: "Regresa a la zancada.",
    warning: "No fuerces los isquiotibiales.",
    modification: "Mantén una ligera flexión de rodilla.",
    rebound: 30
  },

  halfSplitR: {
    name: "Media apertura derecha",
    sanskrit: "Ardha Hanumanasana",
    instruction: "Desde la zancada, lleva las caderas atrás y extiende la pierna derecha.",
    breathing: "Respira lentamente.",
    transition: "Regresa a la zancada.",
    warning: "No busques profundidad.",
    modification: "Utiliza bloques.",
    rebound: 30
  },

  lizardL: {
    name: "Lagarto izquierdo",
    sanskrit: "Utthan Pristhasana",
    instruction: "Lleva el pie izquierdo por fuera de la mano izquierda y permite que la cadera descienda cómodamente.",
    breathing: "Respira hacia la cadera.",
    transition: "Retrocede y cambia de lado.",
    warning: "Reduce la profundidad si hay molestia.",
    modification: "Apoya la rodilla posterior.",
    rebound: 30
  },

  lizardR: {
    name: "Lagarto derecho",
    sanskrit: "Utthan Pristhasana",
    instruction: "Lleva el pie derecho por fuera de la mano derecha.",
    breathing: "Respira lentamente.",
    transition: "Retrocede con cuidado.",
    warning: "No fuerces la rodilla.",
    modification: "Apoya la rodilla posterior.",
    rebound: 30
  },

  suptaButterfly: {
    name: "Mariposa reclinada",
    sanskrit: "Supta Baddha Konasana",
    instruction: "Túmbate boca arriba con las plantas de los pies juntas y las rodillas abiertas.",
    breathing: "Respira profundamente hacia el abdomen.",
    transition: "Junta las rodillas lentamente.",
    warning: "No dejes caer las rodillas sin soporte si hay tensión.",
    modification: "Coloca cojines bajo las rodillas.",
    rebound: 20
  },

  fishSupported: {
    name: "Pez restaurativo",
    sanskrit: "Matsyasana",
    instruction: "Utiliza un soporte longitudinal para crear una suave apertura del pecho.",
    breathing: "Respira hacia el pecho.",
    transition: "Gira hacia un lado antes de levantarte.",
    warning: "El cuello debe permanecer cómodo.",
    modification: "Reduce la altura del soporte.",
    rebound: 20
  },

  malasanaSupported: {
    name: "Guirnalda con soporte",
    sanskrit: "Malasana",
    instruction: "Desciende en una sentadilla utilizando un bloque o cojín bajo la pelvis.",
    breathing: "Respira lentamente.",
    transition: "Apoya las manos antes de subir.",
    warning: "No fuerces las rodillas.",
    modification: "Aumenta la altura del soporte.",
    rebound: 15
  },

  vajrasana: {
    name: "Rayo",
    sanskrit: "Vajrasana",
    instruction: "Siéntate sobre los talones manteniendo la columna cómoda.",
    breathing: "Respira lentamente.",
    transition: "Sal utilizando las manos.",
    warning: "No mantengas la postura si las rodillas duelen.",
    modification: "Coloca un cojín entre pelvis y talones.",
    rebound: 0
  }

};


/* ============================================================
   GENERADOR DE POSTURAS
   ============================================================ */

function mooniePose(id, seconds, options = {}) {

  const base = MOONIE_POSES[id];

  if (!base) {
    console.warn("⚠️ Postura no encontrada:", id);

    return {
      id,
      name: id,
      sanskrit: "",
      duration: seconds,
      instruction: "Realiza la postura de forma consciente y cómoda.",
      breathing: "Respira lentamente.",
      transition: "Pasa a la siguiente postura.",
      warning: "No fuerces el movimiento.",
      modification: "Reduce el rango si lo necesitas.",
      rebound: 0,
      ...options
    };
  }

  return {
    id,
    ...base,
    duration: seconds,
    ...options
  };
}


/* ============================================================
   CONSTRUCTOR DE SECUENCIAS
   ============================================================ */

function moonieSequence(items) {
  return items.map(item => {

    if (Array.isArray(item)) {
      return mooniePose(item[0], item[1], item[2] || {});
    }

    return mooniePose(item, 60);
  });
}


/* ============================================================
   AJUSTE AUTOMÁTICO DE DURACIÓN
   ============================================================

   Mantiene las proporciones de la secuencia pero adapta el
   tiempo total a la duración indicada en minutos.

   Esto permite que el temporizador de la app sea coherente.
   ============================================================ */

function normalizeRoutineDuration(poses, targetMinutes) {

  const targetSeconds = targetMinutes * 60;

  const currentSeconds = poses.reduce(
    (total, pose) => total + Number(pose.duration || 0),
    0
  );

  if (!currentSeconds) return poses;

  const factor = targetSeconds / currentSeconds;

  return poses.map(pose => ({
    ...pose,
    duration: Math.max(
      15,
      Math.round((pose.duration * factor) / 5) * 5
    )
  }));
}


/* ============================================================
   CONSTRUCTOR DE RUTINAS
   ============================================================ */

function moonieRoutine({
  id,
  name,
  style,
  category,
  level,
  duration,
  goal,
  description,
  poses,
  tags = [],
  lunar = false
}) {

  const normalizedPoses = normalizeRoutineDuration(
    poses,
    duration
  );

  return {
    id,
    name,
    style,
    category,
    level,
    duration,
    goal,
    description,
    poses: normalizedPoses,
    tags,
    lunar
  };
}


/* ============================================================
   🌙 60 RUTINAS
   ============================================================ */

const MOONIE_ROUTINES = [

  moonieRoutine({
    id: "despertar-solar",
    name: "Despertar Solar",
    style: "Hatha suave",
    category: "Mañana",
    level: "Principiante",
    duration: 15,
    goal: "Activar el cuerpo",
    description: "Una práctica suave para despertar movilidad, respiración y atención.",
    tags: ["mañana","suave","principiantes"],
    poses: moonieSequence([
      ["sukhasana",60],
      ["catCow",90],
      ["tadasana",45],
      ["uttanasana",60],
      ["adhoMukha",75],
      ["lowLungeL",60],
      ["lowLungeR",60],
      ["balasana",60],
      ["savasana",90]
    ])
  }),

  moonieRoutine({
    id: "morning-flow",
    name: "Morning Flow",
    style: "Vinyasa",
    category: "Mañana",
    level: "Intermedio",
    duration: 20,
    goal: "Despertar y activar",
    description: "Flow dinámico y progresivo para comenzar el día con energía.",
    tags: ["mañana","flow","energía"],
    poses: moonieSequence([
      ["tadasana",45],
      ["catCow",60],
      ["adhoMukha",60],
      ["warrior1L",75],
      ["warrior2L",75],
      ["warrior1R",75],
      ["warrior2R",75],
      ["plank",45],
      ["chaturanga",30],
      ["cobra",45],
      ["adhoMukha",60],
      ["uttanasana",60],
      ["tadasana",45],
      ["savasana",90]
    ])
  }),

  moonieRoutine({
    id: "reset-mediodia",
    name: "Reset del Mediodía",
    style: "Movilidad + Hatha",
    category: "Mediodía",
    level: "Principiante",
    duration: 15,
    goal: "Liberar tensión",
    description: "Una pausa corta para movilizar columna, hombros y caderas.",
    tags: ["mediodía","pausa","movilidad"],
    poses: moonieSequence([
      ["sukhasana",45],
      ["catCow",90],
      ["balasanaWide",60],
      ["anahatasana",90],
      ["dragonL",60],
      ["dragonR",60],
      ["twistL",60],
      ["twistR",60],
      ["savasana",75]
    ])
  }),

  moonieRoutine({
    id: "power-20",
    name: "Power 20",
    style: "Vinyasa dinámico",
    category: "Energía",
    level: "Intermedio",
    duration: 20,
    goal: "Fortalecer y activar",
    description: "Práctica energética de veinte minutos con fuerza y movimiento.",
    tags: ["fuerza","energía","vinyasa"],
    poses: moonieSequence([
      ["tadasana",45],
      ["chair",60],
      ["plank",45],
      ["chaturanga",30],
      ["adhoMukha",60],
      ["warrior1L",75],
      ["warrior2L",75],
      ["warrior1R",75],
      ["warrior2R",75],
      ["boatPrep",60],
      ["bridge",60],
      ["balasana",60],
      ["savasana",90]
    ])
  }),

  moonieRoutine({
    id: "caderas-libres",
    name: "Caderas Libres",
    style: "Yin",
    category: "Caderas",
    level: "Principiante",
    duration: 30,
    goal: "Explorar movilidad de caderas",
    description: "Práctica Yin lenta para explorar las caderas sin buscar profundidad.",
    tags: ["yin","caderas","lento"],
    poses: moonieSequence([
      ["sukhasana",90],
      ["butterfly",240],
      ["halfButterflyL",180],
      ["halfButterflyR",180],
      ["dragonL",240],
      ["dragonR",240],
      ["deerL",180],
      ["deerR",180],
      ["sleepingSwanL",240],
      ["sleepingSwanR",240],
      ["savasana",240]
    ])
  }),

  moonieRoutine({
    id: "soltar-el-dia",
    name: "Soltar el Día",
    style: "Yin + Restaurativo",
    category: "Tarde",
    level: "Principiante",
    duration: 20,
    goal: "Relajarse",
    description: "Una práctica tranquila para cerrar el día y bajar revoluciones.",
    tags: ["tarde","relajación","yin"],
    poses: moonieSequence([
      ["balasana",150],
      ["butterfly",210],
      ["caterpillar",210],
      ["twistL",100],
      ["twistR",100],
      ["legsWall",180],
      ["savasana",240]
    ])
  }),

  moonieRoutine({
    id: "espalda-suave",
    name: "Espalda Suave",
    style: "Movilidad + Yin",
    category: "Espalda",
    level: "Principiante",
    duration: 25,
    goal: "Movilizar la columna",
    description: "Combina movilidad suave y posturas sostenidas para la espalda.",
    tags: ["espalda","movilidad","yin"],
    poses: moonieSequence([
      ["catCow",120],
      ["balasana",120],
      ["sphinx",210],
      ["anahatasana",150],
      ["caterpillar",210],
      ["twistL",120],
      ["twistR",120],
      ["bridgeSupported",150],
      ["savasana",240]
    ])
  }),

  moonieRoutine({
    id: "core-balance",
    name: "Core & Balance",
    style: "Hatha + Fuerza",
    category: "Fuerza",
    level: "Intermedio",
    duration: 25,
    goal: "Fortalecer y equilibrar",
    description: "Trabajo progresivo de centro, piernas y equilibrio.",
    tags: ["core","equilibrio","fuerza"],
    poses: moonieSequence([
      ["tadasana",45],
      ["chair",60],
      ["warrior2L",75],
      ["warrior2R",75],
      ["treeL",75],
      ["treeR",75],
      ["boatPrep",90],
      ["plank",60],
      ["sidePlankL",60],
      ["sidePlankR",60],
      ["bridge",90],
      ["savasana",120]
    ])
  }),

  moonieRoutine({
    id: "flexibilidad-piernas",
    name: "Flexibilidad de Piernas",
    style: "Hatha + Yin",
    category: "Flexibilidad",
    level: "Principiante",
    duration: 30,
    goal: "Trabajar movilidad de piernas",
    description: "Práctica progresiva para isquiotibiales, aductores y flexores de cadera.",
    tags: ["piernas","flexibilidad","yin"],
    poses: moonieSequence([
      ["catCow",90],
      ["adhoMukha",90],
      ["lowLungeL",120],
      ["lowLungeR",120],
      ["halfSplitL",150],
      ["halfSplitR",150],
      ["halfButterflyL",150],
      ["halfButterflyR",150],
      ["dragonfly",180],
      ["caterpillar",180],
      ["savasana",210]
    ])
  }),

  moonieRoutine({
    id: "respira",
    name: "Respira",
    style: "Pranayama + Meditación",
    category: "Respiración",
    level: "Principiante",
    duration: 15,
    goal: "Cultivar respiración consciente",
    description: "Práctica tranquila de respiración y presencia.",
    tags: ["respiración","meditación","calma"],
    poses: moonieSequence([
      ["sukhasana",150],
      ["vajrasana",90],
      ["sukhasana",180],
      ["balasana",120],
      ["butterfly",120],
      ["legsWall",120],
      ["savasana",180]
    ])
  }),

  moonieRoutine({
    id: "restaurativo-20",
    name: "Restaurativo 20",
    style: "Restaurativo",
    category: "Descanso",
    level: "Principiante",
    duration: 20,
    goal: "Descansar",
    description: "Práctica de bajo esfuerzo con posturas sostenidas y cómodas.",
    tags: ["restaurativo","descanso","suave"],
    poses: moonieSequence([
      ["suptaButterfly",180],
      ["bridgeSupported",150],
      ["legsWall",240],
      ["balasana",120],
      ["twistL",90],
      ["twistR",90],
      ["savasana",240]
    ])
  }),

  moonieRoutine({
    id: "mini-nidra",
    name: "Mini Nidra",
    style: "Yoga Nidra",
    category: "Relajación",
    level: "Principiante",
    duration: 15,
    goal: "Relajación profunda",
    description: "Práctica breve de descanso consciente.",
    tags: ["nidra","relajación","descanso"],
    poses: moonieSequence([
      ["savasana",300],
      ["legsWall",240],
      ["savasana",360]
    ])
  }),

  moonieRoutine({
    id: "luna-llena",
    name: "Luna Llena",
    style: "Vinyasa suave + Yin",
    category: "Lunar",
    level: "Principiante",
    duration: 30,
    goal: "Soltar y reflexionar",
    description: "Práctica simbólica para cerrar ciclos y crear espacio.",
    tags: ["luna","ritual","yin"],
    lunar: true,
    poses: moonieSequence([
      ["sukhasana",90],
      ["catCow",90],
      ["adhoMukha",90],
      ["warrior2L",90],
      ["warrior2R",90],
      ["butterfly",210],
      ["dragonL",150],
      ["dragonR",150],
      ["twistL",120],
      ["twistR",120],
      ["legsWall",180],
      ["savasana",240]
    ])
  }),

  moonieRoutine({
    id: "luna-nueva",
    name: "Luna Nueva",
    style: "Yin + Meditación",
    category: "Lunar",
    level: "Principiante",
    duration: 30,
    goal: "Introspección",
    description: "Una práctica lenta orientada a la quietud y la intención personal.",
    tags: ["luna","intención","yin"],
    lunar: true,
    poses: moonieSequence([
      ["sukhasana",150],
      ["butterfly",240],
      ["caterpillar",240],
      ["deerL",150],
      ["deerR",150],
      ["twistL",120],
      ["twistR",120],
      ["legsWall",210],
      ["savasana",300]
    ])
  }),

  moonieRoutine({
    id: "despues-del-trabajo",
    name: "Después del Trabajo",
    style: "Movilidad + Yin",
    category: "Tarde",
    level: "Principiante",
    duration: 30,
    goal: "Liberar tensión",
    description: "Ideal para desconectar después de muchas horas de actividad.",
    tags: ["trabajo","tarde","tensión"],
    poses: moonieSequence([
      ["catCow",90],
      ["balasana",120],
      ["caterpillar",210],
      ["butterfly",180],
      ["dragonL",150],
      ["dragonR",150],
      ["sleepingSwanL",210],
      ["sleepingSwanR",210],
      ["deerL",150],
      ["deerR",150],
      ["legsWall",210],
      ["savasana",240]
    ])
  }),

  moonieRoutine({
    id: "fire-flow",
    name: "Fire Flow",
    style: "Vinyasa",
    category: "Energía",
    level: "Intermedio",
    duration: 30,
    goal: "Activar y fortalecer",
    description: "Flow dinámico con trabajo de piernas y core.",
    tags: ["vinyasa","fuerza","energía"],
    poses: moonieSequence([
      ["tadasana",45],
      ["chair",60],
      ["plank",45],
      ["chaturanga",30],
      ["adhoMukha",60],
      ["warrior1L",75],
      ["warrior2L",75],
      ["triangleL",75],
      ["warrior1R",75],
      ["warrior2R",75],
      ["triangleR",75],
      ["boat",75],
      ["sidePlankL",60],
      ["sidePlankR",60],
      ["bridge",90],
      ["balasana",90],
      ["savasana",150]
    ])
  }),

  moonieRoutine({
    id: "hatha-fundamental",
    name: "Hatha Fundamental",
    style: "Hatha",
    category: "Fundamentos",
    level: "Principiante",
    duration: 30,
    goal: "Aprender fundamentos",
    description: "Introducción a posturas fundamentales y respiración consciente.",
    tags: ["hatha","principiantes","fundamentos"],
    poses: moonieSequence([
      ["sukhasana",90],
      ["catCow",90],
      ["tadasana",60],
      ["uttanasana",90],
      ["adhoMukha",90],
      ["warrior1L",90],
      ["warrior1R",90],
      ["warrior2L",90],
      ["warrior2R",90],
      ["treeL",60],
      ["treeR",60],
      ["balasana",90],
      ["savasana",180]
    ])
  }),

  moonieRoutine({
    id: "hatha-completo",
    name: "Hatha Completo",
    style: "Hatha",
    category: "Completo",
    level: "Intermedio",
    duration: 45,
    goal: "Practicar cuerpo completo",
    description: "Sesión completa con movilidad, fuerza, equilibrio, extensión y relajación.",
    tags: ["hatha","completo"],
    poses: moonieSequence([
      ["sukhasana",90],
      ["catCow",90],
      ["tadasana",60],
      ["uttanasana",90],
      ["adhoMukha",90],
      ["warrior1L",90],
      ["warrior1R",90],
      ["warrior2L",90],
      ["warrior2R",90],
      ["triangleL",90],
      ["triangleR",90],
      ["treeL",60],
      ["treeR",60],
      ["boatPrep",90],
      ["bridge",90],
      ["cobra",60],
      ["balasana",120],
      ["twistL",90],
      ["twistR",90],
      ["savasana",240]
    ])
  }),

  moonieRoutine({
    id: "yin-profundo",
    name: "Yin Profundo",
    style: "Yin",
    category: "Yin",
    level: "Intermedio",
    duration: 45,
    goal: "Profundizar en la práctica Yin",
    description: "Secuencia lenta para explorar sensaciones sin buscar dolor ni máxima amplitud.",
    tags: ["yin","profundo","lento"],
    poses: moonieSequence([
      ["butterfly",300],
      ["halfButterflyL",240],
      ["halfButterflyR",240],
      ["dragonfly",300],
      ["dragonL",240],
      ["dragonR",240],
      ["sleepingSwanL",300],
      ["sleepingSwanR",300],
      ["deerL",240],
      ["deerR",240],
      ["caterpillar",300],
      ["savasana",360]
    ])
  }),

  moonieRoutine({
    id: "full-body-mobility",
    name: "Full Body Mobility",
    style: "Movilidad",
    category: "Movilidad",
    level: "Todos",
    duration: 30,
    goal: "Mover todo el cuerpo",
    description: "Movilidad general de columna, hombros, caderas y piernas.",
    tags: ["movilidad","full body"],
    poses: moonieSequence([
      ["catCow",120],
      ["balasanaWide",90],
      ["anahatasana",120],
      ["adhoMukha",120],
      ["lowLungeL",120],
      ["lowLungeR",120],
      ["halfSplitL",120],
      ["halfSplitR",120],
      ["twistL",120],
      ["twistR",120],
      ["happyBaby",150],
      ["savasana",180]
    ])
  }),

  moonieRoutine({
    id: "legs-glutes",
    name: "Legs & Glutes",
    style: "Yoga + Fuerza",
    category: "Fuerza",
    level: "Intermedio",
    duration: 30,
    goal: "Fortalecer piernas",
    description: "Trabajo de piernas y glúteos combinado con movilidad.",
    tags: ["piernas","glúteos","fuerza"],
    poses: moonieSequence([
      ["tadasana",45],
      ["chair",90],
      ["warrior1L",90],
      ["warrior1R",90],
      ["warrior2L",90],
      ["warrior2R",90],
      ["bridge",120],
      ["boatPrep",90],
      ["treeL",90],
      ["treeR",90],
      ["malasana",90],
      ["savasana",150]
    ])
  }),

  moonieRoutine({
    id: "core-power",
    name: "Core Power",
    style: "Yoga + Fuerza",
    category: "Core",
    level: "Intermedio",
    duration: 25,
    goal: "Fortalecer el centro",
    description: "Trabajo progresivo de abdomen, espalda y estabilidad.",
    tags: ["core","fuerza"],
    poses: moonieSequence([
      ["catCow",60],
      ["plank",75],
      ["chaturanga",45],
      ["boatPrep",90],
      ["boat",60],
      ["sidePlankL",60],
      ["sidePlankR",60],
      ["bridge",90],
      ["locust",75],
      ["balasana",90],
      ["savasana",150]
    ])
  }),

  moonieRoutine({
    id: "balance",
    name: "Balance",
    style: "Hatha",
    category: "Equilibrio",
    level: "Intermedio",
    duration: 30,
    goal: "Equilibrio y concentración",
    description: "Práctica centrada en estabilidad, propiocepción y atención.",
    tags: ["equilibrio","concentración"],
    poses: moonieSequence([
      ["tadasana",60],
      ["treeL",90],
      ["treeR",90],
      ["warrior3L",90],
      ["warrior3R",90],
      ["warrior2L",90],
      ["warrior2R",90],
      ["sidePlankL",60],
      ["sidePlankR",60],
      ["savasana",150]
    ])
  }),

  moonieRoutine({
    id: "hombros-abiertos",
    name: "Hombros Abiertos",
    style: "Movilidad + Hatha",
    category: "Hombros",
    level: "Principiante",
    duration: 25,
    goal: "Movilizar hombros",
    description: "Práctica suave para recuperar movilidad y espacio en la cintura escapular.",
    tags: ["hombros","pecho","movilidad"],
    poses: moonieSequence([
      ["sukhasana",60],
      ["catCow",90],
      ["anahatasana",150],
      ["adhoMukha",90],
      ["dolphin",90],
      ["cobra",60],
      ["balasana",120],
      ["fishSupported",180],
      ["savasana",180]
    ])
  }),

  moonieRoutine({
    id: "columna-fluida",
    name: "Columna Fluida",
    style: "Movilidad",
    category: "Columna",
    level: "Principiante",
    duration: 30,
    goal: "Movilizar la columna",
    description: "Secuencia progresiva de flexión, extensión, rotación y movilidad.",
    tags: ["columna","movilidad"],
    poses: moonieSequence([
      ["catCow",120],
      ["balasana",120],
      ["sphinx",150],
      ["cobra",75],
      ["anahatasana",150],
      ["caterpillar",180],
      ["twistL",120],
      ["twistR",120],
      ["bridge",90],
      ["fishSupported",180],
      ["savasana",210]
    ])
  }),

  moonieRoutine({
    id: "apertura-caderas",
    name: "Apertura de Caderas",
    style: "Yin + Hatha",
    category: "Caderas",
    level: "Intermedio",
    duration: 40,
    goal: "Movilidad de caderas",
    description: "Combinación de movimiento activo y permanencias Yin.",
    tags: ["caderas","yin","movilidad"],
    poses: moonieSequence([
      ["catCow",90],
      ["lowLungeL",120],
      ["lowLungeR",120],
      ["lizardL",150],
      ["lizardR",150],
      ["dragonL",210],
      ["dragonR",210],
      ["deerL",210],
      ["deerR",210],
      ["sleepingSwanL",240],
      ["sleepingSwanR",240],
      ["butterfly",210],
      ["savasana",240]
    ])
  }),

  moonieRoutine({
    id: "restaurativo-profundo",
    name: "Restaurativo Profundo",
    style: "Restaurativo",
    category: "Descanso",
    level: "Principiante",
    duration: 45,
    goal: "Descansar profundamente",
    description: "Práctica muy suave basada en soporte, respiración y quietud.",
    tags: ["restaurativo","descanso"],
    poses: moonieSequence([
      ["suptaButterfly",240],
      ["bridgeSupported",210],
      ["legsWall",360],
      ["fishSupported",240],
      ["balasana",180],
      ["twistL",150],
      ["twistR",150],
      ["savasana",360]
    ])
  }),

  moonieRoutine({
    id: "yoga-nidra-viaje",
    name: "Yoga Nidra — Viaje Interior",
    style: "Yoga Nidra",
    category: "Nidra",
    level: "Principiante",
    duration: 30,
    goal: "Relajación profunda",
    description: "Práctica de quietud, atención corporal y descanso consciente.",
    tags: ["nidra","relajación"],
    poses: moonieSequence([
      ["savasana",420],
      ["legsWall",300],
      ["savasana",720]
    ])
  }),

  moonieRoutine({
    id: "pranayama-calma",
    name: "Pranayama — Calma",
    style: "Pranayama",
    category: "Respiración",
    level: "Principiante",
    duration: 20,
    goal: "Cultivar calma",
    description: "Práctica centrada en respiración nasal lenta y consciente.",
    tags: ["pranayama","calma"],
    poses: moonieSequence([
      ["sukhasana",180],
      ["vajrasana",120],
      ["sukhasana",300],
      ["balasana",150],
      ["legsWall",240],
      ["savasana",210]
    ])
  }),

  moonieRoutine({
    id: "sleep-ritual",
    name: "Sleep Ritual",
    style: "Yin + Restaurativo",
    category: "Noche",
    level: "Principiante",
    duration: 45,
    goal: "Prepararse para dormir",
    description: "Ritual nocturno lento y silencioso.",
    tags: ["sueño","noche","yin"],
    poses: moonieSequence([
      ["balasana",210],
      ["butterfly",270],
      ["caterpillar",270],
      ["sleepingSwanL",210],
      ["sleepingSwanR",210],
      ["deerL",150],
      ["deerR",150],
      ["twistL",150],
      ["twistR",150],
      ["legsWall",270],
      ["savasana",360]
    ])
  }),

  moonieRoutine({
    id: "amanecer-consciente",
    name: "Amanecer Consciente",
    style: "Hatha + Pranayama",
    category: "Mañana",
    level: "Principiante",
    duration: 20,
    goal: "Despertar conscientemente",
    description: "Una mañana tranquila combinando movimiento y respiración.",
    tags: ["mañana","respiración"],
    poses: moonieSequence([
      ["sukhasana",90],
      ["catCow",90],
      ["tadasana",60],
      ["uttanasana",90],
      ["adhoMukha",90],
      ["lowLungeL",90],
      ["lowLungeR",90],
      ["warrior1L",75],
      ["warrior1R",75],
      ["balasana",90],
      ["savasana",150]
    ])
  }),

  moonieRoutine({
    id: "despertar-fuego",
    name: "Despertar el Fuego",
    style: "Vinyasa suave",
    category: "Mañana",
    level: "Intermedio",
    duration: 25,
    goal: "Activar",
    description: "Flow progresivo para aumentar movimiento y atención.",
    tags: ["mañana","energía","flow"],
    poses: moonieSequence([
      ["tadasana",45],
      ["chair",60],
      ["adhoMukha",90],
      ["warrior1L",90],
      ["warrior1R",90],
      ["warrior2L",90],
      ["warrior2R",90],
      ["plank",45],
      ["cobra",45],
      ["boatPrep",90],
      ["bridge",90],
      ["savasana",150]
    ])
  }),

  moonieRoutine({
    id: "movilidad-matutina",
    name: "Movilidad Matutina",
    style: "Movilidad + Hatha",
    category: "Mañana",
    level: "Principiante",
    duration: 15,
    goal: "Desbloquear el cuerpo",
    description: "Rutina corta para empezar el día movilizando articulaciones y columna.",
    tags: ["mañana","movilidad"],
    poses: moonieSequence([
      ["catCow",90],
      ["balasanaWide",60],
      ["adhoMukha",90],
      ["lowLungeL",75],
      ["lowLungeR",75],
      ["uttanasana",75],
      ["tadasana",45],
      ["savasana",90]
    ])
  }),

  moonieRoutine({
    id: "saludo-al-sol",
    name: "Saludo al Sol",
    style: "Vinyasa",
    category: "Flujo",
    level: "Principiante",
    duration: 20,
    goal: "Activar todo el cuerpo",
    description: "Práctica basada en variaciones suaves del Surya Namaskar.",
    tags: ["surya namaskar","flow","mañana"],
    poses: moonieSequence([
      ["tadasana",45],
      ["uttanasana",60],
      ["plank",45],
      ["cobra",45],
      ["adhoMukha",75],
      ["uttanasana",60],
      ["tadasana",45],
      ["warrior1L",75],
      ["warrior1R",75],
      ["adhoMukha",75],
      ["plank",45],
      ["cobra",45],
      ["adhoMukha",75],
      ["balasana",90],
      ["savasana",120]
    ])
  }),

  moonieRoutine({
    id: "morning-power",
    name: "Morning Power",
    style: "Vinyasa",
    category: "Energía",
    level: "Intermedio",
    duration: 35,
    goal: "Fortalecer y activar",
    description: "Flow más intenso para una mañana energética.",
    tags: ["mañana","fuerza","vinyasa"],
    poses: moonieSequence([
      ["tadasana",45],
      ["chair",75],
      ["plank",45],
      ["chaturanga",30],
      ["adhoMukha",75],
      ["warrior1L",90],
      ["warrior2L",90],
      ["triangleL",90],
      ["warrior1R",90],
      ["warrior2R",90],
      ["triangleR",90],
      ["boat",90],
      ["sidePlankL",60],
      ["sidePlankR",60],
      ["bridge",90],
      ["balasana",120],
      ["savasana",210]
    ])
  }),

  moonieRoutine({
    id: "yin-espalda",
    name: "Yin para la Espalda",
    style: "Yin",
    category: "Espalda",
    level: "Principiante",
    duration: 35,
    goal: "Liberar tensión",
    description: "Secuencia Yin centrada en movilidad suave y descanso de la espalda.",
    tags: ["yin","espalda"],
    poses: moonieSequence([
      ["balasana",210],
      ["sphinx",270],
      ["anahatasana",210],
      ["caterpillar",270],
      ["twistL",150],
      ["twistR",150],
      ["deerL",210],
      ["deerR",210],
      ["legsWall",240],
      ["savasana",300]
    ])
  }),

  moonieRoutine({
    id: "yin-isquiotibiales",
    name: "Yin para Isquiotibiales",
    style: "Yin",
    category: "Piernas",
    level: "Principiante",
    duration: 40,
    goal: "Explorar movilidad posterior",
    description: "Práctica lenta para explorar la cadena posterior sin forzar.",
    tags: ["yin","isquiotibiales"],
    poses: moonieSequence([
      ["sukhasana",60],
      ["halfButterflyL",270],
      ["halfButterflyR",270],
      ["caterpillar",330],
      ["dragonfly",300],
      ["halfSplitL",210],
      ["halfSplitR",210],
      ["happyBaby",210],
      ["savasana",330]
    ])
  }),

  moonieRoutine({
    id: "yin-aductores",
    name: "Yin para Aductores",
    style: "Yin",
    category: "Aductores",
    level: "Principiante",
    duration: 35,
    goal: "Explorar apertura de piernas",
    description: "Trabajo lento de la cara interna de las piernas.",
    tags: ["yin","aductores"],
    poses: moonieSequence([
      ["butterfly",270],
      ["dragonfly",330],
      ["halfButterflyL",210],
      ["halfButterflyR",210],
      ["balasanaWide",270],
      ["wideForward",210],
      ["caterpillar",270],
      ["savasana",330]
    ])
  }),

  moonieRoutine({
    id: "yin-todo-cuerpo",
    name: "Yin para Todo el Cuerpo",
    style: "Yin",
    category: "Yin",
    level: "Intermedio",
    duration: 60,
    goal: "Practicar todo el cuerpo",
    description: "Sesión larga y pausada para explorar diferentes familias de posturas Yin.",
    tags: ["yin","full body","60 min"],
    poses: moonieSequence([
      ["butterfly",330],
      ["halfButterflyL",270],
      ["halfButterflyR",270],
      ["dragonL",270],
      ["dragonR",270],
      ["dragonfly",330],
      ["sleepingSwanL",330],
      ["sleepingSwanR",330],
      ["deerL",270],
      ["deerR",270],
      ["caterpillar",330],
      ["twistL",210],
      ["twistR",210],
      ["legsWall",330],
      ["savasana",420]
    ])
  }),

  moonieRoutine({
    id: "warrior-flow",
    name: "Warrior Flow",
    style: "Hatha / Vinyasa",
    category: "Fuerza",
    level: "Intermedio",
    duration: 30,
    goal: "Fortalecer piernas y estabilidad",
    description: "Flow inspirado en las familias de guerreros.",
    tags: ["guerreros","piernas","fuerza"],
    poses: moonieSequence([
      ["tadasana",45],
      ["warrior1L",90],
      ["warrior2L",90],
      ["triangleL",90],
      ["warrior1R",90],
      ["warrior2R",90],
      ["triangleR",90],
      ["chair",90],
      ["treeL",90],
      ["treeR",90],
      ["savasana",180]
    ])
  }),

  moonieRoutine({
    id: "slow-vinyasa",
    name: "Slow Vinyasa",
    style: "Vinyasa lento",
    category: "Flujo",
    level: "Principiante",
    duration: 30,
    goal: "Moverse con atención",
    description: "Vinyasa lento con transiciones sencillas y respiración consciente.",
    tags: ["slow flow","vinyasa","suave"],
    poses: moonieSequence([
      ["sukhasana",90],
      ["catCow",90],
      ["adhoMukha",90],
      ["uttanasana",90],
      ["tadasana",60],
      ["warrior1L",90],
      ["warrior1R",90],
      ["warrior2L",90],
      ["warrior2R",90],
      ["balasana",120],
      ["savasana",210]
    ])
  }),

  moonieRoutine({
    id: "twist-release",
    name: "Twist & Release",
    style: "Vinyasa",
    category: "Movilidad",
    level: "Intermedio",
    duration: 30,
    goal: "Movilizar columna",
    description: "Secuencia de rotaciones progresivas y movimientos fluidos.",
    tags: ["torsiones","columna","movilidad"],
    poses: moonieSequence([
      ["catCow",90],
      ["adhoMukha",90],
      ["lowLungeL",90],
      ["lowLungeR",90],
      ["twistL",120],
      ["twistR",120],
      ["deerL",150],
      ["deerR",150],
      ["savasana",180]
    ])
  }),

  moonieRoutine({
    id: "heart-opening",
    name: "Heart Opening",
    style: "Hatha + Vinyasa",
    category: "Pecho",
    level: "Intermedio",
    duration: 30,
    goal: "Movilizar pecho y hombros",
    description: "Práctica progresiva de extensión torácica y apertura anterior.",
    tags: ["pecho","hombros","extensión"],
    poses: moonieSequence([
      ["catCow",90],
      ["anahatasana",150],
      ["sphinx",150],
      ["cobra",75],
      ["bridge",120],
      ["fishSupported",180],
      ["balasana",120],
      ["savasana",180]
    ])
  }),

  moonieRoutine({
    id: "equilibrio-focus",
    name: "Equilibrio & Focus",
    style: "Hatha",
    category: "Equilibrio",
    level: "Intermedio",
    duration: 30,
    goal: "Mejorar concentración",
    description: "Secuencia de equilibrio y atención.",
    tags: ["equilibrio","focus","concentración"],
    poses: moonieSequence([
      ["tadasana",60],
      ["treeL",90],
      ["treeR",90],
      ["warrior3L",90],
      ["warrior3R",90],
      ["sidePlankL",60],
      ["sidePlankR",60],
      ["savasana",150]
    ])
  }),

  moonieRoutine({
    id: "evening-moon-flow",
    name: "Evening Moon Flow",
    style: "Vinyasa suave + Yin",
    category: "Noche",
    level: "Principiante",
    duration: 35,
    goal: "Desacelerar",
    description: "Flow lunar lento para pasar del movimiento a la quietud.",
    tags: ["noche","luna","yin"],
    lunar: true,
    poses: moonieSequence([
      ["sukhasana",90],
      ["catCow",90],
      ["adhoMukha",90],
      ["lowLungeL",90],
      ["lowLungeR",90],
      ["butterfly",240],
      ["dragonL",180],
      ["dragonR",180],
      ["twistL",120],
      ["twistR",120],
      ["legsWall",210],
      ["savasana",300]
    ])
  }),

  moonieRoutine({
    id: "yin-completo",
    name: "Yin Completo",
    style: "Yin",
    category: "Yin",
    level: "Intermedio",
    duration: 60,
    goal: "Práctica Yin completa",
    description: "Sesión larga para trabajar diferentes regiones del cuerpo con calma.",
    tags: ["yin","completo","60 min"],
    poses: moonieSequence([
      ["butterfly",330],
      ["halfButterflyL",270],
      ["halfButterflyR",270],
      ["dragonfly",330],
      ["dragonL",270],
      ["dragonR",270],
      ["sleepingSwanL",330],
      ["sleepingSwanR",330],
      ["deerL",270],
      ["deerR",270],
      ["caterpillar",330],
      ["twistL",210],
      ["twistR",210],
      ["legsWall",330],
      ["savasana",420]
    ])
  }),

  moonieRoutine({
    id: "hatha-tradicional",
    name: "Hatha Tradicional",
    style: "Hatha",
    category: "Tradicional",
    level: "Intermedio",
    duration: 60,
    goal: "Práctica integral",
    description: "Sesión extensa inspirada en la estructura clásica de una práctica de Hatha.",
    tags: ["hatha","tradicional","60 min"],
    poses: moonieSequence([
      ["sukhasana",120],
      ["catCow",90],
      ["tadasana",75],
      ["uttanasana",90],
      ["adhoMukha",105],
      ["warrior1L",120],
      ["warrior1R",120],
      ["warrior2L",120],
      ["warrior2R",120],
      ["triangleL",120],
      ["triangleR",120],
      ["treeL",90],
      ["treeR",90],
      ["cobra",90],
      ["bridge",120],
      ["boatPrep",90],
      ["twistL",120],
      ["twistR",120],
      ["balasana",150],
      ["savasana",360]
    ])
  }),

  moonieRoutine({
    id: "power-vinyasa",
    name: "Power Vinyasa",
    style: "Vinyasa",
    category: "Energía",
    level: "Avanzado",
    duration: 60,
    goal: "Fuerza y resistencia",
    description: "Práctica dinámica para personas con experiencia.",
    tags: ["power","vinyasa","avanzado"],
    poses: moonieSequence([
      ["tadasana",45],
      ["chair",75],
      ["plank",60],
      ["chaturanga",45],
      ["adhoMukha",90],
      ["warrior1L",105],
      ["warrior2L",105],
      ["triangleL",105],
      ["warrior1R",105],
      ["warrior2R",105],
      ["triangleR",105],
      ["boat",90],
      ["sidePlankL",75],
      ["sidePlankR",75],
      ["dolphin",90],
      ["bridge",120],
      ["cobra",75],
      ["balasana",150],
      ["savasana",300]
    ])
  }),

  moonieRoutine({
    id: "full-body-yoga",
    name: "Full Body Yoga",
    style: "Hatha + Vinyasa",
    category: "Cuerpo completo",
    level: "Intermedio",
    duration: 50,
    goal: "Trabajar todo el cuerpo",
    description: "Secuencia equilibrada de movilidad, fuerza, equilibrio y descanso.",
    tags: ["full body","hatha","vinyasa"],
    poses: moonieSequence([
      ["sukhasana",90],
      ["catCow",90],
      ["adhoMukha",90],
      ["warrior1L",90],
      ["warrior1R",90],
      ["warrior2L",90],
      ["warrior2R",90],
      ["triangleL",90],
      ["triangleR",90],
      ["treeL",75],
      ["treeR",75],
      ["boatPrep",90],
      ["bridge",90],
      ["twistL",120],
      ["twistR",120],
      ["balasana",150],
      ["legsWall",210],
      ["savasana",300]
    ])
  }),

  moonieRoutine({
    id: "flexibilidad-profunda",
    name: "Flexibilidad Profunda",
    style: "Hatha + Yin",
    category: "Flexibilidad",
    level: "Intermedio",
    duration: 60,
    goal: "Explorar movilidad",
    description: "Práctica extensa para explorar diferentes rangos de movimiento con control.",
    tags: ["flexibilidad","yin","hatha"],
    poses: moonieSequence([
      ["catCow",90],
      ["adhoMukha",90],
      ["lowLungeL",150],
      ["lowLungeR",150],
      ["halfSplitL",210],
      ["halfSplitR",210],
      ["dragonfly",270],
      ["halfButterflyL",210],
      ["halfButterflyR",210],
      ["sleepingSwanL",270],
      ["sleepingSwanR",270],
      ["caterpillar",300],
      ["butterfly",270],
      ["legsWall",300],
      ["savasana",360]
    ])
  }),

  moonieRoutine({
    id: "yoga-strength",
    name: "Yoga Strength",
    style: "Yoga + Fuerza",
    category: "Fuerza",
    level: "Intermedio",
    duration: 45,
    goal: "Fortalecer todo el cuerpo",
    description: "Entrenamiento de fuerza basado en patrones de movimiento del yoga.",
    tags: ["fuerza","core","yoga"],
    poses: moonieSequence([
      ["tadasana",45],
      ["chair",90],
      ["plank",75],
      ["chaturanga",45],
      ["warrior1L",90],
      ["warrior1R",90],
      ["warrior2L",90],
      ["warrior2R",90],
      ["boat",90],
      ["sidePlankL",60],
      ["sidePlankR",60],
      ["dolphin",90],
      ["bridge",90],
      ["locust",90],
      ["balasana",120],
      ["savasana",210]
    ])
  }),

  moonieRoutine({
    id: "yoga-bailarines",
    name: "Yoga para Bailarines",
    style: "Movilidad + Fuerza",
    category: "Danza",
    level: "Intermedio",
    duration: 50,
    goal: "Movilidad, estabilidad y control",
    description: "Práctica inspirada en las necesidades de bailarines.",
    tags: ["danza","bailarines","movilidad"],
    poses: moonieSequence([
      ["tadasana",60],
      ["catCow",90],
      ["adhoMukha",90],
      ["lowLungeL",120],
      ["lowLungeR",120],
      ["halfSplitL",150],
      ["halfSplitR",150],
      ["warrior2L",105],
      ["warrior2R",105],
      ["treeL",90],
      ["treeR",90],
      ["warrior3L",90],
      ["warrior3R",90],
      ["bridge",120],
      ["boatPrep",90],
      ["caterpillar",210],
      ["savasana",270]
    ])
  }),

  moonieRoutine({
    id: "recuperacion-post-entreno",
    name: "Recuperación Post-Entrenamiento",
    style: "Restaurativo",
    category: "Recuperación",
    level: "Principiante",
    duration: 45,
    goal: "Recuperar",
    description: "Secuencia suave para volver progresivamente a la calma.",
    tags: ["recuperación","post-entreno","restaurativo"],
    poses: moonieSequence([
      ["balasana",210],
      ["butterfly",270],
      ["halfButterflyL",210],
      ["halfButterflyR",210],
      ["happyBaby",210],
      ["twistL",150],
      ["twistR",150],
      ["legsWall",300],
      ["savasana",360]
    ])
  }),

  moonieRoutine({
    id: "yin-nocturno-profundo",
    name: "Yin Nocturno Profundo",
    style: "Yin",
    category: "Noche",
    level: "Intermedio",
    duration: 60,
    goal: "Desacelerar profundamente",
    description: "Una práctica nocturna larga basada en quietud y comodidad.",
    tags: ["yin","noche","sueño"],
    poses: moonieSequence([
      ["balasana",270],
      ["butterfly",330],
      ["caterpillar",330],
      ["dragonL",270],
      ["dragonR",270],
      ["sleepingSwanL",330],
      ["sleepingSwanR",330],
      ["deerL",270],
      ["deerR",270],
      ["twistL",210],
      ["twistR",210],
      ["legsWall",330],
      ["savasana",420]
    ])
  }),

  moonieRoutine({
    id: "restaurativo-completo",
    name: "Restaurativo Completo",
    style: "Restaurativo",
    category: "Descanso",
    level: "Principiante",
    duration: 60,
    goal: "Descanso profundo",
    description: "Práctica larga de soporte, quietud y respiración natural.",
    tags: ["restaurativo","descanso","60 min"],
    poses: moonieSequence([
      ["suptaButterfly",330],
      ["bridgeSupported",270],
      ["fishSupported",330],
      ["balasana",270],
      ["twistL",210],
      ["twistR",210],
      ["legsWall",420],
      ["savasana",510]
    ])
  }),

  moonieRoutine({
    id: "nidra-profundo",
    name: "Yoga Nidra Profundo",
    style: "Yoga Nidra",
    category: "Nidra",
    level: "Principiante",
    duration: 45,
    goal: "Relajación profunda",
    description: "Sesión extensa de descanso consciente.",
    tags: ["nidra","relajación","45 min"],
    poses: moonieSequence([
      ["savasana",600],
      ["legsWall",360],
      ["savasana",840]
    ])
  }),

  moonieRoutine({
    id: "pranayama-meditacion",
    name: "Pranayama & Meditación",
    style: "Pranayama + Meditación",
    category: "Respiración",
    level: "Principiante",
    duration: 45,
    goal: "Cultivar presencia",
    description: "Práctica larga de respiración consciente, quietud y meditación.",
    tags: ["pranayama","meditación","45 min"],
    poses: moonieSequence([
      ["sukhasana",240],
      ["vajrasana",180],
      ["sukhasana",480],
      ["balasana",180],
      ["legsWall",300],
      ["savasana",720]
    ])
  }),

  moonieRoutine({
    id: "postura-alineacion",
    name: "Postura & Alineación",
    style: "Hatha",
    category: "Técnica",
    level: "Intermedio",
    duration: 45,
    goal: "Mejorar conciencia corporal",
    description: "Práctica técnica para explorar alineación y estabilidad.",
    tags: ["alineación","técnica","hatha"],
    poses: moonieSequence([
      ["tadasana",90],
      ["uttanasana",90],
      ["adhoMukha",120],
      ["warrior1L",120],
      ["warrior1R",120],
      ["warrior2L",120],
      ["warrior2R",120],
      ["triangleL",120],
      ["triangleR",120],
      ["treeL",90],
      ["treeR",90],
      ["plank",60],
      ["bridge",90],
      ["savasana",210]
    ])
  }),

  moonieRoutine({
    id: "luna-llena-liberacion",
    name: "Luna Llena — Ritual de Liberación",
    style: "Yin + Vinyasa suave",
    category: "Lunar",
    level: "Intermedio",
    duration: 50,
    goal: "Soltar",
    description: "Práctica simbólica de movimiento, pausa y reflexión.",
    tags: ["luna llena","ritual","liberación"],
    lunar: true,
    poses: moonieSequence([
      ["sukhasana",120],
      ["catCow",90],
      ["adhoMukha",90],
      ["warrior2L",90],
      ["warrior2R",90],
      ["dragonL",210],
      ["dragonR",210],
      ["sleepingSwanL",270],
      ["sleepingSwanR",270],
      ["caterpillar",270],
      ["twistL",150],
      ["twistR",150],
      ["legsWall",240],
      ["savasana",360]
    ])
  }),

  moonieRoutine({
    id: "luna-nueva-intencion",
    name: "Luna Nueva — Intención",
    style: "Yin + Meditación",
    category: "Lunar",
    level: "Principiante",
    duration: 50,
    goal: "Introspección e intención",
    description: "Una práctica silenciosa para observar, descansar y establecer una intención personal.",
    tags: ["luna nueva","intención","meditación"],
    lunar: true,
    poses: moonieSequence([
      ["sukhasana",180],
      ["butterfly",300],
      ["halfButterflyL",240],
      ["halfButterflyR",240],
      ["deerL",240],
      ["deerR",240],
      ["caterpillar",300],
      ["twistL",150],
      ["twistR",150],
      ["legsWall",300],
      ["savasana",480]
    ])
  })

];


/* ============================================================
   🌙 COMPROBACIÓN FINAL
   ============================================================ */

window.MOONIE_ROUTINES = MOONIE_ROUTINES;
window.MOONIE_POSES = MOONIE_POSES;

console.log(
  `🌙 Moonie Yoga cargado correctamente: ${MOONIE_ROUTINES.length} rutinas`
);

if (MOONIE_ROUTINES.length !== 60) {
  console.warn(
    `⚠️ Atención: se esperaban 60 rutinas y hay ${MOONIE_ROUTINES.length}.`
  );
  }
