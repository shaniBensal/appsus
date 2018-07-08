export default {
    props: ['note'],

    template: `
    <section class="note-prev clean-list">
    <router-link :to="'/note/'+note.id"> 
    <div :style="{backgroundColor: note.backgroundColor}">
    {{note.title}}
        <div v-if="note.type ==='txt'">
            {{note.data}}
        </div>

        <div v-if= "note.type ==='list'">
            <ul>     
            <div v-for="(listBullet, idx) in note.data">           
                <li class="squreBullets">{{listBullet}}</li>
            </div>
            </ul>
        </div> 
        

        <div v-if= "note.type ==='img'">
        <img class="thumb-photo" v-bind:src="note.data">
        </div>
</div>
        
    </router-link>
    </section>
    `,
    data() {
        return {}
    },
    methods: {},
    components: {}
}