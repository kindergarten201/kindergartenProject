'use strict';
let formEle = document.getElementById('Form');
let mainEle = document.getElementById('main');
let fieldset1 = document.getElementById('fieldset');
document.getElementById('hid1').style.display='none';
document.getElementById('hid').style.display='none';

function Registration(f_Name, l_Name, fa_Name, ma_Name, National, Num_National, Phone,Email,Address,   Age, Gender, healthy) {
  this.f_Name = f_Name
  this.l_Name = l_Name
  this.fa_Name = fa_Name
  this.ma_Name = ma_Name
  this.National = National
  this.Num_National = Num_National
  this.Phone = Phone 
  this.Email = Email
  this.Address = Address
  this.Age = Age
  this.Gender=Gender
  this.healthy=healthy
  Registration.obj.push(this)
}

Registration.obj = []
getItem();


main.addEventListener("submit", FormMethod)
function FormMethod(e) {
  e.preventDefault();
  

  let value1 = e.target.f_Name.value;
  let f_Name = validateFormName(value1)

  let value2 = e.target.l_Name.value;
  let l_Name = validateFormName(value2)

  let value3 = e.target.fa_Name.value;
  let fa_Name = validateFormName(value3)

  let value4 = e.target.ma_Name.value;
  let ma_Name = validateFormName(value4)
 
  let value5 = e.target.National.value;
    let National = validateFormName(value5)
  
 
 
  let check2 = document.getElementById('Num_National').value;
  let id1 = 'Num_National';
  let Num_National = validateFormNumber(check2, id1);
  let check1 = document.getElementById('Phone').value
  let id = 'Phone'
  let Phone = validateFormNumber(check1, id);
           
  let Email =  e.target.Email.value;

  let Address = e.target.Address.value;

 let Age = e.target.Age.value;

  var select = document.getElementById('Gender');
  var Gender = select.options[select.selectedIndex].value;

  let healthy = e.target.healthy.checked;




  
  //new Object
  let newRegistration = new Registration(f_Name, l_Name, fa_Name, ma_Name, National, Num_National,Phone, Email,Address,   Age, Gender, healthy);
  //if i need LocalStorge this is code convert ob to string and but to local Storge and when i need use must convert to object agein
  let savedData = JSON.stringify(Registration.obj)
  //  localStorage.data = JSON.stringify(Registration.obj);
  localStorage.setItem('Regist', savedData)
  DeleteForm();
  document.getElementById('hid1').style.display='block';
  document.getElementById('hid').style.display='block';
  
  Rendertbl();
  RenderTable2();
  //rendringlist()
 }
