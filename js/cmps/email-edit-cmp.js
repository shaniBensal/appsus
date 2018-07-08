import emailService from '../services/email-service.js'
// import { eventBus, EVENT_SHOW_MSG } from '../services/eventbus-service.js'

export default {
    template: `
        <section class="email-edit">
            <h1>Edit Email</h1>
            <button class="back" @click = "back">
                <i class="fas fa-arrow-left"></i>
         </button>
            <form>
                <input type="text" v-model="editedEmail.subject">
                <textarea v-model = "editedEmail.content"></textarea>
                <button class="btn btn-primary" ref="myBtn" @click="saveEmail">Save</button>
            </form>
        
        
    </section>
    `,
    data() {
        return {
            editedEmail: emailService.emptyEmail(),
            show: false,

        }
    },
    created() {

        console.log('this.$route.params', this.$route.params.id);
        const emailId = this.$route.params.id;
        if (emailId) {
            emailService.getEmailById(emailId)
                .then(email => {
                    this.editedEmail = JSON.parse(JSON.stringify(email));
                    this.editedEmail.subject = "Re:" + this.editedEmail.subject
                    console.log(email)
                })
        }
    },

    methods: {
        saveEmail() {
            console.log('Saving', this.editedEmail);
            emailService.saveEmail(this.editedEmail)
                .then(savedEmail => {
                    console.log(`Email ${savedEmail.id} succesfuly saved`);
                    this.$router.push('/email');

                })
        },

        back(){
            console.log('back')
            this.$router.push('/email')
        }

    },

}