
let navOpen = document.getElementsByClassName('btn');
let header = document.getElementById('h');

navOpen[0].addEventListener('click', openn);
function openn(e) {
  if (header.style.height === '200px') {
    header.style.height = '320px';
  }
  else {
    header.style.height = '200px';
  }
}
