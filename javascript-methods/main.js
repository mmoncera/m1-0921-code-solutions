var number1 = 1;
var number2 = 2;
var number3 = 3;
var maximumValue = Math.max(number1, number2, number3);

console.log('Value of maximumValue:', maximumValue);

var heroes = ['Wolverine', 'Spiderman', 'Captain America', 'Batman'];
var randomNumber = Math.random();

randomNumber *= heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('value of randomIndex:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('value of randomHero:', randomHero);

var library = [
  { title: 'Kitchen Confidential', author: 'Anthony Bourdain' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: 'Outliers', author: 'Malcolm Gladwell' }
];
var lastBook = library.pop();

console.log('value of lastBook:', lastBook);

var firstBook = library.shift();

console.log('value of firstBook:', firstBook);

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

console.log('value of library:', library);

var fullName = 'Michael Moncera';
var firstAndLastName = fullName.split(' ');

console.log('value of firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();

console.log('value of sayMyName:', sayMyName);
