'use strict';

const btnSelect = document.querySelector('.btnSelect');
const battleBtn = document.querySelector('.battleBtn');
const battleText = document.querySelector('.battleText');

function getRandomEvilRace(max) {
    let race = '';   
    let randomNumber = Math.ceil(Math.random() * max);
    if (randomNumber === 1) {
        race = 2;
    }
    else if (randomNumber === 2) {
        race = 2;
    }
    else if (randomNumber === 3) {
        race = 2;
    }
    else if (randomNumber === 4) {
        race = 3;
    }
    else {
        race = 5;
    }   
    return race;
} 

const finalEvilRace = getRandomEvilRace(5);

let player = 0;
let computer = 0;
battleBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let result = '';
    if (btnSelect.value > finalEvilRace) {
        result = 'Ha ganado el Ejército del Bien! Enhorabuena.';
    } 
    else if (finalEvilRace > btnSelect.value) {
        result = 'Ha ganado el Ejército del Mal! Vuelve a Intentarlo.';
    } 
    else {
        result = 'Empate';
    } 
    console.log(result);
    battleText.innerHTML = result;
});

