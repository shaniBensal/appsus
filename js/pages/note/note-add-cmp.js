

export default {
    template:`
    <section class="add-notes">
        <div class="add notes">
            <button><router-link :to="'/note/edit/text'">Take a text note</router-link></button>
            <button><router-link :to="'/note/edit/image'">Take a image note</router-link></button>
            <button><router-link :to="'/note/edit/list'">Take a list note</router-link></button>       
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