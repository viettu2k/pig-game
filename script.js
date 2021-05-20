'use strict';
// Selecting elements
// 3.6
const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');
// 1.1
const score0EL = document.querySelector('#score--0');
const score1EL = document.getElementById('score--1');
// 2.7
const current0EL = document.getElementById('current--0');
const current1EL = document.getElementById('current--1');
// 1.3
const diceEL = document.querySelector('.dice');
// 2.1
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
// 1.2
// score0EL.textContent = 0;
// score1EL.textContent = 0;
// // 1.4
// diceEL.classList.add('hidden');

// // Declaring variables
// // 3.2
// const scores = [0, 0];
// // 2.6
// let currentScore = 0;
// // 3.1
// let activePlayer = 0;
// // 4.7
// let playing = true;

// Declaring functions
// 4.3
const switchPlayer = () => {
    // 3.5
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    // 3.4
    activePlayer = activePlayer === 0 ? 1 : 0;
    // 3.7
    player0EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');
};

// 5.5
let scores, currentScore, activePlayer, playing;
// 5.4
const init = () => {
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0EL.textContent = 0;
    score1EL.textContent = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;

    diceEL.classList.add('hidden');
    player0EL.classList.remove('player--winner');
    player1EL.classList.remove('player--winner');
    player0EL.classList.add('player--active');
    player1EL.classList.remove('player--active');
};
init();

// Rolling dice functionality
// 2.2
btnRoll.addEventListener('click', function () {
    // 4.9
    if (playing) {
        // I. Generating a random dice roll
        // 2.3
        const dice = Math.trunc(Math.random() * 6) + 1;

        // II. Display dice
        // 2.4
        diceEL.classList.remove('hidden');
        diceEL.src = `dice-${dice}.png`;

        // III. Check for rolled 1
        // 2.5
        if (dice !== 1) {
            // Add dice to current score
            // 2.8
            currentScore += dice;
            //current0EL.textContent = currentScore;
            // 3.3
            document.getElementById(
                `current--${activePlayer}`
            ).textContent = currentScore;
        } else {
            // Switch to next player
            // // 3.5
            // document.getElementById(`current--${activePlayer}`).textContent = 0;
            // currentScore = 0;
            // // 3.4
            // activePlayer = activePlayer === 0 ? 1 : 0;
            // // 3.7
            // player0EL.classList.toggle('player--active');
            // player1EL.classList.toggle('player--active');
            switchPlayer();
        }
    }
});

// 4.1
btnHold.addEventListener('click', function () {
    // 4.10
    if (playing) {
        // I. Add current score to active player's score
        // 4.2
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent =
            scores[activePlayer];

        // II. check if player's score is >= 100
        // 4.5
        if (scores[activePlayer] >= 30) {
            // II.1 Finish the game
            // 4.8
            playing = false;
            // 4.10
            diceEL.classList.add('hidden');
            // 4.6
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.add('player--winner');
            document
                .querySelector(`.player--${activePlayer}`)
                .classList.remove('player--active');
        }
        // II.2 Switch to next player
        // 4.4
        switchPlayer();
    }
});

// 5.1
// btnNew.addEventListener('click', () => {
//     // I. Reset all socres to 0
//     // 5.2
//     // score0EL.textContent = 0;
//     // score1EL.textContent = 0;
//     // current0EL.textContent = 0;
//     // current1EL.textContent = 0;
//     // player0EL.classList.remove('player--winner');
//     // player1EL.classList.remove('player--winner');
//     // // 5.3
//     // player0EL.classList.add('player--active');
//     // player1EL.classList.remove('player--active');
//     // II. Set player 1 as starting player
// });
// 5.6
btnNew.addEventListener('click', init);
