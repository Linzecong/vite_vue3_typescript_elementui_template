import { createApp } from 'vue'
import { store, key } from './store'
import router from './router'
import App from './App.vue'
import { UserService } from './api/user'


var initCode = () => {
    const app = createApp(App)
    app.use(store, key)
    app.use(router)
    app.mount('#app')
}

// 判断是否已经登录
// UserService.getCurrentUser().then(user => {
//     console.log(user.data)
//     if (user.data == 'nologin') {
//         window.location.href = '/api/login' // 跳转到openid登录的页面或其他登录接口
//     } else {
//         initCode()
//         sessionStorage.setItem("currentuser", user.data)
//     }
// })

initCode()
