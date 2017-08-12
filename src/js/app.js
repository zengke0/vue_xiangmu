// 打包文件入口
// 导入第三方包
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

// 启用路由插件
Vue.use(VueRouter);
Vue.use(VueResource);

// 导入我们自己写的东西
// 导入我们的组件
import App from '../component/App.vue';
// 导入我们配置好的路由对象
import router from './router.js';

// 创建一个Vue实例,关联视图,把跟组件渲染到视图中去
var vm = new Vue({
    el:"#app",
    // 把跟组件渲染到视图中去
    render:function(c){
        return c(App);
    },
    // 配置路由
    router:router
})