import { createCardElement, flipCard } from './card.js';

const allCards = [
'🍎', '🍐', '🍒', '🍉',
'🍇', '🍓', '🍌', '🍍',
'🥝', '🥥', '🍑', '🍈',
'🍋', '🍊', '🍏', '🍅'
];

const gameBoard = document.getElementById('game-board');

let firstCard = null;
let secondCard = null;
let lockBoard = false;
let attempts = 0;

function shuffle(array) {
array.sort(() => Math.random() - 0.5);
}

export function createBoard(cardCount) {
const selectedCards = allCards.slice(0, cardCount / 2);
const cards = [...selectedCards, ...selectedCards];


shuffle(cards);

cards.forEach(card => {
    const cardElement = createCardElement(card);

    cardElement.addEventListener('click', () => {
        flipCard(cardElement, handleCardFlip);
    });

    gameBoard.appendChild(cardElement);
});


}

function handleCardFlip(cardElement) {
if (lockBoard) return;
if (cardElement === firstCard) return;


if (!firstCard) {
    firstCard = cardElement;
    return;
}

secondCard = cardElement;
lockBoard = true;
attempts++;

checkForMatch();


}

function checkForMatch() {
const isMatch =
firstCard.dataset.card === secondCard.dataset.card;


if (isMatch) {
    disableCards();
} else {
    unflipCards();
}


}

function disableCards() {
firstCard.classList.add('matched');
secondCard.classList.add('matched');

resetBoard();


}

function unflipCards() {
setTimeout(() => {
firstCard.classList.remove('flipped');
secondCard.classList.remove('flipped');


    firstCard.textContent = '';
    secondCard.textContent = '';

    resetBoard();
}, 1500);


}

function resetBoard() {
firstCard = null;
secondCard = null;
lockBoard = false;
}

export function restartGame(cardCount) {
gameBoard.innerHTML = '';


firstCard = null;
secondCard = null;
lockBoard = false;
attempts = 0;

createBoard(cardCount);


}
