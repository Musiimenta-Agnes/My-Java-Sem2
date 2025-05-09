//Qn(4).Write ajavcriot function that reverses a number Eg.3444 = 4443. (2marks)

function reverseNumber(num){
    return parseInt(num.toString('').split('').reverse().join(''));
}
console.log(6787);
//Note: If you define the variable as a  parameter in the funtion, you dont name it again,
//  but you put its value in the console.log as you are calling the function
//If you want to call the function by naming another variable then you rename the variable with another name like in the example below.
//Then call the function by passing in the value of the variable as follows.






// This is a different case now but they do the same things just different approaches
function multiply(number){
    return number * 2;
  
  }
  let multiplal = multiply(2);
  console.log(multiplal)






  
  //Reversing a aword

  function reverseWord(word){
    return word.toLowerCase('').split('').reverse().join('');

  }
  console.log(reverseWord('Agnes'))