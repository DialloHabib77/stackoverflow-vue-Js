<template>
    <home-page>
      <div class="relative container overflow-x-auto shadow-md sm:rounded-lg" style="margin-left: 19%;margin-top: 5%">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <tbody v-for="user in users" :key="user.id">
            <tr class="odd:bg-dark odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ user.id }}
              </th>
              <td class="px-6 py-4">
                {{ user.name }}
              </td>
              <td class="px-6 py-4">
                {{ user.email }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </home-page>
  </template>
  
  <script>
  import HomePage from './HomePage.vue';
  import axios from 'axios';
  
  export default {
    name: 'UserList',
    components: { HomePage },
    data() {
      return {
        users: [], // Correct initialization
      };
    },
    created() {
      this.getUsers();
    },
    methods: {
      async getUsers() {
        try {
          let response = await axios.get('http://127.0.0.1:8000/api/user');
          this.users = response.data; // Correct assignment
          console.log(this.users);
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your styles here if necessary */
  </style>
  