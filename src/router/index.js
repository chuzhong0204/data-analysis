import Vue from 'vue'
import VueRouter from 'vue-router'
const Track = () => import('@/views/Track/Track')
const Detail = () => import('@/views/Detail/Detail')
const Dispatch = () => import('@/views/Dispatch/Dispatch')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/track'
  },
  {
    path: '/track',
    name: 'Track',
    component: Track
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail
  },
  {
    path: '/dispatch',
    name: 'Dispatch',
    component: Dispatch
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
