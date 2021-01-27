/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstName = person.firstName;
  var lastName = person.lastName;
  return firstName[0] + lastName[0];
}
