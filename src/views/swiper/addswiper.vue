<template>
    <div>
        <el-breadcrumb separator="/" class="mb30">
            <el-breadcrumb-item :to="{ path: '/layout/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item >添加轮播图页</el-breadcrumb-item>
        </el-breadcrumb>
        <el-card>

            <el-form ref="form" :model="formData" label-width="100px" label-position="left"  class="table-ys">
                <el-form-item label="轮播图标题" required>
                    <el-input v-model="formData.title" :disabled="isrevise"></el-input>
                </el-form-item >
               
                <el-form-item label="轮播图头图" required>
                    <Uploadimg v-model="formData.img" />
                </el-form-item>
                <el-form-item label="是否显示">
                    <el-switch
                        v-model="formData.status"
                        :active-value=1
                        :inactive-value=0
                        active-text="显示"
                        inactive-text="不显示">
                    </el-switch>
                </el-form-item>
                <el-form-item label="排序号">
                    <el-input-number v-model="formData.sort"  :min="1"  />
                </el-form-item>
                <el-form-item label="选择新闻">
                    <el-popover
                    placement="right"
                    width="400"
                    trigger="click">
                        <el-table :data="gridData">
                            <el-table-column width="150" property="date" label="日期"></el-table-column>
                            <el-table-column width="100" property="name" label="姓名"></el-table-column>
                            <el-table-column width="300" property="address" label="地址"></el-table-column>
                        </el-table>
                        <el-button slot="reference">click 激活</el-button>
                    </el-popover>
                </el-form-item>
                
                <el-form-item>
                    <el-button v-if="!isrevise" type="primary" @click="handleSubmit">立即创建</el-button>
                    <el-button v-else type="primary" @click="handlerevise">立即修改</el-button>
                    <el-button @click="$router.push(`/layout/userlist`)">取消</el-button>
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
                formData:{
                    status:1,
                    sort:1
                },
                gridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                    }]
                }
        },
        methods:{
            handleSubmit(){ 

            },
            handlerevise(){

            }

        },
        created(){
           

        },
        computed:{
            isrevise(){
                if(this.$route.meta.title == '修改轮播图页'){
                    return true
                }else{
                    return false
                }
            }
        }
        
        
    }
</script>

<style scoped>

</style>