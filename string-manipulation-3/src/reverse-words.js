/* exported reverseWords */
function reverseWords(string) {
  var wordsArray = string.split(' ');
  var reversedPhrase = '';
  for (var i = 0; i < wordsArray.length; i++) {
    var reversed = '';
    for (var j = wordsArray[i].length - 1; j >= 0; j--) {
      reversed += wordsArray[i][j];
    }
    if (i === wordsArray.length - 1) {
      reversedPhrase += reversed;
    } else {
      reversedPhrase += reversed + ' ';
    }
  }
  return reversedPhrase;
}
