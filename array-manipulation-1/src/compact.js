/* exported compact */
function compact(array) {
  var truthy = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      truthy.push(array[i]);
    }
  }

  return truthy;
}
