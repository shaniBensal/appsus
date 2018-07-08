import HomePage from './pages/home-page-cmp.js'
import AboutUs from './pages/about-us-cmp.js'
import NoteApp from './pages/note/note-app-cmp.js'
import MailApp from './pages/mail/email-app-cmp.js'
import emailDetails from './cmps/email-details-cmp.js'
import NoteDetails from './pages/note/note-details-cmp.js'
import NoteEdit from './pages/note/note-edit-cmp.js'
import emailCompose from './cmps/email-compose-cmp.js'
import emailEdit from './cmps/email-edit-cmp.js'

export default [

    {path: '/', component: HomePage},
    {path: '/about', component: AboutUs},
    {path: '/note', component: NoteApp},
    {path:  '/note/:noteId', component: NoteDetails},
    {path: '/note/edit/:noteId', component:NoteEdit},
    {path: '/note/edit/text', component:NoteEdit},
    {path: '/note/edit/image', component:NoteEdit},
    {path: '/note/edit/list', component:NoteEdit},

    {path: '/email', component: MailApp},
    {path:  '/email/:id', component: MailApp},
    {path: '/email/edit/:id', component: emailEdit},
    {path: '/new', component: emailCompose},
    { path: '*', redirect: '/' },
]


