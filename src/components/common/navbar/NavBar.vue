<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>

    <div class="mid">
      <slot name="mid"></slot>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="less" scoped>
.nav-bar{
    display: flex;
    line-height: 44px;
    text-align: center;
    .left,
    .right{
        width: 60px;
        // background-color: red;
    }
    .mid{
        flex: 1;
        // background-color: blue;
    }
}
</style>