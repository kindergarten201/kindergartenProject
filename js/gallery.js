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
  setTimeout(carousel, 2500);    
}

 
        $(function () {
            $("#h").load("header.html");
        });

        var Index = 0;
        car();
        function car() {
          var i;
          var x = document.getElementsByClassName("mySlides2");
          for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
          }
          Index++;
          if (Index > x.length) {Index = 1}    
          x[Index-1].style.display = "block";  
          setTimeout(car, 2000); // Change image every 2 seconds
        }