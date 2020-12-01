import Vue from 'vue'
import VueRouter from 'vue-router'

import MainPage from '@/pages/MainPage/MainPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'MainPage',
    component: MainPage,
    redirect: '',
    children: [
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      // Keep scroll position when using browser buttons
      return savedPosition
    }
    else {
      return { x: 0, y: 0 }
    }
  }
})

export default router
