'use strict';
const moles = document.querySelectorAll('.mole >img');
const gameFilld = document.querySelector('.game-filld');
const start = document.querySelector('.start');
const score = document.querySelector('.score');
let counter = null;
let lastMole = null;
let timeUp = false;

window.addEventListener('mousedown', (e) => {
    e.preventDefault();
})
start.addEventListener('click',startGame);

gameFilld.addEventListener('click', (e) => {
    const mole = e.target.closest('img');
    if(mole)changeScore();
})

function randomTime(min,max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomeMole()  {
    const index = Math.floor(Math.random() * moles.length)
    const mole = moles[index];
    if(lastMole === mole) {
       return randomeMole()
    }    

    lastMole = mole;

    return mole
}

function toggleMole() {
    const mole = randomeMole();
    const time = randomTime(200,1000);
    mole.classList.add('show-mole');
    setTimeout(() => {
        mole.classList.remove('show-mole');
        if(!timeUp) toggleMole();
    },time);
}

function startGame() {
    timeUp = false;
    resetScore();
    toggleMole();
    setTimeout(() => timeUp = true, 10000)
}

function changeScore() {
    counter++;
    score.textContent = counter
}
function resetScore() {
    counter = 0;
    score.textContent = 0;
}