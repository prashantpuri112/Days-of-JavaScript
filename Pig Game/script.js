'use strict';

//Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');     /*getElementById is supposed to be a litter bit faster than querySelector
(Only revelent if you're selecting like thousands of elements at once) */
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('.hidden');

let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {

    //1. Generating a randon dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display Dice
    diceEl.classList.remove('.hidden');
    diceEl.src = `dice-${dice}.png`;  //Manipulating Src property


    //3. Check for rolled 1
    if (dice !== 1) {
        //Add dice to current score
        currentScore += dice;
        current0El.textContent = currentScore;


    } else {
        //switch to next player

    }
});