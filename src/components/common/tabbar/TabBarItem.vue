<!--
 * @Author: your name
 * @Date: 2019-12-19 23:04:07
 * @LastEditTime: 2020-03-06 01:13:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\common\tabbar\TabBarItem.vue
 -->
<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBaritem",
        props:{
            path:String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return{
                // isActive:true
            }
        },
        computed:{
          isActive(){
            //$route指向活跃的路由
              return this.$route.path.indexOf(this.path) !== -1
          },
            activeStyle(){
              return this.isActive ? {color:this.activeColor} : {}
            }
        },
        methods:{
            itemClick(){
              //replace 和 push的区别是是否可以单击返回按钮
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }

</style>
