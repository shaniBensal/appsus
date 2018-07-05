import AppsusApp from './pages/appsus-app-cmp.js'
import HomePage from './pages/home-page-cmp.js'
import AboutUs from './pages/about-us-cmp.js'
import MainKeep from './pages/keep/keep-main.js'
import MainMail from './pages/mail/mail-main-cmp.js'

export default [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutUs},
    {path: '/mainApp', component: AppsusApp},
    {path: '/keep', component: MainKeep},
    {path: '/mail', component: MainMail},

]
