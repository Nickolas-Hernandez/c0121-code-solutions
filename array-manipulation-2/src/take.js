/* exported take */
function take(array, count) {
  var newArray = [];
  if (count > array.length) {
    for (var i = 0; i < array.length; i++) {
      newArray.push(array[i]);
    }
  } else {
    for (var j = 0; j < count; j++) {
      newArray.push(array[j]);
    }
  }
  return newArray;
}
