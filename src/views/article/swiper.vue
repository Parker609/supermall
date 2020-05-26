<template>
  <div id="swiper">
    <!-- 我是一个轮播图，首先实现那种左右点击实现切换的轮播图。 -->
    <!-- 1.轮播图首先得有图 -->
    <div class="swiper">
      <div class="swiperitem" :style="{backgroundImage:imgAddr[0]}">1</div>
      <div class="swiperitem">2</div>
      <div class="swiperitem">3</div>
      <div class="swiperitem">4</div>
    </div>
    <div class="controler">
      <div @click="moveLeft" class="last"></div>
      <div @click="moveRight" class="next"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "swiper",
  data() {
    return {
      imgAddr: [
        "url(" + require("@/assets/img/1.jpg") + ")"
        // require("@/assets/img/1.jpg"),
        // require("@/assets/img/1.jpg"),
        // require("@/assets/img/1.jpg"),
      ]
    };
  },
  methods: {}
};
</script>

<style lang="less">
#swiper {
    margin: 30px;
    position: relative;
    height: 300px;
  .swiper {
    height: 300px;
    border: 1px solid #000;
    //   使用 white-space来控制inline级元素的换行，比方说文字。
    white-space: nowrap;
    overflow: hidden;
    .swiperitem {
      display: inline-block;
      height: 300px;
      width: 100%;
      border: 1px solid #000;
      background-image: "../../../assets/img/1.jpg";
    }
  }

  .controler {
    width: 100%;
    position: absolute;
    height: 100%;
    border: 1px solid #000;
    top: 0;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;

    .next,
    .last{
        height: 40px;
        width: 40px;
        border-radius: 50%;   
        border: 1px solid white;
        margin: 30px;
    }

  }
}
</style>