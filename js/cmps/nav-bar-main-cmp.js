export default {
    template: `  
    <section>
    <nav class="nav-bar-main flex space-around" :class="{ open: display }">
        <ul class="flex align-center clean-list">
            <li>
                <router-link exact to="/">Home</router-link>
            </li>
            <li>
                <router-link to="/about">About</router-link>
            </li>
            <li>
                 <router-link to="/note">Keep</router-link>
            </li>
            <li>
                <router-link to="/email">Mail</router-link>
            </li>
         </ul>
    </nav>    
    <div class="hamburger" @click="display = !display" :class="{ exit: display }"></div> 
    
    </section>
    `,

    data() {
        return {
            display: false
        }
    },

    created() { },
    computed: {},
    methods: {
        toggleMenu() {
            this.display = ! this.display
        }
    },
    components: {}
}

