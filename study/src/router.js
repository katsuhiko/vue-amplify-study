import Vue from 'vue'
import Router from 'vue-router'

import AppLayout from '@/AppLayout.vue'
import LoginPage from '@/components/pages/LoginPage.vue'
import LogoutPage from '@/components/pages/LogoutPage.vue'
import HomePage from '@/components/pages/HomePage.vue'
import AboutPage from '@/components/pages/AboutPage.vue'
import EmployeeAddPage from '@/components/pages/EmployeeAddPage.vue'
import EmployeeListPage from '@/components/pages/EmployeeListPage.vue'

import { AmplifyEventBus, AmplifyPlugin } from 'aws-amplify-vue'
import * as AmplifyModules from 'aws-amplify'

Vue.use(Router)
Vue.use(AmplifyPlugin, AmplifyModules)

let user

export const checkUser = () => {
  getUser().then((user, error) => {
    if (!user) {
      router.push({ path: '/login' })
    }
  })
}
checkUser()

function getUser () {
  return Vue.prototype.$Amplify.Auth.currentAuthenticatedUser().then((data) => {
    if (data && data.signInUserSession) {
      return data
    }
  }).catch((e) => {
    return null
  })
}

AmplifyEventBus.$on('authState', async (state) => {
  if (state === 'signedOut') {
    user = null
    router.push({ path: '/login' })
  } else if (state === 'signedIn') {
    user = await getUser()
    router.push({ path: '/home' })
  }
})

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'LoginPage',
      component: LoginPage
    },
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '/logout',
          component: LogoutPage
        },
        {
          path: '/home',
          component: HomePage
        },
        {
          path: '/employees',
          component: EmployeeListPage
        },
        {
          path: '/employees/add',
          component: EmployeeAddPage
        },
        {
          path: '/employees/:id',
          component: EmployeeAddPage
        },
        {
          path: '/about',
          component: AboutPage
        }
      ]
    }
  ]
})

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    user = await getUser()
    if (!user) {
      return next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
    return next()
  }
  return next()
})
