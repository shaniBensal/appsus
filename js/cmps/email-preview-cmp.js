import emailService from '../services/email-service.js'

export default {

    props: ['email'],

    template: `  
    <section class = "email-preview" @click = "onReadEmail()"
                 v-bind:class = "{'email-unread': !isRead}" >
    <router-link :to="'/email/'+email.id">
             <div class="txt-preview">
                   <p class="subject">{{email.subject}}</p>
                   <p class="content">{{contentSummery}}...</p>
            </div>
                   <p class="hour">{{hour}}</p>
                   <div @click.stop="toggleMarkEmail" title="mark as read/unread">
                   <i ref="myMark" class="fas fa-envelope"></i>

                   </div>
    </router-link>

    </section>`
    ,

    data() {
        return {
            isRead: this.email.isRead,
        }
    },
    created() {

        // console.log('Email preview created!!', this.email)


    },

    computed: {
        contentSummery: function () {
            return this.email.content.substring(0, 50);
        },
        hour: function () {
            return moment.unix(this.email.dateSent).format('HH:mm');
        }

    },

    methods: {
        onReadEmail() {
            if (this.isRead) return;
            emailService.setReadStatus(this.email.id)
                .then(email=> this.isRead = this.email.isRead)
                
                if (this.isRead) this.$refs.myMark.classList = 'fas fa-envelope'
                else this.$refs.myMark.classList = 'fas fa-envelope-open'
    
        
        },

        toggleMarkEmail() {
            emailService.setReadStatus(this.email.id)
                .then(email => this.isRead = this.email.isRead)
         
            if (this.isRead) this.$refs.myMark.classList = 'fas fa-envelope'
            else this.$refs.myMark.classList = 'fas fa-envelope-open'


        }


    },

    setFilter(filterBy) {
        this.filter = filterBy;

    },


    mounted() {

        // console.log('this.$refs', this.$refs);
        if (this.isRead) this.$refs.myMark.classList = 'fas fa-envelope-open'
        else this.$refs.myMark.classList = 'fas fa-envelope'

    },

    components: {

    },




}
