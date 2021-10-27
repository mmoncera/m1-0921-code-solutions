/* exported countdown */
function countdown(number) {
  var result = [];

  while (number >= 0) {
    result.push(number);
    number--;
  }

  return result;
}
