import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  { path: '/products', name: 'Products', component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue') },
  { path: '/trending', name: 'Trending', component: () => import(/* webpackChunkName: "trending" */ '../views/Trending.vue') }
]

const router = new VueRouter({
  scrollBehavior () {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
