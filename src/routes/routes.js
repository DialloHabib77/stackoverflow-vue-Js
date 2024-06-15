import{ createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/HomePage";
import ThemeForm from "../components/categories/ThemeForm";
//import RegisterForm from "../components/RegisterForm";
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
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;
