/* exported omit */
function omit(source, keys) {
  var returnedObject = {};
  for (var key in source) {
    if (!keys.includes(key) && source[key] !== undefined) {
      returnedObject[key] = source[key];
    }
  }
  return returnedObject;
}
