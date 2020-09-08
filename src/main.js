// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Main from './components/view/Main'

Vue.config.productionTip = false

Vue.component('main-view', Main)

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
