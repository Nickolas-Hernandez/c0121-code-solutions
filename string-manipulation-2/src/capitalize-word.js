/* exported capitalizeWord */
function capitalizeWord(word) {
  var capitalized = '';
  if (word.toUpperCase() === 'JAVASCRIPT') {
    capitalized = 'JavaScript';
  } else {
    for (var i = 0; i < word.length; i++) {
      if (i === 0) {
        capitalized += word[i].toUpperCase();
      } else {
        capitalized += word[i].toLowerCase();
      }
    }
  }
  return capitalized;
}
