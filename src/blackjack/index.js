import _ from 'underscore';
// import { crearDeck as crearNuevoDeck } from './usecases/crear-deck';
import { crearDeck, pedirCarta, acumularPuntos, turnoComputadora, crearCartaHTML } from './usecases';


let deck = [];

const tipos = ['C', 'D', 'H', 'S'],
    especiales = ['A', 'J', 'Q', 'K'];

let puntosJugadores = [];

// Referencias del HTML:
// - Buttons:
const btnPedir = document.querySelector('#btnPedir'),      // con '#' para acceder al 'id' del elemento 
    btnDetener = document.querySelector('#btnDetener'),
    btnNuevo = document.querySelector('#btnNuevo'),
    // - Smalls:
    puntosHTML = document.querySelectorAll('small'),     // sin '#' porque es un tag
    // - Divs (cartas):
    divCartasJugadores = document.querySelectorAll('.divCartas');  // con '.' porque es una class

    
// Función para inicializar el juego (2 jugadores por defecto, si no se especifican):
const inicializarJuego = (numJugadores = 2) => {

    //console.clear();

    deck = crearDeck(tipos, especiales);
    puntosJugadores = [];

    for (let i = 0; i < numJugadores; i++) {
        puntosJugadores.push(0);
    }

    puntosHTML.forEach(elem => elem.innerText = 0);
    divCartasJugadores.forEach(elem => elem.innerText = '');

    btnPedir.disabled = false;
    btnDetener.disabled = false;
}

// EVENTOS
btnPedir.addEventListener('click', () => {

    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
    const imgCarta = crearCartaHTML(carta);
    divCartasJugadores[0].append(imgCarta);

    if (puntosJugador > 21) {
        console.warn('Lo siento mucho, perdiste.');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
    }
    else if (puntosJugador === 21) {
        console.warn('21, ¡genial!');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
    }
});

btnDetener.addEventListener('click', () => {

    btnPedir.disabled = true;
    btnDetener.disabled = true;

    turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartasJugadores);
});

btnNuevo.addEventListener('click', () => {

    inicializarJuego();
});
