function graduation(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduation('M.D');
const lawSchool = graduation('Esq.');

console.log('medSchool:', medicalSchool('Alyosha Karamazov'));
console.log('lawSchool:', lawSchool('Ivan Fyodorovich Karamazov'));
