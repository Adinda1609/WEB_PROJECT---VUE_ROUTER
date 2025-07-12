import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

const app = createApp(App)

// Pastikan Pinia menggunakan router
const pinia = createPinia()
pinia.use(({ store }) => {
  store.router = router
})

app.use(pinia)
app.use(router)

app.mount('#app')