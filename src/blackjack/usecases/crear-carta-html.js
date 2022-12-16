
/**
 * Función que crea la carta en el HTML
 * @param {String} carta Carta a crear
 * @returns {HTMLImageElement} Imagen de carta
 */
export const crearCartaHTML = (carta) => {

    if (!carta) throw new Error('carta es obligatorio');

    const imgCarta = document.createElement('img');
    imgCarta.classList.add('carta');
    imgCarta.src = `assets/cartas/${carta}.png`;

    return imgCarta;
}
