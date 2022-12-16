//import { pedirCarta } from './carta';
//import { acumularPuntos } from './puntos';
import { pedirCarta, acumularPuntos, determinarGanador, crearCartaHTML } from './';

/**
 * Función para el turno de la computadora
 * @param {Number} puntosMinimos Puntos mínimos que la computadora necesita para ganar
 * @param {Array<String>} deck Baraja actual
 * @param {Array<Number>} puntosJugadores Array con los puntos acumulados por jugador
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos
 * @param {HTMLElement} divCartasJugadores Elemento HTML para mostrar las cartas
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntosHTML, divCartasJugadores) => {

    if (!puntosMinimos) throw new Error('puntosMinimos es necesario');
    if (!puntosJugadores) throw new Error('puntosJugadores es necesario');
    if (!puntosHTML) throw new Error('puntosHTML es necesario');
    if (!divCartasJugadores) throw new Error('divCartasJugadores es necesario');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        const imgCarta = crearCartaHTML(carta);
        divCartasJugadores[puntosJugadores.length - 1].append(imgCarta);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}

