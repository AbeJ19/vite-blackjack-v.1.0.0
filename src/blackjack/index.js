import _ from 'underscore';
import { createDeck, pedirCarta, valorCarta, turnoComputadora, createCard, acumularPuntos, determinarGanador } from './usecases'

(() => {
    'use strict'

    let deck = [];
    const types = ['C', 'D', 'H', 'S'],
        specials = ['A', 'J', 'Q', 'K'];

    let scorePlayers = [];

    // Referencias del HTML

    const btnTake = document.querySelector('#btnTake'),
        btnStop = document.querySelector('#btnStop'),
        btnNew = document.querySelector('#btnNew')

    const divCardsPlayers = document.querySelectorAll('.divCartas'),
        score = document.querySelectorAll('small');


    // Esta funcion inicia el juego
    const startGame = (numPlayers = 2) => {
        deck = createDeck(types, specials);
        scorePlayers = [];
        for (let i = 0; i < numPlayers; i++) {
            scorePlayers.push(0);
        }

        score.forEach(elem => elem.innerText = 0);
        divCardsPlayers.forEach(elem => elem.innerHTML = '');

        btnTake.disabled = false;
        btnStop.disabled = false;
    }

    btnTake.addEventListener('click', () => {

        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(carta, 0, score, scorePlayers);
        createCard(carta, 0, divCardsPlayers);

        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnTake.disabled = true;
            btnStop.disabled = true;
            turnoComputadora(puntosJugador, scorePlayers, score, deck, divCardsPlayers);
        } else if (puntosJugador === 21) {
            console.warn('21, genial!!');
            btnTake.disabled = true;
            btnStop.disabled = true;
            turnoComputadora(puntosJugador, scorePlayers, score, deck, divCardsPlayers);
        }

    });

    btnStop.addEventListener('click', () => {
        btnTake.disabled = true;
        btnStop.disabled = true;
        turnoComputadora(scorePlayers[0], scorePlayers, score, deck, divCardsPlayers);
    });

    btnNew.addEventListener('click', () => {
        startGame();
    });

    return {
        nuevoJuego: startGame
    };


})()