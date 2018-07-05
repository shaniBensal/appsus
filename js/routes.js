import HomePage from './pages/home-page-cmp.js'
import AboutUs from './pages/about-us-cmp.js'
import KeepApp from './pages/keep/keep-app-cmp.js'
import MailApp from './pages/mail/email-app-cmp.js'

export default [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutUs},
    {path: '/keep', component: KeepApp},
    {path: '/mail', component: MailApp},

]
