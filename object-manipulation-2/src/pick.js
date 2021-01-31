/* exported pick */
function pick(source, keys) {
  var returnObject = {};
  for (var key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      returnObject[key] = source[key];
    }
  }
  return returnObject;
}
