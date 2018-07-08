import emailService from '../services/email-service.js'
import emailPreview from '../cmps/email-preview-cmp.js'


export default {

    props:['emails'],

    template: `  
    <section class = "email-list">
        
         <ul class="clean-list flex column">
             <li v-for = "(email,idx) in emails" :key="email.id">
                  <email-preview :email = "email"></email-preview>
                  <button @click = "deleteEmail(idx)" title="delete">
                       <i class="fas fa-trash-alt"></i>
                  </button>
                  
                    
            </li>
        </ul>

    </section>`
    ,

    data() {
        return {

        }
    },
    created() {
      
     console.log('Email list created!!', this.emails)

    
    },

    computed: {


    },

    methods: {
        deleteEmail(emailIdx){
            this.$emit('deleted', emailIdx)
        },

    },


    components: {
        emailPreview,
        // emailStatus
    },


}
