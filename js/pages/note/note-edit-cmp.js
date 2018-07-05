
export default {
    props: ['noteToEdit'],
    template : `
    <section class="note-edit">
            <input type="text" v-model="quest" placeholder="Ask your Quest!">
            <ul>
                <li v-for="(val, key, idx) in person" :key="idx">
                    {{idx}}) {{key}}: {{val}}
                </li>
            </ul>
            <form>
                <input ref="myInput" type="text" v-model="editedBook.title">
                <button ref="myBtn" @click="saveBook">Save</button>
            </form>
            <pre hidden>
            {{editedBook}}
            </pre>
            <hr>
            <h1>Animations</h1>
        <button class="btn btn-primary" @click="show = !show">Show Alert</button>
        
        <transition name="fademe">
          <div class="alert alert-info" v-show="show">Fading is the Best</div>
        </transition>
        
        <transition name="slide">
          <div class="alert alert-warning" v-if="show">I Prefer to Slide</div>
        </transition>
        
        <transition enter-active-class="animated bounce" leave-active-class="animated shake">
          <div class="alert alert-danger" v-if="show">With animate.css</div>
        </transition>
        
    </section>
    `,
    data() {
        return {
            editedBook: bookService.emptyBook(),
            show: false,
            person: {
                firstName: 'John',
                lastName: 'Doe',
                age: 30
             },
          
        }
    },
    created() {
        
        console.log('this.$route.params', this.$route.params);
        const {bookId} = this.$route.params;
        if (bookId) {
            bookService.getBookById(bookId)
                .then(book => {
                    this.editedBook = JSON.parse(JSON.stringify(book));
                })
        }
    },
    // This method is called when the component is already mounted to DOM
    mounted() {
        console.log('this.$refs', this.$refs);
        console.log('btn', this.$refs.myBtn);
    },
    methods: {
        saveBook() {
            console.log('Saving', this.editedBook);
            bookService.saveBook(this.editedBook)
            .then(savedBook => {
                console.log(`Book ${savedBook.id} succesfuly saved`);
                this.$router.push('/book');
                eventBus.$emit(EVENT_SHOW_MSG, 'Book Saved!!!')
            })
        }
    }
}