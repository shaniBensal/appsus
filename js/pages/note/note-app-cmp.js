import noteService from '../../services/note-service.js';
// import keepFilter from './keep-text-cmp.js';
import noteList from './note-list-cmp.js'
import noteAdd from './note-add-cmp.js'
import noteFilter from './note-filter-cmp.js'

export default {
    template:`
    <section class="note-app">
        <h1>Note App!</h1>
        <note-add></note-add>
        <note-filter></note-filter>
        <note-list v-bind:notes="notes" v-on:noteSelected="editSelectedNote"></note-list>
    </section>
    `,
    data() {
        return {
            notes: [],
            selectedNote:null,
            noteToEdit: null,
            displayMode:'list',
            // currView : 'user-profile',
        }
    },
    created() {
		noteService.query()
			.then(notes => {
                this.notes = notes;                
			})
	},
    methods: {
        editSelectedNote(note) {            
            this.noteToEdit = note;
            this.displayMode = 'edit'
        },
        saveNote(note) {
            noteService.saveNote(note)
            console.log('Cars: ', this.note);
            this.displayMode = 'list';
            this.noteToEdit = null;
        },
        deleteNote(noteIdx) {
            console.log('Parent Deleting', noteIdx);
            noteService.removeNote(noteIdx)
        },
        setSelectedNote(note) {
            console.log('Parent got a selected car from car-list:', note);
            this.selectedNote = note;
            this.displayMode = (note)? 'details' : 'list';  
        },
    },
    components: {
        noteList,
        noteAdd,
        noteFilter
    }
}