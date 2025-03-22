
//Accessing the elemnts in an object.
//You type the objectname.the name of the property you want
const phone = {color:'Red', storage:'68GB', name:'Iphone'}
console.log(phone.name)

//Another way of accessing the property
console.log('My phone is' + ' ' + phone.name  +  'and it has the storage of' + ' ' + phone.storage)

//You can also use the dollah sign
const text = 'My phone is' + ' ' + phone.name + ' ' +  'and it has the storage of' + ' ' + phone.storage
console.log(text);

//Also this way
console.log(phone['name'])


//Alerting the properties . This needs to import 





//Adding another property

console.log('Before', phone);
phone.adress = 'Kampala'
phone.size = 'big'
//Running it now
console.log('After', phone);



//OBJECT METHODS
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
     fullname : function () {
        return this.firstName + '  ' + this.lastName;
    }

};



//Deleting an object property
const dictionary = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  delete dictionary.age;
  console.log(dictionary)//This will return a adictionary without age 





 // ---------- "THIS AS A KEY WORD--------.
  //In an object( Inside an object.) this is the object itself.

  const greeting = {
    "details": "Agnes",
    greet: function (){
      console.log('Hello' + " " + this.details); //Here this is the object itself because we have used it to access the details.
    }
  };



greeting.greet();// Calling the function such that it works.

// In a function, in strict mode, "this is undefined"



"use strict"; // Enabling strict mode

function showThis() {
  console.log(this);  // In strict mode, this will be undefined
}

showThis();  // Called in global context, this will be undefined in strict mode




  //Rplacing statements

  let testReplace = 'Agie';
  let replaced = testReplace.replace('Agie','Nahurira')//This replaces Agie with Nahurira.
  console.log(replaced)




//  // Advent listener

//   let btn = document.getElementById('myBtn')
//   btn.addEventListener("click",function() {
//     console.log("clicked")
//   }
// )




//Split

let str = 'Apple,Banaaa,Mango';
console.log(str.split("  "))




// // Alert "John" by extracting information from the person object.
// const school = {
//   firstName: "Bishop",
//   lastName: "Comboni"
// };
// alert( " The school last name is" + " " + school.lastName); // This will alert the last name of the school.
//however. The error you're encountering occurs because alert() is a function provided by browsers,
 //but when you're running JavaScript with Node.js, 
//alert() is not available. Node.js is a server-side environment, and it doesn't have access to browser-specific functions like alert().




