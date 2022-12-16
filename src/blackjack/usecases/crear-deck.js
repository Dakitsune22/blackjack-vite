import _ from 'underscore';

/**
 * Esta función crea una nueva baraja
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} Retorna una nueva baraja de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error('tiposDeCarta es obligatorio (array de string)'); 
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tiposEspeciales es obligatorio (array de string)'); 

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let tipo of tiposDeCarta) {
            deck.push(i + tipo);
        }
    }
    for (let especial of tiposEspeciales) {
        for (let tipo of tiposDeCarta) {
            deck.push(especial + tipo);
        }
    }
    return _.shuffle(deck);
}

// export default crearDeck;