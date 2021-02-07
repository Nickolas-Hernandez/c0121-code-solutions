/* exported difference */
function difference(first, second) {
  var differenceArray = [];
  for (var i = 0; i < first.length; i++) {
    if (!second.includes(first[i])) {
      differenceArray.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (!first.includes(second[j])) {
      differenceArray.push(second[j]);
    }
  }
  return differenceArray;
}
