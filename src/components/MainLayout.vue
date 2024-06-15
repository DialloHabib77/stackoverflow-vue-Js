<template>
  <div>
    <app-navbar>
      <slot name="AppNavbar"></slot>
    </app-navbar>
    <app-sidebar>
      <slot name="AppSidebar"></slot>
    </app-sidebar>
    <main>
      
    </main>
  </div>
</template>

<script>
import AppNavbar from './AppNavbar.vue'
import AppSidebar from './AppSidebar.vue'
export default {
  name: 'MainLayout',
  components: {
    AppNavbar,
    AppSidebar
  }

}
</script>
