import emailService from '../../services/email-service.js'
import emailList from '../../cmps/email-list-cmp.js'
import emailDetails from '../../cmps/email-details-cmp.js'
import emailStatus from '../../cmps/email-status-cmp.js'
import emailFilter from '../../cmps/email-filter-cmp.js'

export default {
    template: `  
    <section class = "email-app">

        <header>
            <h3>Welcome To Your Email Manager</h3>
            <h4>the Appsus Email Experience</h4>
        </header>
        <router-link exact to="/new">
             <button>
                  <i class="far fa-edit"></i>
                  New Email
             </button>
        </router-link>
         <email-filter v-on:filtered="setFilter"></email-filter>
        <div class = "flex space-evenly">

         <email-list :emails="emailsToShow" @deleted = "onDelete"></email-list>

        <email-details   :email ="selectedEmail" v-if = "selectedEmail"></email-details>
        
      

        </div>

          <emailStatus :emails = "emails"></emailStatus>

    </section>`
    ,

    data() {
        return {
            emails: [],
            selectedEmail: null,
            filter: null,

        }
    },
    created() {

        emailService.query()
            .then(emails => {
                this.emails = emails;
                this.selectedEmail = emails[0]
                this.$router.push(`/email/${emails[0].id}`)
                console.log('Email app created!!', emails)
                // console.log('params', this.$route.params)

            })

    },

    computed: {

        emailsToShow() {

            if (!this.filter) return this.emails
            if (this.filter.emailStatus === 'All' && this.filter.byTxt === '') return this.emails
            if (this.filter.emailStatus === 'Read') {
                return this.emails.filter(email => {
                    return (email.subject.includes(this.filter.byTxt) ||
                        email.content.includes(this.filter.byTxt)) &&
                        (email.isRead)
                })
            }
            if (this.filter.emailStatus === 'Unread') {
                return this.emails.filter(email => {
                    return (email.subject.includes(this.filter.byTxt) ||
                             email.content.includes(this.filter.byTxt)) &&
                             (!email.isRead)

                })
            }

            if (this.filter.emailStatus === 'All') {
                return this.emails.filter(email => {
                    return email.subject.includes(this.filter.byTxt) ||
                        email.content.includes(this.filter.byTxt)


                })
            }

        }
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

        onDelete() {
            console.log('deleting email', this.selectedEmail)
            emailService.removeEmail(this.selectedEmail.id)
            this.$router.push(`/email`)
        },


        setFilter(filterBy) {
            this.filter = filterBy;

        },


    },




    components: {
        emailList,
        emailDetails,
        emailStatus,
        emailFilter


    },
}



