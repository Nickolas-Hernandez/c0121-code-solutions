/* exported includesSeven */
function includesSeven(array) {
  var hasSeven = false;
  var i = 0;
  while (i < array.length) {
    if (array[i] === 7) {
      hasSeven = true;
    }
    i++;
  }
  return hasSeven;
}
