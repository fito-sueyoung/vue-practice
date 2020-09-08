import Vue from 'vue'
import VueJwtDecode from 'vue-jwt-decode'
import axios from 'axios'
import Router from 'vue-router'
import Auth from './auth'
import Login from '../pages/Login'
import Home from '../pages/Home'

Vue.use(Router)
Vue.use(VueJwtDecode)

Vue.prototype.$appName = 'OhCoach Analytics'
Vue.prototype.$http = axios
Vue.prototype.$apiUrl = 'https://admin-api-dev.ohcoach.com'
Vue.prototype.$auth = new Auth(Vue.jwtDec)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

export default new Router({
  routes: routes,
  mounted () {
    if (this.$auth.hasToken()) {
      this.goHomePage()
    } else {
      this.goLoginPage()
    }
  },
  methods: {
    goLoginPage () {
      this.$router.replace({name: 'Login'}).catch(() => {})
    },
    goHomePage () {
      this.$router.replace({name: 'Home'}).catch(() => {})
    }
  }
})
