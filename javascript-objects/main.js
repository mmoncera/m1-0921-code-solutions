var student = {
  firstName: 'Michael',
  lastName: 'Moncera',
  age: 43
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'Martial Arts Instructor';

console.log('value of studet.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'KIA',
  model: 'Sorento',
  year: 2017
};

vehicle['color'] = 'black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'Archie',
  type: 'dog'
};

delete pet.name;
delete pet['type'];

console.log('value of pet:', pet);
