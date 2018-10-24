<template>
    <div class="left-nav">
        <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#2d3a4b"
        text-color="#fff"
        active-text-color="#ffd04b">
            <router-link to='/layout/home'><el-menu-item index="index"> 首页</el-menu-item></router-link>
            <el-submenu index="admin-manage">
                <template slot="title"> 管理员管理 </template>
                <router-link to="/layout/userlist"><el-menu-item index="/layout/userlist"> 管理员列表</el-menu-item></router-link>
                <router-link to="/layout/adduser"><el-menu-item index="/layout/adduser"> 添加管理员</el-menu-item></router-link>
            </el-submenu>
            <el-submenu index="news-manage">
                <template slot="title"> 新闻管理 </template>
                <router-link to="/layout/newslist"><el-menu-item index="/layout/newslist"> 新闻列表</el-menu-item></router-link>
                <router-link to="/layout/addnews"><el-menu-item index="/layout/addnews"> 添加新闻</el-menu-item></router-link>
            </el-submenu>
        </el-menu>

    </div>
</template>

<script>
    export default {
        
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