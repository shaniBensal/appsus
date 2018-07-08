import emailService from '../services/email-service.js'
import progressBar from '../cmps/progress-bar-cmp.js'

export default {

    props: ['emails'],

    template: `  
    <section class = "email-status">
        <span>inbox:</span> ({{readEmailsCount}})
    </section>`
    ,

    data() {
        return {

        }
    },

    computed: {
 
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
