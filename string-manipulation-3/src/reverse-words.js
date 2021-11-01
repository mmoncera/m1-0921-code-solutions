/* exported reverseWords */
function reverseWords(string) {
  var words = string.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split('').reverse().join('');
  }

  return words.join(' ');
}
