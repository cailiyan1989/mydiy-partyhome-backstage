<template>
    <div>
        <el-row>
            <el-col :span='4'><LeftNav /></el-col>
            <el-col :span='20'>
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
}
</style>