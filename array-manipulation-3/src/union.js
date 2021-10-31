/* exported union */
function union(first, second) {
  var result = [...first];

  for (let i = 0; i < second.length; i++) {
    if (!result.includes(second[i])) {
      result.push(second[i]);
    }
  }

  return result;
}
