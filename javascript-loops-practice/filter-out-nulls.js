/* exported filterOutNulls */
function filterOutNulls(values) {
  var nonNullValues = [];

  for (let i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      nonNullValues.push(values[i]);
    }
  }

  return nonNullValues;
}
