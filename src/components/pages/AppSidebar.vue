<template>
    <aside id="logo-sidebar" class="pl-4 fixed top-0 left-0 z-40 w-72 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
  <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
    <ul class="space-y-2 font-medium">
      <li>
        <router-link to="home" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
         <svg class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true"  viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path opacity="0.5" d="M2 12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274C22 8.77128 22 9.91549 22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039Z" fill="#1C274C"/>
  <path d="M9 17.25C8.58579 17.25 8.25 17.5858 8.25 18C8.25 18.4142 8.58579 18.75 9 18.75H15C15.4142 18.75 15.75 18.4142 15.75 18C15.75 17.5858 15.4142 17.25 15 17.25H9Z" fill="#1C274C"/>
  </svg>

          <span class="ms-3">Accueil</span>
        </router-link>
      </li>
      <li>
        <router-link to="" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
            <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286C10 17.169 10.831 18 11.857 18h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z"/>
          </svg>
          <span class="ms-3">Questions</span>
        
        </router-link>
      </li>
      <li>
        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M18 7a2 2 0 0 0-2-2h-4V2a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v3H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7Zm-8 3v2H8v-2H6v-2h2V6h2v2h2v2h-2ZM4 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm10 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z"/>
          </svg>
          <span class="ms-3">Reponses</span>
         
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
         <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 2.76 1.12 5.26 2.93 7.07C7.74 21.88 10.24 23 12 23s4.26-1.12 5.07-3.93C20.88 17.26 22 14.76 22 12c0-5.52-4.48-10-10-10zm0 18c-4.41 0-8-3.59-8-8 0-4.41 3.59-8 8-8s8 3.59 8 8c0 4.41-3.59 8-8 8zm0-16c-3.31 0-6 2.69-6 6 0 3.31 2.69 6 6 6s6-2.69 6-6c0-3.31-2.69-6-6-6zm6 10c-.34 0-.67-.03-1-.08.34.56 1.02.94 1.83.94 1.38 0 2.5-1.12 2.5-2.5S18.38 6 17 6c-.81 0-1.49.38-1.83.94.33-.05.66-.08 1-.08 1.66 0 3 1.34 3 3s-1.34 3-3 3z"/>
         </svg>
          <span class="ms-3">Users</span>
        </a>
      </li>
      <li>
        <router-link to="theme" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="m17.3 18.3-1.6-1.6a8.93 8.93 0 0 0 1.3-4.7 9 9 0 1 0-9 9 8.93 8.93 0 0 0 4.7-1.3l1.6 1.6a1 1 0 1 0 1.4-1.4ZM4 9a5 5 0 1 1 5 5 5 5 0 0 1-5-5Z"/>
          </svg>
          <span class="ms-3">Themes</span>
        </router-link>
      </li>
      <li>
        <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
            <path d="M12 1a1 1 0 0 1 1 1v.08A6 6 0 0 1 14.414 4H14.5a3.5 3.5 0 0 1 0 7H14v2a4 4 0 0 1-3 3.873V18.5a.5.5 0 0 1-1 0v-1.627A4 4 0 0 1 7 13v-2H6.5a3.5 3.5 0 0 1 0-7h.086A6 6 0 0 1 11 2.08V2a1 1 0 0 1 1-1Zm-2 0a5 5 0 0 0-5 5v.2a3.5 3.5 0 0 1 0 6.6V13a3 3 0 1 0 6 0v-.2a3.5 3.5 0 0 1 0-6.6V6a5 5 0 0 0-5-5Z"/>
          </svg>
          <span class="ms-3">Saves</span>
        </a>
      </li>

    </ul>
  </div>
</aside>
</template>
<script>
export default {
  name: 'AppSidebar'
}
</script>