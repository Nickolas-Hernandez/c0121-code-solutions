var num1 = 10;
var num2 = 28;
var num3 = -16;
var maximumValue = Math.max(num1, num2, num3);
console.log('Value of maximumValue:', maximumValue);
var heroes = ['Naruto Uzumaki', 'Kickass', 'Frozone', 'Batman'];
var randomNumber = Math.random();
randomNumber *= heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('Value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('Value of randomHero:', randomHero);

var library = [
  {
    title: 'Basic Economics',
    author: 'Thomas Sowell'
  },
  {
    title: 'The Future of Humanity',
    author: 'Michio Kaku'
  },
  {
    title: '1984',
    author: 'George Orwell'
  }
];
var lastBook = library.pop();
console.log('Value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('Value of firstBook:', firstBook);
var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Value of library:', library);

var fullName = 'Nick Hernandez';
var firstAndLastName = fullName.split(' ');
console.log('Value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('Value of sayMyName:', sayMyName);
