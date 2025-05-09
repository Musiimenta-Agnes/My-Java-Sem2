// //Write a function to check if a given word is a palindrome (a word that reads the 
// //same forward and backward). 



// function isReversable(word){
//     word = word.toLowerCase();
//     if (word == word.split('').reverse().join('')){
//         return true;
//     }else{
//         return false;
//     }

// }
// let reversedWord = isReversable('madam');
// console.log(reversedWord);


function myFunction(phrase){
    phrase = phrase.toLowerCase();

    if (phrase == phrase.split('').reverse().join('')){
        return true;
    }else{
        return false;
    }

}

console.log(myFunction('agie'));

















