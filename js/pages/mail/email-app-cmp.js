import emailService from '../../services/email-service.js'
import emailList from '../../cmps/email-list-cmp.js'
import emailDetails from '../../cmps/email-details-cmp.js'

export default {
    template: `  
    <section class = "email-app">
        8
         <email-list :emails="emails"></email-list>

        <email-details v-if = "selectedEmail"></email-details>

    </section>`
    ,

    data() {
        return {
            emails: [],
            selectedEmail: false,

        }
    },
    created() {

        emailService.query()
            .then(emails => {
                this.emails = emails;
                console.log('Email app created!!', emails)
                console.log(this.$route.params.id)

            })
    },

    computed: {


    },

    watch: {
        '$route.params.id': function (id) {
            this.selectedEmail = true
        }

    },

    methods: {

        // setSelectedEmail(emailId) {

        //     this.$router.push(`/email/${emailId}`);


    },

    setFilter(filterBy) {
        this.filter = filterBy;

    },




    components: {
        emailList,
        emailDetails


    },
}



