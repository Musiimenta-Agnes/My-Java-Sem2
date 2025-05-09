//Write a js function that accepts a string as a parameter and finds and finds the longest
// word within the string. Example, 'Web Development Turitorial', Expected output: 'Development.

function myfunction(text){
    let words = text.split(' ');
    let longest = '';

    for (let word of words){
        if(word.length > longest.length){
            longest = word;
        }
    }

    return longest
}
console.log(myfunction('Web Develeopment Turitorial'));