'use strict';
// Selecting Elements
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
const score1 = document.querySelector('#score--0');
const current1 = document.querySelector('#current--0');
const score2 = document.querySelector('#score--1');
const current2 = document.getElementById('current--1');
const cScore = document.querySelectorAll('.current-score');
const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
score1.textContent = 0;
score2.textContent = 0;
dice.classList.remove('hidden');
const scores = [0, 0];
let currentScore = 0;
let totalScore = 0;
let activePlayer = 0;
let selectActive = document.getElementById(`current--${activePlayer}`);
let gameEnd = false;

const switchPlayer = function () {
  //switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
};

// Rolling dice function
btnRoll.addEventListener('click', function () {
  if (gameEnd === false) {
    // 1. Generating dice function
    let dNumber = Math.trunc(Math.random() * 6) + 1;
    // 2. Display dice
    dice.classList.remove('hidden');
    dice.src = `dice-${dNumber}.png`;
    // 3. Check for rolled 1
    if (dNumber !== 1) {
      currentScore += dNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      //selectActive.textContent = currentScore;
      //current1.textContent = currentScore;
    } else {
      switchPlayer();
    }
  } else alert('You have win the game, press try again!');
});

btnHold.addEventListener('click', function () {
  if (gameEnd === false) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    //2. check the player meet 100 scores
    if (scores[activePlayer] >= 100) {
      gameEnd = true;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      document.querySelector('body').style.background = '#2f2f2f';
      console.log('you win');
      dice.classList.add('hidden');
    } else {
      switchPlayer();
    }
  } else alert('You have win the game, press try again!');
  //3. switch player
});

btnNew.addEventListener('click', function () {
  //reset game state
  gameEnd = false;
  scores[0] = 0;
  scores[1] = 0;
  //reset ui
  document.querySelector('body').style.background = '#c7365f';
  dice.classList.remove('hidden');
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
  activePlayer = 0;
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add('player--active');
  //reset scores
  currentScore = 0;
  player1El.classList.add('player--active');
  player2El.classList.remove('player--active');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
});

/*
const switchPlayer = function () {
  //switch to next player
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
};
*/
