import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../components/index.vue'
import hello from '../components/HelloWorld.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "/index",
    name: "index",
    component: index
  },
  {
    path: "/hello",
    name: "hello",
    component: hello
  },
  {
    path: "/",
    name: "index",
    component: index
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
