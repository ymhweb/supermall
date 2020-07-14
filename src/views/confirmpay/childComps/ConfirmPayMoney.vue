<!--
 * @Author: your name
 * @Date: 2020-04-28 23:00:09
 * @LastEditTime: 2020-04-30 21:56:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\confirmpay\childComps\ConfirmPayMoney.vue
 -->
<template>
  <div class="content">
    <div class="confirm-pay">
        <div class="pay">微信支付</div>
        <div class="money">{{this.totalPrice}}</div>
        <hr class="hr"/>
        <div class="pay-money"><span class="pay-methods">支付方式</span><span class="selection"><img class="png" src="../../../assets/img/money.png">零钱</span></div>
        <button class="sure-pay" @click="payClick">确认支付</button>
    </div>
  </div>  
</template>

<script>
export default {
    name:'ConfirmPayMoney',
    data(){
        return{
            totalPrice:null
        }
    },
    created(){
        this.totalPrice = this.$route.query.tit;
        // console.log(this.totalPrice);
        
    },
    methods:{
        payClick(){
            this.$router.replace({path:'/paysuccess',query:{tit:this.totalPrice}})
        }
    }
    
}
</script>

<style scoped>
    .content{
        width: 100%;
        height: 620px;
        background-color: #c0c0c0;
    }
    .confirm-pay{
        background: #fff;
        width: 250px;
        height: 250px;
        border: 0px solid #000;
        margin: auto;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 8px;
    }
    .pay{
        margin: 10px 0 0 0;
        text-align: center;
        font-size: 20px;
    }
    .money{
        text-align: center;
        font-size: 28px;
        padding-top: 10px;
        font-weight: bold;
        color: #000;
        padding-bottom: 20px;
    }
    .png{
        padding-top: 3px;
        width: 20px;
        height: 20px;
        padding-right: 3px;
    }
    hr{
        /* padding: 10px; */
        width: 80%;
        margin: auto;
    }
    .pay-money{
        padding-top: 10px;
        display: flow-root;
    }
    .pay-methods{
        /* text-align: left; */
        float: left;
    }
    .selection{
        float: right;
    }
    .sure-pay{
        width: 110px;
        height: 40px;
        position: absolute;
        bottom: 40px;
        left: 70px;
        background-color: green;
    }
</style>>