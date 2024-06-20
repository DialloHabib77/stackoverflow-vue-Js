<template>
  <HomePage>
    <div style="margin-top: 5%">
      <!-- Votre formulaire doit être ici -->
      <div class="container mx-auto p-4" style="margin-left: 19%;margin-top: 5%">
        <div class="bg-white shadow-md rounded-lg p-6">
          <div class="flex justify-between items-center border-b pb-4 mb-4">
            <h1 class="text-2xl font-bold text-gray-800 mx-4">Questions</h1>
            <router-link to="/add_question">
              <button
                class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Ask Question
              </button>
            </router-link>
          </div>
          <table class="w-full">
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">User</th>
                <th class="text-left">Title</th>
                <th class="text-left">Description</th>
                <th class="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="question in questions" :key="question.id">
                <td class="py-2">{{ question.id }}</td>
                <td class="py-2">{{ question.user_id }}</td>
                <td class="py-2">{{ question.title }}</td>
                <td class="py-2">{{ question.body }}</td>
                <td class="text-center">
                  <button
                    @click="deleteQuestion(question.id)"
                    class="text-red-500 hover:text-red-700"
                  >
                    Supprimer
                  </button>
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
import HomePage from "@/components/pages/HomePage.vue"; // Assurez-vous que le chemin est correct

export default {
  name: "QuestionList",
  components: {
    HomePage,
  },
  data() {
    return {
      questions: Array,
    };
  },
  created() {
    this.getQuestions(); // Correction de l'orthographe
  },
  methods: {
    async getQuestions() {
      let url = "http://127.0.0.1:8000/api/question";
      await axios
        .get(url)
        .then((response) => {
          this.questions = response.data.questions;
          console.log(this.questions);
        })
        .catch((error) => {
          console.log(error);
        });
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
        console.error(error);
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
  max-width: 80%;
}
</style>
  