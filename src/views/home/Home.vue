<template>
  <div>
    <nav-bar class="home-navbar">
      <div slot="mid">购物街</div>
    </nav-bar>

    <swiper>
      <swiper-item v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import { getHomeMultidata } from "@/network/home";
import { Swiper, SwiperItem } from "@/components/common/swiper/index";

export default {
  name: "Home",
  components: {
    NavBar,
    Swiper,
    SwiperItem
  },

  data() {
    return {
      result: null,
      banner: [],
      recommend: []
    };
  },

  created() {
    getHomeMultidata().then(res => {
      // console.log(res);
      this.result = res;
      this.banner = res.data.data.banner.list;
      // console.log(this.banner);
      this.recommend = res.data.data.recommend.list;
    });
  }
};
</script>

<style>
.home-navbar {
  background-color: #ff8e97;
  color: white;
  font-weight: bold;
}

</style>