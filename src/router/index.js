import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const token = localStorage.getItem('token')

const routes = [
  {
    path: '/search',
    name: 'Search',
    meta : { requiresAuth: true },
    component: () => import('../layouts/SearchFriends.vue')
  },
  {
    path:'/login',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path:'/register',
    name: 'register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !token &&
    // ❗️ Avoid an infinite redirect
    to.name !== 'Login'
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

export default router
