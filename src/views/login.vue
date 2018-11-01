<template>
    <div class="login">
        <div class="login-box" label-width="80px">
            <div class="title">党建一家后台管理系统</div>
            <el-form>
                <el-form-item>
                    <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-input v-model="formData.password" type="password" @keyup.enter.native="handleLogin" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="button-ys" @click="handleLogin" type="primary">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
    
</template>

<script>
    export default {
        data(){
            return{
                formData:{
                    username:'',
                    password:''
                }
            }
        },
        methods:{
            handleLogin(){
                if(this.formData.username&&this.formData.password){
                     this.$axios.post(`/admin/login`,this.formData).then(res => {
                        if(res.code == 200){
                            this.$message.success(res.msg)
                            this.$router.push('/Layout')
                        }else{
                            this.$message(res.msg)
                        }
                        
                    })
                }else{
                    this.$message.error('请输入用户名或者密码')
                }
               
            }
        },
     
        
    }
</script>

<style scoped lang='scss'>
.login{
    height: 100vh;
    background: #2d3a4b;
    .login-box{
        // height: 200px;
        width: 450px;
        border-top: 1px solid transparent;
        padding-top: 200px;
        margin:0 auto ;
        .title{
            padding-bottom: 50px;
            text-align: center;
            color: #fff;
            font-size: 28px;
        }
        .button-ys{
            width: 100%;
        }
    }
}
</style>