//Qn(5). Write a javascrit function that returns a string with letters in alphabetical order.
//Example string; 'webmaster', the Expected Output:  "Abeemrst". (2marks)


function  sortLetters(word){
  return word.toLowerCase('').split('').sort().join('');
}

console.log(sortLetters('Musiimenta')); //When it is dealing with strings, you make sure you define the function again and pass in the word.






let word = 'Musiimenta'
function myFunction(){
  return word.toLocaleLowerCase().split('').sort().join('')
}
console.log(myFunction(word))