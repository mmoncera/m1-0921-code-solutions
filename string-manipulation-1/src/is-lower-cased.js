/* exported isLowerCased */
function isLowerCased(word) {
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== word[i].toLowerCase()) {
      return false;
    }
  }

  return true;
}
