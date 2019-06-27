import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/pages/HomePage.vue'
import Abount from './components/pages/AboutPage.vue'
import TaskAdd from './components/pages/TaskAddPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: Abount
    },
    {
      path: '/task-add',
      name: 'task-add',
      component: TaskAdd
    }
  ]
})
