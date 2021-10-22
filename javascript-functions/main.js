function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

var convertMinutesToSecondsResult = convertMinutesToSeconds(5);

console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(name) {
  return 'Hello ' + name;
}

var greetResult = greet('Michael');

console.log('greetResult:', greetResult);

function getArea(width, height) {
  return width * height;
}

var getAreaResult = getArea(7, 8);

console.log('getAreaResult:', getAreaResult);

function getFirstName(person) {
  return person.firstName;
}

var getFirstNameResult = getFirstName({
  firstName: 'Michael',
  lastName: 'Moncera'
});

console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement(array) {
  return array[array.length - 1];
}

var getLastElementResult = getLastElement(['dog', 'cat', 'fish', 'bird']);

console.log('getLastElementResult:', getLastElementResult);
