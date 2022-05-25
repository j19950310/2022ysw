<script setup>
import Star from "@/components/Star.vue";
import { useWindowScroll, useElementSize } from "@vueuse/core";
import { computed, ref } from "vue";
const { x, y } = useWindowScroll();
const progress = ref(0.05);
const progressNavigator = ref(null);
const starRef = ref(null);
const { width: navW, height: navH } = useElementSize(progressNavigator);
const { width: starW, height: starH } = useElementSize(starRef);

const stickyStyle = computed(() => {
  return {
    // position: y.value > 200 ? "fixed" : "relative",
    // top: 0,
    // left: y.value > 200 ? "50%" : 0,
    // transform: y.value > 200 ? "translate(-50%, 100px)" : "none",
    // zIndex: 1,
  };
});
const starStyle = computed(() => {
  return {
    transform: `translateX(${navW.value * progress.value - starW.value / 2}px)`,
  };
});
const startProgressStyle = computed(() => {
  return {
    transform: `scaleX(${
      progress.value - (starW.value + 24) / navW.value / 2
    })`,
  };
});
const endProgressStyle = computed(() => {
  return {
    transform: `scaleX(${
      1 - progress.value - (starW.value + 24) / navW.value / 2
    })`,
  };
});
</script>
<template>
  <div class="home-navigator container">
    <div
      class="home-navigator__wrapper"
      :style="stickyStyle"
      :class="y > 200 && 'container'"
    >
      <div class="home-navigator__items">
        <div class="home-navigator__item"><span>活動簡介</span></div>
        <div class="home-navigator__item"><span>報名資格</span></div>
        <div class="home-navigator__item"><span>徵件辦法</span></div>
        <div class="home-navigator__item"><span>入圍義務與須知</span></div>
        <div class="home-navigator__item"><span>聯絡方式</span></div>
      </div>
      <div class="home-navigator__progress" ref="progressNavigator">
        <div
          class="home-navigator__progress-start"
          :style="startProgressStyle"
        ></div>
        <div class="home-navigator__progress-head" :style="starStyle">
          <Star ref="starRef"></Star>
        </div>
        <div
          class="home-navigator__progress-end"
          :style="endProgressStyle"
        ></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home-navigator {
  position: relative;
  width: 100%;
  height: 200px;
  margin-bottom: 100px;
  &__wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  &__items {
    display: flex;
    position: relative;
    width: 100%;
    @include media-breakpoint-down(sm) {
      flex-wrap: wrap;
    }
  }
  &__item {
    @include text-header();
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin: 0 auto;
    flex: 0 1 150px;
    width: 150px;
    border-radius: 50%;
    transition: 0.3s ease;
    cursor: pointer;
    background: linear-gradient(-45deg, rgb(239, 207, 190), rgb(252, 245, 240));
    @include media-breakpoint-down(md) {
      flex: 0 1 120px;
      margin-bottom: 20px;
    }

    @include hover {
      transform: scale(1.1);
    }
    span {
      display: block;
      padding: 8px;
    }
    &:before {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
  }
  &__progress {
    --progress-height: 80px;
    position: relative;
    height: var(--progress-height, 80px);
    &-start,
    &-end {
      position: absolute;
      top: calc(var(--progress-height, 80px) / 2 - 1px);
      height: 2px;
      left: 0;
      width: 100%;
      background: linear-gradient(
        to right,
        rgb(239, 207, 190),
        rgb(252, 245, 240)
      );
    }
    &-start {
      transform-origin: center left;
    }
    &-end {
      transform-origin: center right;
    }
    &-head {
      left: 0;
      position: absolute;
      top: 0;
    }
  }
}
</style>
