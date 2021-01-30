/* exported takeRight */
function takeRight(array, count) {
  var newArray = [];
  if (count > array.length) {
    return array;
  } else {
    newArray = array.slice(array.length - count, array.length);
    return newArray;
  }
}
