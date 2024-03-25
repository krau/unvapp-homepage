import { createApp } from 'vue'
import App from './App.vue'
import Varlet from '@varlet/ui'
import '@varlet/ui/es/style'
import './assets/main.css'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(Varlet)

app.mount('#app')
