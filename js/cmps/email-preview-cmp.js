import emailService from '../services/email-service.js'
import { eventBus, EVENT_READ_EMAIL } from '../services/eventbus-service.js'

export default {

    props: ['email'],

    template: `  
    <section class = "email-preview flex column" @click = "onReadEmail()"
                 v-bind:class = "{'email-unread': !isRead}" >
    <router-link :to="'/email/'+email.id">
             <div class="txt-preview">
                   <p class="subject">{{email.subject}}</p>
                   <p class="content">{{contentSummery}}...</p>
           
                   <p class="hour">{{hour}}</p>
             </div>
     </router-link>
                   <div @click.stop="toggleMarkEmail" title="mark as read/unread">
                   <i v-if="!isRead"  class="fas fa-envelope"></i>
                   <i v-else  class="fas fa-envelope-open"></i>

                   </div>
    

    </section>`
    ,

    data() {
        return {
            isRead: this.email.isRead,
        }
    },
    created() {

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
                .then(email => {
                    this.isRead = email.isRead
                })


        },

        toggleMarkEmail() {
            emailService.setReadStatus(this.email.id)
                .then(email => {
                    this.isRead = email.isRead
                })
        }
    },


    components: {

    },




}
