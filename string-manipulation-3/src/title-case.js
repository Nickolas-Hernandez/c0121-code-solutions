/* exported titleCase */
function titleCase(title) {
  var titleWords = title.split(' ');
  var casedTitle = '';
  for (var i = 0; i < titleWords.length; i++) {
    var dashIndex = 0;
    if (titleWords[i].toLowerCase() === 'javascript:') {
      titleWords[i] = 'JavaScript:';
    } else if (titleWords[i] === 'javascript') {
      titleWords[i] = 'JavaScript';
    } else if (titleWords[i] === 'api') {
      titleWords[i] = 'API';
    } else if (i === 0) {
      titleWords[i] = titleWords[i][0].toUpperCase() + titleWords[i].slice(1);
    } else if (titleWords[i].includes('-')) {
      dashIndex = titleWords[i].indexOf('-');
      titleWords[i] = titleWords[i][0].toUpperCase() +
                      titleWords[i].slice(1, dashIndex + 1) +
                      titleWords[i][dashIndex + 1].toUpperCase() +
                      titleWords[i].slice(dashIndex + 2);
    } else if (titleWords[i - 1].includes(':')) {
      titleWords[i] = titleWords[i][0].toUpperCase() + titleWords[i].slice(1);
    } else if (titleWords[i].length < 4 && titleWords[i] !== 'web') {
      titleWords[i] = titleWords[i].toLowerCase();
    } else {
      titleWords[i] = titleWords[i][0].toUpperCase() + titleWords[i].slice(1);
    }
    casedTitle += titleWords[i] + ' ';
  }
  return casedTitle.trim();
}
