<!--
 * @Author: your name
 * @Date: 2020-03-29 00:11:58
 * @LastEditTime: 2020-03-29 00:16:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\category\childComps\TabContentCategory.vue
 -->
<template>
    <div>
      <div class="item" v-for="(item, index) in subcategories.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
    </div>
</template>

<script>
export default {
    name: "TabContentCategory",
    props:{
        subcategories:{
            type: Object,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
 .panel img {
    width: 100%;
  }

  .item {
    text-align: center;
    font-size: 12px;
  }

  .item-img {
    width: 80%;
  }

  .item-text {
    margin-top: 15px;
  }
</style>