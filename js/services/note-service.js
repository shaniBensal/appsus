// import noteAppCmp from "../pages/note/note-app-cmp";
import utils from './utils.js'

function query() {
    var notesFromStorage = utils.loadFromStorage('NOTES');
    if (notesFromStorage) {
        notes = notesFromStorage;
    }
	return Promise.resolve(notes);
}

function getNextNoteId(prevNoteId){
    var noteIdx = notes.findIndex(currNote => currNote.id === prevNoteId);
	var nextNote = (noteIdx < notes.length-1)? notes[noteIdx+1] : notes[0] 
	return Promise.resolve(nextNote.id)
}

function emptyNote(){
    return {
        id: null,
        type: null,
        title: null,
        data: null
    }
}

function saveNote(note){
    if (note.id) {
        var noteIdx = notes.findIndex(currNote => currNote.id === note.id);
        notes[noteIdx] = note;
    } else {
        note.id = makeid();
        notes.unshift(note)
    }
    utils.saveToStorage('NOTES', notes);
    return Promise.resolve(notes);
}

function images(){
    return ['http://coding-academy.org/books-photos/20.jpg','http://coding-academy.org/books-photos/14.jpg','http://coding-academy.org/books-photos/2.jpg']
}

function removeNote(noteIdx){
    notes.splice(noteIdx, 1);
    utils.saveToStorage('NOTES', notes);
}

function getNoteById(noteId){        
    let note = notes.find(note => note.id === noteId);            
	return Promise.resolve(note);
}

// function saveNote(note){
//     if (note.id) {
// 		var noteIdx = notes.findIndex(currNote => currNote.id === note.id);
// 		// Vue.js Caveat!
// 		notes.splice(noteIdx, 1, note)
// 		// books[bookIdx] = book;

// 	} else {
// 		note.id = utils.makeId();
// 		notes.push(note);
// 	}
// 	console.log('Sevice is saving the book', noteAppCmp);
// 	return Promise.resolve(note);

// }
var notes = [
    {
        id: 'Q8Q9Lsd03BD',
        type: 'txt',
        title:'My first text note',
        data: 'Vue is the Best'
    },
    {
        id: 'bd7a76kARao',
        type: 'list',
        title:'Things To-Do',
        data:['go shopping', 'watch some movie', 'sleep']
    },
    {
        id: 'qKyG0vqeO3e',
        type: 'img',
        title:'How I feel now',
        data: 'http://coding-academy.org/books-photos/17.jpg'
    }
]

export default {
    query,
    saveNote,
    removeNote,
    getNoteById,
    getNextNoteId,
    emptyNote,
    images
}