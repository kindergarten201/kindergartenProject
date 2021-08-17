'use strict'
let numbers=['1','2','3','4','5','6','7','8','9','0'];
let numArr=['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg','8.jpg','9.jpg','0.jpg'];
let one= document.getElementById('1');
let two= document.getElementById('2');
let three= document.getElementById('3');
let four= document.getElementById('4');
let five= document.getElementById('5');
let six= document.getElementById('6');
let seven= document.getElementById('7');
let eight= document.getElementById('8');
let nine= document.getElementById('9');
let ten= document.getElementById('0');
let plus= document.getElementById('plus');
let minus= document.getElementById('minus');
let img=document.getElementById('numImg');
let submitter= document.getElementById('submit');
let answerr= document.getElementById('answer');
let answers;
let i=0;
let previous=[];
let rounds=12;
let correct=0;
let nameAlone=0;



function random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function Numbers(name , src){
    this.name=name;
    this.src=src;
    Numbers.all.push(this);
  }

  Numbers.all=[];
for( let k = 0; k < numArr.length; k++ ) {
  new Numbers( numArr[k].split( '.' )[0], numArr[k] );
}
//console.log( Number.all );

let randomNum;
function render() {
    randomNum= random(0, (numArr.length - 1)); 
    
do {
    randomNum= random(0, (numArr.length - 1));
    console.log(randomNum);
    
    nameAlone=numArr[randomNum].split( '.' )[0];
}
while( randomNum == previous[previous.valuelength-1]);

nameAlone=numArr[randomNum].split( '.' )[0];
img.src = '../img/' + Numbers.all[randomNum].src;
previous.push(answer.value);

console.log(previous);

answerr.value='';
  }
  render();

submitter.addEventListener( "click", addAnswer );
function addAnswer(event){
    answers=answer.value;
    //console.log(answers);

    
   
    if (answers == numbers[randomNum] && i<rounds){
        Swal.fire(
            'Good job!',
            'You Got The Right Answer!',
            'success');
            correct++;
            i++;
            render();
            // console.log(answerr);
            // console.log(answerr); 
            
        }
    else if (answers == ''){
        Swal.fire(
            'Try Again!',
            'Please Enter a One Digit Positive Value',
            'warning');
    }

    else if(answers != numbers[randomNum] && i<rounds ) {
            Swal.fire(
            'Try Again',
            'try in the next question',
            'error');
            render();
            i++;
            // console.log(numbers[randomNum]);
            // console.log(answers);    
    }

else if (i=rounds){
    Swal.fire(`you Scored ${correct} Out Of ${rounds}`)}
 
}


/// for the calculator
let n1= document.getElementById("n1");
let n2= document.getElementById("n2");
let results= document.getElementById("results");

plus.addEventListener( 'click' , addition );
function addition(event){
    if (n1.value<=9 && n2.value<=9 && n1.value>=0 && n2.value>=0){
    let sum = Number(n1.value) + Number(n2.value);
    results.textContent=sum;}
    
    else { Swal.fire(
        'Try Again!',
        'One digit calculator only!',
        'warning');
    results.textContent='Result';
    n1.value='';
    n2.value=''; }
    //console.log(results);

}
alert
minus.addEventListener( 'click' , subtract );
function subtract(event){
    let sub;
    if (n1.value<=9 && n2.value<=9 && n1.value>=0 && n2.value>=0){
    if (n1.value >= n2.value){
    sub = Number(n1.value) - Number(n2.value);
    results.textContent=sub;}
    else {Swal.fire(
        'Try Again!',
        'First number should be bigger than the second number!',
        'warning');
        
results.textContent='Result';
n1.value='';
n2.value='';}}
else { 
Swal.fire(
    'Try Again!',
    'One digit calculator only!',
    'warning');
    results.textContent='Result';
    n1.value='';
    n2.value='';}
    
    //console.log(results);
}


clear.addEventListener( 'click' , cleared );
function cleared(event){
    console.log(event)
    // if ()
    results.textContent='Result';
    n1.value='';
    n2.value='';
    


}

