import Vue from 'vue'
import  VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Subject = () => import('../views/subject/Subject')
const Group = () => import('../views/group/Group')
const Mall = () => import('../views/mall/Mall')
const Profile = () => import('../views/profile/Profile')
//1.安装插件
Vue.use(VueRouter)

//2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/subject',
    component: Subject
  },
  {
    path: '/group',
    component: Group
  },
  {
    path: '/mall',
    component: Mall
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
