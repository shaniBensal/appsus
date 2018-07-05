import noteService from '../../services/note-service.js';
// import keepFilter from './keep-text-cmp.js';
import noteList from './note-list-cmp.js'
import noteAdd from './note-add-cmp.js'


export default {
    template:`
    <section class="note-app">
    <input type="text" v-model="searchNote" placeholder="First Name" />
    </section>
    `,
    data() {
        return {
            searchNote: ''
            // currView : 'user-profile',
        }
    },
    methods: {
    },
    components: {
        
    }
}