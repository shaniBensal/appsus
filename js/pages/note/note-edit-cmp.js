import noteService from '../../services/note-service.js';

export default {

    template: `
    <section class="note-edit">
        <form>
                Title: <input type="text" v-model="editedNote.title">
                
            <div v-if="editedNote.type ==='txt'">
                hello <textarea v-model="editedNote.data"></textarea>
            </div>

        <div v-if= "editedNote.type ==='list'">
            <ul>     
            <div v-for="(listBullet, idx) in editedNote.data">           
                <li>        
                <input type="text" v-model="editedNote.data[idx]">
                </li>
            </div>
            </ul>
        </div> 

        <div v-if= "editedNote.type ==='img'" class="newImg">
        <img class="main-photo" v-bind:src="editedNote.data">
        <div class="flex">
            <div v-for="(image,idx) in images">
            <img class ="thumb-photo" v-bind:src="image" @click="switchMainImg(idx)">
            </div>
        </div>
        </div>
                <button type="submit" ref="myBtn" @click.prevent="saveNote">Save</button>
            </form>
    </section>
    `,
    data() {
        return {
            editedNote: noteService.emptyNote(),
            images: noteService.images()
        }
    },
    created() {
        this.setNoteEdit()
    },
    mounted() { },
    methods: {
        setNoteEdit() {
            const { noteId } = this.$route.params;
            if (noteId) {
                noteService.getNoteById(noteId)
                    .then(note => {
                        this.editedNote = JSON.parse(JSON.stringify(note));
                    })
            }
        },

        saveNote() {
            noteService.saveNote(this.editedNote)
                .then(savedNote => {
                    this.$router.push('/note');
                    // eventBus.$emit(EVENT_SHOW_MSG, 'Book Saved!!!')
                })
        },

        switchMainImg(idx){
            this.editedNote.data = this.images[idx];
        }
    }
}
