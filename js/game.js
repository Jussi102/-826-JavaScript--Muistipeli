
import { restartGame } from './board.js';

document.addEventListener('DOMContentLoaded', () => {
    const korttienMaaraInput = document.getElementById('korttienMaara');
    const restartButton = document.getElementById('restart-button');
    const playAgainButton = document.getElementById('play-again');

    function startNewGame() {
        const cardCount = parseInt(korttienMaaraInput.value, 10);

        if (
            isNaN(cardCount) ||
            cardCount < 2 ||
            cardCount > 32 ||
            cardCount % 2 !== 0
        ) {
            alert('Anna parillinen korttimäärä väliltä 2–32.');
            return;
        }

        restartGame(cardCount);
    }

    restartButton.addEventListener('click', startNewGame);
    playAgainButton.addEventListener('click', startNewGame);
});
