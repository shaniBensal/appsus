
import noteService from '../../services/note-service.js';

export default {
    props: ['note'],

    template: `
    <section class="note-listType">
    <button @click="addBullet">+</button>
    
     <ul>     
            <div v-for="(listBullet, idx) in note.data">           
                <li class ="clean-list bullets">      
                <input type="checkbox" @click="changeNoteMark('notSelected',idx)">  
                <input class="bullets" type="text" v-model="note.data[idx]">
                <button @click.stop="deleteBullet(idx)"><i class="fas fa-trash-alt"></i></button>
                </li>
            </div>

            <hr>

            <div v-for="(listBullet, idx) in note.dataMarked" class="noOutline">      
                <li class ="clean-list bulletsMarked">  
                <input type="checkbox" @click="changeNoteMark('selected',idx)">  
                <input class="Markedbullets" type="text" v-model="note.dataMarked[idx]">
                </li>
            </div>
    </ul>
    </section>
    `,
    data() {
        return {}
    },
    created() {},
    mounted() {},

    methods: {
        changeNoteMark(activeNoteStatus, idx) {
            if (activeNoteStatus === 'selected') {
                let bullet = this.note.dataMarked[idx];
                this.note.dataMarked.splice(idx, 1);
                this.note.data.unshift(bullet);
            } else{
                let bullet = this.note.data[idx];
                this.note.data.splice(idx, 1);
                this.note.dataMarked.unshift(bullet);
            }
            noteService.saveNote(this.note)
        },

        addBullet() {
            let newBullet = '';
            if (this.note.data === null) this.note.data = ['first note'];
            else this.note.data.unshift(newBullet);
            noteService.saveNote(this.note)
        },

        deleteBullet(idx){
            this.note.data.splice(idx,1)
            noteService.saveNote(this.note)
        }
    },
}