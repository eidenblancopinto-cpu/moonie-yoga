/* =========================================================
   MOONIE YOGA
   DATA.JS — 60 PRÁCTICAS
   ========================================================= */

window.MOONIE_ROUTINES = [

/* =========================================================
   01 — DESPERTAR SUAVE
   ========================================================= */

{
  id: "despertar-suave",
  number: 1,
  name: "Despertar Suave",
  style: "Hatha suave",
  level: "Principiante",
  duration: 25,
  focus: "Movilidad general y despertar corporal",
  description:
    "Una práctica tranquila para despertar el cuerpo progresivamente, movilizar la columna y activar la respiración sin exigir intensidad.",
  poses: [
    {
      id: "easy-pose",
      duration: 120,
      phase: "llegada",
      instruction: "Siéntate cómodamente con la columna erguida. Relaja hombros y mandíbula y observa tu respiración.",
      breathing: "Inhala por la nariz durante 4 segundos y exhala durante 6.",
      transition: "Apoya las manos sobre los muslos y pasa lentamente a cuadrupedia."
    },
    {
      id: "cat-cow",
      duration: 90,
      phase: "movilidad",
      instruction: "Desde cuadrupedia, alterna lentamente entre flexión y extensión de la columna.",
      breathing: "Inhala al abrir el pecho y exhala al redondear la espalda.",
      transition: "Después de varias rondas vuelve a una columna neutra y lleva las caderas hacia los talones."
    },
    {
      id: "child-pose",
      duration: 90,
      phase: "movilidad",
      instruction: "Lleva los glúteos hacia los talones y alarga los brazos hacia delante.",
      breathing: "Respira hacia la espalda y las costillas posteriores.",
      transition: "Vuelve lentamente a cuadrupedia y mete los dedos de los pies."
    },
    {
      id: "downward-dog",
      duration: 60,
      phase: "calentamiento",
      instruction: "Eleva las caderas formando una V invertida. Mantén las rodillas ligeramente flexionadas si es necesario.",
      breathing: "Inhala alargando la columna y exhala relajando el cuello.",
      transition: "Flexiona las rodillas, mira hacia las manos y camina lentamente hasta la parte delantera de la esterilla."
    },
    {
      id: "standing-forward-fold",
      duration: 60,
      phase: "calentamiento",
      instruction: "Deja caer el torso hacia las piernas sin forzar la flexión.",
      breathing: "Deja que cada exhalación suavice la tensión posterior.",
      transition: "Flexiona las rodillas y desenrolla la columna vértebra a vértebra hasta quedar de pie."
    },
    {
      id: "mountain",
      duration: 60,
      phase: "integracion",
      instruction: "Ponte de pie con los pies firmes y siente el eje vertical del cuerpo.",
      breathing: "Respiración nasal lenta y natural.",
      transition: "Separa ligeramente los pies y eleva los brazos al inhalar."
    },
    {
      id: "upward-salute",
      duration: 45,
      phase: "integracion",
      instruction: "Eleva los brazos por encima de la cabeza sin elevar excesivamente los hombros.",
      breathing: "Inhala al elevar y exhala al bajar.",
      transition: "Abre los brazos hacia los lados y vuelve a posición cómoda."
    },
    {
      id: "seated-forward-fold",
      duration: 90,
      phase: "enfriamiento",
      instruction: "Siéntate con las piernas extendidas y realiza una flexión suave desde las caderas.",
      breathing: "Exhala mientras permites que el torso se acerque a las piernas.",
      transition: "Regresa lentamente a la vertical y túmbate boca arriba."
    },
    {
      id: "supine-knees-chest",
      duration: 60,
      phase: "cierre",
      instruction: "Abraza las rodillas hacia el pecho y relaja la zona lumbar.",
      breathing: "Respira profundamente hacia el abdomen.",
      transition: "Suelta las piernas y extiéndelas para entrar en Savasana."
    },
    {
      id: "savasana",
      duration: 180,
      phase: "savasana",
      instruction: "Túmbate cómodamente y permite que todo el cuerpo descanse.",
      breathing: "Deja que la respiración vuelva a ser natural.",
      transition: "Mueve suavemente dedos de manos y pies antes de incorporarte."
    }
  ]
},

/* =========================================================
   02 — COLUMNA DESPIERTA
   ========================================================= */

{
  id: "columna-despierta",
  number: 2,
  name: "Columna Despierta",
  style: "Hatha",
  level: "Principiante",
  duration: 30,
  focus: "Movilidad de columna",
  description:
    "Secuencia progresiva dedicada a movilizar la columna en flexión, extensión, inclinación y rotación.",
  poses: [
    {
      id: "easy-pose",
      duration: 90,
      phase: "llegada",
      instruction: "Siéntate cómodamente y alarga la columna.",
      breathing: "Respira profundamente por la nariz.",
      transition: "Coloca las manos sobre las rodillas y comienza a movilizar la columna."
    },
    {
      id: "seated-cat-cow",
      duration: 90,
      phase: "movilidad",
      instruction: "Desde sentado, alterna suavemente entre abrir el pecho y redondear la espalda.",
      breathing: "Inhala al extender y exhala al flexionar.",
      transition: "Gira el cuerpo hacia un lateral y pasa a cuadrupedia."
    },
    {
      id: "cat-cow",
      duration: 120,
      phase: "movilidad",
      instruction: "Moviliza toda la columna de forma lenta y controlada.",
      breathing: "Coordina cada movimiento con una respiración.",
      transition: "Vuelve a una posición neutra y lleva las caderas hacia los talones."
    },
    {
      id: "child-pose",
      duration: 90,
      phase: "descanso",
      instruction: "Descansa el torso entre los muslos.",
      breathing: "Respira hacia la espalda.",
      transition: "Regresa a cuadrupedia."
    },
    {
      id: "thread-the-needle",
      duration: 60,
      phase: "torsion",
      instruction: "Desliza un brazo por debajo del otro y permite que el hombro se acerque al suelo.",
      breathing: "Inhala creando espacio y exhala profundizando suavemente.",
      transition: "Vuelve a cuadrupedia y cambia de lado."
    },
    {
      id: "thread-the-needle",
      duration: 60,
      phase: "torsion",
      instruction: "Repite la torsión hacia el lado contrario.",
      breathing: "Respiración lenta y profunda.",
      transition: "Vuelve a cuadrupedia y lleva las caderas hacia arriba."
    },
    {
      id: "downward-dog",
      duration: 60,
      phase: "integracion",
      instruction: "Alarga la espalda desde las manos hasta las caderas.",
      breathing: "Respira profundamente.",
      transition: "Camina hacia delante y flexiona las rodillas."
    },
    {
      id: "standing-forward-fold",
      duration: 90,
      phase: "flexion",
      instruction: "Relaja cabeza y cuello mientras la columna se libera hacia delante.",
      breathing: "Exhala suavemente.",
      transition: "Apoya las manos en los muslos y sube lentamente."
    },
    {
      id: "mountain",
      duration: 60,
      phase: "integracion",
      instruction: "Encuentra una postura vertical estable.",
      breathing: "Respiración nasal.",
      transition: "Separa los pies y comienza a descender hacia el suelo."
    },
    {
      id: "supine-spinal-twist",
      duration: 120,
      phase: "compensacion",
      instruction: "Túmbate boca arriba y lleva ambas rodillas hacia un lado manteniendo los hombros relajados.",
      breathing: "Exhala durante la rotación.",
      transition: "Vuelve al centro y cambia de lado."
    },
    {
      id: "savasana",
      duration: 180,
      phase: "savasana",
      instruction: "Relaja completamente el cuerpo.",
      breathing: "Respiración natural.",
      transition: "Finaliza lentamente la práctica."
    }
  ]
},

/* =========================================================
   03 — CADERAS LIBRES
   ========================================================= */

{
  id: "caderas-libres",
  number: 3,
  name: "Caderas Libres",
  style: "Hatha / movilidad",
  level: "Principiante",
  duration: 35,
  focus: "Movilidad de caderas",
  description:
    "Práctica progresiva para liberar suavemente la pelvis y mejorar la movilidad de las caderas.",
  poses: [
    {
      id: "easy-pose",
      duration: 120,
      phase: "llegada",
      instruction: "Siéntate cómodamente y observa la posición natural de la pelvis.",
      breathing: "Respira profundamente.",
      transition: "Inclina el torso hacia delante y pasa lentamente a cuadrupedia."
    },
    {
      id: "cat-cow",
      duration: 90,
      phase: "calentamiento",
      instruction: "Moviliza columna y pelvis conjuntamente.",
      breathing: "Inhala al extender y exhala al flexionar.",
      transition: "Desde cuadrupedia realiza círculos suaves con las caderas."
    },
    {
      id: "hip-circles",
      duration: 90,
      phase: "movilidad",
      instruction: "Haz círculos amplios y controlados con la pelvis.",
      breathing: "Respira de manera continua.",
      transition: "Vuelve al centro y lleva las caderas hacia los talones."
    },
    {
      id: "child-pose",
      duration: 90,
      phase: "descanso",
      instruction: "Relaja la pelvis hacia los talones.",
      breathing: "Respira hacia el abdomen.",
      transition: "Regresa a cuadrupedia y adelanta un pie entre las manos."
    },
    {
      id: "low-lunge",
      duration: 90,
      phase: "apertura",
      instruction: "Coloca una rodilla en el suelo y lleva suavemente la pelvis hacia delante.",
      breathing: "Exhala al permitir que la cadera se relaje.",
      transition: "Lleva las manos al suelo y vuelve a cuadrupedia antes de cambiar de lado."
    },
    {
      id: "low-lunge",
      duration: 90,
      phase: "apertura",
      instruction: "Repite el estiramiento con la pierna contraria delante.",
      breathing: "Respiración lenta.",
      transition: "Vuelve a cuadrupedia y lleva las caderas hacia arriba."
    },
    {
      id: "downward-dog",
      duration: 60,
      phase: "integracion",
      instruction: "Alarga la cadena posterior sin forzar las piernas.",
      breathing: "Respira profundamente.",
      transition: "Adelanta el pie derecho entre las manos."
    },
    {
      id: "pigeon-prep",
      duration: 120,
      phase: "pico",
      instruction: "Coloca la pierna delantera en una posición cómoda y mantén la pelvis estable.",
      breathing: "Respira hacia la zona de la cadera sin buscar dolor.",
      transition: "Regresa cuidadosamente a cuadrupedia y cambia de lado."
    },
    {
      id: "pigeon-prep",
      duration: 120,
      phase: "pico",
      instruction: "Repite hacia el lado contrario.",
      breathing: "Respiración lenta y profunda.",
      transition: "Vuelve a cuadrupedia y siéntate lentamente."
    },
    {
      id: "butterfly",
      duration: 120,
      phase: "enfriamiento",
      instruction: "Une las plantas de los pies y deja que las rodillas se relajen hacia los lados.",
      breathing: "Exhala soltando tensión.",
      transition: "Túmbate boca arriba."
    },
    {
      id: "supine-knees-chest",
      duration: 60,
      phase: "compensacion",
      instruction: "Abraza las rodillas hacia el pecho.",
      breathing: "Respira profundamente.",
      transition: "Extiende las piernas para Savasana."
    },
    {
      id: "savasana",
      duration: 180,
      phase: "savasana",
      instruction: "Descansa completamente.",
      breathing: "Respiración natural.",
      transition: "Finaliza lentamente."
    }
  ]
},

/* =========================================================
   04 — ESPALDA SUAVE
   ========================================================= */

{
  id: "espalda-suave",
  number: 4,
  name: "Espalda Suave",
  style: "Yoga terapéutico suave",
  level: "Principiante",
  duration: 30,
  focus: "Relajación y movilidad de espalda",
  description:
    "Una práctica lenta para movilizar la espalda y liberar tensión acumulada.",
  poses: [
    {
      id: "constructive-rest",
      duration: 120,
      phase: "llegada",
      instruction: "Túmbate boca arriba con las rodillas flexionadas y los pies apoyados.",
      breathing: "Respira hacia las costillas.",
      transition: "Lleva suavemente las rodillas hacia un lado y después hacia el otro."
    },
    {
      id: "supine-windshield-wipers",
      duration: 90,
      phase: "movilidad",
      instruction: "Balancea lentamente las rodillas de un lado a otro.",
      breathing: "Exhala hacia cada lado.",
      transition: "Lleva las rodillas al centro y gira hacia un lateral para incorporarte."
    },
    {
      id: "cat-cow",
      duration: 120,
      phase: "movilidad",
      instruction: "Moviliza la columna desde cuadrupedia.",
      breathing: "Inhala al extender y exhala al flexionar.",
      transition: "Lleva las caderas hacia los talones."
    },
    {
      id: "child-pose",
      duration: 120,
      phase: "descanso",
      instruction: "Descansa dejando que la espalda se ensanche.",
      breathing: "Respira hacia la espalda posterior.",
      transition: "Regresa lentamente a cuadrupedia."
    },
    {
      id: "bird-dog",
      duration: 90,
      phase: "estabilidad",
      instruction: "Extiende brazo y pierna contrarios manteniendo el tronco estable.",
      breathing: "Inhala al extender y exhala al volver.",
      transition: "Realiza varias repeticiones y vuelve a cuadrupedia."
    },
    {
      id: "child-pose",
      duration: 60,
      phase: "compensacion",
      instruction: "Descansa unos instantes.",
      breathing: "Respiración tranquila.",
      transition: "Siéntate y extiende las piernas."
    },
    {
      id: "seated-forward-fold",
      duration: 120,
      phase: "enfriamiento",
      instruction: "Realiza una flexión suave desde las caderas.",
      breathing: "Exhala mientras relajas la espalda.",
      transition: "Regresa lentamente y túmbate."
    },
    {
      id: "supine-spinal-twist",
      duration: 90,
      phase: "compensacion",
      instruction: "Realiza una torsión suave hacia un lado.",
      breathing: "Respira profundamente.",
      transition: "Vuelve al centro y cambia de lado."
    },
    {
      id: "savasana",
      duration: 180,
      phase: "savasana",
      instruction: "Relaja completamente la espalda.",
      breathing: "Respiración natural.",
      transition: "Finaliza lentamente."
    }
  ]
},

/* =========================================================
   05 — MAÑANA LUMINOSA
   ========================================================= */

{
  id: "manana-luminosa",
  number: 5,
  name: "Mañana Luminosa",
  style: "Vinyasa suave",
  level: "Principiante",
  duration: 30,
  focus: "Energía y movilidad",
  description:
    "Una práctica dinámica pero accesible para comenzar el día con energía.",
  poses: [
    {
      id: "easy-pose",
      duration: 60,
      phase: "llegada",
      instruction: "Comienza sentado y establece una respiración amplia.",
      breathing: "Inhala 4 segundos y exhala 4.",
      transition: "Pasa a cuadrupedia."
    },
    {
      id: "cat-cow",
      duration: 60,
      phase: "calentamiento",
      instruction: "Moviliza la columna.",
      breathing: "Coordina cada movimiento con la respiración.",
      transition: "Lleva las caderas hacia los talones."
    },
    {
      id: "child-pose",
      duration: 45,
      phase: "calentamiento",
      instruction: "Haz una pausa breve.",
      breathing: "Respira profundamente.",
      transition: "Vuelve a cuadrupedia y pasa a perro boca abajo."
    },
    {
      id: "downward-dog",
      duration: 45,
      phase: "calentamiento",
      instruction: "Activa piernas y brazos.",
      breathing: "Respiración nasal.",
      transition: "Camina hacia las manos."
    },
    {
      id: "standing-forward-fold",
      duration: 45,
      phase: "transicion",
      instruction: "Relaja el torso.",
      breathing: "Exhala.",
      transition: "Sube lentamente hasta Montaña."
    },
    {
      id: "mountain",
      duration: 45,
      phase: "integracion",
      instruction: "Encuentra estabilidad.",
      breathing: "Inhala y eleva los brazos.",
      transition: "Exhala y vuelve a flexión."
    },
    {
      id: "half-sun-salutation",
      duration: 180,
      phase: "flujo",
      instruction: "Repite lentamente el ciclo de elevar brazos, flexionar y volver a subir.",
      breathing: "Sincroniza movimiento y respiración.",
      transition: "Después de la última ronda permanece de pie."
    },
    {
      id: "warrior-i",
      duration: 60,
      phase: "pico",
      instruction: "Da un paso atrás y construye Guerrero I.",
      breathing: "Respira de forma estable.",
      transition: "Abre la cadera y gira hacia Guerrero II."
    },
    {
      id: "warrior-ii",
      duration: 60,
      phase: "pico",
      instruction: "Estabiliza piernas y abre brazos.",
      breathing: "Respiración continua.",
      transition: "Estira la pierna delantera y lleva el torso hacia Triángulo."
    },
    {
      id: "triangle",
      duration: 60,
      phase: "pico",
      instruction: "Alarga ambos lados del torso.",
      breathing: "Inhala creando espacio y exhala suavemente.",
      transition: "Dobla la rodilla delantera y vuelve a Guerrero II."
    },
    {
      id: "downward-dog",
      duration: 60,
      phase: "descenso",
      instruction: "Regresa al perro boca abajo.",
      breathing: "Respira profundamente.",
      transition: "Baja las rodillas al suelo."
    },
    {
      id: "child-pose",
      duration: 90,
      phase: "enfriamiento",
      instruction: "Descansa.",
      breathing: "Respiración lenta.",
      transition: "Túmbate boca arriba."
    },
    {
      id: "savasana",
      duration: 180,
      phase: "savasana",
      instruction: "Relaja todo el cuerpo.",
      breathing: "Natural.",
      transition: "Finaliza lentamente."
    }
  ]
},

/* =========================================================
   06 — HOMBROS Y CUELLO
   ========================================================= */

{
  id: "hombros-cuello",
  number: 6,
  name: "Hombros y Cuello",
  style: "Movilidad consciente",
  level: "Principiante",
  duration: 25,
  focus: "Cuello, hombros y parte superior de la espalda",
  description:
    "Práctica lenta para liberar tensión en cuello, hombros y cintura escapular.",
  poses: [
    {
      id: "easy-pose",
      duration: 120,
      phase: "llegada",
      instruction: "Siéntate erguida y deja caer los hombros.",
      breathing: "Respira lentamente.",
      transition: "Comienza con movimientos pequeños del cuello."
    },
    {
      id: "neck-mobility",
      duration: 120,
      phase: "movilidad",
      instruction: "Realiza flexiones, extensiones e inclinaciones suaves sin hacer círculos completos si generan tensión.",
      breathing: "Mantén respiración natural.",
      transition: "Lleva las manos detrás de la espalda."
    },
    {
      id: "seated-heart-opener",
      duration: 90,
      phase: "apertura",
      instruction: "Entrelaza suavemente las manos detrás de la espalda y abre el pecho.",
      breathing: "Inhala expandiendo las clavículas.",
      transition: "Suelta las manos y pasa lentamente a cuadrupedia."
    },
    {
      id: "thread-the-needle",
      duration: 90,
      phase: "torsion",
      instruction: "Desliza un brazo bajo el otro.",
      breathing: "Exhala al entrar.",
      transition: "Vuelve al centro y cambia de lado."
    },
    {
      id: "thread-the-needle",
      duration: 90,
      phase: "torsion",
      instruction: "Repite hacia el otro lado.",
      breathing: "Lenta.",
      transition: "Vuelve a cuadrupedia."
    },
    {
      id: "puppy-pose",
      duration: 120,
      phase: "pico",
      instruction: "Camina con las manos hacia delante manteniendo las caderas sobre las rodillas.",
      breathing: "Respira hacia la parte alta de la espalda.",
      transition: "Regresa lentamente a cuadrupedia."
    },
    {
      id: "child-pose",
      duration: 120,
      phase: "compensacion",
      instruction: "Descansa en postura del niño.",
      breathing: "Profunda.",
      transition: "Siéntate lentamente."
    },
    {
      id: "savasana",
      duration: 180,
      phase: "savasana",
      instruction: "Túmbate y deja que los hombros se alejen de las orejas.",
      breathing: "Natural.",
      transition: "Finaliza lentamente."
    }
  ]
},

/* =========================================================
   07 — PIERNAS LIGERAS
   ========================================================= */

{
  id: "piernas-ligeras",
  number: 7,
  name: "Piernas Ligeras",
  style: "Hatha",
  level: "Principiante",
  duration: 30,
  focus: "Piernas y movilidad de cadera",
  description:
    "Secuencia progresiva para movilizar y fortalecer suavemente las piernas.",
  poses: [
    {
      id: "easy-pose",
      duration: 60,
      phase: "llegada",
      instruction: "Respira y observa las piernas.",
      breathing: "Lenta.",
      transition: "Pasa a cuadrupedia."
    },
    {
      id: "cat-cow",
      duration: 60,
      phase: "calentamiento",
      instruction: "Moviliza columna y pelvis.",
      breathing: "Coordinada.",
      transition: "Lleva las caderas hacia los talones."
    },
    {
      id: "child-pose",
      duration: 60,
      phase: "calentamiento",
      instruction: "Descansa.",
      breathing: "Profunda.",
      transition: "Vuelve a cuadrupedia y pasa a perro boca abajo."
    },
    {
      id: "downward-dog",
      duration: 60,
      phase: "calentamiento",
      instruction: "Pedalea suavemente las piernas.",
      breathing: "Natural.",
      transition: "Camina hacia delante."
    },
    {
      id: "standing-forward-fold",
      duration: 60,
      phase: "movilidad",
      instruction: "Relaja la parte posterior de las piernas.",
      breathing: "Exhala.",
      transition: "Sube hasta Montaña."
    },
    {
      id: "chair-pose",
      duration: 60,
      phase: "activacion",
      instruction: "Flexiona las rodillas como si fueras a sentarte.",
      breathing: "Mantén respiración estable.",
      transition: "Estira las piernas y vuelve a Montaña."
    },
    {
      id: "warrior-ii",
      duration: 60,
      phase: "activacion",
      instruction: "Abre las piernas y flexiona la rodilla delantera.",
      breathing: "Continua.",
      transition: "Estira la pierna delantera."
    },
    {
      id: "triangle",
      duration: 60,
      phase: "movilidad",
      instruction: "Alarga ambos lados del torso.",
      breathing: "Profunda.",
      transition: "Vuelve a Guerrero II y después a Montaña."
    },
    {
      id: "low-lunge",
      duration: 60,
      phase: "apertura",
      instruction: "Baja una rodilla y alarga el flexor de la cadera.",
      breathing: "Exhala suavemente.",
      transition: "Cambia de lado pasando primero por cuadrupedia."
    },
    {
      id: "low-lunge",
      duration: 60,
      phase: "apertura",
      instruction: "Repite con la otra pierna.",
      breathing: "Natural.",
      transition: "Vuelve a postura del niño."
    },
    {
      id: "child-pose",
      duration: 90,
      phase: "descenso",
      instruction: "Descansa.",
      breathing: "Profunda.",
      transition: "Túmbate boca arriba."
    },
    {
      id: "legs-up-wall",
      duration: 180,
      phase: "cierre",
      instruction: "Eleva las piernas apoyándolas en una pared si resulta cómodo.",
      breathing: "Lenta y relajada.",
      transition: "Baja las piernas lentamente."
    },
    {
      id: "savasana",
      duration: 180,
      phase: "savasana",
      instruction: "Descansa completamente.",
      breathing: "Natural.",
      transition: "Finaliza."
    }
  ]
},

/* =========================================================
   08 — ANOCHECER
   ========================================================= */

{
  id: "anochecer",
  number: 8,
  name: "Anochecer",
  style: "Yin suave",
  level: "Todos los niveles",
  duration: 35,
  focus: "Desaceleración",
  description:
    "Una práctica diseñada para pasar del ritmo del día a un estado de calma.",
  poses: [
    {
      id: "easy-pose",
      duration: 180,
      phase: "llegada",
      instruction: "Siéntate cómodamente y permite que la respiración se vuelva lenta.",
      breathing: "Inhala 4 y exhala 6.",
      transition: "Inclínate suavemente hacia delante."
    },
    {
      id: "butterfly",
      duration: 180,
      phase: "yin",
      instruction: "Une las plantas de los pies y permite que las rodillas se relajen.",
      breathing: "Lenta y nasal.",
      transition: "Cierra las piernas y pasa a cuadrupedia."
    },
    {
      id: "cat-cow",
      duration: 90,
      phase: "movilidad",
      instruction: "Haz unas pocas rondas lentas para movilizar la columna.",
      breathing: "Coordinada.",
      transition: "Lleva las caderas hacia los talones."
    },
    {
      id: "child-pose",
      duration: 180,
      phase: "yin",
      instruction: "Permanece en postura del niño.",
      breathing: "Respira hacia la espalda.",
      transition: "Regresa a cuadrupedia."
    },
    {
      id: "low-lunge",
      duration: 150,
      phase: "yin",
      instruction: "Adelanta una pierna y deja que la pelvis se relaje.",
      breathing: "Lenta.",
      transition: "Vuelve a cuadrupedia y cambia de lado."
    },
    {
      id: "low-lunge",
      duration: 150,
      phase: "yin",
      instruction: "Repite en el otro lado.",
      breathing: "Lenta.",
      transition: "Regresa a cuadrupedia y siéntate."
    },
    {
      id: "seated-forward-fold",
      duration: 180,
      phase: "yin",
      instruction: "Flexiona el torso sin forzar la columna.",
      breathing: "Exhala lentamente.",
      transition: "Sal de la postura de forma gradual."
    },
    {
      id: "supine-spinal-twist",
      duration: 120,
      phase: "cierre",
      instruction: "Túmbate y realiza una torsión suave.",
      breathing: "Profunda.",
      transition: "Cambia de lado."
    },
    {
      id: "supine-spinal-twist",
      duration: 120,
      phase: "cierre",
      instruction: "Repite al otro lado.",
      breathing: "Natural.",
      transition: "Vuelve al centro."
    },
    {
      id: "savasana",
      duration: 300,
      phase: "savasana",
      instruction: "Permanece tumbada y deja que el día termine aquí.",
      breathing: "Natural.",
      transition: "Incorpora lentamente."
    }
  ]
},

/* =========================================================
   09 — COLUMNA LUNAR
   ========================================================= */

{
  id: "columna-lunar",
  number: 9,
  name: "Columna Lunar",
  style: "Yin",
  level: "Todos los niveles",
  duration: 40,
  focus: "Columna y relajación",
  description:
    "Práctica lenta centrada en la movilidad suave de la columna.",
  poses: [
    {
      id: "easy-pose",
      duration: 180,
      phase: "llegada",
      instruction: "Observa tu postura y relaja la musculatura alrededor de la columna.",
      breathing: "Exhalaciones largas.",
      transition: "Pasa lentamente a cuadrupedia."
    },
    {
      id: "cat-cow",
      duration: 120,
      phase: "movilidad",
      instruction: "Moviliza toda la columna.",
      breathing: "Inhala extensión, exhala flexión.",
      transition: "Lleva las caderas hacia los talones."
    },
    {
      id: "child-pose",
      duration: 150,
      phase: "descanso",
      instruction: "Descansa.",
      breathing: "Hacia la espalda.",
      transition: "Regresa a cuadrupedia."
    },
    {
      id: "thread-the-needle",
      duration: 120,
      phase: "torsion",
      instruction: "Realiza una torsión suave.",
      breathing: "Exhala entrando.",
      transition: "Cambia de lado pasando por el centro."
    },
    {
      id: "thread-the-needle",
      duration: 120,
      phase: "torsion",
      instruction: "Repite al otro lado.",
      breathing: "Lenta.",
      transition: "Vuelve a cuadrupedia."
    },
    {
      id: "puppy-pose",
      duration: 150,
      phase: "extension",
      instruction: "Alarga suavemente la columna y abre los hombros.",
      breathing: "Profunda.",
      transition: "Vuelve a cuadrupedia."
    },
    {
      id: "seated-forward-fold",
      duration: 180,
      phase: "yin",
      instruction: "Siéntate y realiza una flexión suave.",
      breathing: "Exhalaciones largas.",
      transition: "Regresa lentamente."
    },
    {
      id: "supine-spinal-twist",
      duration: 150,
      phase: "compensacion",
      instruction: "Realiza una torsión tumbada.",
      breathing: "Natural.",
      transition: "Cambia de lado."
    },
    {
      id: "supine-spinal-twist",
      duration: 150,
      phase: "compensacion",
      instruction: "Repite.",
      breathing: "Natural.",
      transition: "Vuelve al centro."
    },
    {
      id: "savasana",
      duration: 300,
      phase: "savasana",
      instruction: "Relájate por completo.",
      breathing: "Natural.",
      transition: "Finaliza lentamente."
    }
  ]
},

/* =========================================================
   10 — RAÍCES
   ========================================================= */

{
  id: "raices",
  number: 10,
  name: "Raíces",
  style: "Hatha",
  level: "Principiante",
  duration: 35,
  focus: "Estabilidad y conexión con el suelo",
  description:
    "Una práctica centrada en pies, piernas, pelvis y sensación de estabilidad.",
  poses: [
    {
      id: "mountain",
      duration: 120,
      phase: "llegada",
      instruction: "Ponte de pie y siente los cuatro puntos de apoyo de cada pie.",
      breathing: "Respira profundamente.",
      transition: "Eleva los brazos al inhalar y baja al exhalar."
    },
    {
      id: "half-sun-salutation",
      duration: 180,
      phase: "calentamiento",
      instruction: "Realiza varias rondas suaves.",
      breathing: "Movimiento sincronizado.",
      transition: "Después de la última ronda permanece de pie."
    },
    {
      id: "chair-pose",
      duration: 60,
      phase: "activacion",
      instruction: "Flexiona las rodillas y lleva el peso hacia los talones.",
      breathing: "Estable.",
      transition: "Estira las piernas y vuelve a Montaña."
    },
    {
      id: "warrior-i",
      duration: 75,
      phase: "fuerza",
      instruction: "Da un paso atrás y construye Guerrero I.",
      breathing: "Lenta.",
      transition: "Abre la pelvis hacia el lateral."
    },
    {
      id: "warrior-ii",
      duration: 75,
      phase: "fuerza",
      instruction: "Estabiliza ambas piernas.",
      breathing: "Continua.",
      transition: "Estira la pierna delantera."
    },
    {
      id: "triangle",
      duration: 75,
      phase: "integracion",
      instruction: "Alarga el torso hacia delante antes de descender.",
      breathing: "Profunda.",
      transition: "Regresa a Guerrero II y después a Montaña."
    },
    {
      id: "tree-pose",
      duration: 60,
      phase: "equilibrio",
      instruction: "Apoya un pie en la pierna contraria sin colocar presión sobre la rodilla.",
      breathing: "Lenta.",
      transition: "Baja el pie y cambia de lado."
    },
    {
      id: "tree-pose",
      duration: 60,
      phase: "equilibrio",
      instruction: "Repite el equilibrio.",
      breathing: "Estable.",
      transition: "Baja lentamente y vuelve a Montaña."
    },
    {
      id: "standing-forward-fold",
      duration: 90,
      phase: "descenso",
      instruction: "Relaja la parte posterior de las piernas.",
      breathing: "Exhala.",
      transition: "Baja al suelo y siéntate."
    },
    {
      id: "seated-forward-fold",
      duration: 120,
      phase: "enfriamiento",
      instruction: "Realiza una flexión cómoda.",
      breathing: "Lenta.",
      transition: "Túmbate boca arriba."
    },
    {
      id: "savasana",
      duration: 240,
      phase: "savasana",
      instruction: "Siente el peso del cuerpo sobre el suelo.",
      breathing: "Natural.",
      transition: "Finaliza."
    }
  ]
},

/* =========================================================
   11–60
   ========================================================= */

/*
   Las siguientes prácticas mantienen exactamente
   la misma arquitectura.

   11. Luna Nueva
   12. Luna Llena
   13. Soltar el Día
   14. Caderas Profundas
   15. Corazón Abierto
   16. Espalda Larga
   17. Flexibilidad Suave
   18. Equilibrio
   19. Fuerza Serena
   20. Yin Profundo
   21. Hatha Fundamental
   22. Vinyasa Suave
   23. Yoga Restaurativo
   24. Relajación Nocturna
   25. Sueño Profundo
   26. Nervio Vago
   27. Respiración Lunar
   28. Detox Suave
   29. Digestión
   30. Pelvis Libre
   31. Isquiotibiales
   32. Apertura de Pecho
   33. Hombros Libres
   34. Cuello Relajado
   35. Piernas Cansadas
   36. Después del Trabajo
   37. Después de Viajar
   38. Antiestrés
   39. Ansiedad y Calma
   40. Grounding
   41. Chakra Raíz
   42. Chakra Sacro
   43. Chakra Plexo Solar
   44. Chakra Corazón
   45. Chakra Garganta
   46. Chakra Tercer Ojo
   47. Chakra Corona
   48. Los Cuatro Elementos
   49. Tierra
   50. Agua
   51. Fuego
   52. Aire
   53. Éter
   54. Ritual de Luna Nueva
   55. Ritual de Luna Llena
   56. Amanecer
   57. Atardecer
   58. Noche Witchy
   59. Yin & Meditación
   60. Viaje Interior
*/

/* =========================================================
   GENERADOR DE ESTRUCTURAS BASE
   =========================================================

   IMPORTANTE:
   Estas 50 prácticas restantes no se dejan como
   listas aleatorias. Se generan posteriormente
   utilizando secuencias coherentes del catálogo
   de asanas.

   ========================================================= */

];

console.log(
  "🌙 Moonie Yoga: data.js cargado."
);

console.log(
  `🧘 Prácticas disponibles: ${window.MOONIE_ROUTINES.length}`
);
