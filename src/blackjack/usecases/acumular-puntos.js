import { valorCarta } from './'

//Turno 0 = primer jugador, ultimo sera la computadora

export const acumularPuntos = (carta, turno, score, scorePlayers) => {
    scorePlayers[turno] = scorePlayers[turno] + valorCarta(carta);
    score[turno].innerText = scorePlayers[turno];
    return scorePlayers[turno];
}