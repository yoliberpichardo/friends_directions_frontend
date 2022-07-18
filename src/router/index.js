import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const token = localStorage.getItem('token')

const routes = [
  {
    path:'/login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
    meta : { requiresAuth: false },
  },
  {
    path:'/register',
    name: 'Register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    meta : { requiresAuth: true },
    children:[
      {
        path: 'search',
        name: 'Search',
        component: () => import('../layouts/SearchFriends.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !token && to.name !== 'Register' && to.name !== 'Login' 
  ) {
    // redirect the user to the login page
    return { name: 'Login' }
  }
})

export default router
