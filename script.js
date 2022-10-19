'use strict';

//Creating variables and selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold= document.querySelector('.btn--hold');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('# current--1');
//Starting points


score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let currentScore = 0
//Adding the roll dice functionality

btnRoll.addEventListener('click', function(){
    // Generate the Random Dice Rolled
   const dice = Math.floor(Math.random() * 6) + 1;

    // Display the Dice Image
    diceEl.classList.remove('hidden')
    diceEl.src = `dice-${dice}.png`
  
    // Check if the rolled dice is a 1 and implement functionality
    if (dice !== 1){
        currentScore = currentScore + dice
        current0El.textContent = currentScore
    } else {

    }
})