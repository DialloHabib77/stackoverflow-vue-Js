<template>
    <div class="w-">
      <app-navbar>
        <slot name="AppNavbar"></slot>
      </app-navbar>
      <app-sidebar>
        <slot name="AppSidebar"></slot>
      </app-sidebar>
      <main>
       <div class="container">
        <div class="flex items-center justify-center h-screen">
            <h1 class="text-3xl font-semibold text-gray-800 dark:text-white">Welcome to Mini stackoverflow</h1>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'ThemeForm'
  }
  </script>