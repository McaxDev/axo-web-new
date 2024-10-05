
import { pinia } from './utils/http'

import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)


import 'bootstrap/dist/css/bootstrap.min.css'
import AllIcon from 'vue-ionicons/dist/ionicons.js'
import('vue-ionicons/ionicons.css')

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
// 自定义样式一定要在最后加载
import './assets/main.css'

import './assets/elementStyle.css'

app.use(AllIcon)

app.use(ElementPlus, { 
    locale: zhCn
})

Object.keys(ElementPlusIconsVue).forEach(key => {
    app.component(key, ElementPlusIconsVue[key])
})

app.use(router)
app.use(pinia)

app.mount('#app')