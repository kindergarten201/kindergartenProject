'use strict'
let alpha=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let rounds=10;
let answer= document.getElementById('answer');
let answers=[];
let ques= document.getElementById('question');
let button= document.getElementById('one');
let sub= document.getElementById('submit');
let clicks=0;
let i=0;
let index=0;
let correct=0;


function Random(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

button.addEventListener( 'click' , genQues );

function genQues (){
    
    clicks++
    if (clicks == 1)
    button.textContent= 'Next Question';
    if(i<=rounds){
    index=Random( 1 , alpha.length-1 );
    ques.textContent= 'what is the alphabet before   ' + alpha[index]+ ' ?';
    //console.log(index)
    i++;
    document.getElementById('answer').value = "";
    
     
}}

//genQues();

sub.addEventListener( "click", addAnswer );
function addAnswer(Event){
    if(i<=rounds){
    answers.push(answer.value)
    //console.log(answers);
    if (alpha[index-1] == answers[answers.length-1]){
        Swal.fire(
            'Good job!',
            'You Got The Right Answer!',
            'success');
            correct++;
            genQues();
        }
    else if (answers[answers.length-1] == ''){
        alert('Please Enter a Letter')
    }
    else if(alpha[index-1] != answers[answers.length-1]) {
        
        Swal.fire(
            'Try Again',
            'Hint: we only accept letters in this box',
            'error');
            
    }

}
else {
    Swal.fire(
        'Good job!',
        `You Got ${correct}  Correct Answers!`,
        'success');
}
}