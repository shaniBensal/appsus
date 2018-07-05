import AppsusApp from './pages/appsus-app-cmp.js'
// import BookDetails from './pages/book-details.js'
import HomePage from './pages/home-page-cmp.js'
import AboutUs from './pages/about-us-cmp.js'

export default [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutUs},
    // {path: '/book/:bookId', component: BookDetails},
    {path: '/mainApp', component: AppsusApp},
]
