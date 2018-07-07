import noteService from '../../services/note-service.js';
import noteBullets from './note-list-type-cmp.js'

export default {

    template: `
    <section class="note-edit">
        <div :style="{backgroundColor: editedNote.backgroundColor}">
        <input type="color" v-model= "editedNote.backgroundColor">
        <form class="noOutline">
                Title: <input type="text" v-model="editedNote.title">
                
            <div v-if="editedNote.type ==='txt'">
                hello <textarea v-model="editedNote.data"></textarea>
            </div>

        <div v-if= "editedNote.type ==='list'">
            <note-bullets v-bind:note="editedNote"></note-bullets>
        </div> 

        <div v-if= "editedNote.type ==='img'" class="newImg">
        <img class="main-photo" v-bind:src="editedNote.data">
        <div class="flex">
            <div v-for="(image,idx) in images">
            <img class ="thumb-photo" v-bind:src="image" @click="switchMainImg(idx)">
        </div>
            enter another URL: <input v-model ="editedNote.data"> 
        </div>

        </div>
                <button type="submit" @click.prevent="saveNote">Save</button>
                <button @click="back"> Back </button>
            </form>
        </div>
        
    </section>
    `,
    data() {
        return {
            editedNote: noteService.emptyNote(),
            images: noteService.images(),
        }
    },
    created() {
        this.setNoteEdit()
    },
    mounted() { },
    computed: {
        myStyle: function () {
                backgroundColor: this.editedNote.backgroundColor,
                saveNote()
        }
    },
    methods: {
        setNoteEdit() {
            const { noteId } = this.$route.params;
            if (noteId === 'text') this.editedNote.type = 'txt';
            else if (noteId === 'image') this.editedNote.type = 'img';
            else if (noteId === 'list') this.editedNote.type = 'list';
            else {
                noteService.getNoteById(noteId)
                    .then(note => {
                        this.editedNote = JSON.parse(JSON.stringify(note));
                    })
            }
        },

        saveNote() {
            if (this.editedNote.type === 'img') {
                noteService.addNewImage(this.editedNote.data)
            }
            noteService.saveNote(this.editedNote)
                .then(savedNote => {
                    this.$router.push('/note');
                })
        },

        switchMainImg(idx) {
            this.editedNote.data = this.images[idx];
        },

        back() {
            if (this.$route.params !== 'edit/text' &&
                this.$route.params !== 'edit/image' &&
                this.$route.params !== 'edit/list') {
                this.$router.push('/note/' + this.editedNote.id);
            } else this.$router.push('/note/');
        }

    },
    components: {
        noteBullets
    }
}
