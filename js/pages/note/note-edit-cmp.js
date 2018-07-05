
export default {
    props: ['noteToEdit'],

    template: `
    
       <section class="note-edit">
           <!-- <button v-on:click="$emit('back')">Back</button> -->
                       
            <input type="text" 
                v-model="newNote.vendor" 
                placeholder="Vendor name" />

            <input type="number" v-model.number="newNote.year" placeholder="Car year" />
            <button v-on:click="saveCar">Save</button>
            <button v-on:click="$emit('back')">Cancel</button>
        </section>
    
    `,
    data() {

        var toEdit = (this.noteToEdit)? {...this.noteToEdit} : noteService.emptyNote();

        return {
            newNote: toEdit,
        }
    },
    methods: {
        saveNote() {
            this.$emit('save-note', this.newNote);
            this.newNote =  noteService.emptyNote();
        }
    }
}