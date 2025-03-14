function getDataType(value) {
    return typeof value;
  }
  console.log(  'The data type of the value of the above function is ',getDataType('Asingwire Abias'))



  // Example usage:
 
  
  console.log(getDataType(42)); // "number"
  console.log(getDataType("Hello")); // "string"
  console.log(getDataType(true)); // "boolean"
  console.log(getDataType([1, 2, 3])); // "object"
  console.log(getDataType({name: "John"})); // "object"
  console.log(getDataType(undefined)); // "undefined"
  console.log(getDataType(null)); // "object" (this is a known JavaScript quirk)
  