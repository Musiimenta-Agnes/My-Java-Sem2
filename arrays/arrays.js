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
//Accessing the first element
let first = array[0]
console.log("The item in the first position is " + " " + first)
//Accessing the last item in the array
let last = array[array.length -1]
console.log("The item in the last position is " + " " + last)




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
fruit[4] = "Assaping" // these below are all ways of adding an item t the array
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


//AAccessing arrays using sort().
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
console.log("The sorted foods after merging:" + " " + foods) //This merges arrays