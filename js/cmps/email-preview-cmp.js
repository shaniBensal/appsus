import emailService from '../services/email-service.js'

export default {

    props: ['email'],

    template: `  
    <section class = "email-preview">
    <router-link :to="'/email/'+email.id">
                   <h3>{{email.subject}}</h3>
                   <h4>{{email.content}}</h4>
    </router-link>

    </section>`
    ,

    data() {
        return {

        }
    },
    created() {

        console.log('Email preview created!!', this.email)


    },

    computed: {


    },

    methods: {


    },

    setFilter(filterBy) {
        this.filter = filterBy;

    },




    components: {

    },


}
