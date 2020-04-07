<!--
 * @Author: your name
 * @Date: 2019-12-23 22:13:21
 * @LastEditTime: 2020-03-16 01:35:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\home\childComps\RecommendView.vue
 -->
<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" class="recommend-item" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "RecommendView",
        props:{
            recommends:{
                type:Array,
                default(){
                    return []
                }
            }
        }
    }
</script>

<style scoped>
  .recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size:12px;
    padding: 10px 0 20px;
    border-bottom: 10px solid #eee;
  }

  .recommend-item{
    flex: 1;
  }

  .recommend-item img{
    width: 70px;
    height: 70px;
    margin-bottom: 10px;
  }
</style>
