/* exported chunk */
function chunk(array, size) {
  var newArray = [];
  if (size > array.length) {
    return array;
  } else {
    for (var i = 0; i < array.length; i += size) {
      newArray.push(array.slice(i, i + size));
    }
    return newArray;
  }
}
