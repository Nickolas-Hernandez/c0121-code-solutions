/* exported defaults */
function defaults(target, source) {
  for (var key in target) {
    if (source[key]) {
      source[key] = target[key];
    }
  }
  target = Object.assign(target, source);
}
