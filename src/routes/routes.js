import{ createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/pages/HomePage";
import ThemeForm from "../components/pages/ThemeForm.vue";
import UserList from "../components/pages/UserList.vue";
import RegisterForm from "../components/pages/RegisterForm.vue";
import QuestionList from "../components/pages/Question/QuestionList.vue";
import AddQuestion from "../components/pages/Question/AddQuestion.vue";
import EditQuestion from "../components/pages/Question/EditQuestion.vue";

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
{
    name:'QuestionList',
    path:'/question',
    component: QuestionList
},
{
    name:'AddQuestion',
    path:'/add_question',
    component:AddQuestion
},
{
    name:'EditQuestion',
    path:'/question/edit/:id?',
    component:EditQuestion
}

]
const router=Router();

function Router(){
    const router = createRouter({
        history: createWebHistory(),
        routes
    });
    return router
}
export default router;


