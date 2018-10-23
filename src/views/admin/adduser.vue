<template>
    <div>
        <el-breadcrumb separator="/" class="mb30">
            <el-breadcrumb-item :to="{ path: '/layout/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item >添加管理员</el-breadcrumb-item>
        </el-breadcrumb>

        <el-form ref="form" :model="forData" label-width="80px" label-position="left"  class="table-ys">
            <el-form-item label="用户名" required>
                <el-input v-model="forData.username"></el-input>
            </el-form-item >
            <el-form-item label="密码" required>
                <el-input v-model="forData.password"></el-input>
            </el-form-item>
            <el-form-item label="头像">
                <!-- <el-input v-model="forData.nicheng"></el-input> -->
               <Uploadimg v-model="forData.avatar" />
            </el-form-item>
            <el-form-item label="个性签名">
                <el-input v-model="forData.desc"></el-input>
            </el-form-item>
            <el-form-item label="工作">
                <el-input v-model="forData.job"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="forData.phone"></el-input>
            </el-form-item>
            <el-form-item label="性别">
                <!-- <el-input v-model="forData.sex"></el-input> -->
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit">立即创建</el-button>
                <el-button>取消</el-button>
            </el-form-item>

             
        </el-form>

    </div>
</template>

<script>
import Uploadimg from '@/components/Uploadimg'
    export default {
        components:{
            Uploadimg
        },
        data(){
            return{
                forData:{
                    username:'',
                    password:'',
                    nicheng:'',
                    avatar:'',
                    desc:'',
                    job:'',
                    phone:'',
                    sex:'',
                }
            }
        },
        methods:{
            handleSubmit(){
                this.$axios.post(`/admin/user`,this.forData).then( res => {
                    console.log(res)
                    if(res.code ==200){
                        this.$message.success(res.msg)
                        setTimeout( () => {
                            this.$router.push('/layout/userlist')
                        },500)
                    }
                })
            }

        },
        created(){

        }
        
    }
</script>

<style scoped lang="scss">
.table-ys{
    width: 600px;
    margin-left: 60px;
}
</style>