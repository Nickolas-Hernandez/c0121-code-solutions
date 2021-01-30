/* exported dropRight */
function dropRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  } else {
    newArray = array.slice(0, array.length - count);
    return newArray;
  }
}
