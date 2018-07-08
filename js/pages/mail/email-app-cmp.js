import emailService from '../../services/email-service.js'
import emailList from '../../cmps/email-list-cmp.js'
import emailDetails from '../../cmps/email-details-cmp.js'
import emailStatus from '../../cmps/email-status-cmp.js'
import emailFilter from '../../cmps/email-filter-cmp.js'
import progressBar from '../../cmps/progress-bar-cmp.js'
import emailCompose from '../../cmps/email-compose-cmp.js'

export default {
    template: `  
    <section class = "email-app container">

        <header>
            <h3>Welcome To Your Email Manager</h3>
            <h4>the Appsus Email Experience</h4>
            <emailStatus :emails = "emails"></emailStatus>
        </header>
        <router-link exact to="/new">
             <button class="new-email">
                  <i class="far fa-edit"></i>
                  <span>New Email</span>
             </button>
        </router-link>
         <email-filter v-on:filtered="setFilter"></email-filter>

        <div class = "main flex">
       
         <email-list :emails="emailsToShow" @deleted = "onDelete"></email-list>

        <email-details   :email ="selectedEmail" v-if = "selectedEmail"></email-details>
        
      

        </div>

           <progress-bar :read = "readEmailsCount" :total = "emailsCount"></progress-bar>
   

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
                    return (email.subject.toLowerCase().includes(this.filter.byTxt) ||
                        email.content.toLowerCase().includes(this.filter.byTxt)) &&
                        (email.isRead)
                })
            }
            if (this.filter.emailStatus === 'Unread') {
                return this.emails.filter(email => {
                    return (email.subject.toLowerCase().includes(this.filter.byTxt) ||
                             email.content.toLowerCase().includes(this.filter.byTxt)) &&
                             (!email.isRead)

                })
            }

            if (this.filter.emailStatus === 'All') {
                return this.emails.filter(email => {
                    return email.subject.toLowerCase().includes(this.filter.byTxt.toLowerCase()) ||
                        email.content.toLowerCase().includes(this.filter.byTxt.toLowerCase())


                })
            }

        },
        emailsCount() {
            return this.emails.length
        },

        readEmailsCount() {
            var counter = 0;
            this.emails.forEach(email => {
                if(!email.isRead) counter++
            });
            return counter;

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
            swal({
                title: "Are you sure?",
                icon: "warning",
                buttons: true,
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {
                  swal("email deleted!", {
                    icon: "success",
                  });
                  emailService.removeEmail(this.selectedEmail.id)
                   this.$router.push(`/email`)
                } else {
                  swal("email saved!");
                }
              });
            
        },


        setFilter(filterBy) {
            this.filter = filterBy;

        },


    },




    components: {
        emailList,
        emailDetails,
        emailStatus,
        emailFilter,
        progressBar,
        emailCompose


    },
}



