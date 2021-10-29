/* exported numVowels */
function numVowels(string) {
  var count = 0;

  for (let i = 0; i < string.length; i++) {
    if ('aeiouAEIOU'.indexOf(string[i]) > -1) {
      count++;
    }
  }

  return count;
}
