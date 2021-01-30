/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalized = '';
  for (var i = 0; i < word.length; i++) {
    if (i === 0) {
      capitalized += word[i].toUpperCase();
    } else {
      capitalized += word[i].toLowerCase();
    }
    if (word.toUpperCase() === 'JAVASCRIPT') {
      capitalized = 'JavaScript';
    }
  }
  return capitalized;
}
