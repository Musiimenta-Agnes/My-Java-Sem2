//. Write a javascript function that accepts a number as a parameter and checks if it is prime or not using recursion.
//Note. A prime number is a nutural number greater than 1 that has no positive divisor other than 1 and itself.


function isPrimeOrNot(num, divisor = 2){
    // Base case: if num is less than 2, it is not prime
    if (num < 2){
        return false;
    }

    // Base case: if divisor reaches num, then the number is prime
    if(divisor === num){
        return true;

    } 

    // If num is divisible by the current divisor, it's not prime
    if (num % divisor === 0){
        return false;

    }
    
  // Recursively check with the next divisor
    return isPrimeOrNot(num, divisor + 1);

}
// Test the function with a couple of examples
console.log(isPrimeOrNot(11)); // true (11 is prime)
console.log(isPrimeOrNot(15)); // false (15 is not prime)
console.log(isPrimeOrNot(1));  // false (1 is not prime)
console.log(isPrimeOrNot(17)); // true (17 is prime)


