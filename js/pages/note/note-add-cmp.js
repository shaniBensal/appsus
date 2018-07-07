

export default {
    template:`
    <section class="add-notes">
        <div class="add notes">
        <button><router-link :to="'/note/edit/'+text">Take a note</router-link></button>
  
            <button>List</button>
            <button>Img</button>
        </div> 
    </section>
    `,
    data() {
        return {}
    },
    methods: {
    },
    components: {}
}