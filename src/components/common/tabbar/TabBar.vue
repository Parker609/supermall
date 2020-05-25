<template>
  <div>
    <div class="tabbar">
      <!-- <slot>这边是导航栏中需要的内容</slot> -->
      <slot>
        <div v-for="(content, index) in tabBarItemContents" :key="index">
          <tab-bar-item :itemContent = "content"></tab-bar-item>
          <!-- <tab-bar-item></tab-bar-item> -->
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import TabBarItem from "./TabBarItem";

export default {
  name: "TabBar",
  data() {
    return {
      tabBarItemContents: ["首页", "文章", "影视", "个人中心"]
    };
  },
  components: {
    TabBarItem
  }
};
</script>

<style>
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
}
</style>