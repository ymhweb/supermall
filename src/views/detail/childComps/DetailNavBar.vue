<!--
 * @Author: your name
 * @Date: 2020-03-16 02:57:24
 * @LastEditTime: 2020-03-23 01:16:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\childComps\DetailNavBar.vue
 -->
<template>
    <div>
        <nav-bar>
            <div slot="left" class="back">
                <img src="~assets/img/common/back.svg" alt="" @click="backClick">
            </div>
            <div slot="center" class="title">
                <div class="title-item" 
                v-for="(item,index) in titles" 
                :key="index"
                :class="{active:index === currentIndex}"
                @click="titleClick(index)">
                {{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name: "DetailNavBar",
    components:{
        NavBar
    },
    data(){
        return{
            titles:['商品','参数','评论','推荐'],
            currentIndex: 0
        }
    },
    methods:{
        titleClick(index){
            this.currentIndex = index;
            this.$emit('titleClick',index)
        },
        backClick(){
            this.$router.back()
        }
    }
}
</script>

<style scoped>
    .title{
        display: flex;
        font-size: 13px;
    }

    .title-item{
        flex: 1;
    }

    .active{
        color: var(--color-high-text);
    }

    .back img{
        margin-top: 12px;
    }
</style>