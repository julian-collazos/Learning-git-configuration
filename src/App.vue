<script setup>
  import MyHeader from '@/components/Header.vue'
</script>

<template>
  <div id = "app">

      <MyHeader></MyHeader>

    <body>
      <router-view></router-view>
    </body>
  </div>

</template>

<style scoped>
#app {
  /*background-color: #182a3f;*/
  min-height: 100vh;
}
</style>
