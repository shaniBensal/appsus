import noteService from '../../services/note-service.js';

export default {
  template: `
		<section class="note-details" v-if="note">
      <div :style="{backgroundColor: note.backgroundColor}">
		<button @click="nextNote">Next Note</button>

        <button @click="$router.push('/note')"> Back </button>
        
        <router-link :to="'/note/edit/'+note.id">Edit</router-link>
                            {{note.title}}

			<div class="note-info" v-if="note.type === 'txt'">
				<p>{{note.data}}</p>
			</div>

			 <div class="note-info" v-if="note.type === 'img'" >
				<img :src="note.data" :alt="note.title" class="displayImg" />
			</div>
            
      <div class="note-info" v-if="note.type === 'list'" >
          <ul>     
            <div v-for="(listBullet, idx) in note.data">           
                <li>{{listBullet}}</li>
            </div>
          </ul>
          </div>
			</div> 
		</section>  
	`,
  components: {},
  data() {
    return {
        note:null, 
        editedColor:'white'
    };
  },
  created() {
        this.loadNote();      
  },
  methods: {
    loadNote() {      
      noteService
      .getNoteById(this.$route.params.noteId)
        .then(note => (this.note = note));     
    },
    
    nextNote() {
      noteService.getNextNoteId(this.note.id).then(noteId => {
        this.$router.push(`/note/${noteId}`);
      });
    },

  },
  watch: {
    '$route.params.noteId': function (newNoteId) {
      this.loadNote();
    }
  },
  computed: {
  }
};