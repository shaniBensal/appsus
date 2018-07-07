


export default {

    props:['read' , 'total'],


    template: `  
    <section class = "progress-bar">
 
    <div class="progress" :style="'width:100%;background:#E2E2E2;border: 1px solid black'">
         <div class="bar" :style="'height:15px;background:#9E4770;width:' + progress + '%'"></div>
    </div>
  </div>

        

    </section>`
    ,

    data() {
        return {
     
        }
    },
    computed: {

        progress() {
            return this.read / this.total * 100


        }
    }
}
