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
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: $header-height;
  & > * {
    flex: 1 1 100%;
  }
  @include media-breakpoint-down(md) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    bottom: 0;
    overflow: auto;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
body {
  @include media-breakpoint-down(md) {
    overflow: hidden;
  }
}
</style>
