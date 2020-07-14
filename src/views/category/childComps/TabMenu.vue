<!--
 * @Author: your name
 * @Date: 2020-03-28 22:58:51
 * @LastEditTime: 2020-04-25 23:34:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\category\childComps\TabMenu.vue
 -->
<template>
    <scroll id="tab-menu">
        <div class="menu-list">
            <div class="menu-list-item" v-for="(item,index) in categories" 
            :key="index" :class="{active:index==currentIndex}"
            @click="itemClick(index)">
                {{item.title}}
            </div>
        </div>
    </scroll>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
    name: "TabMenu",
    components:{
        Scroll
    },
    props:{
        categories: Array
    },
    data(){
        return{
            currentIndex: 0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex = index
            this.$emit('selectItem',index)
        }
    }
}
</script>

<style scoped>
    #tab-menu{
        background-color: #f6f6f6;
        height: 100%;
        width: 100px;
        box-sizing: border-box;
    }

    .menu-list-item{
        height: 45px;
        line-height: 45px;
        text-align: center;
        font-size: 14px;
    }
    .menu-list-item.active {
        font-weight: 700;
        color: var(--color-high-text);
        background-color: #fff;
        border-left: 3px solid var(--color-high-text);
   }
</style>