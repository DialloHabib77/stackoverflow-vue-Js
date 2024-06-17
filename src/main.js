import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/routes'
import './assets/app.css'
import 'flowbite'
createApp(App).use(routes).mount('#app')
