<template>
    <div class="hearder">
        党建一家后台管理系统

            <el-dropdown class="dropdown" @command="handleCommand">
            <span class="el-dropdown-link">
                下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command=0>退出登录</el-dropdown-item>
                <!-- <el-dropdown-item command="b">狮子头</el-dropdown-item> -->
            </el-dropdown-menu>
            </el-dropdown>

    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            handleCommand(id){
                if(id == 0){
                    this.$axios.get('/admin/logout').then(res => {
                        if(res.code == 200){
                            this.$message.success(res.msg)
                            setTimeout(() => {
                                this.$router.push('/login')
                            },500)
                        }
                    })
                    
                }
            }
        }
        
    }
</script>

<style scoped lang='scss'>
.hearder{
    height: 56px;
    line-height: 56px;
    text-align: center;
    font-size: 30px;
    color: #fff;
    background: #2d3a4b;
}
.dropdown{
    position: fixed;
    color: #fff;
    right: 20px;
    top: 0;
}
</style>