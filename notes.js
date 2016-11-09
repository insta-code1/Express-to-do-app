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
  return fetchNotes();
};

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title == title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  console.log('removing', title);
  var notes = fetchNotes();
  // filter notes, removing the one with the title of arguments
  var filterNotes = notes.filter((note) => note.title !== title );
  saveNotes(filterNotes);

  return notes.length !== filterNotes.length;
};


logNote = (note) => {
debugger;
  console.log('--');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  getNote,
  logNote
};