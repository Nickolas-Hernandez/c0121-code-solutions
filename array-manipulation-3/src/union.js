/* exported union */
function union(first, second) {
  var unionArray = [];
  for (var i = 0; i < first.length; i++) {
    unionArray.push(first[i]);
  }
  for (var j = 0; j < second.length; j++) {
    if (!unionArray.includes(second[j])) {
      unionArray.push(second[j]);
    }
  }
  return unionArray;
}
