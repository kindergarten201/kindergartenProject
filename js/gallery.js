'use strict'
let stars;
let formRev = document.getElementById('form');
formRev.addEventListener('submit',submithandler);
let scroll= document.getElementsByClassName('scroll');
function submithandler(event){
  event.preventDefault();
  let firstName = event.target.fname.value;
  let lastName = event.target.lname.value;
 
  let s1 = event.target.s1.checked;
  let s2 = event.target.s2.checked;
  let s3 = event.target.s3.checked;
  let s4 = event.target.s4.checked;
  let s5 = event.target.s5.checked;
 
  let comment = event.target.subject.value;
  // reviewStars(s1,s2,s3,s4,s5);
let nameEl = document.createElement('h3');
nameEl.textContent = ` ${firstName}   ${lastName} `;
scroll[0].appendChild(nameEl);

let revDate =new Date().getFullYear()+'-'+( new Date().getMonth()+1)+'-'+new Date().getDate();
let dateEl = document.createElement('h4');
dateEl.textContent = revDate;
scroll[0].appendChild(dateEl);

reviewStars(s1,s2,s3,s4,s5);
let commentEl = document.createElement('p');
commentEl.textContent = comment;
scroll[0].appendChild(commentEl);


console.log(event);
}

function getValue(radio) {
  stars=radio.value;

}

let x;
function reviewStars(s1,s2,s3,s4,s5){

  if (s1){
     x=1 ;
  }
  else if (s2){
     x= 2;
  }
    else if (s3){
       x= 3;
    }
  else if (s4){
     x= 4;
  }
  else if (s5){
     x= 5;
  }



  for (let i=0; i< x;i++){
    let span =document.createElement('span');
    span.classList = 'fa fa-star checked';
    scroll[0].appendChild(span);
  }
}
// reviewStars();

// let firstName1;
// function promptMe1() {
//     let firstName = prompt("PleaseType Your First Name?");
//     firstName1=firstName
//     alert (`Hello ${firstName} ☺️`);
// }
// let lastName;
// function promptMe2() {
//   lastName = prompt("Input your Last Name,please!");
  

// }
// let rate;
// function promptMe3() {
//     rate = prompt("Give us a Rate Out Of 5 ?");
//     while ( rate != 1 && rate != 2 && rate != 3 && rate != 4 && rate!= 5 ){
//       rate = prompt("Give us a Rate Out Of 5 ?");
//     }
  
//     alert (`your Rate is ${rate} Thank You!😃` );

// }

// let comment;
// function promptMe4() {
//      comment = prompt("If You Have Any Suggestions, Recommendations or just some nice words about us, please Type Here!🥰");
//     alert ('Taken!👌 Thank You 😊');
//     reviews();
// }
// function promptMe5() {
//   alert ('Just Wanted to see You one more time 😜 Never drop your SMILE 😃 Saty Safe 👋');
  
// }



// function reviews(){
//   if (!firstName1){
//     promptMe1();
//   }
//   if (!lastName){
//     promptMe2();
//   }
//   if (!rate){
//     promptMe3();
//   }
  
  

// let commentEl = document.createElement('p');
// commentEl.textContent = comment;
// scroll[0].appendChild(commentEl);

// firstName1 =undefined;
// lastName = undefined ;
// rate = undefined ;
// return;
// }



