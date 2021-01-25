var student = {
  firstName: 'Nick',
  lastName: 'Hernandez',
  age: 22
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('Value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'Gym Front Desk Admin';
console.log('Value of livesInIrvine: ', student.livesInIrvine);
console.log('Value of previousOccupation: ', student.previousOccupation);

var vehicle = {
  make: 'Mercedes',
  model: 'Gullwing 300sl',
  year: 1954
};
vehicle['color'] = 'cyan';
vehicle['isConvertible'] = false;
console.log("Value of vehicle['color']: ", vehicle['color']);
console.log("Value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log('Value of vehicle: ', vehicle);

var pet = {
  name: 'Luke',
  type: 'Dog'
};
delete pet.name;
delete pet['type'];
console.log('Value of pet: ', pet);
