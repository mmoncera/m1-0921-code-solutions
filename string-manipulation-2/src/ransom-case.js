/* exported ransomCase */
function ransomCase(string) {
  string = string.split('');

  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      string[i] = string[i].toLowerCase();
    } else {
      string[i] = string[i].toUpperCase();
    }
  }

  return string.join('');
}
