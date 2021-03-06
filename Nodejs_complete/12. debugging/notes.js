console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {
  try {
    var notesString = fs.readFileSync('notes-data.json');
    return JSON.parse(notesString);
  }catch(e){
    
    return [];
}};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};


var addNote = (title, body) => {

  var notes = fetchNotes();
  var note = { 
      title, 
      body 
    };
    
    var duplicateNotes = notes.filter((note) => note.title === title);
    if(duplicateNotes.length === 0){
      notes.push(note);
      saveNotes(notes);
      return note; 
    }
    
  
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  var notes =fetchNotes();
  var filterNotes = notes.filter((note) => note.title === title);
  console.log(filterNotes);
  return filterNotes[0];
  //console.log('Getting note', title);
};

var removeNote = (title) => {
 var notes = fetchNotes();
 var filterNotes = notes.filter((note) => note.title !== title );
 saveNotes(filterNotes);
 
 return notes.length !== filterNotes.length;
};
var logNote = (note) => {
  console.log('-----');
  console.log(`Title:  ${note.title}`);
  console.log(`Body:  ${note.body}`);
};
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};