'use strict';

//Selecting Elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');     /*getElementById is supposed to be a litter bit faster than querySelector
(Only revelent if you're selecting like thousands of elements at once) */
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

/*
// Starting conditions

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('.hidden');

const scores = [0, 0];
let currentScore = 0; //Else condition in line 38, if the dice roll 1 it becames 0
let activePlayer = 0;
let playing = true;
*/

let scores, currentScore, activePlayer, playing;
// Starting conditions

const init = function () {

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score0El.textContent = 0;
    score1El.textContent = 0;

    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('.hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

init(); //Executing all the code inside the function

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;  //reassigning the active player, if it is player 0 switching it to the player 1 (ViceVersa)

    //Basically switching background shades to define active player
    player0El.classList.toggle('player--active')    //toggle will add the class if it is not there and remove it, if it is there
    player1El.classList.toggle('player--active')
}

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        //1. Generating a randon dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        //2. Display Dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;  //Manipulating Src property


        //3. Check for rolled 1
        if (dice !== 1) {
            //Add dice to current score

            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore

        } else {
            //switch to next player
            switchPlayer();
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        //1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        // scores[1]=scores[1]+currentScore
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

        //2. Check if player's score is >=100
        if (scores[activePlayer] >= 100) {
            //Finish the game
            playing = false;
            diceEl.classList.add('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            //Switch to the next player
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);