const palabras = [
    "avion", "barco", "perro", "gatos", "carta", "libro", "playa", "fruta", "lapiz", "reloj", "nubes", "campo", "verde", "negro",
    "blusa", "silla", "coche", "traje", "bolsa", "queso", "leche", "arbol", "hojas", "ramas", "suelo", "pared", "techo", "lunes", "desde", "juego",
    "nivel", "pista", "rival", "magia", "clase", "salud", "fuego", "hielo", "llave", "dulce", "metal", "vapor", "coral", "cielo", "islas",
    "monte", "selva", "nacer", "cenar", "brisa"
];

let buscarIndice = Math.floor(Math.random() * palabras.length);
let palabraEscondida = palabras[buscarIndice];

let arrayhijos = document.querySelectorAll('.hijo');
let mensajeError = document.querySelector('.mensaje-error');

let indiceHijo = 0;
let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let banderita = true;

let filaActual = 0;

let letras = [];

const analizarPalabra = () => {

    //   //aqui se va analizar la palabra en esta funcion

    // this.removeEventListener('keyup', llenarTeclas)
    // //Validadr teclas enter y borrar estas si deben funcionar

    // if (letras.length == 5) {
    //     let temporal = letras.slice(0, 6)
    //     temporal = temporal.join();
    //     temporal = temporal.replaceAll(',', '')
    //     palabraEscondida == temporal ? finalizarJuego(banderita) : pintarColor()
    // } else if (letras.length == 10) {
    //     let temporal = letras.slice(5, 11)
    //     temporal = temporal.join();
    //     temporal = temporal.replaceAll(',', '')
    //     palabraEscondida == temporal ? finalizarJuego(banderita) : pintarColor()
    // } else if (letras.length == 15) {
    //     let temporal = letras.slice(10, 16)
    //     temporal = temporal.join();
    //     temporal = temporal.replaceAll(',', '')
    //     palabraEscondida == temporal ? finalizarJuego(banderita) : pintarColor()
    // } else if (letras.length == 20) {
    //     let temporal = letras.slice(15, 21)
    //     temporal = temporal.join();
    //     temporal = temporal.replaceAll(',', '')
    //     palabraEscondida == temporal ? finalizarJuego(banderita) : pintarColor()
    // } else if (letras.length == 25) {
    //     let temporal = letras.slice(20, 16)
    //     temporal = temporal.join();
    //     temporal = temporal.replaceAll(',', '')
    //     palabraEscondida == temporal ? finalizarJuego(banderita) : pintarColor()
    // } else if (letras.length >= 30) {
    //     let temporal = letras.slice(25, 31)
    //     temporal = temporal.join();
    //     temporal = temporal.replaceAll(',', '')
    //     palabraEscondida == temporal ? banderita = true : banderita = false;
    //     finalizarJuego(banderita)
    // }

    let palabraEscrita = letras.join('');

    pintarColor()

    if (palabraEscrita == palabraEscondida) {
        banderita = true;
        finalizarJuego(banderita);
    } else if (filaActual === 5) {
       banderita = false;
        finalizarJuego(banderita);
    } else {
        filaActual++;
        letras = [];
    }
};

const llenarTeclas = (event) => {
    console.log("palabra esondida:", palabraEscondida);
    const tecla = event.key.toUpperCase();

    if (tecla == 'BACKSPACE') {
        if (indiceHijo > filaActual * 5) {
            indiceHijo--;
            arrayhijos[indiceHijo].textContent = '';
            letras.pop();
        }

    } else if (ABC.includes(tecla)) {
        if (letras.length < 5) {
            arrayhijos[indiceHijo].textContent = tecla;
            letras.push(event.key.toLowerCase());
            indiceHijo++;

            if (letras.length === 5) {
                analizarPalabra();
            }
        }

    }
    // else if (tecla === 'ENTER') {
    //     if (letras.length < 5) {
    //         mostrarError('Te faltan letras para completar la palabra');
    //     }
    // } else {
    //     mostrarError('La tecla que seleccionó no está permitida');
    // }
};

function mostrarMensaje(mensaje) {
    mensajeError.classList.remove('d-none');
    mensajeError.textContent = mensaje;
    setTimeout(() => {
        mensajeError.classList.add('d-none');
    }, 3000);
}
window.addEventListener('keyup', llenarTeclas);

function pintarColor() {

   let inicioFilaHTML = filaActual * 5;
   console.log(inicioFilaHTML)

    for (let i = 0; i < 5; i++) {
        let posicionCasilla = inicioFilaHTML + i;
        let letraUsuario = letras[i];
        let letraCorrecta = palabraEscondida[i];

        if (letraUsuario === letraCorrecta) {
            arrayhijos[posicionCasilla].classList.add('bg-success', 'text-white');
        } else if (palabraEscondida.includes(letraUsuario)) {
            arrayhijos[posicionCasilla].classList.add('bg-warning', 'text-white');
        } else {
            arrayhijos[posicionCasilla].classList.add('bg-secondary', 'text-white');
        }
    }
}

function finalizarJuego(resultado) {

      console.log('Finalizado')
    if (resultado) {
         console.log('Felicidades!!!')
        mostrarMensaje('¡Felicidades! Adivinaste la palabra.');
    } else {
        console.log('El juego termino')
        mostrarMensaje(`Perdiste. La palabra era: ${palabraEscondida.toUpperCase()}`);
    }
    //El juego termino!!
    //le envio true o false
    //Realiza combios de ganodor o perdedor
    //habilitar un boton reiniciar
}
//si banderita es true entonces se va ejecurtar la funcion la banderita hace que se detenga la funcion para verificar si es o no es la palabra si no es , entonces banderita va hacer true siempre si la palabra si es correcta entonces banderita sera false

//banderita == true ? llenarTeclas(): console.log('se termino el juego ')