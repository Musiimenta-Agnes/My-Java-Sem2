
// Write a JavaScript function that takes a string and returns the number of vowels in it.

function countVowels(str){
    
     str = str.toLowerCase();

     const vowels = 'aeiou';

     let count = 0;

     //Loop through the string and check each characeter
     for (let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])) {
            count++;

        }
     }
   
    return count;
     

    
}
console.log("The number of vowel in Musiimenta is" + " " + countVowels("Musiimenta"));