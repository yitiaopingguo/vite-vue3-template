import { createApp } from 'vue'
import './style.css'
import './style/icon/iconfont.css'
import App from './App.vue'

import router from './router/index'
import store from './store/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
