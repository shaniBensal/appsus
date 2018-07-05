import HomePage from './pages/home-page-cmp.js'
import AboutUs from './pages/about-us-cmp.js'
import NoteApp from './pages/note/note-app-cmp.js'
import MailApp from './pages/mail/email-app-cmp.js'

export default [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutUs},
    {path: '/note', component: NoteApp},
    {path: '/mail', component: MailApp},

]
