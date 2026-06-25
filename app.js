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
let botonRevisar = document.querySelector('#revisar')

let indiceHijo = 0;
let ABC = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let banderita = true;

let filaActual = 0;

let letras = [];

const analizarPalabra = () => {

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

function mostrarMensaje(mensaje) {
    mensajeError.classList.remove('d-none');
    mensajeError.textContent = mensaje;
    setTimeout(() => {
        mensajeError.classList.add('d-none');
    }, 3000);
}

botonRevisar.addEventListener('click', (event) => {
    if (letras.length < 5) {
        mostrarMensaje('Te faltan letras para completar la palabra');
    } else {
        analizarPalabra();
    }

})

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
        }

    } else if (tecla === 'ENTER') {
        if (letras.length < 5) {
            mostrarMensaje('Te faltan letras para completar la palabra');
        } else {
            analizarPalabra();
        }

    };

}

this.addEventListener('keyup', llenarTeclas);

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
        mostrarMensaje('¡Felicidades! Adivinaste la palabra.');
    } else {
        mostrarMensaje(`Perdiste. La palabra era: ${palabraEscondida.toUpperCase()}`);
    }


    this.removeEventListener('keyup', llenarTeclas);

}
