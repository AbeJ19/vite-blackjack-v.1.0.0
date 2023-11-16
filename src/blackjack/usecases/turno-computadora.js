import { pedirCarta, acumularPuntos, createCard, determinarGanador } from './'

/**
 * 
 * @param {Number} puntosMinimos minimal points computer needs to win
 * @param {HTMLElement} puntosHTML
 * @param {Array<String>} deck 
 */

export const turnoComputadora = (puntosMinimos, scorePlayers, score, deck, divCardsPlayers) => {
    if (!puntosMinimos) throw new Error('Puntos minimos es necesario');

    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, scorePlayers.length - 1, score, scorePlayers);
        createCard(carta, scorePlayers.length - 1, divCardsPlayers);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(scorePlayers);

}