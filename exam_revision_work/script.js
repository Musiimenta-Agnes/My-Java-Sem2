// Properties of an array
//The use of push()

function addArray(arr){
    arr.push('tomato')
    return arr
}
console.log(addArray(['Apple', 'Beans']))



//The use of unshift
function addArray(arr){
    arr.unshift('tomato')
    return arr
}
console.log(addArray(['maize','Apple', 'Beans']))



//The use of pop()
function addArray(arr){
    arr.pop()
    return arr
}
console.log(addArray(['Apple', 'Beans','tomato']))



//The use of shift()
function addArray(arr){
    arr.shift()
    return arr
}
console.log(addArray(['maize','Apple', 'Beans','tomato']))


//The use of concat()
function addArray(){
    let arrays = ['2,4,5']
    let array2 = ['Apple', 'Beans','tomato']
    let array3 = arrays.concat(array2)
    return array3
}
console.log(addArray())


// Function to check whether the number is even or odd

function evenOrOdd(n){
    if(n % 2 === 0){
        return 'even'
    }else{
        return 'odd'
    }
}
console.log(evenOrOdd(4))



// Function to reverse each word in an array
function reversedArray(arr){
    return   arr.map(function(word){return word.split('').reverse().join('')})
}
console.log(reversedArray(['cut', 'book'])) // tuc, koob



// Finding the minimum number
//  Write a function min(num1, num2) that takes two numbers and returns the smaller one. (Don’t use built-in methods.) 
function minimumNm(num1, num2){
    if(num1 > num2){
        return num2
    }else{
        return num1
    }
} 
console.log(minimumNm(3,5))



//Function to square the numbers fro 1 to 10

//Another approach
function myFunction2(){
    let result = ''
    for(let i = 1; i <= 10; i ++){
        result += (i * i) + '' + '\n'
    }
    return result
}
console.log(myFunction2())


// Next approach

function my_function(){
    let count = []
    for(let i = 1; i <= 10; i ++){
        count.push(i * i)
    }
    return count 
}
console.log(my_function())



//Or using map()
function square(arr){
    let squared = arr.map(function(number){return number * number})
    return squared
}
console.log(square([1,2,3,4,5,6,7,8,9,10]))

