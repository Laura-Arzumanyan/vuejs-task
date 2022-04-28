import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

const axiosInstance = axios.create({
    withCredentials: true,
})

const app = createApp(App)
app.config.globalProperties.$axios = { ...axiosInstance }
app.mount('#app')