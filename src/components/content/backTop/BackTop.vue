<!--
 * @Author: your name
 * @Date: 2019-12-24 22:39:35
 * @LastEditTime: 2020-03-13 01:42:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\components\content\goods\GoodsList.vue
 -->
<template>
    <div class="back-top">
      <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "BackTop"       
    }
</script>

<style scoped>
    .back-top{
        position: fixed;
        right: 8px;
        bottom: 55px;
    }

    .back-top img{
        width: 43px;
        height: 43px;
    }
</style>
