// Make a sentnce and Count the number of names in that sentence

let sentence = 'My name is Musiimenta Agnes';
let words = sentence.split(" ").length;
console.log('The number of words in this sentence is ' +  " " + words);


// Second approach
let word = 'Musiimenta Agnes Kihihi';

function CountWords(){
   splitWord =  word.split(" ").length
   return splitWord
}

console.log(CountWords(word))


// Make a sentence and count the number of characters in that sentence

let statement = "Musiimenta"
let characters = statement.length
console.log("The number of characters in the statement is" + " " + characters)



// //Write a function that returns the square of numbers from 1 to 10

let result = '';
function squareNumbers(num){
   return num * num;
}
for(let i = 1; i <= 6; i++){
   result += 'The square root is of' + ' ' + i + ' '+ 'is' + ' ' + squareNumbers(i) + `\n`;
}
console.log(result)



// Looping through a string

let text = ''
let character = 'Womens institue of inovation and technologh'
for(let i = 0; i < character.length; i++){
   text += character[i] + '\n'

}
console.log(text)


// You can also do it this way
let institute = 'Womens institue of inovation and technologh'
for(let i = 0; i < institute.length; i++){
   console.log(institute[i])

}




// Write a JavaScript function that accepts a string as a parameter and converts 
// // the first letter of each word of the string in upper case. (2mks) 





// function capitalizeFirstLetters(str) {
//    return str.split(' ').map(word => 
//      word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
//  }
//  let results = capitalizeFirstLetters("hello world");
//  console.log(result); //  


 // Write a function that returns the square of the numbers in an array without changing the array

let array = [2,4,3,5]
let squares = array.map(function(num){
   return num * num
})
console.log(squares)




// The use of map()

    let figures =  [2,4,5,6]
    let multiple = figures.map(function(fig){
      return fig * fig
   })

console.log(multiple)



// Using map to return the initials of the name only
function myNames(names){
   let words = names.trim().split(' ')
   let initals = words.map(function(word){
      return word[0].toUpperCase()
   }).join('');
   return initals
}

console.log(`The initials of my name are ${myNames('Muiimenta Agnes')}`)




//  Write a JavaScript program that accepts two integers and display the 
// larger.(2mks)

 
function largeNumber(num1, num2){
   if(num1 > num2){
      return  num1
   }else if(num1 < num2){
      return num2 
   }else{
      return 'All numbers are equal'
   }
}
let resultOne = largeNumber(4,5)
let resultTwo = largeNumber(9,3)
let resultThree = largeNumber(4,4)


console.log(`The lager number in result one is ${resultOne} `)
console.log('The lager number in result two is' +  ' ' + resultTwo)
console.log('The lager number in result three is' + ' ' + resultThree)



 // Write a JS function that checks if a variable is an array or not, log “Is Array” 
 //if true and “Not Array” if false. (2mks)

// const variable = 'Tumusingize'
// if(Array.isArray(variable)){
//    return console.log('It is an array')
// }





// The use of Splice()
let fruits = ["apple", "banana", "cherry"];

fruits.splice(1, 1); // start at index 1, remove 1 item

console.log(fruits); // ["apple", "cherry"]



//Write a function that reverses a word and returns the reversed word

function reverseWord(history){
   return history.split('').reverse().join('');
}
console.log(reverseWord('angel'));



// Write a function that checks if the word is para... or not

function myFunction(school){
   if(school == school.split('').reverse().join('')){
      return true;
   }else{
      return false
   }

}
console.log(myFunction('angel'))



//  Write a function sumArray(arr) that returns the sum of all numbers in an array. 
  function sumOfNumbers(array){
   let sum = 0
   for(let i = 0; i < array.length; i++){
      sum += array[i]

   }
   return sum
  }
  console.log(sumOfNumbers([2,3,4]))



  // Make a statement and count the number of vowels in that statement

function countVowels(str){
   vowels = 'aeiou'
   count = 0
   str = str.toLowerCase()

   for(let i = 0; i < str.length; i ++){
      if(vowels.includes[i]){
          count++
      }
   }
   return count

}
console.log(countVowels('Musiimenta'))



//  Write a JavaScript forloop that will iterate from 0 to 15. For each iteration, it 
// will check if the current number is odd or even, and display a message to the 
// screen. (3mks) 

for (let i = 0; i <= 15; i++) {
   if (i % 2 === 0) {
     console.log(i + " is even");
   } else {
     console.log(i + " is odd");
   }
 }
 


 // . Write a JavaScript program to get the difference between a given number 
  //and 13, if the number is greater than 13 return double the absolute 
// difference. (3mks) 

// let number = parseInt(prompt("Enter a number:"));
// let difference;

// if (number > 13) {
//   difference = 2 * (number - 13);
// } else {
//   difference = 13 - number;
// }

// alert("The result is: " + difference);




// Write a function that returns a word with ltters sorted in alphabetical order
function myFunc(str){
   str = str.toLowerCase()
   return str.split('').sort().join('');
}
console.log(myFunc('Agnes'))


// Second approach of sorting string characters
let characteristics = 'tall'
let sorted = characteristics.split('').sort().join('')
console.log(sorted)



// Sorting array numbers
let myArray = [3,5,2,1,8]
let sortedArray = myArray.sort(function(a,b) {return a - b})
console.log(sortedArray)


 
//Using pop()
var foods = ["Banana", "Orange", "Apple", "Mango"];
foods.pop();
console.log("The sorted foods after removing the last item:" + " " + foods)



// Using map()to return the initials of any name
function nameInitials(name){
   let theName = name.trim().split(' ');
   let nameInit = theName.map(function(init){return init[0].toUpperCase()}).join(' ');
   return nameInit
}

console.log(`The initials of my name are ${nameInitials('Bakuweera Violah')}`)


// Write a JavaScript function that takes an array of numbers and finds the second
//  lowest and second greatest numbers, respectively. Sample array : [7,8,4,6] Expected Output : 2,4 

function secondLowest(array){
   array.sort(function(a,b){return a - b});
   return array[1] + ' ' + array[array.length -2]

}
console.log(secondLowest([1,5,6,7,2])) // This sorts the array in ascending order first then gets the number
// at position two and at position of the second last.


// 6. Write a JavaScript function that accepts a string as a parameter and 
// converts the first letter of each word into upper case. Example string : 'the quick brown fox'
function capitalize(str){
   let splitted = str.split(' ')
   let capital = splitted.map(function(word) {return word.charAt(0).toUpperCase() + word.slice(1) })
   return capital.join(' ');
}
console.log(capitalize('my name is musiimenta agnes'))

