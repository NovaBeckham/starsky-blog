import '@/assets/fonts/font.css'
import '@/styles/index.scss'
import { createApp } from 'vue'
import App from './App'
import router from '@/router'
import lazy from '@/directive/lazy'

const app = createApp(App)
app.use(router)
app.directive('lazy', lazy)
app.mount('#app')
