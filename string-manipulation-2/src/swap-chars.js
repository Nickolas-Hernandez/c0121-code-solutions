/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var swappedString = '';
  var firstIndexChar = string[firstIndex];
  var secondIndexChar = string[secondIndex];
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swappedString += secondIndexChar;
    } else if (i === secondIndex) {
      swappedString += firstIndexChar;
    } else {
      swappedString += string[i];
    }
  }
  return swappedString;
}
