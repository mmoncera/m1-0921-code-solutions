/* exported isPalindromic */
function isPalindromic(string) {
  string = string.toLowerCase().replace(/\s/g, '');

  return string === string.split('').reverse().join('');
}

// define a function named isPalindromic which takes a single parameter of 'string'
// reassign the parameter 'string' to a value all lowercased and without spaces
// return the boolean value of comparing (strictly equal) the 'string' parameter to it's reversed form (make 'string' an array whose values are every character, reverse that array, then change it back to a string)
