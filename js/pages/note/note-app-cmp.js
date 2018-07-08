import noteService from '../../services/note-service.js';
import noteList from './note-list-cmp.js'
import noteAdd from './note-add-cmp.js'
import noteFilter from './note-filter-cmp.js'
import noteDetails from '../../pages/note/note-details-cmp.js'

export default {
    template: `
    <section class="note-app">
        <h1>Note App!</h1>

        <note-add v-if="displayMode === 'list'"></note-add>
        <note-filter v-if="displayMode === 'list'"
                     v-on:filtered="setFilter">
                    </note-filter>
        
        <note-details v-if="displayMode === 'details'" 
                     v-bind:note="selectedNote" 
                     v-on:back="setSelectedNote(null)">
        </note-details>

        <note-list v-if="displayMode === 'list'"
                   v-bind:notes="notesToShow" 
                   v-on:delete-note="deleteNote"
                   v-on:select-note="setSelectedNote"
                   v-on:pin-note="pinNote">
                   
        </note-list>
    </section>
    `,
    data() {
        return {
            notes: [],
            selectedNote: null,
            displayMode: 'list',
            filter: null
        }
    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes;
            })
    },
    computed:{
        notesToShow: function () {
            if(this.filter !== null){
                return noteService.notesToShow(this.filter)
            } else return this.notes;
        }
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
        },

        setFilter(filterTitle) {
            this.filter = filterTitle;
        },

        pinNote(pinIdx){
            noteService.pinStatus(pinIdx)
            .then(notes =>
                noteService.query()
                .then(notes => {
                    this.notes = notes;
                })
            )
        }
    },

    components: {
        noteList,
        noteAdd,
        noteFilter,
        noteDetails
    }
}