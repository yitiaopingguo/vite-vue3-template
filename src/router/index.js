import Vue from 'vue';//引入Vue对象，因为要用它的use
import Router from 'vue-router'//引入vue-router
//引入你需要配置的组件
import MyHome from '../views/home/homeIndex.vue'
import Demo from '../views/demoPage.vue'
//使用路由插件
Vue.use(Router);

//配置路由
const router =  new Router({
    routes: [
        {
            path:"/",
            component:MyHome
        },
        {
            path:"/demo",
            component:Demo
        },
    ]
});

//导出
export default router;
