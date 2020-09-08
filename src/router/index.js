import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/Login'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Router)
Vue.use(VueAxios, axios)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ]
})
