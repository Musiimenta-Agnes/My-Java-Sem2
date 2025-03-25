//Write a js function that takes temperature in fahrenheight and returns its equivalent in clcius. 
//Hint, To concert temp in degrees fahrenhieght to degrees celciu , subtract 32 and multiply by .5556 or (5/9)

function toCelcius(value){
    return (value * 9/5) + (32);
}
let farh = toCelcius(4);
console.log("The value in fahranheight is" + " " + farh + " " + 'degrees')
