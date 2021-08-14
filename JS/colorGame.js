'use strict'
let colors=['green', 'blue', 'red', 'yellow', 'black', 'white', 'purple'];
let colorArr=[
  'black.jpg',
  'blue.jpg',
  'green.jpg',
  'purple.jpg',
  'red.jpg',
  'white.jpg',
  'yellow.png'
];

const imageSection = document.getElementById( 'imageSection' );
let leftImage = document.getElementById('left');
let middleImage = document.getElementById('middle');
let rightImage = document.getElementById('right');
let ques= document.getElementById('question');
let nameee=0;
let k=[];

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function Color(name , src){
  this.name=name;
  this.src=src;
  Color.all.push(this);
}

Color.all=[];
for( let i = 0; i < colorArr.length; i++ ) {
  new Color( colorArr[i].split( '.' )[0], colorArr[i] );
}

console.log( Color.all );

function render() {
      let middleRandom = random(0, (colorArr.length - 1));
      let rightRandom;
      let leftRandom;
       
  do {
    leftRandom   = random(0, (colorArr.length - 1));
    rightRandom  = random(0, (colorArr.length - 1)); 
  }
  while(leftRandom === rightRandom || leftRandom === middleRandom || rightRandom === middleRandom);
  


  leftImage.src = '../img/' + Color.all[leftRandom].src;
  middleImage.src = '../img/' + Color.all[middleRandom].src;
  rightImage.src = '../img/' + Color.all[rightRandom].src;

  let k=[leftRandom, middleRandom, rightRandom];

  for(let i=0; i<3; i++){
    console.log(k[i])
    nameee=colorArr[k[i]].split( '.' )[0];
    ques.textContent= ` which one is the color ${nameee} ?`
  }
  
    //console.log(ques);

    
    

  


  
}

render();

imageSection.addEventListener( 'click', clicker );
function clicker( event ) {
  if( (( event.target.id === 'left' || event.target.id === 'middle' ||  event.target.id === 'right')) ) {
        render();
  } 

}








