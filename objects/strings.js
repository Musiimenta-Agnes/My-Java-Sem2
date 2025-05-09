//Finding the length of a string
let text = 'Musiimenta Agnes'
let length = text.length;
console.log("The length of the name Musiimenta Agnes is ", + " " + length + " " + "characters")


//Quotes within other quotes
let answer = "Musiimenta 'Agnes'" 
let location = 'Kampala "Wandegeya"'

console.log( answer + "from" +" " + location) 


//--------String methods--------
//The at(position) Method
//The charAt(position) Method
//The charCodeAt(position) Method
//Using property access [] like in arrays

//Examples.

//Using (at)
let names = 'Musiimenta'
let charatcters = names.at(6)
console.log("The character at position 6 is " + charatcters)

//Using (ChartAt)
var address = "Mulago"
var word = address.charAt(7)
console.log("The character at position 7 is " + word)

// If you omit the second parameter, the method will slice out the rest of the string:
let list = "Apple, Banana, Kiwi";
let part = list.slice(7);  //The answer is Banana, Kiwi
console.log(part)


//If a parameter is negative, the position is counted from the end of the string:
let parts = "Apple, Banana, Kiwi";
let result = text.slice(-12); //This will print out all the items
console.log(parts)



//------REPLACING STRINGS-----//
//By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

let oldText = "Please visit Microsoft!";
let newText = oldText.replace("Microsoft", "W3Schools"); // This will replace the word "Microsoft" with "W3schools"
console.log(newText)

//Second example
var locations = "Kampala Mubende"
var locations = locations.replaceAll("Kampala Mubende", "Kabale"); //This will replace the word Kampala Mubende with Kabale.
console.log(locations)

 


function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) { console.log('FizzBuzz');
      } else if (i % 3 === 0) { console.log('Fizz');
      } else if (i % 5 === 0) { console.log('Buzz');
      } else { console.log(i);
      }  }  }
  
//or 
function fizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
      } else if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else {
        console.log(i);
      }
    }
  }
  
