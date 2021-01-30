/* exported ransomCase */
function ransomCase(string) {
  var upperCased = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      upperCased += string[i].toLowerCase();
    } else if (i % 2 === 1) {
      upperCased += string[i].toUpperCase();
    }
  }
  return upperCased;
}
