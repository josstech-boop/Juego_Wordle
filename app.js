const palabras = [
  "avion","barco","perro","gatos","carta","libro","playa","fruta","lapiz","reloj", "nubes","campo","verde","negro",
  "blusa","silla","coche","traje","bolsa","queso","leche","arbol","hojas","ramas","suelo","pared", "techo","lunes","desde","juego",
   "nivel","pista","rival","magia","clase","salud","fuego","hielo","llave","dulce","metal","vapor","coral", "cielo","islas",
  "monte","selva","nacer","cenar","brisa"
];

let buscarIndice = Math.floor(Math.random() * palabras.length)//Variable donde se busca un indice random
let palabraEscondida = palabras[buscarIndice]//Se selecciona la palabra para que se use en el juego

//variable usada para recorrer o colocar el evento keydown (letra dentro del div)
let arrayhijos = document.querySelectorAll('.hijo')
let mensajeError = document.querySelector('.mensaje-error')

//variable para estar en la posicion del div donde se colocara la letra
let indiceHijo = 0
let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let banderita = true


const analizarPalabra = () => {
    //aqui se va analizar la palabra en esta funcion
    console.log('Analizando palabra...............')
}

const llenarTeclas = () => {
    this.addEventListener('keyup', (event) => {
        console.log(event.key.toUpperCase())
        if (event.key.toUpperCase() == 'BACKSPACE') {
            if (indiceHijo != 0) {
                indiceHijo--
                arrayhijos[indiceHijo].textContent = ''
            }

        } else if (ABC.includes(event.key.toUpperCase())) {
            arrayhijos[indiceHijo].textContent = event.key.toUpperCase()
            indiceHijo++

            //de en 5 en 5 siempre va analizar la palabra 
            if (indiceHijo == 5) {
                analizarPalabra()
            } else if (indiceHijo == 10) {
                analizarPalabra()
            }
            else if (indiceHijo == 15) {
                analizarPalabra()
            } else if (indiceHijo == 20) {
                analizarPalabra()
            } else if (indiceHijo == 25) {
                analizarPalabra()
            } else if (indiceHijo == 30) {
                analizarPalabra()
            }

        } else {

            mensajeError.classList.remove('d-none')
            mensajeError.textContent = 'La tecla que selecciono no esta permitida'
            //el mesanje va desaparecer en su determinado tiempo 
            setTimeout(() => {
                mensajeError.classList.add('d-none')

            }, 4000)
        }
    })
}

//si banderita es true entonces se va ejecurtar la funcion la banderita hace que se detenga la funcion para verificar si es o no es la palabra si no es , entonces banderita va hacer true siempre si la palabra si es correcta entonces banderita sera false 

banderita == true ? llenarTeclas() : console.log('se termino el juego ')

