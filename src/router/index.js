import { createRouter, createWebHistory } from 'vue-router'
import Reactivity from '@/pages/Reactivity.vue'
import CustomDirective from '@/pages/CustomDirective.vue'
import Suspense from '@/pages/Suspense.vue'
import Teleport from '@/pages/Teleport.vue'
import Pinia from '@/pages/Pinia.vue'
import Home from '@/pages/Home.vue'
import KeepAlive from '@/pages/KeepAlive.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/reactivity',
    name: 'reactivity',
    component: Reactivity,
  },
  {
    path: '/directives',
    name: 'directives',
    component: CustomDirective,
  },
  {
    path: '/suspense',
    name: 'suspense',
    component: Suspense,
  },
  {
    path: '/teleport',
    name: 'teleport',
    component: Teleport,
  },
  {
    path: '/pinia',
    name: 'pinia',
    component: Pinia,
  },
  ,
  {
    path: '/keep-alive',
    name: 'keep-alive',
    component: KeepAlive,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router