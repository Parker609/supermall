<template>
  <div id="app">
    <router-view/>
    <TabBarMain/>  
  </div>
</template>

<script>
import TabBarMain from "@/components/content/TabBarMain"

export default {
  name: 'App',
  components: {
    TabBarMain,
  }
}
</script>

<style>

</style>
