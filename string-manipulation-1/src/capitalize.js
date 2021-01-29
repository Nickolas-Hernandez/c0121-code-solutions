/* exported capitalize */
function capitalize(word) {
  var newWord = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      newWord += word[i].toUpperCase();
    }
    if (i > 0) {
      newWord += word[i].toLowerCase();
    }
  }
  return newWord;
}
