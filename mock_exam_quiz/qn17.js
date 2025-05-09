//Write a function that takes a number as input and returns true if the number is even, otherwise returns false

function isEven(number){
    return number %2 == 0;  //You use return to print out the answer you want from a function
   }
console.log(isEven(2));




//checking whether the number is odd.
function isOdd(number){
    return number %2 != 0;

}
console.log(isOdd(6))



function isEven(num){
    if (num %2 == 0){
        return true; }
    else{
        return false;}

}
let result1 = isEven(6);
console.log(result1);

let result2 = isEven(9);
console.log(result2);