import myRoutes from './routes.js'
import HomePage from './pages/home-page-cmp.js'
import navBarMain from './cmps/nav-bar-main-cmp.js'


Vue.use(VueRouter);

const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    router: myRouter,
    el: '#app',
    data: {},
    created() { },
    components: {
        HomePage,
        navBarMain
    }
});
