import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const components = {
  Layout:() => import('@/views/Layout'),
  Login:() => import('@/views/login'),
  home:() => import('@/views/home'),
  userlist:() => import('@/views/admin/userlist'),
  adduser:() => import('@/views/admin/adduser'),
}

const router = new Router({
  routes: [
    {
      path: '/',
      redirect:'/layout'
    },
    {
      path: '/login',
      name: 'login',
      component: components.Login
    },
    {
      path: '/layout',
      component: components.Layout,
      redirect: '/layout/home',
      children:[
        {
          path:'home', //前面不要加/
          metta:{
            title:'首页'
          },
          component: components.home
        },
        {
          path:'userlist', 
          metta:{
            title:'管理员列表'
          },
          component: components.userlist
        },
        {
          path:'adduser', 
          metta:{
            title:'添加管理员'
          },
          component: components.adduser
        }
      ]
    }
  ]
})

export default router
