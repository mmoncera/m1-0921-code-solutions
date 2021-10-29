/* exported defaults */
function defaults(target, source) {
  var targetKeys = Object.keys(target);
  var sourceKeys = Object.keys(source);

  for (let i = 0; i < sourceKeys.length; i++) {
    if (!targetKeys.includes(sourceKeys[i])) {
      target[sourceKeys[i]] = source[sourceKeys[i]];
    }
  }
}
