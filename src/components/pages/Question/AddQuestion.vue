<template>
    <HomePage>
      <div style="margin-top: 5%;">
        <!-- Votre formulaire doit être ici -->
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
            <form @submit.prevent="saveQuestion" novalidate>
              <div class="mb-4">
                <label for="title" class="block text-gray-700 text-sm font-bold mb-2">Titre</label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Entrez le titre"
                  v-model="question.title"
                />
              </div>
              <div class="mb-6">
                <label for="description" class="block text-gray-700 text-sm font-bold mb-2">Description</label>
                <textarea
                  id="description"
                  name="description"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Entrez la description"
                  rows="4"
                  v-model="question.body"
                ></textarea>
              </div>
              <!-- Ajout du champ user_id -->
              <input type="hidden" name="user_id" v-model="question.user_id" value="1" />
              <!-- Remplacez la valeur "1" par l'ID de l'utilisateur connecté -->
              <div class="flex items-center justify-between">
                <button
                  type="submit"
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Soumettre
                </button>
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
    name: 'AddQuestion',
    data() {
      return {
        question: {
          user_id: 1, // Remplacez par l'ID de l'utilisateur connecté  
          title: '',
          body: '',
          
        },

        errors: [],
      };
    },
    methods: {
      async saveQuestion() {
        this.errors = [];
        if (!this.question.title) {
          this.errors.push('Le titre est obligatoire');
        }
        if (!this.question.body) {
          this.errors.push('La description est obligatoire');
        }
  
        if (!this.errors.length) {
          let formData = new FormData();
          formData.append('user_id', this.question.user_id); // Ajout du user_id
          formData.append('title', this.question.title);
          formData.append('body', this.question.body);
          let url = 'http://127.0.0.1:8000/api/question';
          await axios
            .post(url, formData)
            .then((response) => {
              console.log(response);
              if (response.status === 200) {
                this.question.title = '';
                this.question.body = '';
  
                alert(response.data.message);
              } else {
                console.log('Statut de réponse inattendu :', response.status);
              }
            })
            .catch((error) => {
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
      },
    },
  };
  </script>
  
  <style>
  .close-btn {
    transition: color 0.3s;
  }
  .close-btn:hover {
    color: #ff0000;
  }
  .w-full {
    width: 100%;
    
  }
  </style>
  