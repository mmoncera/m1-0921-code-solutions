/* exported difference */
function difference(first, second) {
  var result = [];
  var combined = [...first, ...second];

  for (let i = 0; i < combined.length; i++) {
    if (combined.indexOf(combined[i]) === combined.lastIndexOf(combined[i])) {
      result.push(combined[i]);
    }
  }

  return result;
}
