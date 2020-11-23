import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
import firstPage from "./components/Pages/myFirstVuePage";
import secondPage from "./components/Pages/secondPage";
import home from "./components/Pages/home";
import tags from "./components/Pages/tags"
const routes = [
    {
        path:'/',
        component: home
    },
    {
        path:'/tags',
        component: tags
    },
    {
        path: '/test',
        component: firstPage
    },
    {
        path: '/test1',
        component: secondPage
    }
];
export default new Router({
    mode: "history",
    routes
});
