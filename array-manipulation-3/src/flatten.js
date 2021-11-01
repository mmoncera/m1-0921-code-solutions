/* exported flatten */
function flatten(array) {
  var flattened = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattened.push(array[i]);
    } else {
      flattened.push(...array[i]);
    }
  }

  return flattened;
}

/*
// define a function named flatten which takes 1 parameter of 'array'
  // define a variable 'flattened' which will contain an empty array literal

  // create a for loop to check each value of the 'first' parameter
    // if the parameter 'first' at index 'i' is not an array
      // add that value to the 'flattened' array
    // otherwise
      // add the spread out values to the 'flattened' array

  // return the 'flattened' array
*/
