import emailService from '../services/email-service.js'


export default {

    template: `
        <section class="email-details">


    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati eaque ex maxime ea ipsam quam non nostrum laborum itaque, quos illum saepe,
     doloribus incidunt unde perferendis possimus! Ab, praesentium doloribus?</p>
     {{email}}
        </section>
    
    `,


    data() {
        return {
            email: null,
    
        }
    },

    created() {
        console.log(this.$route.params.id)
        this.loadEmail()
    },

    methods: {
        loadEmail() {
        	emailService.getEmailById(this.$route.params.id)
        	.then(email => this.email = email)
        },
    },




}

