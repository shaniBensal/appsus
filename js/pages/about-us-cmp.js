export default {
    template: `  
    <section class="about">
 
           
                <h3>About Us</h3>

                <ul class="details clean-list flex align-center">
                    <li>
                        <img src="img/shani.png">
                        <p>
                        Lorem ipsum dolor sit amet, graeco omittantur per ut, et has facilis
                         commune aliquando, malorum democritum te quo. Ei quo legimus appellantur efficiantur. Id inani mazim tractatos eos, ei vix solet consul reprehendunt.
                          
                        </p>
                    </li>

                    <li>
                         <img src="img/shiran.png">
                        <p>
                        Lorem ipsum dolor sit amet, graeco omittantur per ut, et has facilis
                         commune aliquando, malorum democritum te quo. Ei quo legimus appellantur efficiantur. Id inani mazim tractatos eos, ei vix solet consul reprehendunt.
                        
                        </p>
                    </li>
                </ul>
                <div class="social-network flex">
                    <div class="facebook flex align-center">
                        <a href="https://www.facebook.com/shiran.zelnir">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                    </div>
                    <div class="linkedin flex align-center space-evenly">
                        <a href="https://www.linkedin.com/in/shiranzelnir/">
                            <i class="fab fa-linkedin"></i>
                        </a>
                    </div>
                </div>
          
      
        
            <div class="contact container flex column space-evenly align-center">
                <h3>Contact Us
                </h3>
                <div class="flex align-center">
                  
                    <input class="email" type="email" placeholder="Your Email">
                </div>
                <textarea v-model="msg" rows="4" cols="25" placeholder="Type your message"></textarea>
                <button type="submit" @click="onSubmit()">Submit</button>
            </div>
            
    </section>`
    ,

    data() {
        return {
            msg: ''

        }
    },

    methods: {
        onSubmit() {

            window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=szelnir@gmail.com&body=+${this.msg}`)
            window.location.reload(true);

        }
    }
}
