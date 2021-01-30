/* exported isVowel */
function isVowel(char) {
  if (char.toUpperCase() === 'A' ||
    char.toUpperCase() === 'E' ||
    char.toUpperCase() === 'I' ||
    char.toUpperCase() === 'O' ||
    char.toUpperCase() === 'U') {
    return true;
  } else {
    return false;
  }
}
