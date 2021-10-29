/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  string = string.split('');

  [string[firstIndex], string[secondIndex]] = [
    string[secondIndex],
    string[firstIndex]
  ];

  return string.join('');
}
