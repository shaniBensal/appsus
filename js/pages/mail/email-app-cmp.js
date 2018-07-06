import emailService from '../../services/email-service.js'
import emailList from '../../cmps/email-list-cmp.js'
import emailDetails from '../../cmps/email-details-cmp.js'

export default {
    template: `  
    <section class = "email-app">
        8
         <email-list :emails="emails"></email-list>

        <email-details v-bind:email ="selectedEmail" v-if = "selectedEmail"
        @deleted = "onDelete">
        </email-details>

    </section>`
    ,

    data() {
        return {
            emails: [],
            selectedEmail: null,

        }
    },
    created() {

        emailService.query()
            .then(emails => {
                this.emails = emails;
                this.selectedEmail = emails[0]
                this.$router.push(`/email/${emails[0].id}`)
                console.log('Email app created!!', emails)
                console.log('parans', this.$route.params)

            })

    },

    computed: {


    },

    watch: {
        '$route.params.id': function (id) {
            emailService.getEmailById(id)
                .then(email => {
                    this.selectedEmail = email
                })
        }
     
    },

    methods: {

        // setSelectedEmail(emailId) {

        //     this.$router.push(`/email/${emailId}`);
        onDelete(){
            console.log('deleting email', this.selectedEmail)
            emailService.removeEmail(this.selectedEmail.id)
            this.$router.push(`/email`)
        }

    },

    setFilter(filterBy) {
        this.filter = filterBy;

    },




    components: {
        emailList,
        emailDetails


    },
}



