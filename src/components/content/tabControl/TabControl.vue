<!--
 * @Author: your name
 * @Date: 2019-12-23 23:23:14
 * @LastEditTime: 2020-03-29 00:45:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\content\tabControl\TabControl.vue
 -->
<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" class="tab-control-item"
         :class="{active:index===currentIndex}" @click="itemClick(index)"
         :key="item">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "TabControl",
        props:{
            titles:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return{
                currentIndex:0
            }
        },
        methods:{
            itemClick(index){
                this.currentIndex = index;
                this.$emit('tabClick',index)
            }
        }
    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span{
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);
  }

  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
