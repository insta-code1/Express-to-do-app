// var obj = {
//   name: 'insta'
// };
// var stringObj = JSON.stringify(obj);
// console.log(typeof(obj));
// console.log(stringObj);

// var personString = '{"name": "insta", "age": 105}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);7

const fs = require('fs');

var originalNote = {
  title: 'Interesting Title',
  body: 'Blah Blah Blah'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json', originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);