<template>
    <div>
        <el-breadcrumb separator="/" class="mb30">
            <el-breadcrumb-item :to="{ path: '/layout/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-if="isrevise">修改新闻页</el-breadcrumb-item>
            <el-breadcrumb-item v-else>添加新闻页</el-breadcrumb-item>

        </el-breadcrumb>
        <el-card>

            <el-form ref="form" :model="forData" label-width="80px" label-position="left"  class="table-ys">
                <el-form-item label="新闻标题" >
                    <el-input v-model="forData.title" :disabled="isrevise"></el-input>
                </el-form-item >
                <el-form-item label="作者">
                    <el-select v-model="forData.author">
                        <el-option v-for="(item,index) in users" :key=index :label="item.nicheng" :value="item._id"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="新闻内容" >
                    

                </el-form-item >
               
               
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
// 只留一个就行，随后去掉
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor, Quill} from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
    export default {
        components: {quillEditor},
        data(){
            return{
                forData:{},
                users:[],
            }
        },
        methods:{
            handleSubmit(){

            },
            handlerevise(){

            },
            getUser(){ //获取用户信息
                this.$axios.get('/admin/user').then(res => {
                    this.users = res.data
                })
            }
            
        },
        created(){
            this.getUser()

        },
        computed:{
            isrevise(){
                if(this.$route.meta.title == '修改新闻'){
                    return true;
                }else{
                    return false;
                }
            }
        }
        
    }
</script>

<style scoped>

</style>