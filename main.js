'use strict';

const btnSelect = document.querySelector('.btnSelect');

function getRandomEvilRace(max) {
    let race = '';   
    let randomNumber = Math.ceil(Math.random() * max);
    if (randomNumber === 1) {
        race = 'Sureños malos con fuerza (2)';
    }
    else if (randomNumber === 2) {
        race = 'Orcos con fuerza (2)';
    }
    else if (randomNumber === 3) {
        race = 'Goblins con fuerza (2)';
    }
    else if (randomNumber === 4) {
        race = 'Huargos con fuerza (3)';
    }
    else {
        race = 'Trolls con fuerza(5)';
    }   
    return race;
} 

const finalEvilRace = getRandomEvilRace(5);
