


export default {

    props:['read' , 'count'],


    template: `  
    <section class = "progress-bar">
 
    <div class="progress" :style="'width:100%;background:#E2E2E2;border: 1px solid black'">
         <div class="bar" :style="'height:20px;background:#9E4770;width:' + progress + '%'"></div>
    </div>
  </div>

        

    </section>`
    ,

    data() {
        return {
            // stepsDone: 6,
            // totalSteps: 10
        }
    },
    computed: {

        progress() {
            return this.read / this.count * 100


        }
    }
}
