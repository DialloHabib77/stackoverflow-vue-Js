<template>
    <HomePage>
      <div style="margin-top: 5%;">
        <!-- Votre formulaire doit être ici -->
        <div class="container mx-auto p-4" style="margin-left: 19%;margin-top: 5%">
          <div class="bg-white shadow-md rounded-lg p-6">
            <div class="flex justify-between items-center border-b pb-4 mb-4">
              <h1 class="text-2xl font-bold text-gray-800 mx-4">All Questions</h1>
              <router-link to="/add_answer">
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Add answer</button>
              </router-link>
            </div>
            <table class="w-full">
              <tbody>
                <tr v-for="question in questions" :key="question.id">
          
                  <td class="py-2">{{ question.title }}</td>
                  <td class="py-2">{{ question.description }}</td>
                  <td class="text-center">
                    <button @click="deleteQuestion(question.id)" class="text-red-500 hover:text-red-700">Supprimer</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </HomePage>
  </template>
  <script>
  import axios from "axios";
  export default {
    name: "QuestionList",
    data() {
      return {
        question: Array,
      };
    },
    created() {
      this.gestQuestions();
    },
    methods: {
      async gestQuestions() {
        let url = "http://127.0.0.1:8000/api/question";
        await axios
          .get(url)
          .then((response) => {
            this.question = response.data.question;
            console.log(this.question);
          })
          .catch((error) => {
            console.log(error);
          });
      },
  
      async deleteQuestion(id) {
        let url = `http://127.0.0.1:8000/api/question/${id}`;
        await axios
          .delete(url)
          .then((response) => {
            if (response.data.status == 200) {
              alert(response.data.message);
              this.gestQuestions();
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted() {
      console.log("Question List Component mounted");
    },
  };
  </script>
  
  <style>
  .container {
    max-width: 80%;
  }
  </style>
  