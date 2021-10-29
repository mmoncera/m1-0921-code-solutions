/* exported truncate */
function truncate(length, string) {
  return string.slice(0, length) + '...';
}

// define a function named truncate which takes 2 paramaters of 'length' and 'string' respectively
// return the first # of characters (as defined by the paramater 'length') of the parameter 'string' and add it to the string '...'
