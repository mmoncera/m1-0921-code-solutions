var books = [
  {
    isbn: '1',
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien'
  },
  {
    isbn: '2',
    title: 'Outliers',
    author: 'Malcolm Gladwell'
  },
  {
    isbn: '3',
    title: 'Kitchen Confidential: Adventures in the Culinary Underbelly',
    author: 'Anthony Bourdain'
  }
];

console.log('value of books:', books);
console.log('value of typeof books:', typeof books);

var jsonStringifyBooks = JSON.stringify(books);

console.log('value of jsonStringifyBooks:', jsonStringifyBooks);
console.log('value of typeof jsonStringifyBooks', typeof jsonStringifyBooks);

var student = '{"id": 4, "name": "Mike"}';

console.log('value of student:', student);
console.log('value of typeof student:', typeof student);

var jsonParseStudent = JSON.parse(student);

console.log('value of jsonParseStudent:', jsonParseStudent);
console.log('value of typeof jsonParseStudent:', typeof jsonParseStudent);
