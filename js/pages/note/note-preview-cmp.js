export default {
    props: ['note'],

    template: `
    <section class="clean-list">
    <router-link :to="'/note/'+note.id"> 
    <div :style="{backgroundColor: note.backgroundColor}" class="note-prev">
    {{note.title}}
        <div v-if="note.type ==='txt'" class="note-content">
            {{note.data}}
        </div>

        <div v-if= "note.type ==='list'" >
            <ul>     
            <div v-for="(listBullet, idx) in note.data" class="note-content">           
                <li class="squreBullets">{{listBullet}}</li>
            </div>
            </ul>
        </div> 
        

        <div v-if= "note.type ==='img'" class="note-content">
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