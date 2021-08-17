
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let formMail = document.getElementById('email-form');

formMail.addEventListener('submit', subscribFun);
function subscribFun(event) {
  event.preventDefault();
  let userEmail = event.srcElement[0].value;
  
  if (userEmail.match(mailformat)) {
    Swal.fire('You are regesterd now');
  }
  else {
    Swal.fire(' please enter a valid email ');
  }
}
