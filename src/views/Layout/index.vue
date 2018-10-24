<template>
    <div>
        <el-row>
            <el-col style="height:100vh;" :span='4'><LeftNav /></el-col>
            <el-col style="height:100vh; overflow-y:scroll" :span='20'>
                <Hearder />
                <router-view class="content"/>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
import Hearder from '@/components/Hearder'
import LeftNav from '@/components/LeftNav'
    export default {
        components:{
            Hearder,
            LeftNav,
        }
        
    }
</script>

<style scoped lang='scss'>
/deep/ .content{
    padding: 30px;
    margin-top: 56px;
}
</style>