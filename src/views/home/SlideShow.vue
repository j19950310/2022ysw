<script setup>
import { vBackgroundImage as vBg } from "@/plugin/directives";
defineProps({
  items: {
    type: Array,
    default() {
      return [];
    },
  },
});
</script>
<template>
  <div class="home-slide-show">
    <div class="home-slide-show__container">
      <div class="home-slide-show__wrapper">
        <div
          class="home-slide-show__item"
          v-for="(item, i) in items"
          :key="i"
          v-bg="item"
        ></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home-slide-show {
  padding: 100px 0;
  position: relative;
  width: 100%;
  overflow: hidden;
  &__container {
    @include media-breakpoint-down(md) {
      overflow-x: scroll;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  &__wrapper {
    display: flex;
    position: relative;
    width: 100%;
  }
  &__item {
    position: relative;
    flex: 1 1 200px;
    width: clamp(20%, 200px, 50%);
    clip-path: polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%);
    margin: 0 -2.5%;
    @include media-breakpoint-down(md) {
      flex: 0 0 200px;
      min-width: 200px;
    }
    &::before {
      content: "";
      display: block;
      padding-bottom: 54%;
    }
  }
}
</style>
