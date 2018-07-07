
export default {
    template: `  
    <section class="home-page flex column align-center container">
    <h1>Welcome To Appsus</h1>
        <h3>And let the magic begin!!</h3>
        <div class="links">
          <ul class="main flex align-center clean-list">
            <li>
           
                 <router-link exact to="/keep">
                     <img src="img/notes.png"/>
                     
                 </router-link>
            </li>
            <li>
           
                 <router-link to="/email">
                      <img src="img/mail.jpg"/>
                     
                  </router-link>
                  </li>
                 </ul>
            </div>
    </section>`
    ,
}