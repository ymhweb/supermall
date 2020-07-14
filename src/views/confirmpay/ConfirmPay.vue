<!--
 * @Author: your name
 * @Date: 2020-04-28 22:41:32
 * @LastEditTime: 2020-04-28 23:02:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\confirmpay\confirmPay.vue
 -->
<template>
    <div class="progectile">
        <confirm-pay-money></confirm-pay-money>
    </div>
</template>

<script>
import ConfirmPayMoney from './childComps/ConfirmPayMoney'

export default {
    name:'ConfirmPay',
    components:{
        ConfirmPayMoney
    }

}
</script>

<style scoped>

</style>