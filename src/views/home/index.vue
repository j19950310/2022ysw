<script setup>
import HomeSliderShow from "./SlideShow.vue";
import HomeNavigator from "./Navigator.vue";
import HomeHeroBanner from "./HeroBanner.vue";
import HomeVideoPlay from "./VideoPlay.vue";
import HomeInfo from "./Info.vue";
import { vBackgroundImage as vBg } from "@/plugin/directives";
import bgNoise from "@/assets/noise.png";
import bgNoiseLarge from "@/assets/noise.png";
</script>
<template>
  <div class="home">
    <div class="home-top">
      <div class="home__bg" v-bg="bgNoise"></div>
      <HomeSliderShow
        :items="[
          'https://source.unsplash.com/random/1024x768',
          'https://source.unsplash.com/random/1024x768',
          'https://source.unsplash.com/random/1024x768',
          'https://source.unsplash.com/random/1024x768',
        ]"
      ></HomeSliderShow>
      <HomeNavigator></HomeNavigator>
      <HomeHeroBanner></HomeHeroBanner>
    </div>
    <HomeVideoPlay></HomeVideoPlay>
    <div class="home-bottom">
      <div class="home__bg" v-bg="bgNoise"></div>
      <HomeInfo></HomeInfo>
    </div>
  </div>
</template>

<style lang="scss">
.home {
  width: 100%;
  position: relative;

  &-top,
  &-bottom {
    background-color: rgb(1, 3, 21);
    position: relative;
    & > * {
      position: relative;
      z-index: 1;
    }
  }
  .home-video-play {
    position: relative;
    z-index: 2;
  }
  &__bg {
    position: absolute;
    top: -$header-height;
    left: 0;
    width: 100%;
    bottom: 0;
    opacity: 0.5;
    pointer-events: none;
  }
}
</style>
