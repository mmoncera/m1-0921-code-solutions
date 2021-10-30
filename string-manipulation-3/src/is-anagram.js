/* exported isAnagram */
function isAnagram(firstString, secondString) {
  firstString = firstString.toLowerCase().replace(/\s/g, '').split('');

  secondString = secondString.toLowerCase().replace(/\s/g, '').split('');

  if (firstString.length !== secondString.length) {
    return false;
  }

  for (let i = 0; i < firstString.length; i++) {
    if (!secondString.includes(firstString[i])) {
      return false;
    }
    if (secondString.includes(firstString[i])) {
      var index = secondString.indexOf(firstString[i]);
      secondString.splice(index, 1);
    }
  }

  return true;
}

/*
// define a function named isAnagram which takes 2 parameters of 'firstString' and 'secondString'
  // reassign the parameters 'firstString' and 'secondString' to a value all lowercased, without spaces, and to an array whose values are each character

  // if the length of the parameters 'firstString' and 'secondString' are not strictly equal
    // return false

  // create a for loop to check each value of the 'firstString' parameter
    // if the parameter 'secondString' does not include 'firstString' at index 'i'
      //return false
    // if the parameter 'secondString' does include 'firstString' at index 'i'
      // define a variable 'index' which will contain the index of 'firstString at index 'i' of 'secondString'
      // delete 'firstString at index 'i' of 'secondString'

  // return the boolean value true
*/
