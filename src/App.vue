<script setup>
import Star from "@/components/Star.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Header></Header>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  background-color: rgb(1, 3, 21);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 200vh;
  padding-top: $header-height;
  & > * {
    flex: 1 1 100%;
  }
}
</style>
