<!--page theme.vue-->
<template>
  <HomePage>
      <div class="container" style="margin-top: 5%;">
        <div class="card">
          <div class="alert alert-danger mt-4" v-if="error.length">
            <ul>
              <li v-for="(errors,index) in error" :key="index">
              {{ errors }}
              </li>
            </ul>
          </div>
          <div class="card-body">
            <form class="max-w-md mx-auto" @submit.prevent="store" >
                <div class="relative z-0 w-full mb-5 group">
                  <label for="theme"  style="margin-right: 80%;" class="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Libelle</label>
                  <input type="text" v-model="theme.name" name="theme" id="theme" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
                </div>
                <button type="submit" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Ajouter</button>
              </form>
          </div>
        </div>
      </div>
  </HomePage>
</template>

<script>
import HomePage from './HomePage.vue';
import axios from 'axios';
export default {
  name:'ThemeForm',
  components:{
    HomePage
  },
  data(){
    return{
      theme:{},
      name:'',
      error:[]
    }
  },

  methods:{
      
      async store(){
        this.errors=[];
        if(!this.theme.name){
          this.error.push('le nom est obligatoire')
        }
        if(!this.error.length){
          let formData= new FormData();
          formData.append('name',this.theme.name);
          let url ='http://127.0.0.1:8000/api/theme'
          await axios.post(url,formData).then((response) =>{
            console.log(response);
              if(response.status==200){
                this.theme.name='',
                alert(response.data.message)
               // this.$router.push({name:'StudentsList'})
              }
          });
        }
      }
    },
}
</script>

<style>
h1{
  float: left;
  margin-left: 25%;
}
.max-w-md {
  max-width: 24rem;
}
</style>