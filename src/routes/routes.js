import{ createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/pages/HomePage";
import ThemeForm from "../components/pages/ThemeForm.vue";
import UserList from "../components/pages/UserList.vue";
import RegisterForm from "../components/pages/RegisterForm.vue";
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
},
{
    name:'UserList',
    path:'/users',
    component:UserList
},
{
    name:'RegisterForm',
    path:'/register',
    component:RegisterForm
},
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


