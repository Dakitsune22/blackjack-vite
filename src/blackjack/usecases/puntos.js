import { valorCarta } from './carta';

/**
 * Función para acumular puntos de jugador o computadora
 * @param {String} carta Carta a acumular
 * @param {Number} turno Turno (0 = primer jugador, Último = computadora)
 * @param {Array<Number>} puntosJugadores Array con los puntos acumulados por jugador
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar las cartas
 * @returns {Number} Puntos acumulados
 */
export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];

    return puntosJugadores[turno];
}

/**
 * Función para determinar el ganador de la partida
 * @param {Array<Number>} puntosJugadores Array con los puntos acumulados por jugador
 */
export const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if (puntosMinimos === puntosComputadora) {
            alert('¡Nadie gana!');
        } else if (puntosMinimos > 21 || (puntosComputadora <= 21 && puntosComputadora > puntosMinimos)) {
            alert('¡Computadora gana!');
        } else {
            alert('¡Jugador gana!');
        }
    }, 50);
}