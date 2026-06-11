const palabras = [
  "avion","barco","perro","gatos","carta","libro","playa","fruta","lapiz","reloj", "nubes","campo","verde","negro",
  "blusa","silla","coche","traje","bolsa","queso","leche","arbol","hojas","ramas","suelo","pared", "techo","lunes","desde","juego",
   "nivel","pista","rival","magia","clase","salud","fuego","hielo","llave","dulce","metal","vapor","coral", "cielo","islas",
  "monte","selva","nacer","cenar","brisa"
];

let buscarIndice = Math.floor(Math.random() * palabras.length)//Variable donde se busca un indice random
let palabraEscondida = palabras[buscarIndice]//Se selecciona la palabra para que se use en el juego
