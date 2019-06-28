import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './components/pages/HomePage.vue'
import AboutPage from './components/pages/AboutPage.vue'
import EmployeeAddPage from './components/pages/EmployeeAddPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/employee-add',
      name: 'employee-add',
      component: EmployeeAddPage
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage
    }
  ]
})
