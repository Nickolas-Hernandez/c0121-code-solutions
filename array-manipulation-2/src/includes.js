/* exported includes */
function includes(array, value) {
  var trueOrFalse = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      trueOrFalse = true;
    }
  }
  return trueOrFalse;
}
