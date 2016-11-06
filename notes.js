console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return notes = JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };


  var duplicatNotes = notes.filter((note) => note.title === title);

  if (duplicatNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var removeNote = (title) => {
  console.log('removing', title);
};

var getNote = (title, body) => {
  console.log('Getting note', title);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote
};