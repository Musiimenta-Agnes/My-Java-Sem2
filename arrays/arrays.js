//Creating an array
//An array is created using [] and its seperted by commas

const cars = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

console.log(cars[0], cars[1])

//Changing the item in position two to Toyota
cars[2] = "Toyota"
console.log(cars[2])

//Accessing the length of the array
console.log("The length of the ars array is:" + " " + cars.length  + " " + "items")


//This is also another way of creating an array
//Accesiing an array
const bike = ["Saab","Volvo","BMW"];

//Accessing the items in the array bike
console.log( "The items in the bike array are: " + " " + bike)


//Changing/ updating an array





//The typeof operator
const person = ["Agnes", 21]
let names = person[0]
console.log(names)


// Qn. Create an array with 5 elements and access its first element and last elements  and display them.
const array = ["Agnes", 24, "Wandegeya", 98, "JavaScript"]
console.log('The first and last element are : ' + array[0] + 'and ' + array[array.length -1])




// //Looping Array elements
// //One way to loop through is using a "for loop"
// // const fruits = ["Banana", "Orange", "Apple", "Mango"];
// // let flen = fruits.length;
// // let text = "<ul>";
// // for (let i =  0; i <flen; i++) {
// //     text += "<li>" + fruits[i] + "</li>";
// // }
// // text += "</ul>";



// // //Using  for each. "Array.forEach()"
// // // const list = ["Banana", "Orange", "Apple", "Mango"];
// // // let texts = "<ul>";
// // // list.forEach((value) => texts +="<li>" + value + "</li>");
// // // texts+="</ul>";
// // // document.getElementById("Fruits").innerHTML = texts;




//Adding Array Elements to other arrays
const fruit = ["Banana", "Orange", "Apple", "Mango"];
fruit[4] = "Assaping" // these below are all ways of adding an item to the array
// fruit.push("Assaping")
// fruit[fruit.length] = "Lemon"  //Adds Lemon to the list
console.log(fruit);


//Replacing the item in the second last position with pineapple
console.log(items);
var items = ["Banana", "Orange", "Apple", "Mango"];
items[items.length -2] = "Pineaple"  //This replaces the item in the second last position with pineapple
console.log(items)


//Changing an array to a string
var vegetables = ["Banana", "Orange", "Apple", "Mango"];
to_string = vegetables.toString();
console.log("The array turned to a astring is:" + " " + to_string) //This seperates the items by using commas


//Accessing arrays using sort().
var foods = ["Banana", "Orange", "Apple", "Mango"];
foods.sort();
console.log("The sorted foods in alphabetical order is:" + " " + foods) // This sorts the foods in ascending order A-Z


//Using pop()
var food = ["Banana", "Orange", "Apple", "Mango"];
foods.pop();
console.log("The sorted foods after removing the last item:" + " " + foods) //This arranges the array and removes the last item.


//Using push
var foods = ["Banana", "Orange", "Apple", "Mango"];
foods.push("Banana")
console.log("The foods after pushing banana to the last:" + " " + foods) //This pushes Banana to the last position.


//Using shift()
var foods = ["Banana", "Orange", "Apple", "Mango"];
foods.shift("Banana");
console.log("The sorted foods after shifting:" + " " + foods) //This removes the first element from the array


//Using unshift
var foods = ["Banana", "Orange", "Apple", "Mango"];
food.unshift("Maize")
console.log("The sorted foods after unshifting:" + " " + foods) //This adds an element to the beginning of the array


//Using concat()
var foods = ["Banana", "Orange", "Apple", "Mango"];
foods.concat();
console.log("The sorted foods after merging:" + " " + foods) //This merges arrays and eperates the items using comas




// Looping through an array
const fruits = ["Banana" , "Orange", "Apple"]
let myFruits = ''
for(let i = 0; i < fruits.length; i ++){
    myFruits += fruits[i] + '\n'
}
console.log(myFruits)


// Adding an element to an array
let letters = ['a', 'b', 'c']
letters[letters.length] = 'd'
console.log(letters)

// We can also use push()
let alphabet = ['a', 'b', 'c']
alphabet.push('d')
console.log(alphabet)

// Replacing an element with another one

let letter = ['a', 'b', 'c']
letters[letter[2] = 'd']
console.log(letter)


// How to use pop()
let consonants = ['a', 'b', 'c']
consonants.pop() // This does not require any arguments. And it removes the last element in an array
console.log(consonants)


//Using shift()
let lets= ['a', 'b', 'c']
lets[lets.shift()] // This removes the first element from an array and   it does not need any arguments
console.log(lets)


// Using unshift()
let vowels = ['a', 'b', 'c']
vowels[vowels.unshift('q')] // This adds a new element at the biginning of the array
console.log(vowels)


// using concact()
let a = [1, 2];
let b = [3, 4];
let result = a.concat(b);

console.log(result); // [1, 2, 3, 4]



// Using slice()   This has the 'start' and 'end'. Meaning , The starting point should be included and then add the endin point
//This is what will be extracted now from the array.
//The program extracts everything that comes after the end part
let fru = ["apple", "banana", "cherry", "date"];
let sliced = fru.slice(1, 2);

console.log(sliced);  // ["banana"]
console.log(fru);  // ["apple", "banana", "cherry", "date"] — original not changed



// Using temlete literals
let message = `I am 21 years old`
let identity = 'Musiimenta'
console.log(`My name is  ${identity} and I am ${message} years old`) 


//Do a function that returns only even numbers in an array

function evenNumbers(){
    let numb = [2,4,3,5,1,5,6]
    let even = []
    for(let i = 0; i < numb.length; i ++){
        if(numb[i] %2 === 0){
            even.push(numb[i]);
        }
    }

    return even
}
console.log(evenNumbers())



// This is another approach of using parameters
function evenNum(num){
    let myNum = []
    for(i = 0; i < num.length; i ++){
        if(num[i] %2 === 0){
            myNum.push(num[i])
        }
    }
    return myNum
}
console.log(evenNum([2,3,1,4,7,9]))




// Access the word nes from this array
function my_func(myName){
    let answer = myName.toLowerCase().slice(2, 5)
    return answer
}
console.log(my_func('Agnes'))


//The use of typeof
let q = 'Agnes'
let answer = typeof(q)
console.log(answer)


// The use of replace
let myDistrict = 'Kanungu district'
let replaced = myDistrict.replace('district', 'region')
console.log(replaced)



//Function to return only even numbers
function myFunction2(arrays){
    let arrayResult = []
    for(let i = 0; i < arrays.length; i ++){
        if(arrays[i] % 2 === 0){
            arrayResult.push(arrays[i])
        }
       
    }
     return arrayResult
}
console.log(myFunction2([2,3,5,7,9,6,4]))



//Using shift()
let letting= ['a', 'b', 'c']
letting[letting.shift()] // This removes the first element from an array and   it does not need any arguments
console.log(letting)



// Also this way
let age = [5,4,3]
age.shift()
console.log(age)

