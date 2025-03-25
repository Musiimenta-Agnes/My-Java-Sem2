
        // Step 1: Define a reusable function to square a number
function squareNumber(num) {
  return num * num;  // Return the number multiplied by itself
}

// Step 2: Use a loop to iterate from 1 to 10
for (let i = 1; i <= 10; i++) {
  // Step 3: Pass each number to the squareNumber function and log the result
  console.log(`The square of ${i} is: ${squareNumber(i)}`);
}

    
