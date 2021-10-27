/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var suffixes = [];

  for (let i = 0; i < words.length; i++) {
    suffixes.push(words[i] + suffix);
  }

  return suffixes;
}
