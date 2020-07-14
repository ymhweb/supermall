<!--
 * @Author: your name
 * @Date: 2020-03-29 00:11:58
 * @LastEditTime: 2020-04-25 23:19:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\category\childComps\TabContentCategory.vue
 -->
<template>
    <div>
      <grid-view :cols="3" :lineSpace="15" :v-margin="20" v-if="subcategories.list">
        <div class="item" v-for="(item, index) in subcategories.list" :key="index">
          <a :href="item.link">
            <img class="item-img" :src="item.image" alt="">
            <div class="item-text">{{item.title}}</div>
          </a>
        </div>
      </grid-view>  
    </div>
</template>

<script>
import GridView from 'components/common/gridView/GridView'

export default {
    name: "TabContentCategory",
    components:{
      GridView
    },
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