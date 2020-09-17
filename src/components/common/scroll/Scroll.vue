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
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  //mounted生命周期函数
  mounted() {
    //1.创建BS对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType,
    });
    //2.监听滚动的位置
    this.scroll.on("scroll", (position) => {
      this.$emit('scroll',position)
    });
  },

  methods: {
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>

<style>
</style>