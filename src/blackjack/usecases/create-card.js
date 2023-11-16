export const createCard = (carta, turno, divCardsPlayers) => {

    const imgCard = document.createElement('img');
    imgCard.src = `assets/cartas/${carta}.png`;
    imgCard.classList.add('carta');
    divCardsPlayers[turno].append(imgCard);
}