import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue';
import Fenlei from '../components//feilei/fenlei.vue';
import Find from '../components/find/find.vue';
import Car from '../components/car.vue';
import Login from '../components/login/login.vue';
import Res from '../components/res/res.vue';
import User from '../components/user/user.vue';
import Detail from '../components/detail.vue';

Vue.use(Router)

export default new Router({
  scrollBehavior(to, from, savedPosition) {
    return {
      x: 0,
      y: 0
    }
  },
  routes: [{
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/fenlei',
      name: 'Fenlei',
      component: Fenlei
    },
    {
      path: '/find',
      name: 'Find',
      component: Find
    },
    {
      path: '/car',
      name: 'Car',
      component: Car
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/res',
      name: 'Res',
      component: Res
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
