/* exported toObject */
function toObject(keyValuePair) {
  var prop = keyValuePair[0];
  var val = keyValuePair[1];
  var convertedObject = {};
  convertedObject[prop] = val;
  return convertedObject;
}
