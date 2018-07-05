export default {
    props: ['note'],

    template: `
    <section class="note-prev clean-list">
    <router-link :to="'/note/'+note.id"> 
    <button>X</button>
        <li v-if="note.type ==='txt'">
            {{note.data}}
        </li>

        <li v-if= "note.type ==='list'">
            <ul>     
            <div v-for="(listBullet, idx) in note.data">           
                <li>{{listBullet}}</li>
            </div>
            </ul>
        </li> 

        <li v-if= "note.type ==='img'">
        <img class="thumb-photo" v-bind:src="note.data">
        </li>
        
    </router-link>
    </section>
    `,
    data() {
        return {}
    },
    methods: {},
    components: {}
}