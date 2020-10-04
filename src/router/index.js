import Vue from 'vue'
import Router from 'vue-router'
import Login from '../views/Login'
import Home from '../views/Home'

Vue.use(Router)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new Router({
  routes: routes
})

/*
  Navigation Guards
  https://router.vuejs.org/guide/advanced/navigation-guards.html
 */
router.beforeEach((to, from, next) => {
  if (to.name !== 'Login' && !localStorage.auth_token) {
    next({ name: 'Login' })
  } else if (to.name === 'Login' && localStorage.auth_token) {
    next(false)
  } else {
    next()
  }
})

export default router
