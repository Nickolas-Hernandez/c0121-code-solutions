/* exported isAnagram */
function isAnagram(firstString, secondString) {
  for (var i = 0; i < firstString.length; i++) {
    if (!secondString.includes(firstString[i])) {
      return false;
    }
  }
  return true;
}
