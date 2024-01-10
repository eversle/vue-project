import { createRouter, createWebHashHistory , createWebHistory } from 'vue-router'
import Layout from '@/layout/basicLayout.vue'
const routes = [
  {
    path:'/',
    redirect:'/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    component: Layout,
    path:'/',
    children:[
      {
        path: '/home',
        name: 'home',
        component: import('@/views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
      }
    ]
  },
  {
    path:'/403',
    name: '403',
    component: () => import('@/views/error/403.vue')
  },
  {
    path:'/404',
    name: '404',
    component: () => import('@/views/error/404.vue')
  },
  {
    path:'/500',
    name: '500',
    component: () => import('@/views/error/500.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
