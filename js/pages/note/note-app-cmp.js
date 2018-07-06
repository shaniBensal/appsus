import noteService from '../../services/note-service.js';
// import keepFilter from './keep-text-cmp.js';
import noteList from './note-list-cmp.js'
import noteAdd from './note-add-cmp.js'
import noteFilter from './note-filter-cmp.js'
import noteDetails from '../../pages/note/note-details-cmp.js'

export default {
    template: `
    <section class="note-app">
        <h1>Note App!</h1>

        <note-add v-if="displayMode === 'list'"></note-add>
        <note-filter v-if="displayMode === 'list'"></note-filter>
        
        <note-details v-if="displayMode === 'details'" 
                     v-bind:note="selectedNote" 
                     v-on:back="setSelectedNote(null)">
        </note-details>

        <note-list v-if="displayMode === 'list'"
                   v-bind:notes="notes" 
                   v-on:delete-note="deleteNote"
                   v-on:select-note="setSelectedNote">
        </note-list>

    </section>
    `,
    data() {
        return {
            notes: [],
            selectedNote: null,
            displayMode: 'list'
        }
    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes;
            })
    },
    methods: {
       
        saveNote(note) {
            noteService.saveNote(note)
            this.displayMode = 'list';
            this.noteToEdit = null;
        },

        deleteNote(noteIdx) {
            noteService.removeNote(noteIdx)
        },

        setSelectedNote(note) {
            this.selectedNote = note;
            this.displayMode = 'details';
        }
    },
    components: {
        noteList,
        noteAdd,
        noteFilter,
        noteDetails
    }
}