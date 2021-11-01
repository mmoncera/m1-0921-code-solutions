/* exported titleCase */
function titleCase(title) {
  var minorWords = [
    'and',
    'or',
    'nor',
    'but',
    'a',
    'an',
    'the',
    'as',
    'at',
    'by',
    'for',
    'in',
    'of',
    'on',
    'per',
    'to'
  ];
  var words = title
    .toLowerCase()
    .replace(/javascript/g, 'JavaScript')
    .replace(/api/g, 'API')
    .split(' ');

  for (let i = 0; i < words.length; i++) {
    if (
      i !== 0 &&
      minorWords.includes(words[i]) &&
      !words[i - 1].includes(':')
    ) {
      continue;
    } else {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }

    if (words[i].includes('-')) {
      var indexAfterHyphen = words[i].indexOf('-') + 1;
      words[i] =
        words[i].slice(0, indexAfterHyphen) +
        words[i][indexAfterHyphen].toUpperCase() +
        words[i].slice(indexAfterHyphen + 1);
    }
  }

  return words.join(' ');
}
