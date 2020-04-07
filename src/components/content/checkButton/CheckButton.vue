<!--
 * @Author: your name
 * @Date: 2020-03-25 02:40:31
 * @LastEditTime: 2020-03-25 02:54:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\content\checkButton\CheckButton.vue
 -->
<template>
    <div class="check-button" :class="{check:isChecked}">
        <img src="~assets/img/cart/tick.svg" alt="">
    </div>
</template>

<script>
export default {
    name: "CheckButton",
    props:{
        isChecked:{
            type: Boolean,
            default: false
        }

    }
}
</script>

<style scoped>
    .check-button{
        border-radius: 50%;
        border: 2px solid #aaa;
    }
    .check{
        background-color: red;
        border-color: red;
    }
</style>