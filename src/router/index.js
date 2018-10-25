import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const components = {
  Layout:() => import('@/views/Layout'),
  Login:() => import('@/views/login'),
  home:() => import('@/views/home'),
  userlist:() => import('@/views/admin/userlist'),
  adduser:() => import('@/views/admin/adduser'),
  newslist:() => import('@/views/news/newslist'),
  addnews:() => import('@/views/news/addnews'),
  catelist:() => import('@/views/category/catelist'),
  addcate:() => import('@/views/category/addcate'),
  swiperlist:() => import('@/views/swiper/swiperlist'),
  addswiper:() => import('@/views/swiper/addswiper'),
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
          meta:{
            title:'首页'
          },
          component: components.home
        },
        {
          path:'userlist', 
          meta:{
            title:'管理员列表'
          },
          component: components.userlist
        },
        {
          path:'adduser', 
          meta:{
            title:'添加管理员'
          },
          component: components.adduser
        },
        {
          path:'reviseuser/:id', 
          meta:{
            title:'修改管理员'
          },
          component: components.adduser
        },
        {
          path:'newslist',
          meta:{
            title:'新闻列表页'
          },
          component: components.newslist
        },
        {
          path:'addnews', 
          meta:{
            title:'添加新闻页'
          },
          component: components.addnews
        },
        {
          path:'revisenews/:id', 
          meta:{
            title:'修改新闻页'
          },
          component: components.addnews
        },
        {
          path:'catelist', 
          meta:{
            title:'分类列表页'
          },
          component: components.catelist
        },
        {
          path:'addcate', 
          meta:{
            title:'添加分类页'
          },
          component: components.addcate
        },
        {
          path:'revisecate/:id', 
          meta:{
            title:'修改分类页'
          },
          component: components.addcate
        },
        {
          path:'swiperlist', 
          meta:{
            title:'轮播图列表页'
          },
          component: components.swiperlist
        },
        {
          path:'addswiper', 
          meta:{
            title:'添加轮播图页'
          },
          component: components.addswiper
        },
      ]
    }
  ]
})

export default router
