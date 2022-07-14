import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/search',
    name: 'Search',
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
