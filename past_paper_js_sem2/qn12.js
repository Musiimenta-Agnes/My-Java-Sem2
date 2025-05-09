
//Write a js function that checks whether a passed string is a palindrome or not.
//A palnfrome is a word , phrease, or sequence that reads the same backward as forward. eg. madam r nursesrun. 

function readsBackward(word){
    word = word.toLowerCase();
    if (word == word.split('').reverse().join('')){
        return true;

    }else{
        return false;
    }
}
console.log(readsBackward('milk'));