const palabras = [
    "avion", "barco", "perro", "gatos", "carta", "libro", "playa", "fruta", "lapiz", "reloj", "nubes", "campo", "verde", "negro",
    "blusa", "silla", "coche", "traje", "bolsa", "queso", "leche", "arbol", "hojas", "ramas", "suelo", "pared", "techo", "lunes", "desde", "juego",
    "nivel", "pista", "rival", "magia", "clase", "salud", "fuego", "hielo", "llave", "dulce", "metal", "vapor", "coral", "cielo", "islas",
    "monte", "selva", "nacer", "cenar", "brisa"
];

let buscarIndice = Math.floor(Math.random() * palabras.length)//Variable donde se busca un indice random
let palabraEscondida = palabras[buscarIndice]//Se selecciona la palabra para que se use en el juego

//variable usada para recorrer o colocar el evento keydown (letra dentro del div)
let arrayhijos = document.querySelectorAll('.hijo')
let mensajeError = document.querySelector('.mensaje-error')

//variable para estar en la posicion del div donde se colocara la letra
let indiceHijo = 0
let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
let banderita = true;

let letras = [];//arreglo de las letras ingresadas.

const analizarPalabra = () => {
    //aqui se va analizar la palabra en esta funcion

    this.removeEventListener('keyup', llenarTeclas)
    //Validadr teclas enter y borrar estas si deben funcionar

    if (letras.length == 5) {
        let temporal = letras.slice(0, 6)
        temporal = temporal.join();
        temporal = temporal.replaceAll(',', '')
        palabraEscondida == temporal ? finalizarJuego(banderita) : pintarColor()
    } else if (letras.length == 10) {
        let temporal = letras.slice(5, 11)
        temporal = temporal.join();
        temporal = temporal.replaceAll(',', '')
        palabraEscondida == temporal ? finalizarJuego(banderita) : pintarColor()
    } else if (letras.length == 15) {
        let temporal = letras.slice(10, 16)
        temporal = temporal.join();
        temporal = temporal.replaceAll(',', '')
        palabraEscondida == temporal ? finalizarJuego(banderita) : pintarColor()
    } else if (letras.length == 20) {
        let temporal = letras.slice(15, 21)
        temporal = temporal.join();
        temporal = temporal.replaceAll(',', '')
        palabraEscondida == temporal ? finalizarJuego(banderita) : pintarColor()
    } else if (letras.length == 25) {
        let temporal = letras.slice(20, 16)
        temporal = temporal.join();
        temporal = temporal.replaceAll(',', '')
        palabraEscondida == temporal ? finalizarJuego(banderita) : pintarColor()
    } else if (letras.length >= 30) {
        let temporal = letras.slice(25, 31)
        temporal = temporal.join();
        temporal = temporal.replaceAll(',', '')
        palabraEscondida == temporal ? banderita = true : banderita = false;
        finalizarJuego(banderita)
    }
}

const llenarTeclas = (event) => {
        console.log(palabraEscondida)//Para ver la palabra y realizar proebas
        //console.log(event.key.toUpperCase())
        if (event.key.toUpperCase() == 'BACKSPACE') {
            if (indiceHijo != 0) {
                indiceHijo--
                arrayhijos[indiceHijo].textContent = ''
                letras.splice(indiceHijo, 1)//Elimino la letra del arreglo
            }else{

            }

        } else if (ABC.includes(event.key.toUpperCase())) {

            letras.push(event.key.toLowerCase())//agrego la letra en un array para validar

            arrayhijos[indiceHijo].textContent = event.key.toUpperCase()
            indiceHijo++

            //de en 5 en 5 siempre va analizar la palabra 
            if (indiceHijo == 5) {//validar si selecciono borrar despues y borrar habilitar un boton. o botone spara cada tecla como el wordle real.
                analizarPalabra()
            } else if (indiceHijo == 10) {
                analizarPalabra()
            } else if (indiceHijo == 15) {
                analizarPalabra()
            } else if (indiceHijo == 20) {
                analizarPalabra()
            } else if (indiceHijo == 25) {
                analizarPalabra()
            } else if (indiceHijo == 30) {
                analizarPalabra()
            }

        } else {///tambien validar la tecla ENTER !importat

            mensajeError.classList.remove('d-none')
            mensajeError.textContent = 'La tecla que selecciono no esta permitida'
            //el mesanje va desaparecer en su determinado tiempo 
            setTimeout(() => {
                mensajeError.classList.add('d-none')

            }, 4000)
        }
}
this.addEventListener('keyup', llenarTeclas)
function pintarColor() {

    this.addEventListener('keyup', llenarTeclas)//Validar que se active despues de pintar los colores y colocar un boton para reiniicar
    ///validar si el usuario aun quiere borrar

    //Se pinta el color segun el resultado
    console.log('Hola desde pintar') 
}

function finalizarJuego(resultado) {
    this.removeEventListener('keyup', llenarTeclas)

    console.log('Finalizado')
    if (resultado) {
        console.log('Felicidades!!!')
    } else {
        console.log('El juego termino')
    }
    //El juego termino!!
    //le envio true o false
    //Realiza combios de ganodor o perdedor 
    //habilitar un boton reiniciar
}
//si banderita es true entonces se va ejecurtar la funcion la banderita hace que se detenga la funcion para verificar si es o no es la palabra si no es , entonces banderita va hacer true siempre si la palabra si es correcta entonces banderita sera false 

//banderita == true ? llenarTeclas(): console.log('se termino el juego ')

