import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios, { type AxiosInstance } from 'axios'
import './assets/main.css'

// Font Awesome Icons
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faEllipsis,
  faBars,
  faXmark,
  faHouse,
  faComments,
  faCircleInfo,
  faCircleQuestion
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faEllipsis, faBars, faXmark, faHouse, faComments, faCircleInfo, faCircleQuestion)

const app = createApp(App)

app.use(createPinia())
app.use(router)

const $axios: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: false
})
app.provide('axios', $axios)
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
