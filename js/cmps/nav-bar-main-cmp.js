export default {
    template: `  
    <section>
    <nav class="nav-bar-main flex space-around" :class="{ open: display }">
			<router-link exact to="/">Home</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/note">Keep</router-link>
            <router-link to="/email">Mail</router-link>
    </nav>    
    <div class="hamburger" @click="display = !display"></div> 
    
    </section>
    `,

    data() {
        return {
            display: false
        }
    },

    created() {},
    computed: {},
    methods: {
        toggleMenu(){
            if(this.display === open) this.display = close;
            else this.display = open;
        }
    },
    components: {}
}

