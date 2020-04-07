<!--
 * @Author: your name
 * @Date: 2020-03-25 01:44:16
 * @LastEditTime: 2020-03-26 01:00:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\cart\childComps\CartList.vue
 -->
<template>
    <div class="cart-list">
        <scroll class="content" ref="scroll"> 
            <cart-list-item v-for="(item,index) in cartList" 
            :key="index" 
            :item-info="item"/>
        </scroll> 
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'

export default {
    name: "CartList",
    components:{
        Scroll,
        CartListItem
    },
    computed:{
        ...mapGetters(['cartList'])
    },
    activated(){
        this.$refs.scroll.refresh;
    }
}
</script>

<style scoped>
    .cart-list{
        height: calc(100% - 449x - 49px);
    }

    .content{
        height: 100%;
        overflow: hidden;
    }
</style>