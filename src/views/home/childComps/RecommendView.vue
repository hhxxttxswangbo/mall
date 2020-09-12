<template>
  <div class="recommend">
    <!-- 遍历得到所有数据 -->
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <!-- 图片 -->
      <!-- 注意加冒号 -->
      <a :href="item.link">
        <img :src="item.image" alt />
        <!-- 图片下面的文字 -->
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  //props接收父组件数据
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.recommend {
  display: flex;
  width: 100%;
  text-align: center;
  font-size: 12px;

  padding: 10px 0 20px;
  border-bottom: 10px solid #eee;
}

.recommend-item {
  flex: 1;
}

.recommend-item img {
  width: 70px;
  height: 70px;
  margin-bottom: 10px;
}
</style>
