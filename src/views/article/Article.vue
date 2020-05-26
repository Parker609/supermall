<template>
  <div>
    <!-- 文章组件
    作为联系，在文章组件部分自己封装一个轮播图 -->
    

    <swiper></swiper>
  </div>
</template>

<script>
import swiper from "./swiper";

export default {
  name: "Article",
  data() {
    return {};
  },
  components: {swiper},
  methods: {}
};
</script>

<style>
</style>