import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import { store, key } from './store'
import router from './router'
import App from './App.vue'



const app = createApp(App)

app.use(ElementPlus)

app.use(store, key)
app.use(router)
app.mount('#app')