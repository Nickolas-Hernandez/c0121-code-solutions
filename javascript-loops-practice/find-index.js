/* exported findIndex */
function findIndex(array, value) {
  var indexNumber = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      indexNumber = i;
      break;
    }
  }
  return indexNumber;
}
