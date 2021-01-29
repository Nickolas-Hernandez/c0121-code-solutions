/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  var sufficatedWords = [];
  for (var i = 0; i < words.length; i++) {
    sufficatedWords.push(words[i] + suffix);
  }
  return sufficatedWords;
}
