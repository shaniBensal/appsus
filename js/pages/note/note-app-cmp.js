import noteService from '../../services/note-service.js';
// import keepFilter from './keep-text-cmp.js';
import noteList from './note-list-cmp.js'
import noteAdd from './note-add-cmp.js'
import noteFilter from './note-filter-cmp.js'

export default {
    template:`
    <section class="keep-app">
        <h1>Keep App!</h1>
        <note-add></note-add>
        <note-filter></note-filter>
        <note-list v-bind:notes="notes"></note-list>
    </section>
    `,
    data() {
        return {
            notes: []
            // currView : 'user-profile',
        }
    },
    created() {
		noteService.query()
			.then(notes => {
                this.notes = notes;
                console.log(this.notes);
                
			})
	},
    methods: {
    },
    components: {
        noteList,
        noteAdd,
        noteFilter
    }
}