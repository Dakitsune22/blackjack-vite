
/**
 * Función para pedir carta
 * @param {Array<String>} deck Array con todas las cartas aún disponibles en la baraja
 * @returns {String} Carta extraída de la baraja
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0) throw 'No hay cartas en la baraja';

    return deck.pop();
}

/**
 * Función para conocer el valor de una carta
 * @param {String} carta Carta de la que se desea conocer el valor
 * @returns {Number} Valor de la carta
 */
export const valorCarta = (carta) => {

    const valor = carta.substring(0, carta.length - 1);

    return (isNaN(valor)) ?
        (valor === 'A') ? 11 : 10
        : valor * 1;
}