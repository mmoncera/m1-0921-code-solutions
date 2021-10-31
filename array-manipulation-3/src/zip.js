/* exported zip */
function zip(first, second) {
  var result = [];
  var shortest = first;

  if (second.length < first.length) {
    shortest = second;
  }

  for (let i = 0; i < shortest.length; i++) {
    result.push([first[i], second[i]]);
  }

  return result;
}
