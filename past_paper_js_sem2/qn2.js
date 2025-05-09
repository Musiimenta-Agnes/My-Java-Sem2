//Qn(2): Write a program that computes the sum of two given integers. If the two values are the same, then return tripple their sum. 
// Ensure to have two logs one with two similar numbers and the other with different numbers. (3marks)</p>

function excuteSum(a,b){
    if (a == b){
        return 3 *( a + b);
    }else{
        return (a + b);
    }
}
let result1 = excuteSum(3,3);
console.log(result1);

let result2 = excuteSum(4,6);
console.log(result2)




function sumOfNumbers(a,b){
    if (a == b){
        return a + b;
    }else{
        return (a + b)*3
    }

}
let resultOne = sumOfNumbers(4,4)
let resultTwo = sumOfNumbers(2,4)

console.log(resultOne)
console.log(resultTwo)