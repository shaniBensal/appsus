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

        }
    },

    computed: {
        emailsCount() {
            return this.emails.length
        },

        readEmailsCount() {
            var counter = 0;
            this.emails.forEach(email => {
                if(!email.isRead) counter++
            });
            return counter;

        }


    },

    components: {
        progressBar
    },


}
