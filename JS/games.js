'use strict'
const game1= document.getElementById('game1');
const game2= document.getElementById('game2');
const game3= document.getElementById('game3');
const game4= document.getElementById('game4');

game1.addEventListener("click", alphaGame);
function alphaGame(){
    window.location.replace('alphaGame.html');
}

game2.addEventListener("click", colorGame);
function colorGame(){    
    window.location.replace('colorGame.html');
}

game3.addEventListener("click", numGame);
function numGame(){
    window.location.replace('numGame.html');
}

game4.addEventListener("click", bodyGame);
function bodyGame(){
    window.location.replace('bodyGame.html');
}


