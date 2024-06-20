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
            <h2 class="text-2xl font-bold mb-6 text-gray-800 text-center">Formulaire de Réponse</h2>
            <form @submit.prevent="saveAnswer" novalidate>
              <div class="mb-4">
                <label for="question_id" class="block text-gray-700 text-sm font-bold mb-2">ID de la Question</label>
                <input
                  type="number"
                  id="question_id"
                  name="question_id"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Entrez l'ID de la question"
                  v-model.number="answer.question_id"  
                />
              </div>
              <div class="mb-4">
                <label for="body" class="block text-gray-700 text-sm font-bold mb-2">Réponse</label>
                <textarea
                  id="body"
                  name="body"
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Entrez la réponse"
                  rows="4"
                  v-model="answer.body"
                ></textarea>
              </div>
              <input type="hidden" name="user_id" v-model="answer.user_id" value="1" />
              <!-- Remplacez la valeur "1" par l'ID de l'utilisateur connecté -->
              <input type="hidden" name="validated" v-model.number="answer.validated" value="0" />
              <!-- Initialiser la validation à 0 et utiliser .number pour s'assurer que c'est un entier -->
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
  import HomePage from '@/components/pages/HomePage.vue'; // Assurez-vous que le chemin est correct
  
  export default {
    name: 'AddAnswer',
    components: {
      HomePage,
    },
    data() {
      return {
        answer: {
          question_id: '', // ID de la question à laquelle l'utilisateur répond
          user_id: 1, // Remplacez par l'ID de l'utilisateur connecté  
          body: '',
          validated: 0, // Initialiser à 0
        },
        errors: [],
      };
    },
    methods: {
      async saveAnswer() {
        this.errors = [];
        if (!this.answer.question_id) {
          this.errors.push("L'ID de la question est obligatoire");
        }
        if (!this.answer.body) {
          this.errors.push('La réponse est obligatoire');
        }
  
        if (!this.errors.length) {
          let formData = new FormData();
          formData.append('question_id', this.answer.question_id);
          formData.append('user_id', this.answer.user_id);
          formData.append('body', this.answer.body);
          formData.append('validated', this.answer.validated ? 1 : 0); // Convertir en entier
          let url = 'http://127.0.0.1:8000/api/answer';
          try {
            const response = await axios.post(url, formData);
            console.log(response);
            if (response.status === 200) {
              this.answer.question_id = '';
              this.answer.body = '';
              this.answer.validated = 1;
              alert(response.data.message);
            } else {
              console.log('Statut de réponse inattendu :', response.status);
            }
          } catch (error) {
            if (error.response && error.response.data) {
              this.errors.push(error.response.data.message || 'Une erreur est survenue');
            } else {
              this.errors.push('Une erreur est survenue');
            }
          }
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
  