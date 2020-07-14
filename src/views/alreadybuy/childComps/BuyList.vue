<!--
 * @Author: your name
 * @Date: 2020-04-30 22:38:12
 * @LastEditTime: 2020-04-30 22:42:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\alreadybuy\childComps\Buy.vue
 -->
<template>
    <div class="buy">
        <scroll class="content" ref="scroll"> 
        </scroll> 
    </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'
// import CartListItem from './CartListItem'

import { mapGetters } from 'vuex'

export default {
    name: "BuyList",
    components:{
        Scroll
    },
    // computed:{
    //     ...mapGetters(['cartList'])
    // },
    // activated(){
    //     this.$refs.scroll.refresh;
    // }
}
</script>

<style scoped>

</style>