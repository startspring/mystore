import Vue from 'vue';
import Router from 'vue-router';

//加载路由对应的组件
import HeroesList from '@/views/heroes/list';

// 注册vue-router插件
Vue.use(Router);

export default new Router({
  routes: [
    // {name: 'home', path:'/', redirect:  '/heroes'},默认路径指向
    {name: 'home', path:'/', redirect:  {name: '/heroes'} },
    {name: 'heroes', path:'/heroes', component:  HeroesList}
  ]
});
