var books = [
  {
    isbn: '123456789',
    title: 'Paradise Lost',
    author: 'Milton, John'
  },
  {
    isbn: '234567891',
    title: 'The Hidden Reality',
    author: 'Greene, Brian'
  },
  {
    isbn: '345678912',
    title: 'The Future of  Humanity',
    author: 'Michio, Kaku'
  }
];

console.log('books:', books);
console.log('type of books:', typeof books);

var booksJsonString = JSON.stringify(books);
console.log('booksJsonString:', booksJsonString);
console.log('typeof booksJsonString:', typeof booksJsonString);

var studentString = '[{"numberId":"123456789","name":"nick"}]';
console.log('studentString:', studentString);
console.log('typeof studentString:', typeof studentString);

var studentObject = JSON.parse(studentString);
console.log('studentObject:', studentObject);
console.log('typeof studentObject:', typeof studentObject);
