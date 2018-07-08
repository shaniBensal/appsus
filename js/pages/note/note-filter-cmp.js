import noteService from '../../services/note-service.js';

export default {
    template:`
    <section class="note-filter">
    <i class="fas fa-search"></i> <input type="text" v-model="searchNote" placeholder="Search Notes" />
    </section>
    `,
    data() {
        return {
            searchNote: ''
        }
    },
    methods: {
    },
    watch:{
        searchNote(txt){
            this.$emit('filtered', this.searchNote);
        }
    },
    components: {


        
    }
}