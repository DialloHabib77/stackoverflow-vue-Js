<template>
    <HomePage>
      <div style="margin-top: 5%;">
        <!-- Votre formulaire doit être ici -->
        <div class="container mx-auto p-4">
          <div class="bg-white shadow-md rounded-lg p-6">
            <div class="flex justify-between items-center border-b pb-4 mb-4">
              <h1 class="text-2xl font-bold text-gray-800 mx-4">Questions</h1>
              <router-link to="/add_question">
                <button class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Poser une question</button>
              </router-link>
            </div>
            <ul>
              <li v-for="question in questions" :key="question.id" class="mb-6">
                <h2 class="text-xl font-semibold text-blue-600 hover:underline mr-20">
                  <a href="#">{{ question.title }}</a>
                </h2>
                <p class="text-gray-600 mt-1 ml-10">{{ question.description }}</p>
                <button @click="deleteQuestion(question.id)" class="text-red-500 hover:text-red-700">Supprimer</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </HomePage>
  </template>
  
  <script>
  import HomePage from '@/components/pages/HomePage.vue';
  import axios from "axios";
  
  export default {
    name: "QuestionList",
    components: {
      HomePage
    },
    data() {
      return {
        questions: [],
      };
    },
    created() {
      this.getQuestions();
    },
    methods: {
      async getQuestions() {
        let url = "http://127.0.0.1:8000/api/question";
        try {
          const response = await axios.get(url);
          this.questions = response.data.questions;
          console.log(this.questions);
        } catch (error) {
          console.log(error);
        }
      },
  
      async deleteQuestion(id) {
        let url = `http://127.0.0.1:8000/api/question/${id}`;
        try {
          const response = await axios.delete(url);
          if (response.data.status === 200) {
            alert(response.data.message);
            this.getQuestions();
          }
        } catch (error) {
          console.log(error);
        }
      },
    },
    mounted() {
      console.log("Question List Component mounted");
    },
  };
  </script>
  
  <style>
  .container {
    max-width: 79%;
    margin-left: 20%;
    margin-right: 5%;
  }
  </style>
  