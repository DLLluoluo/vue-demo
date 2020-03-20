import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue';
import Fenlei from '../components/fenlei.vue';
import Find from '../components/find.vue';
import Car from '../components/car.vue';
import User from '../components/user.vue';

Vue.use(Router)

export default new Router({
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
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
