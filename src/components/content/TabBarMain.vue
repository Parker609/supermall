<template>
  <div>
    <div class="tabbar">
      <div v-for="(content, index) in tabBarItemContents" :key="index">
        <router-link active-class="red" :to="content.link" tag="li">
          <tab-bar-item :itemContent="content.title"></tab-bar-item>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "TabBarMain",
  data() {
    return {
      tabBarItemContents: [
        { title: "首页", link: "/home" },
        { title: "文章", link: "/article" },
        { title: "影视", link: "/movies" },
        { title: "个人中心", link: "/file" }
      ],
      startBtnIndex: 0
    };
  },
  components: {
    TabBarItem
  },
  methods: {}
};
</script>

<style lang="less">
.tabbar {
  height: 39px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  /* width:  100%; */
  left: 0;
  right: 0;
  background-color: #f6f6f6;
  box-shadow: 0 1px 3px rgba(100, 100, 100, 0.1);
  font-size: 14px;
  .red{
    color:red
  }
  li{
    list-style: none;
  }
}
</style>