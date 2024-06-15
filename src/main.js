import { createApp } from 'vue'
import App from './App.vue'
import routes from './routes/routes'
import './index.css'
import 'flowbite'
createApp(App).use(routes).mount('#app')
