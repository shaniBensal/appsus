
import notePreview from './note-preview-cmp.js'

export default {
    props:['notes'],
    template: `
    <section class="notes-list clean-list">
    <ul>
        <div v-for="(note, idx) in notes">
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
            this.$emit('noteselected', noteId);
        },
    },
    components: {
        notePreview
    }
}