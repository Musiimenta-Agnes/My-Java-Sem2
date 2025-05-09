let arr = [5,3,6,7,8,4,6]
console.log(arr.sort((a,b) => a - b))

// Reverse (z - a) Alphabetic sort
console.log(arr.sort((a,b) => b - a))



// Numeric sorting using a java script function
var numbers = [1,3,2,4,7,6]
console.log(numbers.sort((a,b) => a - b))
console.log(numbers.sort(function(a,b) {return a - b}))




// Fruits sort
const fruits = [ "Orange", "Apple", "Mango","Banana"]
fruits.sort();
console.log(fruits)


// Reverse sort(By combining sort and reverse prints out an array in descending order.)
const foods = [ "Orange", "Apple", "Mango","Banana"]
foods.sort().reverse();
console.log(foods) //This sorts the array in descending order.


// find the maximum number in the array.

var points = [3,6,9,4,1] // Ensure to use var only. not const, because it will give u errors.
let maximum = Math.max(...points)
console.log('The maximum number here is '  + ' ' + maximum)




// find the minimum number in the array.

var points = [3,6,9,4,1]
let minimum = Math.min(...points)
console.log('The minimum number here is '  + ' ' + minimum)



// Reversing the array.  This returns the array in a reversed way
const fruits2 = ["Banana", "Orange", "Apple", "Mango"]
fruits2.reverse()
console.log(fruits2)


//Finding the maximam number
var points = [2,4,6,8,9]
let maxNumber = Math.max(...points)
console.log(maxNumber)




