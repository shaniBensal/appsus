

export default {
    template:`
    <section class="add-notes">
        <div class="add notes">
            <button><router-link :to="'/note/edit/text'"><i class="fas fa-pen"></i></router-link></button>
            <button><router-link :to="'/note/edit/image'"><i class="fas fa-images"></i></router-link></button>
            <button><router-link :to="'/note/edit/list'"><i class="fas fa-list"></i></router-link></button>       
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