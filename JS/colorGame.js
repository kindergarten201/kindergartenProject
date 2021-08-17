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
let middleRandom;
let rightRandom;
let leftRandom;
       

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
      middleRandom = random(0, (colorArr.length - 1));
      
       
  do {
    leftRandom   = random(0, (colorArr.length - 1));
    rightRandom  = random(0, (colorArr.length - 1)); 
  }
  while(leftRandom === rightRandom || leftRandom === middleRandom || rightRandom === middleRandom);
  


  leftImage.src = '../img/' + Color.all[leftRandom].src;
  middleImage.src = '../img/' + Color.all[middleRandom].src;
  rightImage.src = '../img/' + Color.all[rightRandom].src;

  let k=[leftRandom, middleRandom, rightRandom];

  let i=random(0, 2);
    nameee=colorArr[k[i]].split( '.' )[0];
    ques.textContent= ` which one is the color ${nameee} ?`
  
  
    //console.log(nameee);

    
}

render();

imageSection.addEventListener( 'click', clicker );
function clicker( event ) {
  console.log(nameee)
  console.log(Color.all[middleRandom].name)
  console.log(Color.all[rightRandom].name)
  console.log(Color.all[leftRandom].name)

   if( (( event.target.id === 'left' && nameee===Color.all[leftRandom].name ))){
    Swal.fire(
      'Good job!',
      'You Got The Right Answer!',
      'success');
      render();
   }
  
   else if(((event.target.id === 'middle' && nameee===Color.all[middleRandom].name)) ){
    Swal.fire(
      'Good job!',
      'You Got The Right Answer!',
      'success');
      render();
   }
   
  else if(((event.target.id === 'right' && nameee===Color.all[rightRandom].name ))){
    Swal.fire(
      'Good job!',
      'You Got The Right Answer!',
      'success');
      render();
  }
        else {
          Swal.fire(
            'Try Again',
            'You Got The Wrong Answer!',
            'error');
        }
   } 

  