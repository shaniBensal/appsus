import myRoutes from './routes.js'
import appsusApp from './pages/appsus-app-cmp.js'
import navBar from './cmps/nav-bar-cmp.js'


Vue.use(VueRouter);

const myRouter = new VueRouter({ routes: myRoutes })

new Vue({
    router: myRouter,
    el: '#app',
    data: {},
    created() { },
    components: {
        appsusApp,
        navBar
    }
});
