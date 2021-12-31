import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    redirect: '/serverlist'
  },
  {
    path: '/serverlist',
    name: 'ServerList',
    component: () => import( '../views/ServerList.vue')
  },
  {
    path: '/directconnection',
    name: 'DirectConnection',
    component: () => import( '../views/DirectConnection.vue')
  },
  {
    path: '/wads',
    name: 'Wads',
    component: () => import( '../views/Wads.vue')
  },
  {
    path: '/demos',
    name: 'Demos',
    component: () => import( '../views/Demos.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import( '../views/Settings.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
