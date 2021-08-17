'use strict';
let formEle = document.getElementById('Form');
let mainEle = document.getElementById('main');
let fieldset1 = document.getElementById('fieldset');


function Registration(f_Name, l_Name, fa_Name, ma_Name, National, Num_National, Phone, Email, Address, Age, Gender, Healthy) {
  this.f_Name = f_Name
  this.l_Name = l_Name
  this.fa_Name = fa_Name
  this.ma_Name = ma_Name
  this.Nationa = National
  this.Num_Nationa = Num_National
  this.Phone = Phone
  this.Email = Email
  this.Address = Address
  this.Age = Age
  this.Gender = Gender
  this.Healthy = Healthy

  Registration.obj.push(this)
}



Registration.obj = []

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

  let Address = e.target.Address.value;
  let Email = e.target.Email.value;

  let check1 = document.getElementById('Phone').value
  let id = 'Phone'
  let Phone = validateFormNumber(check1, id);

  let check2 = document.getElementById('National_Num').value;
  let id1 = 'National_Num';
  let National_Num = validateFormNumber(check2, id1);

  let Age = e.target.Age.value;
  var select = document.getElementById('Gender');
  var Gender = select.options[select.selectedIndex].value;
  let healthy = e.target.healthy.checked;
 
  //new Object
  let newRegistration = new Registration(f_Name, l_Name, fa_Name, ma_Name, Address, Email, Phone, National, National_Num, Age, Gender, healthy);
  //if i need LocalStorge this is code convert ob to string and but to local Storge and when i need use must convert to object agein
  localStorage.data = JSON.stringify(Registration.obj);
 
  DeleteForm();
  Rendertbl();
  RenderTable2();
}

//  function DeleteForm()
function DeleteForm() {
  if (counter = 2) {
    document.getElementById('main').innerHTML = '';
    //  let fieldset = document.getElementById('fieldset')
    //  document.getElementById('main').remove(fieldset);

    // }
  }
}


//Rendertbl
let divtbl = document.getElementById('tbl')
function Rendertbl() {
  let data = JSON.parse(localStorage.data);

  let tr1 = document.createElement('tr');
  tbl.appendChild(tr1)

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
  tbl.appendChild(tr2)
  let td1 = document.createElement('td');
  td1.textContent = 'Student Name';
  tr2.appendChild(td1)
  let td2 = document.createElement('td');
  td2.textContent = Registration.obj[0].f_Name + "" + Registration.obj[0].l_Name
  tr2.appendChild(td2)
  let td3 = document.createElement('td');
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
  td32.textContent = Registration.obj[0].fa_Name + "" + Registration.obj[0].ma_Name
  tr3.appendChild(td32)
  let td33 = document.createElement('td');
  td33.textContent = ' Email';
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
  td42.textContent = Registration.obj[0].Num_Nationa;
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
  td52.textContent = Registration.obj[0].Nationa;
  tr5.appendChild(td52)
  let td53 = document.createElement('td');
  td53.textContent = 'Number of Student';
  tr5.appendChild(td53)
  let td54 = document.createElement('td');
  td54.textContent = Registration.obj.length ;
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
  td63.textContent = 'Student Number';
  tr6.appendChild(td63)
  let td64 = document.createElement('td');
  td64.textContent = data.length;
  tr6.appendChild(td64)

}

let table2=document.getElementById('tbl2')
function RenderTable2()
{
  let tr1=document.createElement('tr')
   table2.appendChild(tr1)

   let th1=document.createElement('th')
   th1.textContent='Student ID'
   tr1.appendChild(th1)

   let th2=document.createElement('th')
   th2.textContent='Student Name'
   tr1.appendChild(th2)

   let th3=document.createElement('th')
   th3.textContent='Student Of Number'
   tr1.appendChild(th3)

  }

// std class
 let counter = 0;
// let stdCounter = 0;
// function counter(stdCounter)
// if (stdCounter < 30) {
//   return "Class A"+""+stdCounter;
// }
// else if (stdCounter < 60) {
//   return "Class B"+""+stdCounter
// }
// else if (stdCounter < 90) {
//   return "Class B"+""+stdCounter
// }
// else if (stdCounter < 120) {
//   return "Class B"+""+stdCounter
// }





// validation for Name
function validateFormName(test) {
  for (let i = 0; i < test.length; i++)
    if (Number.isInteger(Number(test[i]))) {
      document.getElementById("f_Name").style.borderColor = "red";
      alert("First Name And Last Name must dont have numbers ")
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
    alert(id + "This field must contain 10 numbers")

  } else {
    counter++;
    return testNumber;

  }

}
