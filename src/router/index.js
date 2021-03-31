import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'
import Mobile from '@/views/Mobile'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/mobile',
    name: 'Mobile',
    component: Mobile
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
