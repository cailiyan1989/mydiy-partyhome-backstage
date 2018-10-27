<template>
    <div class="left-nav">
        <el-menu
        :default-active="text"
        class="el-menu-vertical-demo"
        background-color="#2d3a4b"
        text-color="#fff"
    
        active-text-color="#ffd04b">
            <router-link to='/layout/home'><el-menu-item index="/layout/home"> 首页</el-menu-item></router-link>
            <el-submenu index="admin-manage">
                <template slot="title"> 管理员管理 </template>
                <router-link to="/layout/adminlist"><el-menu-item index="/layout/adminlist"> 管理员列表</el-menu-item></router-link>
                <router-link to="/layout/addadmin"><el-menu-item index="/layout/addadmin"> 添加管理员</el-menu-item></router-link>
            </el-submenu>
            <el-submenu index="user-manage">
                <template slot="title"> 普通用户管理 </template>
                <router-link to="/layout/userlist"><el-menu-item index="/layout/userlist"> 普通用户列表</el-menu-item></router-link>
                <router-link to="/layout/adduser"><el-menu-item index="/layout/adduser"> 添加普通用户</el-menu-item></router-link>
            </el-submenu>
            <el-submenu index="category-manage">
                <template slot="title"> 分类管理 </template>
                <router-link to="/layout/catelist"><el-menu-item index="/layout/catelist"> 分类列表</el-menu-item></router-link>
                <router-link to="/layout/addcate"><el-menu-item index="/layout/addcate"> 添加分类</el-menu-item></router-link>
            </el-submenu>
            <el-submenu index="news-manage">
                <template slot="title"> 新闻管理 </template>
                <router-link to="/layout/newslist"><el-menu-item index="/layout/newslist"> 新闻列表</el-menu-item></router-link>
                <router-link to="/layout/addnews"><el-menu-item index="/layout/addnews"> 添加新闻</el-menu-item></router-link>
            </el-submenu>
            <el-submenu index="swiper-manage">
                <template slot="title"> 轮播图管理 </template>
                <router-link to="/layout/swiperlist"><el-menu-item index="/layout/swiperlist"> 轮播图列表</el-menu-item></router-link>
                <router-link to="/layout/addswiper"><el-menu-item index="/layout/addswiper"> 添加轮播图</el-menu-item></router-link>
            </el-submenu>
            <el-submenu index="topic-manage">
                <template slot="title"> 主题管理 </template>
                <router-link to="/layout/topiclist"><el-menu-item index="/layout/topiclist"> 主题列表</el-menu-item></router-link>
            </el-submenu>
        </el-menu>

    </div>
</template>

<script>
export default {
    data() {
        return {
            text: ''
        }
    },
    watch: { 
        $route(to, from){
            this.text = to.path
        }
    }
}
</script>

<style scoped lang='scss'>
.left-nav{
    min-height: 100vh;
    background: #2d3a4b;
    z-index: 955;
    /deep/ .el-menu{
        border: none;
    }
}
</style>