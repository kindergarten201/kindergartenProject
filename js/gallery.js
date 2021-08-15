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

 
document.querySelector('button1').addEventListener('click', promptMe1());
document.querySelector('button2').addEventListener('click', promptMe2());
document.querySelector('button3').addEventListener('click', promptMe3());
document.querySelector('button4').addEventListener('click', promptMe4());
document.querySelector('button5').addEventListener('click', promptMe5());

var firstName1;
function promptMe1(evt) {
    var firstName = prompt("PleaseType Your First Name?");
    firstName1=firstName
    alert (`Hello ${firstName} ☺️`);
 evt.preventDefault();
 return promptMe1();
}

function promptMe2(evt) {
  var lastName = prompt("Input your Last Name,please!");
  alert ("Welcome To Our Website "+ firstName1 +" "+lastName +" 😃");
evt.preventDefault();
return promptMe2();
}

function promptMe3(evt) {
    var rate = prompt("Give us a Rate Out Of 5 ?");
    while ( rate != 1 && rate != 2 && rate != 3 && rate != 4 && rate!= 5 ){
      rate = prompt("Give us a Rate Out Of 5 ?");
    }
   
    alert (`your Rate is ${rate} Thank You!😃` );
 evt.preventDefault();
 return promptMe3();
}

function promptMe4(evt) {
    var comment = prompt("If You Have Any Suggestions, Recommendations or just some nice words about us, please Type Here!🥰");
    alert ('Taken!👌 Thank You 😊');
 evt.preventDefault();
 return promptMe4();
}
function promptMe5(evt) {
  alert ('Just Wanted to see You one more time 😜 Never drop your SMILE 😃 Saty Safe 👋');
  
evt.preventDefault();
return promptMe5();
}