/* exported capitalizeWords */
function capitalizeWords(string) {
  var capitalizedString = '';
  capitalizedString += string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    if (string[i - 1] === ' ') {
      capitalizedString += string[i].toUpperCase();
    } else if (string[i - 1] !== ' ') {
      capitalizedString += string[i].toLowerCase();
    }
  }
  return capitalizedString;
}
