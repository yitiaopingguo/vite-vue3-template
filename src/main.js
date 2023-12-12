import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/css/global.css'
import animated from 'animate.css'
import axios from 'axios'
Vue.prototype.$http = axios.create();

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(animated);
new Vue({
  render: h => h(App),
  router //添加路由对象
}).$mount('#app')
