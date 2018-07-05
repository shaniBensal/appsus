import bookService from '../../services/book-service.js'
import reviewAdd from './review-add-cmp.js'

export default {

    template: `
        <section class="email-details">


        </section>
    
    `,

    created() {

    },

    data() {
        return {
            email: null,
    

        }
    },

    created() {
        console.log(this.$route.params.id)
		// this.loadBook()
    },
    
	methods: {
		// loadEmail() {
		// 	bookService.getEmailById(this.$route.params.id)
		// 	.then(email => this.email = email)
        // },
    },

    computed: {

        readingLevel() {
            var pagesNum = this.book.pagesCount
            if (pagesNum >= 500) return 'Long Reading';
            if (pagesNum < 500 && pagesNum >= 200) return 'Decent Reading';
            return 'Light Reading';

        },

        publishedDate() {
            var date = this.book.publishedDate
            if (date <= (new Date().getFullYear() - 10)) return 'Veteran Book';
            if (date >= (new Date().getFullYear() - 1)) return 'New!';
        },

        priceLevel() {
            var price = this.book.listPrice.amount
            if (price >= 150) return 'high-price'
            else if (price <= 20) return 'low-price'
        },
        priceIcon: function () {
            var icon = this.book.listPrice.currencyCode
            if (icon === 'EUR') return '€';
            if (icon === 'USD') return '$';
            return '₪';

        }



    },
  

    components: {
        reviewAdd
    }


}

