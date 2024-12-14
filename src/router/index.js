import Vue from 'vue'
import VueRouter from 'router'
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/index",
    name: "app",
    component: App
  },
  {
    path: "/",
    name: "app",
    component: App
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
//解决vue-router重复点击报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) { return originalPush.call(this, location).catch((err) => err) }
export default router
