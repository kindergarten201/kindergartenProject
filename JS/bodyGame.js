'use strict'

let parts=['arm','ear','eye','nose','leg','head','knee','teeth'];
let partsArr=['arm.jpg','ear.jpg','eye.jpg','head.jpg','leg.png','nose.jpg','teeth.png','knee.jpeg'];
let arm = document.getElementById('arm');
let ear = document.getElementById('ear');
let eye = document.getElementById('eye');
let nose = document.getElementById('nose');
let leg = document.getElementById('leg');
let head = document.getElementById('head');
let knee = document.getElementById('knee');
let teeth = document.getElementById('teeth');
let image=document.getElementById('hero')
let rounds=10;
let nameAlone=0;
let correct=0;
let i=0;




function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Body(name , src){
    this.name=name;
    this.src=src;
    Body.all.push(this);
  }
  Body.all=[];
for( let i = 0; i < partsArr.length; i++ ) {
  new Body( partsArr[i].split( '.' )[0], partsArr[i] );
  
}
console.log( Body.all );


function render(){
    
    if( i<rounds  ){
    let randomImage = random(0 , partsArr.length-1);
    nameAlone=partsArr[randomImage].split( '.' )[0];
    image.src = './/img/' + Body.all[randomImage].src;
    i++;
    console.log(i);
     //console.log(i)
    // console.log(partsArr[randomImage])
    }
    if (i==rounds){
      Swal.fire(
        'Good job!',
        `You Got ${correct} Answers Out Of ${rounds}!`,
        'success');
    } }
render();

buttons.addEventListener( 'click', clicked );
function clicked( event ) {
  if(i<rounds){
   if( event.target.id === nameAlone){
    Swal.fire(
        'Good job!',
        'You Got The Right Answer!',
        'success');
        correct++;
        render();}
   else if( event.target.id != nameAlone ) {
    Swal.fire(
        'Try Again',
        'You Got The Wrong Answer!',
        'error');
        render();
   }}
}



