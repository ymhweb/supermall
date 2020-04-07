<!--
 * @Author: your name
 * @Date: 2019-12-24 22:39:35
 * @LastEditTime: 2020-03-16 01:34:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\content\goods\GoodsList.vue
 -->
<template>
    <div class="goods">
      <goods-list-item v-for="(item,index) in goods" :goods-item="item" :key="index"/>
    </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

    export default {
        name: "GoodsList",
        components:{
            GoodsListItem
        },
        props:{
            goods:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
    .goods{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>
