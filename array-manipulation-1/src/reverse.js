/* exported reverse */
function reverse(array) {
  var reversedArray = [];
  for (var i = 0; i < array.length; i++) {
    reversedArray.unshift(array[i]);
  }
  return reversedArray;
}