//  function DeleteForm()
function DeleteForm() {
  if (counter = 2) {
    document.getElementById('main').innerHTML = '';
    
    //  let fieldset = document.getElementById('fieldset')
    //  document.getElementById('main').remove(fieldset);

    // }
  }
  else{console.log(counter)}
}
//Rendertbl
let divtbl = document.getElementById('tbl')
function Rendertbl() {
  // for(let i=0 ;i<Registration.obj.length;i++)
  // 
  let tr1 = document.createElement('tr');
  divtbl.appendChild(tr1)

  let th1 = document.createElement('th');
  th1.textContent = 'Student ';
  tr1.appendChild(th1)

  let th2 = document.createElement('th');
  th2.textContent = 'Student Info ';
  tr1.appendChild(th2)

  let th3 = document.createElement('th');
  th3.textContent = 'Contact  ';
  tr1.appendChild(th3)
  let th4 = document.createElement('th');
  th4.textContent = 'Contact Info';
  tr1.appendChild(th4)


  let tr2 = document.createElement('tr');
  divtbl.appendChild(tr2)
  let td1 = document.createElement('td');
  td1.textContent = 'Student Name';
  tr2.appendChild(td1)
  let td2 = document.createElement('td');
  td2.textContent = Registration.obj[0].f_Name + "  " + Registration.obj[0].l_Name
  tr2.appendChild(td2)
  let td3 = document.createElement('td');
  //
  td3.textContent = ' Address  ';
  tr2.appendChild(td3)
  let td4 = document.createElement('td');
  td4.textContent = Registration.obj[0].Address;
  
  tr2.appendChild(td4)



  let tr3 = document.createElement('tr');
  tbl.appendChild(tr3)
  let td31 = document.createElement('td');
  td31.textContent = 'Parent Name ';
  tr3.appendChild(td31)
  let td32 = document.createElement('td');
  td32.textContent = Registration.obj[0].fa_Name + "\t" + Registration.obj[0].ma_Name
  tr3.appendChild(td32)
  let td33 = document.createElement('td');
  td33.textContent = 'Email';
  tr3.appendChild(td33)
  let td34 = document.createElement('td');
  td34.textContent = Registration.obj[0].Email;
  tr3.appendChild(td34)


  let tr4 = document.createElement('tr');
  tbl.appendChild(tr4)
  let td41 = document.createElement('td');
  td41.textContent = ' National Number';
  tr4.appendChild(td41)
  let td42 = document.createElement('td');
  td42.textContent = Registration.obj[0].Num_National;
  tr4.appendChild(td42)
  let td43 = document.createElement('td');
  td43.textContent = ' Phone';
  tr4.appendChild(td43)
  let td44 = document.createElement('td');
  td44.textContent = Registration.obj[0].Phone;
  tr4.appendChild(td44)


  let tr5 = document.createElement('tr');
  tbl.appendChild(tr5)
  let td51 = document.createElement('td');
  td51.textContent = ' National';
  tr5.appendChild(td51)
  let td52 = document.createElement('td');
  td52.textContent = Registration.obj[0].National;
  tr5.appendChild(td52)
  let td53 = document.createElement('td');
  td53.textContent = 'Number of Student';
  tr5.appendChild(td53)
  let td54 = document.createElement('td');
  td54.textContent = Registration.obj.length;
  tr5.appendChild(td54)

  let tr6 = document.createElement('tr');
  tbl.appendChild(tr6)
  let td61 = document.createElement('td');
  td61.textContent = ' Total';
  tr6.appendChild(td61)
  let td62 = document.createElement('td');
  td62.textContent = '300 JD';
  tr6.appendChild(td62)
  let td63 = document.createElement('td');
  td63.textContent = 'Student id';
  tr6.appendChild(td63)
  let td64 = document.createElement('td');
  td64.textContent = randomNumber()
  tr6.appendChild(td64)
  //}

}
let table2 = document.getElementById('tbl2')
function RenderTable2() {
  let tr1 = document.createElement('tr')
  table2.appendChild(tr1)

  let th1 = document.createElement('th')
  th1.textContent = 'Student Name'
  tr1.appendChild(th1)

  //  let th3=document.createElement('th')
  //  th3.textContent='Student Of Number'
  //  tr1.appendChild(th3)
  for (let i = 0; i < Registration.obj.length; i++) {
    let tr2 = document.createElement('tr')
    table2.appendChild(tr2)

    let td2 = document.createElement('td');
    td2.textContent = Registration.obj[i].f_Name + " \t" + Registration.obj[i].fa_Name + " \t " + Registration.obj[i].l_Name
    tr2.appendChild(td2)


    // let td4 = document.createElement('td');
    // td4.textContent = Registration.obj[i].length;
    // tr2.appendChild(td4)



  }
}
function randomNumber() {
  return (Math.floor(Math.random() * (9999999999 - 1111111111 + 1) + 1111111111));
}
// std class
let counter = 0;
// let stdCounter = 0;
// function counter(x)
// if (x < 30) {
//   return "Class A"+""+x;
// }
// else if (x < 60) {
//   return "Class B"+""+x
// }
// else if (x < 90) {
//   return "Class B"+""+x
// }
// else if (x < 120) {
//   return "Class B"+""+x
// }





// validation for Name
function validateFormName(test) {
  for (let i = 0; i < test.length; i++)
    if (Number.isInteger(Number(test[i]))) {
      document.getElementById("f_Name").style.borderColor = "red";
     // alert("First Name And Last Name must dont have numbers ")
     Swal.fire(
      'Try Again!',
      'First Name And Last Name must dont have numbers',
      'warning');
     break;

    }
    else {
      counter++;
      return test;
    }
}
// validation for Name
function validateFormNumber(testNumber, id) {
  if (testNumber.length != 10) {
    document.getElementById(id).style.borderColor = "red";
    //alert(id + "This field must contain 10 numbers")
    Swal.fire(
      'Try Again!',
      id + 'This field must contain 10 numbers',
      'warning');
      
  } else {
    counter++;
    return testNumber;

  }


}
function getItem() {
  let item = localStorage.getItem('Regist');
  let displayItem = JSON.parse(item)
  if (displayItem && displayItem.length) {
    Registration.obj = displayItem
    return;
  }

}
let divlist=document.getElementById('list')

// function rendringlist()
// {  
//   let h1E=document.createElement('h1');
  
//    divlist.appendChild(h1E);

//    let olE1=document.createElement('ol');
//     divlist.appendChild(olE1);

//     let liE1=document.createElement('li');
//      liE1.textContent ='Birth date certificate'
//      olE1.appendChild(liE1);
 
//      let liE2=document.createElement('li');
//      liE2.textContent ='Two Personal Photo'
//      olE1.appendChild(liE2);
 
//      let liE3=document.createElement('li');
//      liE3.textContent ='Vaccine certificates'
//      olE1.appendChild(liE3);
//      let liE4=document.createElement('li');
//      liE4.textContent ='parents personal identification'
//      olE1.appendChild(liE4);

//      let h2E=document.createElement('h1');
//      divlist.appendChild(h2E);

//     let olE2=document.createElement('ol');
//     divlist.appendChild(olE2);

//      let liE11=document.createElement('li');
//      liE11.textContent ='Birth date certificate'
//      olE2.appendChild(liE11);
 
//      let liE12=document.createElement('li');
//      liE12.textContent ='Two Personal Photo'
//      olE2.appendChild(liE12);
 
//      let liE13=document.createElement('li');
//      liE13.textContent ='Vaccine certificates'
//      olE2.appendChild(liE13);
     
//      let liE14=document.createElement('li');
//      liE14.textContent ='parents personal identification'
//      olE2.appendChild(liE14);
 
// }
