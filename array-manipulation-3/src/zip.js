/* exported zip */
function zip(first, second) {
  var zipArray = [];
  if (first.length === second.length || first.length < second.length) {
    for (var i = 0; i < first.length; i++) {
      zipArray.push([first[i], second[i]]);
    }
  } else if (first.length > second.length) {
    for (var j = 0; j < second.length; j++) {
      zipArray.push([first[j], second[j]]);
    }
  }
  return zipArray;
}
