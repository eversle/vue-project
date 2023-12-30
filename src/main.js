import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
 // 导入构造函数
 import { createPinia } from 'pinia'
 
 //element-ui
 import ElementPlus from 'element-plus'

// 实例化 Pinia
const pinia = createPinia()

createApp(App).use(router).use(ElementPlus, { size: 'small', zIndex: 3000 }).use(pinia).mount('#app')
