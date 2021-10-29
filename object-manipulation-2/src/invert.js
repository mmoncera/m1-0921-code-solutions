/* exported invert */
function invert(source) {
  var result = {};

  for (const key in source) {
    result[source[key]] = key;
  }

  return result;
}
