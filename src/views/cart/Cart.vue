<!--
 * @Author: your name
 * @Date: 2019-12-19 23:26:15
 * @LastEditTime: 2020-03-26 00:50:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\cart\Cart.vue
 -->
<template>
    <div class="cart">
        <nav-bar class="nav-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>

        <cart-list/>

        <cart-bottom-bar/>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

import { mapGetters } from 'vuex'

    export default {
        name: "Cart",
        components:{
            NavBar,
            CartList,
            CartBottomBar
        },
        computed:{
            ...mapGetters(['cartLength'])
        }
    }
</script>

<style scoped>
    .nav-bar{
        background-color: var(--color-tint);
        color: #fff;
    }
</style>
