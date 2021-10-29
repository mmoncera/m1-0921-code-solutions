/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() === 'javascript') {
    return 'JavaScript';
  }

  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

// define a function named capitalizeWord which takes a sigle paramater of 'word'
// if the parameter 'word' was all lowercased and was strictly equal to the string 'javascript', return the string 'JavaScript'
// return the first character uppercased of the parameter 'word' + the remaining characters of 'word' lowercased
