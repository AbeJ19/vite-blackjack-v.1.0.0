import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} types ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} specials ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */

export const createDeck = (types, specials) => {

    if (!types || types.length === 0) throw new Error('Tipos de Carta es obligatorio como arreglo de strings');
    if (!specials || specials.length === 0) throw new Error('Tipos Especiales es obligatorio como arreglo de strings');

    let deck = [];
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type)
        }
    }

    for (let type of types) {
        for (let special of specials) {
            deck.push(special + type)
        }
    }

    return _.shuffle(deck);
}

// export default createDeck exportacion por defecto