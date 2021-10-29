/* exported pick */
function pick(source, keys) {
  var result = {};

  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      result[key] = source[key];
    }
  }

  return result;
}

// define a function named pick which takes 2 paramaters of 'source' and 'keys' respectively
// define a variable 'result' which will contain an empty object literal
// create a for in loop to check each of the properties of the 'source' parameter
// if the variable 'key' is a value in the parameter 'keys' array and the 'key' property of the parameter 'source' is not undefined, add to the 'result' object the 'key' and the value of 'source' at 'key'
// return the result object
