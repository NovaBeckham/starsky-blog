/*
 * @Description:
 * @Author: hyx
 * @Date: 2024-01-12 17:03:15
 */

import { createApp } from "vue"
import router from "./router"
import App from "./App.vue"
import "@/styles/index.scss"
import { i18n } from "./locales"
import { createPinia } from "pinia"
import VueClickAway from "vue3-click-away"
import VueLazyload from "vue-lazyload"
import defaultCover from "@/assets/default-cover.jpg"

const pinia = createPinia()
const app = createApp(App)
  .use(router)
  .use(pinia)
  .use(i18n)
  .use(VueClickAway)
  .use(VueLazyload, {
    lazyComponent: true,
    observer: true,
    loading: defaultCover,
    error: defaultCover,
  })
app.mount("#app")
