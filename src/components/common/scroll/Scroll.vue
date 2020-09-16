<template>
  <!-- 给div绑定一个ref="wrapper",在new BScroll中通过this.$refs.wrapper拿到这个元素-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  //mounted生命周期函数
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      
    });
  },
};
</script>

<style>
</style>