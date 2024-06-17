import{ createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/pages/HomePage";
import ThemeForm from "../components/pages/ThemeForm.vue"
const routes = [
{
    name: 'HomePage',
    path: '/home',
    component: HomePage
},
{
    name:'ThemeForm',
    path:'/theme',
    component:ThemeForm
}
]
const router=Router();
export default router;
function Router(){
    const router = createRouter({
        history: createWebHistory(),
        routes
    });
    return router
}


