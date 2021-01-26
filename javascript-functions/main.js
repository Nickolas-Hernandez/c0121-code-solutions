// Convert Minutes to Seconds
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('Value of convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

// Greet functions
function greet(name) {
  return 'Hey, ' + name;
}
console.log("Value of greet('Nick'): ", greet('Nick'));

// Get Area function
function getArea(width, height) {
  return width * height;
}
console.log('Value of getArea(17, 42): ', getArea(17, 42));

// Get FirstName Function
function getFirstName(person) {
  return person.firstName;
}
console.log(
  "Value of getFirstName({firstName: 'Nick', lastName: 'Hernandez'}}): ",
  getFirstName({ firstName: 'Nick', lastName: 'Hernandez' })
);

// getLastElement
function getLastElement(array) {
  return array[array.length - 1];
}
console.log(
  "Value of getLastElement(['propane', 'and', 'propane', 'accessories']): ",
  getLastElement(['propane', 'and', 'propane', 'accessories'])
);
