import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import { router, checkUser } from './router'
import store from './store'
import './registerServiceWorker'

import Amplify from 'aws-amplify'
import awsExports from './aws-exports'
import { components } from 'aws-amplify-vue'
import Uuid from 'vue-uuid'

Vue.config.productionTip = false

Amplify.configure(awsExports)
Vue.use(Uuid)

new Vue({
  router,
  store,
  components: {
    ...components
  },
  watch: {
    $route: function (to, from) {
      checkUser()
    }
  },
  render: h => h(App)
}).$mount('#app')
