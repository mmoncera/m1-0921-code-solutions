/* exported getKeys */
function getKeys(object) {
  var keys = [];

  for (var key in object) {
    keys.push(key);
  }

  return keys;
}

// define a function named getKeys which takes a sigle paramater of 'object'
// define a variable 'keys' which will contain an empty array literal
// create a for in loop to check each of the properties of the 'object' parameter
// add the property name stored in the parameter 'object' to the 'keys' array
// return the 'keys' array
