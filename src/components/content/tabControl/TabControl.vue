<template>
  <div class="tab-control">
    <!-- itemClick(index)需要获取索引号监听哪个被点击 -->
    <!-- :class="{active:index===currentIndex}"动态获取当前点击的那个变色 -->
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-control-item"
      :class="{active:index===currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      //用currentIndex记录当前谁处于选择状态
      currentIndex: 0,
    };
  },
  methods: {
    //需要获取索引号
    itemClick(index) {
      //判断谁处于点击状态，使点击状态的那个变色
      this.currentIndex = index;
      //内部往外传事件，由TabControl传向Home,子传父，自定义事件
      this.$emit("tabClick", index);
    },
  },
};
</script>

<style>
.tab-control {
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item span {
  padding: 5px;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 3px solid var(--color-tint);
}
</style>