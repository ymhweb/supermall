<!--
 * @Author: your name
 * @Date: 2020-04-30 22:23:59
 * @LastEditTime: 2020-05-01 22:29:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\alreadybuy\AlreadyBuy.vue
 -->
<template>
    <div class="buy">
        <nav-bar class="nav-bar"><div slot="center">我的订单</div></nav-bar>
        <cart-bottom-bar></cart-bottom-bar>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartBottomBar from 'views/cart/childComps/CartBottomBar'

export default {
    name:'AlreadyBuy',
    components:{
        NavBar,
        CartBottomBar
    }
}
</script>

<style scoped>
    .nav-bar{
        background-color: var(--color-tint);
        color: #fff;
    }
</style>