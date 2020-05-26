import Vue from 'vue'
import VueRouter from 'vue-router'

const home = ()=>import("@/views/home/Home")
const article = ()=>import("@/views/article/Article")
const movies = ()=>import("@/views/movies/Movies")
const file = ()=>import("@/views/file/File")

Vue.use(VueRouter)

const routes = [
  {
    path:"/home",
    component:home
  },
  {
    path:"/article",
    component:article
  },  {
    path:"/movies",
    component:movies
  },  {
    path:"/file",
    component:file
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
