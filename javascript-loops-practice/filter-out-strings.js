/* exported filterOutStrings */
function filterOutStrings(values) {
  var newValues = [];
  var dumbyString = 'string';
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== typeof dumbyString) {
      newValues.push(values[i]);
    }
  }
  return newValues;
}
