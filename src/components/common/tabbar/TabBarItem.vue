<template>
  <div class="tab-bar-item">
    {{ itemContent }}
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    itemContent:{
      type:String,
      default:"default"
    }
  }
};
</script>

<style>



</style>