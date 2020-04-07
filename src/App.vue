<!--
 * @Author: your name
 * @Date: 2019-12-19 20:26:40
 * @LastEditTime: 2020-03-17 01:26:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\App.vue
 -->
<template>
  <div id="app" class="wrapper">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";

export default {
  name: 'app',
  components: {
      MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
