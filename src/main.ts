import { createApp } from 'vue'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import './assets'
import router from './routers'
import store from './stores'
import i18n from './i18n'
import directives from './directives'

const head = createHead()
const app = createApp(App)
app.use(head)
app.use(store).use(router).use(directives).use(i18n)
app.mount('#app')
