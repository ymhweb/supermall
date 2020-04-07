<!--
 * @Author: your name
 * @Date: 2019-12-23 21:49:11
 * @LastEditTime: 2020-03-16 02:04:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\home\childComps\HomeSwiper.vue
 -->
<template>
  <swiper>
    <swiper-item v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
    import {Swiper,SwiperItem} from 'components/common/swiper'

    export default {
        name: "HomeSwiper",
        props:{
            banners:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
          return{
            isLoad: false
          }
        },
        components:{
            Swiper,
            SwiperItem
        },
        methods:{
          imageLoad(){
            if(!this.isLoad){
            this.$emit('swiperImageLoad')
            this.isLoad = true
            }            
          }
        }
    }
</script>

<style scoped>

</style>
