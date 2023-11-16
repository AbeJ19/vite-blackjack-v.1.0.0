export const determinarGanador = (scorePlayers) => {

    const [puntosMinimos, puntosComputadora] = scorePlayers;

    setTimeout(() => {
        if (puntosComputadora === puntosMinimos) {
            alert('Nadie gana');
        } else if (puntosMinimos > 21) {
            alert('Computadora gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador gana');
        } else if (puntosComputadora > puntosMinimos) {
            alert('Computadora gana');
        } else if (puntosComputadora < puntosMinimos) {
            alert('Jugador gana');
        }
    }, 100);
}