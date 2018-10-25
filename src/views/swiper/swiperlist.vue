<template>
    <div>
        <el-breadcrumb separator="/" class="mb30">
            <el-breadcrumb-item :to="{ path: '/layout/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item >轮播图列表页</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>

            <el-table :data="formData" stripe style="width: 100%" align="center">
                <el-table-column prop="title" label="轮播图标题" width="140" align="center"/>
                <el-table-column label="新闻头图" width="120" align="center" >
                    <template slot-scope="scope">
                        <img :src="scope.row.img" class="avatar-item" alt="">
                    </template>
                </el-table-column>
                
                <el-table-column prop="look_num"  label="是否显示" width="80"  align="center">
                    <template slot-scope="scope">
                        {{scope.row.status == 1 ? '显示' : '不显示'}}
                    </template>
                </el-table-column>
                <el-table-column prop="sort" label="排序号" width="80" align="center"/>
                <el-table-column prop="newsId.title" label="关联新闻的标题" width="180" align="center"/>
                <el-table-column label="关联新闻的内容" width="240" align="center">
                    <template slot-scope="scope">
                        <div class="table-content-ys" v-text="scope.row.newsId.contentText"></div>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="180" align="center">
                    <template slot-scope="scope">
                        <el-button @click="handlelook(scope.row._id)" type="primary" size="small">编辑</el-button>
                        <el-button @click="handledel(scope.row._id)" type="danger" size="small">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

        </el-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                formData:[]
            }
        },
        methods:{
            getData(){
                this.$axios.get(`/ddyj/swiper`).then(res => {
                    this.formData = res.data
                })
            }
        },
        created(){
            this.getData()
        }
    }
</script>

<style scoped>

</style>