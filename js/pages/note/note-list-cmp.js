
import notePreview from './note-preview-cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-list clean-list">
    <ul class="flex">
        <div v-for="(note, idx) in notes">
        <li class="list">
        <button v-on:click.stop="deleteNote(idx)">X</button>
            <note-preview v-bind:note="note" v-on:click.native="selectedNote(note)">
            </note-preview>
            <button @click.stop="setPinNote(idx)">Pin</button>
            </li>
        </div>
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
        }
    },
    components: {
        notePreview
    }
}