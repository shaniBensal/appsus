
import notePreview from './note-preview-cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-list clean-list">
    <ul class="note-list flex flex-wrap">
        <li class="list" :style="{backgroundColor: note.backgroundColor}"  v-for="(note, idx) in notes">
        <button @click.stop="setPinNote(idx)">
            <i v-if ="note.pinNote" class="fas fa-thumbtack un-pin"></i>
        <i v-if="!note.pinNote" class="fas fa-thumbtack pin"></i>
    </button>
        <button class= "delete-btn" v-on:click.stop="deleteNote(idx)">X</button>
            <note-preview v-bind:note="note" v-on:click.native="selectedNote(note)">
            </note-preview>
            </li>
    </ul>
    </section>
    `,
    data() {
        return {}
    },

    methods: {
        selectedNote(note) {
            this.$emit('select-note', note);
        },
        deleteNote(idx) {
            this.$emit('delete-note', idx)
        },
        setPinNote(idx) {
            this.$emit('pin-note', idx)
        },

    },
    components: {
        notePreview
    }
}