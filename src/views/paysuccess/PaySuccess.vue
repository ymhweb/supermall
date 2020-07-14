<!--
 * @Author: your name
 * @Date: 2020-04-30 21:52:17
 * @LastEditTime: 2020-04-30 22:26:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\paysuccess\PaySuccess.vue
 -->
<template>
    <div class="content">
        <div class="pay-success">
            <div class="total-price">{{this.totalPrice}}</div>
            <div class="success">支付成功</div>
            <div class="finish"><button @click="finishClick">完成</button></div>
        </div>
    </div>
</template>

<script>
export default {
    name:'PaySuccess',
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
        finishClick(){
            // console.log(1);
            this.$router.replace('/alreadybuy')
        }
    }
}
</script>>

<style scoped>
    .content{
        width: 100%;
        height: 620px;
        background-color: #c0c0c0;
    }
    .pay-success{
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
    .total-price{
        text-align: center;
        padding-top: 30px;
        font-size: 28px;
        font-weight: bold;
        color: #000;
    }
    .success{
        text-align: center;
        font-size: 34px;
        padding-top: 30px;
        color: #000;
    }
    .finish{
        margin-top: 40px;
        text-align: center;
    }
    button{
        width: 120px;
        height: 50px;
        background: green;
        color: #fff;
    }
</style>