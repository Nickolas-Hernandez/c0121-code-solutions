/* exported getWords */
function getWords(string) {
  var words = [];
  if (string === '') {
    return words;
  } else {
    words = string.split(' ');
    return words;
  }
}
