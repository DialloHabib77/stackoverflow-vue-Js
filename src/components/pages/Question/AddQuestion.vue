<!--page theme.vue-->
<template>
    <HomePage>
    <div style="margin-top: 5%;">
     <!--ton formulaire doit etre ici-->
     <div class="bg-gray-100 flex items-center justify-center h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md relative">
            <div class="alert alert-danger mt-4" v-if="errors.length">
              <ul class="mb-0">
                <li v-for="(error, index) in errors" :key="index">
                  {{ error }}
                </li>
              </ul>
            </div>
            <button class="absolute top-2 right-2 text-gray-500 close-btn" @click="closeForm">✖</button>
                    <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Formulaire</h2>
            <form @submit.prevent="saveQuestion " novalidate>
            <div class="mb-4">
                <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Title</label>
                <input type="text" id="title" name="title" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter title"  v-model="question.title">
            </div>
            <div class="mb-6">
                <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea id="description" name="description" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter description" rows="4"  v-model="question.body"></textarea>
            </div>
            <div class="flex items-center justify-between">
                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
            </div>
            </form>
        </div>
    </div> 
    </div>
    </HomePage>
   </template>
<script>
  import axios from 'axios';
export default {
    name : "AddQuestion",
    data() {
      return {
        question: {
          title: '',
          body: '',
         
        },
        errors: [],
      }
      },
    methods: {
        async saveQuestion() {
        this.errors = [];
        if (!this.question.title) {
          this.errors.push('Titre est obligatoire');
        }
        if (!this.question.body) {
          this.errors.push('Description est obligatoire');
        }
       
        if (!this.errors.length) {
          let formData = new FormData();
          formData.append('title', this.question.title);
          formData.append('body', this.question.body);
          let url ='http://127.0.0.1:8000/api/question';
          await axios.post(url,formData).then((response)=>{
            console.log(response);
            if (response.status == 200) {
              this.question.title = '';
              this.question.body = '';
             
              alert(response.data.message);
            } else {
              console.log('Unexpected response status:', response.status);  
            }
           }).catch(error=> {
            this.errors.push(error.response);
           });
        }
        
      },
   
    closeForm() {
      // Logique pour fermer le formulaire
      console.log('Formulaire fermé');
      // Par exemple, masquer l'élément contenant le formulaire
      this.$el.style.display = 'none';
      this.$router.push({ name: 'QuestionList' });
    }
  }
}

</script>
<style>
    
    .close-btn {
      transition: color 0.3s;
    }
    .close-btn:hover {
      color: #ff0000;
    }
    .w-full {
        width: 100%}
  </style>