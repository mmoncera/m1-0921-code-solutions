/* exported reverse */
function reverse(array) {
  var reversed = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }

  return reversed;
}
