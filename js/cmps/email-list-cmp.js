import emailService from '../services/email-service.js'
import emailPreview from '../cmps/email-preview-cmp.js'
import emailStatus from '../cmps/email-status-cmp.js'

export default {

    props:['emails'],

    template: `  
    <section class = "email-list">
         <ul class="clean-list flex column">
             <li v-for = "(email,idx) in emails" :key="email.id">
                  <email-preview :email = "email"></email-preview>
            </li>
        </ul>

        <emailStatus :emails = "emails"></emailStatus>

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


    },

    setFilter(filterBy) {
        this.filter = filterBy;

    },




    components: {
        emailPreview,
        emailStatus
    },


}
