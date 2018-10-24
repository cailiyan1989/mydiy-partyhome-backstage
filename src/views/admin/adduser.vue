<template>
    <div>
        <el-breadcrumb separator="/" class="mb30">
            <el-breadcrumb-item :to="{ path: '/layout/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item  v-if="isrevise">修改管理员</el-breadcrumb-item>
            <el-breadcrumb-item  v-else>添加管理员</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>

            <el-form ref="form" :model="forData" label-width="80px" label-position="left"  class="table-ys">
            <el-form-item label="用户名" required>
                <el-input v-model="forData.username" :disabled="isrevise"></el-input>
            </el-form-item >
            <el-form-item label="密码" required>
                <el-input v-model="forData.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="昵称" >
                <el-input v-model="forData.nicheng"></el-input>
            </el-form-item>
            <el-form-item label="头像">
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
                <el-select v-model="forData.sex">
                    <el-option label="男" value="1"></el-option>
                    <el-option label="女" value="0"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button v-if="!isrevise" type="primary" @click="handleSubmit">立即创建</el-button>
                <el-button v-else type="primary" @click="handlerevise">立即修改</el-button>
                <el-button>取消</el-button>
            </el-form-item>
             
        </el-form>

        </el-card>
        

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
                },
            }
        },
        methods:{
            // 添加新用户
            handleSubmit(){
                this.$axios.post(`/admin/user`,this.forData).then( res => {
                    // console.log(res)
                    if(res.code ==200){
                        this.$message.success(res.msg)
                        setTimeout( () => {
                            this.$router.push('/layout/userlist')
                        },500)
                    }else{
                        this.$message.info(res.msg)
                    }
                })
            },
            // 获取用户信息，用于修改
            getdata(){
                let {id} = this.$route.params
                this.$axios.get(`/admin/user/${id}`).then(res => {
                    this.forData = res.data
                })
            },
            // 修改用户
            handlerevise(){
                let {id} = this.$route.params
                this.$axios.put(`/admin/user/${id}`,this.forData).then(res => {
                    if(res.code == 200){
                        setTimeout(() => {
                            this.$message.success(res.msg)
                            this.$router.push(`/layout/userlist`)
                        }, 500);
                    }
                })
            }

        },
        created(){
           
        },
        computed:{
            isrevise(){
                if(this.$route.meta.title == '修改管理员'){
                    this.getdata()
                    return true
                }else{
                    this.forData = {}
                    return false
                }
            }
        }
        
    }
</script>

<style scoped lang="scss">
.table-ys{
    width: 600px;
    margin-left: 60px;
}
</style>