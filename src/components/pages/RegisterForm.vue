<template>
    <div class="content" style="margin-left: 19%;margin-top: 5%;width: 50%;">
        <div class="alert alert-danger mt-4" v-if="error.length">
               <ul>
                 <li v-for="(errors,index) in error" :key="index">
                  {{ errors }}
                </li>
               </ul>
              </div>
            <form class="space-y-4 w-20px" action="#" @submit.prevent="store">
                <div>
                    <label for="name" style="margin-right: 30%;" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom</label>
                    <input type="text" v-model="user.name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Votre nom" required />
                </div>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" v-model="user.email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                </div>
                <div>
                    <label for="password"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                    <input type="password" v-model="user.password"  placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                </div>
                <button type="submit" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Créer un compte</button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Déjà inscrit? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500" data-modal-show="authentication-modal">Connectez-vous</a>
                </div>
            </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name:'ResgisterForm',
  data() {
    return {
      user:{
        name:'',
        email:'',
        password:'',
      },
        error:[]
    };
  },
  methods: {
    async store(){
        this.errors=[];
        if(!this.user.name){
          this.error.push('le nom est obligatoire')
        }
        if(!this.user.email){
          this.error.push('le prenom est obligatoire')
        }
        if(!this.user.password){
          this.error.push('age est obligatoire')
        }
        if(!this.error.length){
          let formData= new FormData();
          formData.append('name',this.user.name);
          formData.append('email',this.user.email);
          formData.append('password',this.user.password);
          //formData.append('schoolClass',this.student.schoolClass);
          let url ='http://127.0.0.1:8000/api/user'
          await axios.post(url,formData).then((response) =>{
            console.log(response);
              if(response.status==200){
                this.user.name='',
                this.user.email='',
                this.user.password='',
                alert(response.data.message)
                //this.$router.push({name:'StudentsList'})
              }
          });
        }
      }
 }
}
</script>
<style>
.max-w-md {
  max-width: 24rem;
}
.content {
  margin-left: 35%;
}
</style>