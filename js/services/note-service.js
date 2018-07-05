
function query() {
	return Promise.resolve(notes);
}

function getNoteById(id){
    var note = notes.find(note => note.id === id);
    return note;
}

var notes = [
    {
        id: 'Q8Q9Lsd03BD',
        type: 'txt',
        data: 'Vue is the Best'
    },
    {
        id: 'bd7a76kARao',
        type: 'list',
        data:['go shopping', 'watch some movie', 'sleep']
    },
    {
        id: 'qKyG0vqeO3e',
        type: 'img',
        data: 'http://coding-academy.org/books-photos/17.jpg'
    }
]

export default {
    query,
    getNoteById
}