import emailService from '../../services/email-service.js'
import emailList from '../../cmps/email-list-cmp.js'

export default {
    template: `  
    <section class = "email-app">
         <email-list :emails="emails"></email-list>
        </ul>

    </section>`
    ,

    data() {
        return {
            emails: [],
            selectedEmail: null

        }
    },
    created() {

        emailService.query()
            .then(emails => {
                this.emails = emails;
                console.log('Email app created!!', emails)

            })
    },

    computed: {


    },

    methods: {

        // setSelectedEmail(emailId) {

        //     this.$router.push(`/email/${emailId}`);


    },

    setFilter(filterBy) {
        this.filter = filterBy;

    },




    components: {

        emailList


    },


}
