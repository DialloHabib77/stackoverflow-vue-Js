import{ createRouter, createWebHistory } from "vue-router";
import HomePage from "../components/pages/HomePage";
import ThemeForm from "../components/pages/ThemeForm.vue";
<<<<<<< HEAD
import UserList from "../components/pages/UserList.vue";
import RegisterForm from "../components/pages/RegisterForm.vue";
=======
import QuestionList from "../components/pages/Question/QuestionList.vue";
import AddQuestion from "../components/pages/Question/AddQuestion.vue";
import EditQuestion from "../components/pages/Question/EditQuestion.vue";
>>>>>>> 69b4a180ea5506a0fdc6da8dc926641726c9ce30
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
<<<<<<< HEAD
    name:'UserList',
    path:'/users',
    component:UserList
},
{
    name:'RegisterForm',
    path:'/register',
    component:RegisterForm
},
=======
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
>>>>>>> 69b4a180ea5506a0fdc6da8dc926641726c9ce30
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


