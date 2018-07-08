
import utils from './utils.js'

function query() {
    var notesFromStorage = utils.loadFromStorage('NOTES');
    if (notesFromStorage) {
        notes = notesFromStorage;
    }
    return Promise.resolve(notes);
}

function getNextNoteId(prevNoteId) {
    var noteIdx = notes.findIndex(currNote => currNote.id === prevNoteId);
    var nextNote = (noteIdx < notes.length - 1) ? notes[noteIdx + 1] : notes[0]
    return Promise.resolve(nextNote.id)
}

function emptyNote() {
    return {
        id: null,
        type: null,
        title: null,
        data: null,
        backgroundColor: 'white'
    }
}

function pinStatus(noteIdx) {
    if (notes[noteIdx].pinNote) unPinNote(noteIdx);
    else pinNote(noteIdx);
    utils.saveToStorage('NOTES', notes);
    return Promise.resolve(notes);

}

function pinNote(pinIdx) {
    var noteToPin;
    notes[pinIdx].pinNote = true;
    noteToPin = notes.splice(pinIdx, 1);
    notes = noteToPin.concat(notes);
}

function unPinNote(pinIdx) {
    var noteToPin;
    notes[pinIdx].pinNote = false;
    noteToPin = notes.splice(pinIdx, 1);
    notes = notes.concat(noteToPin);
}

function saveNote(note) {
    if (note.id) {
        var noteIdx = notes.findIndex(currNote => currNote.id === note.id);
        notes[noteIdx] = note;
    } else {
        note.id = utils.makeId();
        notes.unshift(note)
    }
    utils.saveToStorage('NOTES', notes);
    return Promise.resolve(notes);
}

function images() {
    var imagsFromStorage = utils.loadFromStorage('IMAGES');
    if (imagsFromStorage) {
        return imagsFromStorage;
    } else return [
        'http://coding-academy.org/books-photos/20.jpg',
        'http://coding-academy.org/books-photos/14.jpg',
        'http://coding-academy.org/books-photos/2.jpg'
    ]
}

function addNewImage(url) {
    var imgs = images();
    imgs.unshift(url);
    imgs = [...new Set(imgs)];
    utils.saveToStorage('IMAGES', imgs)
    return Promise.resolve(imgs);
}

function removeNote(noteIdx) {
    notes.splice(noteIdx, 1);
    utils.saveToStorage('NOTES', notes);
    return Promise.resolve(notes);
}

function getNoteById(noteId) {
    let note = notes.find(note => note.id === noteId);
    return Promise.resolve(note);
}

function notesToShow(filterBy) {
    var filterByToLower = filterBy.toLowerCase();
    return notes.filter(note => {
        var titleToLower = note.title.toLowerCase();
        return titleToLower.includes(filterBy)
    })
}

var notes = [
    {
        id: 'Q8Q9Lsd03BD',
        type: 'txt',
        title: 'My first text note',
        data: 'Vue is the Best',
        backgroundColor: '#D4DCCD',
        pinNote: false

    },
    {
        id: 'bd7a76kARao',
        type: 'list',
        title: 'Things To-Do',
        data: ['go shopping', 'watch some movie', 'sleep'],
        dataMarked: [],
        backgroundColor: '#D4DCCD',
        pinNote: false

    },
    {
        id: 'qKyG0vqeO3e',
        type: 'img',
        title: 'How I feel now',
        data: 'http://coding-academy.org/books-photos/17.jpg',
        backgroundColor: '#D4DCCD',
        pinNote: false
    }
]

export default {
    query,
    saveNote,
    removeNote,
    getNoteById,
    getNextNoteId,
    emptyNote,
    images,
    addNewImage,
    notesToShow,
    pinNote,
    pinStatus,
    unPinNote
}