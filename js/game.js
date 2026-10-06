import { restartGame } from './board.js';

document.addEventListener('DOMContentLoaded', () => {


const korttienMaaraInput = document.getElementById('korttienMaara');
const restartButton = document.getElementById('restart-button');

restartButton.addEventListener('click', () => {
    const cardCount = parseInt(korttienMaaraInput.value, 10);

    if (isNaN(cardCount) || cardCount <= 0 || cardCount % 2 !== 0) {
        return;
    }

    restartGame(cardCount);
});

});
