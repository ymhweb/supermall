<!--
 * @Author: your name
 * @Date: 2020-03-17 01:08:32
 * @LastEditTime: 2020-03-17 01:37:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\detail\childComps\DetailSwiper.vue
 -->
<template>
        <swiper class="scroll">
            <swiper-item 
            class="swiper-item"
            v-for="(item,index) in topImages" :key="index">
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name: "DetailSwiper",
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImages:{
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .scroll{
        height: 300px;
        overflow: hidden;
    }
</style>