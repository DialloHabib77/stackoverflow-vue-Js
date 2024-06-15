<template>
  <MainLayout/>
  <router-view></router-view>
</template>

<script>
import MainLayout from './components/MainLayout.vue'
export default {
  name: 'App',
  components: {
    MainLayout
  }
}
</script>
