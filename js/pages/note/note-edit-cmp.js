import noteService from '../../services/note-service.js';
import noteBullets from './note-list-type-cmp.js'

export default {

    template: `
    <section>
    <div :style="{backgroundColor: editedNote.backgroundColor}" class="note-edit flex column align-center">

    <form class="noOutline flex column align-center">
        <input type="color" v-model= "editedNote.backgroundColor">
                Title: <input type="text" v-model="editedNote.title">
                
            <div v-if="editedNote.type ==='txt'">
                 <textarea v-model="editedNote.data"></textarea>
            </div>

        <div v-if= "editedNote.type ==='list'">
            <note-bullets v-bind:note="editedNote"></note-bullets>
        </div> 

        <div v-if= "editedNote.type ==='img'" class="column flex">
            <div>
                <div v-for="(image,idx) in images" class="flex column">
                <img class ="thumb-photo" v-bind:src="image" @click="switchMainImg(idx)">        
                </div>
               
            
                <div>   
                    enter another URL: <input v-model ="editedNote.data"> 
                </div>
                </div>
                
                <img v-bind:src="editedNote.data"> 
                </div>
                <div class=" bottom-btn flex space-between">
                    <button @click="back"><i class="fas fa-arrow-left"></i></button>
                    <button type="submit" @click.prevent="saveNote">Save</button>
                </div>
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
            if (this.$route.params !== 'note/edit/text' &&
                this.$route.params !== 'note/edit/image' &&
                this.$route.params !== 'note/edit/list') {
                this.$router.push('/note/');
            } else this.$router.push('/note');
        }
    },
    components: {
        noteBullets
    }
}
