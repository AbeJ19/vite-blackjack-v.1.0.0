
/**
 * 
 * @param {Array<String>} deck its an string array
 * @returns {String} returns a card of the deck
 */

export const pedirCarta = (deck) => {
    if (!deck || deck.length === 0) {
        throw 'No hay cartas en el deck';
    } else {
        return deck.pop();
    }
}