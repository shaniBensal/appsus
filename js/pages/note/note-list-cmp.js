
import notePreview from './note-preview-cmp.js'

export default {
    props: ['notes'],
    template: `
    <section class="notes-list clean-list">
    <ul>
        <div v-for="(note, idx) in notes">
        <button v-on:click.stop="deleteNote(idx)">X</button>
            <note-preview v-bind:note="note" v-on:click.native="selectedNote(note.id)"></note-preview>
        </div>
    </ul>
    </section>
    `,
    data() {
        return {}
    },
    methods: {
        selectedNote(noteId) {
            this.$emit('noteSelected', noteId);
        },
        deleteNote(idx) {
            this.$emit('note-deleted', idx)
        },
    },
    components: {
        notePreview
    }
}