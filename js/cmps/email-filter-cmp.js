import emailService from "../services/email-service.js";

export default {


    template: `
    <section class="email-filter flex space-evenly">
        
      <div class="filter">
        <div class="search">
         <input type="text" v-model="filterBy.byTxt" placeholder="Search..."  @input="emitFilter">
            <i class="fas fa-search"></i>
        </div>
         <div class="radio-btn">
        <label>
        
            <input type="radio" value="All" v-model="filterBy.emailStatus"  @input="emitFilter"> All
         </label>

        <label>
            <input type="radio" value="Read" v-model="filterBy.emailStatus"  @input="emitFilter"> Read
        </label>

        <label>
            <input type="radio" value="Unread" v-model="filterBy.emailStatus"  @input="emitFilter"> Unread
        </label>
      </div>
    </div>

    <div class="sort">
        <button @click = "sortBySubject" title="sort by subject">
        <i class="fas fa-sort-alpha-down"></i>
        </button>
        <button @click = "sortByDate" title="sort by date">
        <i class="far fa-calendar-alt"></i>
        <i class="fas fa-sort-amount-down"></i>
        </button>
    </div>
    </section>
    


`,

    data() {
        return {
            filterBy: {
                byTxt: '',
                emailStatus: 'All',

            },

        

        }
    },

    methods: {
        emitFilter() {
            console.log('filtered', this.filterBy)
            this.$emit('filtered', this.filterBy);

        },

        sortBySubject() {
            console.log('title')
            emailService.sortEmailsByTitle()

        },
        sortByDate() {
            console.log('date')
            emailService.sortEmailsByDate()
        },


    }

}
