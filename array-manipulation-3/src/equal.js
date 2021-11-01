/* exported equal */
function equal(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
}

/*
// define a function named equal which takes 2 parameters of 'first' and 'second' respectively
  // if the length of the parameters 'first' and 'second' are not strictly equal
    // return false

  // create a for loop to check each value of the 'first' parameter
    // if the parameter 'first' at index 'i' is not strictly equal to 'second' at index 'i'
      //return false

  // return the boolean value true
*/
