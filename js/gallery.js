'use strict'
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 3500);    
}

let firstName1;
function promptMe1() {
    let firstName = prompt("PleaseType Your First Name?");
    firstName1=firstName
    alert (`Hello ${firstName} ☺️`);
}
let lastName;
function promptMe2() {
  lastName = prompt("Input your Last Name,please!");
  alert ("Welcome To Our Website "+ firstName1 +" "+lastName +" 😃");

}
let rate;
function promptMe3() {
    rate = prompt("Give us a Rate Out Of 5 ?");
    while ( rate != 1 && rate != 2 && rate != 3 && rate != 4 && rate!= 5 ){
      rate = prompt("Give us a Rate Out Of 5 ?");
    }
  
    alert (`your Rate is ${rate} Thank You!😃` );

}

let comment;
function promptMe4() {
     comment = prompt("If You Have Any Suggestions, Recommendations or just some nice words about us, please Type Here!🥰");
    alert ('Taken!👌 Thank You 😊');
    reviews();
}
function promptMe5() {
  alert ('Just Wanted to see You one more time 😜 Never drop your SMILE 😃 Saty Safe 👋');
  
}

function userReview(userName1,userlastName,userRate,userComment,userDate){
  this.userName1=userName1;
  this.userlastName = userlastName ;
  this.userRate = userRate ;
  this.userComment = userComment ;
  this.userDate = userDate;
  userReview.all.push(this);
  }
  userReview.all=[];
  


function reviews(){
  if (!firstName1){
    promptMe1();
  }
  if (!lastName){
    promptMe2();
  }
  if (!rate){
    promptMe3();
  }
  
  let scroll= document.getElementsByClassName('scroll');
let nameEl = document.createElement('h2');
nameEl.textContent = ` ${firstName1}   ${lastName} `;
scroll[0].appendChild(nameEl);

let revDate =new Date().getFullYear()+'-'+( new Date().getMonth()+1)+'-'+new Date().getDate();
let dateEl = document.createElement('h3');
dateEl.textContent = revDate;
scroll[0].appendChild(dateEl);

for (let i=0; i< Number(rate);i++){
  let span =document.createElement('span');
  span.classList = 'fa fa-star checked';
  scroll[0].appendChild(span);
}


let commentEl = document.createElement('p');
commentEl.textContent = comment;
scroll[0].appendChild(commentEl);

firstName1 =undefined;
lastName = undefined ;
rate = undefined ;
return;
}



