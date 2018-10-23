<template>
    <div>
        <el-breadcrumb separator="/" class="mb30">
            <el-breadcrumb-item :to="{ path: '/layout/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item >管理员列表</el-breadcrumb-item>
        </el-breadcrumb>

        <el-table :data="formDate" stripe style="width: 100%">
            <el-table-column prop="username" label="姓名" width="180" />
            <el-table-column prop="nicheng" label="昵称" width="180" />
            <el-table-column label="头像" width="180" >
                <template slot-scope="scope">
                    <img :src="scope.row.avatar" class="avatar-item" alt="">
                </template>
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="180" />
            <el-table-column prop="job" label="工作" width="180" />
            <el-table-column prop="phone" label="电话" width="180" />
            <el-table-column label="操作" width="180" >
                <template slot-scope="scope">
                     <el-button @click="handlelook(scope.row._id)" type="primary" size="small">编辑</el-button>
                     <el-button @click="handledel(scope.row._id)" type="danger" size="small">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                formDate:[],
                count:'',
            }
        },
        methods:{
            getdata(){
                this.$axios.get(`/admin/user`).then(res => {
                    console.log(res)
                    this.formDate = res.data
                    this.count = res.count
                })
            },
            handlelook(id){
                console.log('查看详细',id)
            },
            handledel(id){
                console.log('删除',id)
            }
        },
        created(){
            this.getdata()
        }
        
    }
</script>

<style scoped>

</style>