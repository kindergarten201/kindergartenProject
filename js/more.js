

let container = document.getElementById('sec-1');

let isOpend = 0;

let names = ['Happy Mirror:', 'Happy Wheel:', 'Making Ice Cream:'];
let discriptions =
  [
    'Home activity designed for learning the geometric shapes: circle,squareand triangle. It helps children ages 4 to 6 to develop the skills of perseverance, observation and focus.'
    , 'An interactive game for children ages 4 to 6 through which they practice endurance and learn sorting by shape, color and size.'
    , ' By making ice cream boxes and balloons of the right colour, children aged 3 to 6 develop the ability to find their own approaches to solving problems'
  ];
let vidSrcs =
  ['https://www.youtube.com/embed/Kn_G6zN83_0'
    , 'https://www.youtube.com/embed/0dQrNrOzaKQ'
    , 'https://www.youtube.com/embed/Pc7GZoqAznE'
  ];


function Activitys(name, dis, vidSrc) {
  this.name = name;
  this.dis = dis;
  this.vidSrc = vidSrc;
  Activitys.allActivitis.push(this);
}
Activitys.allActivitis = [];

for (let index = 0; index < names.length; index++) {
  new Activitys(names[index], discriptions[index], vidSrcs[index]);
}

//////////////////////////////////////////// mirror section //////////////////////////////////////////////////////////
////mirrorBtn.addEventListener('click', mirrorSecCreate);

function mirrorSecCreate() {
  let check = document.getElementsByClassName('sec-1-1');


  if (check[0]) {
    check[0].parentNode.innerHTML = '';

    if (isOpend !== 1) {
      isOpend = 1;
      let sec2 = document.createElement('section');
      sec2.className = 'sec-1-2';
      container.appendChild(sec2);
      let vid = document.createElement('iframe');
      vid.width = '570';
      vid.height = '322';
      vid.src = vidSrcs[0];
      vid.allowfullscreen = '';
      vid.frameborder = '0';
      sec2.appendChild(vid);

      let sec1 = document.createElement('section');
      sec1.className = 'sec-1-1';
      container.appendChild(sec1);
      let h4 = document.createElement('h4');
      h4.textContent = names[0];
      sec1.appendChild(h4);
      let p = document.createElement('p');
      p.textContent = discriptions[0];
      sec1.appendChild(p);
    }
  } else {
    isOpend = 1;


    let sec2 = document.createElement('section');
    sec2.className = 'sec-1-2';
    container.appendChild(sec2);
    let vid = document.createElement('iframe');
    vid.width = '570';
    vid.height = '322';
    vid.src = vidSrcs[0];
    vid.allowfullscreen = '';
    vid.frameborder = '0';
    sec2.appendChild(vid);

    let sec1 = document.createElement('section');
    sec1.className = 'sec-1-1';
    container.appendChild(sec1);
    let h4 = document.createElement('h4');
    h4.textContent = names[0];
    sec1.appendChild(h4);
    let p = document.createElement('p');
    p.textContent = discriptions[0];
    sec1.appendChild(p);
  }
}

/////////////////////////////////////// wheel section /////////////////////////////////////////////////////////////////

//wheelBtn.addEventListener('click', wheelSecCreate);

function wheelSecCreate() {
  let check = document.getElementsByClassName('sec-1-1');


  if (check[0]) {
    check[0].parentNode.innerHTML = '';

    if (isOpend !== 2) {
      isOpend = 2;


      let sec2 = document.createElement('section');
      sec2.className = 'sec-1-2';
      container.appendChild(sec2);
      let vid = document.createElement('iframe');
      vid.width = '570';
      vid.height = '322';
      vid.src = vidSrcs[1];
      vid.allowfullscreen = '';
      vid.frameborder = '0';
      sec2.appendChild(vid);

      let sec1 = document.createElement('section');
      sec1.className = 'sec-1-1';
      container.appendChild(sec1);
      let h4 = document.createElement('h4');
      h4.textContent = names[1];
      sec1.appendChild(h4);
      let p = document.createElement('p');
      p.textContent = discriptions[1];
      sec1.appendChild(p);
      sec2.appendChild(vid);
    }
  } else {
    isOpend = 2;


    let sec2 = document.createElement('section');
    sec2.className = 'sec-1-2';
    container.appendChild(sec2);
    let vid = document.createElement('iframe');
    vid.width = '570';
    vid.height = '322';
    vid.src = vidSrcs[1];
    vid.allowfullscreen = '';
    vid.frameborder = '0';
    sec2.appendChild(vid);

    let sec1 = document.createElement('section');
    sec1.className = 'sec-1-1';
    container.appendChild(sec1);
    let h4 = document.createElement('h4');
    h4.textContent = names[1];
    sec1.appendChild(h4);
    let p = document.createElement('p');
    p.textContent = discriptions[1];
    sec1.appendChild(p);
  }
}

/////////////////////////////////// ice cream section ////////////////////////////////////////////////////////////////////


//iceCreamBtn.addEventListener('click', iecSecCreate);

function iecSecCreate() {
  let check = document.getElementsByClassName('sec-1-1');

  if (check[0]) {
    check[0].parentNode.innerHTML = '';

    if (isOpend !== 3) {
      isOpend = 3;


      let sec2 = document.createElement('section');
      sec2.className = 'sec-1-2';
      container.appendChild(sec2);
      let vid = document.createElement('iframe');
      vid.width = '570';
      vid.height = '322';
      vid.src = vidSrcs[2];
      vid.allowfullscreen = '';
      vid.frameborder = '0';
      sec2.appendChild(vid);

      let sec1 = document.createElement('section');
      sec1.className = 'sec-1-1';
      container.appendChild(sec1);
      let h4 = document.createElement('h4');
      h4.textContent = names[2];
      sec1.appendChild(h4);
      let p = document.createElement('p');
      p.textContent = discriptions[2];
      sec1.appendChild(p);
    }
  } else {
    isOpend = 3;


    let sec2 = document.createElement('section');
    sec2.className = 'sec-1-2';
    container.appendChild(sec2);
    let vid = document.createElement('iframe');
    vid.width = '570';
    vid.height = '322';
    vid.src = vidSrcs[2];
    vid.allowfullscreen = '';
    vid.frameborder = '0';
    sec2.appendChild(vid);

    let sec1 = document.createElement('section');
    sec1.className = 'sec-1-1';
    container.appendChild(sec1);
    let h4 = document.createElement('h4');
    h4.textContent = names[2];
    sec1.appendChild(h4);
    let p = document.createElement('p');
    p.textContent = discriptions[2];
    sec1.appendChild(p);
  }
}
