import emailService from '../services/email-service.js'
import progressBar from '../cmps/progress-bar-cmp.js'

export default {

    props: ['emails'],

    template: `  
    <section class = "email-status">
        <h3> Emails Read: {{readEmailsCount}} from {{emailsCount}}</h3>
        <progress-bar :read = "readEmailsCount" :total = "emailsCount"></progress-bar>

        

    </section>`
    ,

    data() {
        return {

            counter: 0,


        }
    },
    created() {

        console.log('Email status created!!', this.emails)


    },

    computed: {
        emailsCount() {
            return this.emails.length
        },

        readEmailsCount() {
        
                return emailService.countUnreadEmails()
                  
            

        }


    },

    methods: {


    },

    components: {
        progressBar
    },


}
