<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>

    <!-- 使用main-tab-ba -->
    <main-tab-bar></main-tab-bar>
  </div>
</template>
<script>
//1.导入MainTabBar
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  components: {
    //2.注册MainTabBar
    MainTabBar,
  },
};
</script>
<style>
@import "assets/css/base.css";
</style>
