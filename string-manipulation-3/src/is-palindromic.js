/* exported isPalindromic */
function isPalindromic(string) {
  var wordsInString = string.split(' ');
  var wordWithOutSpaces = '';
  var reversedWord = '';
  for (var i = 0; i < wordsInString.length; i++) {
    wordWithOutSpaces += wordsInString[i];
  }
  for (var j = wordWithOutSpaces.length - 1; j >= 0; j--) {
    reversedWord += wordWithOutSpaces[j];
  }
  if (reversedWord === wordWithOutSpaces) {
    return true;
  } else {
    return false;
  }
}
