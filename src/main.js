// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './store'
import axios from 'axios'
import App from './App'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

Vue.prototype.$appName = 'OhCoach Analytics'
Vue.prototype.$http = axios
Vue.prototype.$apiUrl = 'https://admin-api-dev.ohcoach.com'
Vue.prototype.$localStorage = localStorage

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
