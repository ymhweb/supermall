<!--
 * @Author: your name
 * @Date: 2020-03-26 00:48:41
 * @LastEditTime: 2020-05-01 22:14:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\cart\childComps\CartBottomBar.vue
 -->
<template>
    <div class="bottom-bar">
        <div class="check-content">
            <check-button :is-checked="isSelectAll" 
            class="check-button" @click.native="checkClick"/>
            <span>全选</span>
        </div>

        <div class="price">
            合计:{{totalPrice}}
        </div>

        <div class="calculate" @click="calClick">
            去计算：{{checkLength}}
        </div>    
    </div>
</template>

<script>
import CheckButton from 'components/content/checkButton/CheckButton'

export default {
    name: "CartBottomBar",
    components:{
        CheckButton
    },
    data(){
        return{
            arr: null
        }
    },
    computed:{
        totalPrice(){
            return '￥' + this.$store.state.cartList.filter(item=>{
                return item.checked
            }).reduce((preValue,item)=>{
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        checkLength(){
            return this.$store.state.cartList.filter(item=>item.checked).length
        },
        isSelectAll(){
           if(this.$store.state.cartList.length === 0) return false
           return !(this.$store.state.cartList.filter(item => !item.checked).length)
        // return !this.cartList.find(item => !item.checked)
        }
    },
    methods:{
        checkClick(){
            if(this.isSelectAll){
                this.$store.state.cartList.forEach(item => item.checked = false)
            }else{
                this.$store.state.cartList.forEach(item => item.checked = true)
            }
            
        },
        calClick(totalPrice){
            if(this.checkLength==0){
                this.$toast.show('没有选中的商品',1500)
            }else{
                this.$router.replace({path:'/confirmpay',query:{tit:this.totalPrice}});
                
            }
        }
    }
}
</script>

<style scoped>
    .bottom-bar{
        height: 40px;
        background-color: #eee;
        position: fixed;
        bottom: 49px;
        left: 0;
        right: 0;
        z-index: 11;
        line-height: 40px;
        display: flex;
    }
    .check-content{
        display: flex;
        align-items: center;
        margin-left: 10px;
        width: 70px;
    }
    .check-button{
        width: 20px;
        height: 20px;
        line-height: 20px;
        margin-right: 5px;
    }
    .price{
        margin-left: 20px;
        flex: 1;
    }

    .calculate{
        width: 90px;
        background-color: red;
        color: #ffffff;
        text-align: center;
    }
</style>