// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 程序入口
import Vue from 'vue';
// 根组件
import App from './App.vue';
// 路由包，必须包含index.js
import router from './router';

// 导入bootstrap样式,默认会去node_中找
import 'bootstrap/dist/css/bootstrap.css';
// 导入自定义样式
import '@/assets/css/index.css';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
