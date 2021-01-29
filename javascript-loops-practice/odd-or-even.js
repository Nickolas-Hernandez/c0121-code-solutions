/* exported oddOrEven */
function oddOrEven(numbers) {
  var values = [];
  var i = 0;
  while (i < numbers.length) {
    if (numbers[i] % 2 === 0) {
      values.push('even');
    } else if (numbers[i] % 2 !== 0) {
      values.push('odd');
    }
    i++;
  }
  return values;
}
