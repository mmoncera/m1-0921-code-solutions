/* exported tail */
function tail(array) {
  var result = [];

  for (let i = 1; i < array.length; i++) {
    result.push(array[i]);
  }

  return result;
}

// define a function named tail which takes a sigle paramater of 'array'
// define a variable 'result' which will contain an empty array literal
// create a for loop to check each value after the first value of the 'array' parameter
// add the each value checked to the 'result' array
// return the 'result' array
