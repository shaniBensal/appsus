import emailService from '../services/email-service.js'


export default {

    props: ['email'],

    template: `
        <section class="email-details">

    <h2>{{email.subject}}</h2>
    <h6>{{dateSent}}</h6>
    <p>{{email.content}}</p>
        </section>
    
    `,


    data() {
        return {
            // email: null,
            // dateSent: null

        }
    },

    created() {
        // emailService.getEmailByIdx(0)
        //     .then(email => this.email = email)
        // this.loadEmail()
    },

    methods: {
        // loadEmail() {
        //     emailService.getEmailById(this.$route.params.id)
        //         .then(email => this.email = email)
        // },

        // deleteEmail(){
        //     this.$emit('deleted', this.email.id)
        // },

       
    },

    watch: {
        // '$route.params.id': function (id) {
        //     this.loadEmail()
        // }
    },

    computed: {
        dateSent: function () {
            return moment.unix(this.email.dateSent).format("DD-MM-YYYY HH:mm:ss");

        },
    }




}

