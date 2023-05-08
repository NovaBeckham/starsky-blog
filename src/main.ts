import '@/assets/fonts/font.css'
import '@/styles/index.scss'
import { createApp } from 'vue'
import App from './App'
import router from '@/router'
import VMdPreview from "@kangc/v-md-editor/lib/preview"

const app = createApp(App)
app.use(router)
app.use(VMdPreview)
app.mount('#app')
