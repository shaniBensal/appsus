
import notePreview from './note-preview-cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-list clean-list">
    <ul>
        <div v-for="(note, idx) in notes">
        <button v-on:click.stop="deleteNote(idx)">X</button>
            <note-preview v-bind:note="note" v-on:click.native="selectedNote(note)"></note-preview>
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
        }
    },
    components: {
        notePreview
    }
}