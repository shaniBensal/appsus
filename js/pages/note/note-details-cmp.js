import noteService from '../../services/note-service.js';

export default {
  template: `
		<section class="flex column text-align-center" v-if="note">
      <div :style="{backgroundColor: note.backgroundColor}" class="note-details flex column">
      <button @click="$router.push('/note')" class="back-btn"> <i class="fas fa-arrow-left"></i></button>        
      <div class="note-title">{{note.title}}</div>
      <router-link :to="'/note/edit/'+note.id"><i class="far fa-edit"></i></router-link>


			<div class="note-info" v-if="note.type === 'txt'">
				<p>{{note.data}}</p>
			</div>

			 <div class="note-info" v-if="note.type === 'img'" >
				<img :src="note.data" :alt="note.title" class="display-image" />
			</div>
            
      <div class="note-info" v-if="note.type === 'list'" >
          <ul>     
            <div v-for="(listBullet, idx) in note.data">           
                <li class="note-list-display">{{listBullet}}</li>
            </div>
          </ul>
          </div>
          <!-- <button @click="nextNote">Next Note</button> -->
      </div> 
		</section>  
	`,
  components: {},
  data() {
    return {
        note:null, 
        editedColor:'#EFAAC4'
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