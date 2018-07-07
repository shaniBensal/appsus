
import noteService from '../../services/note-service.js';

export default {
    props: ['note'],

    template: `
    <section class="note-listType">
    <button @click="addBullet">+</button>
    
     <ul>     
            <div v-for="(listBullet, idx) in note.data" class="noOutline">           
                <li class ="clean-list bullets">      
                <input type="checkbox" @click="changeNoteMark('notSelected',idx)">  
                <input class="bullets" type="text" v-model="note.data[idx]">
                <button v-if="idx !== 0" @click.stop="changeNoteLoc(idx,-1)">up</button>
                <button v-if="idx !== note.data.length-1" @click.stop ="changeNoteLoc(idx,1)">down</button>
                <button @click.stop="deleteBullet(idx)">X</button>
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

        changeNoteLoc(idx, incBy) {            
            var temp = this.note.data[idx];           
            this.note.data[idx] = this.note.data[idx + incBy];
            this.note.data[idx + incBy] = temp;   
            noteService.saveNote(this.note)         
        },

        deleteBullet(idx){
            this.note.data.splice(idx,1)
            noteService.saveNote(this.note)
        }
    },
}