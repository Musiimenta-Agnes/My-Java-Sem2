
const numbers = [4,3,7,9,2];

function highestNumber(){
   
    return Math.max(...numbers)
} //In the function, we only write the logic of what we want to return, the rest is one outside the function.

let highest = highestNumber(numbers)//Here we call back the function to re-use it, to find the highest number because it has the ommand for returning the answer we need.
console.log("The highest number in this list is:" + " " + highest)






// Given an array, find the highest number

let array = [2,6,5,7,8]

function highestNuber(){
    return Math.max(...array)
}
console.log(highestNuber(array))