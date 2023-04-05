import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios, { type AxiosInstance } from 'axios'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

const $axios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false
})
app.provide('axios', $axios)

app.mount('#app')
