/* exported capitalize */
function capitalize(word) {
  word = word.split('');

  for (let i = 0; i < word.length; i++) {
    if (i === 0) {
      word[i] = word[i].toUpperCase();
    } else {
      word[i] = word[i].toLowerCase();
    }
  }

  return word.join('');
}

// define a function named capitalize which takes a single parameter of 'word'
// reassign the parameter 'word' to an array where each value is a character of the 'word'
// create a for loop to check each character of the paramater 'word'
// if the variable 'i' is strictly equal to 0, capitalize that character and add reassign 'word' at index 'i'
// otherwise, lowercase all other characters and reassign 'word' at index 'i'
// return the string value of the parameter 'word'
