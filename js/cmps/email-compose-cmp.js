import emailService from '../services/email-service.js'

export default {

    template: `
    <section class="email-compose">
    <button @click = "back">Back</button>
    <h1>NEW EMAIL</h1>

    <form>
        subject:
        <input  type="text" v-model="newEmail.subject" placeholder="Subject" />
       
        
        <textarea v-model="newEmail.content" placeholder="Your message here..." ></textarea> 

        <button @click.prevent="save">Send</button>
        
</form>

    </section>
   
`,

    created() {
        console.log('new email,', this.newEmail)
    },
    data() {
        return {
            newEmail: {
                id: null,
                subject: null,
                content: null,
                isRead: false,
                dateSent: null
            }
        }

    },
    methods: {
        emptyEmail() {
            return {
                id: null,
                subject: null,
                content: null,
                isRead: false,
                dateSent: null
            }

        },



        save() {
            console.log('Saving Data...');

            emailService.addNewEmail(this.newEmail)
                .then(email => {
                    swal("Sent", "Your Email Sent ", "success")
                    this.emptyEmail()
                    setTimeout(() => {
                         this.$router.push(`/email/${email.id}`);
                    }, 1500);
                   
                })
            // this.$emit('email-added', this.newEmail)

        },

        back(){
            console.log('back')
            this.$router.push('/email')
        }

    }
}