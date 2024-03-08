
// main.ts

import '@/assets/css/main.css'
import 'element-plus/dist/index.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from '@/pages/creator-page/App.vue'

// import router from './router'

const app = createApp(App)

// pinia
const pinia = createPinia()
app.use(pinia)
pinia.use(piniaPluginPersistedstate)

// router
// app.use(router)

// element-plus
app.use(ElementPlus, { size: 'default', zIndex: 3000 })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }

app.mount('#app')
