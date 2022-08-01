'use strict';

//Selecting Elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');     /*getElementById is supposed to be a litter bit faster than querySelector
(Only revelent if you're selecting like thousands of elements at once) */
const diceEl = document.querySelector('.dice');

//Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
