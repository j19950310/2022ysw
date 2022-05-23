<script setup>
import HomeSliderShow from "./SlideShow.vue";
import HomeNavigator from "./Navigator.vue";
import { vBackgroundImage as vBg } from "@/plugin/directives";
import bgNoise from "@/assets/noise.png";
import bgNoiseLarge from "@/assets/noise.png";
</script>
<template>
  <div class="home">
    <div class="home__bg" v-bg="bgNoise"></div>
    <HomeSliderShow
      :items="[
        'https://source.unsplash.com/random/1024x768',
        'https://source.unsplash.com/random/1024x768',
        'https://source.unsplash.com/random/1024x768',
        'https://source.unsplash.com/random/1024x768',
        'https://source.unsplash.com/random/1024x768',
      ]"
    ></HomeSliderShow>
    <HomeNavigator></HomeNavigator>
  </div>
</template>

<style lang="scss">
.home {
  width: 100%;
  position: relative;

  &__bg {
    position: absolute;
    top: -$header-height;
    left: 0;
    width: 100%;
    bottom: 0;
    opacity: 0.5;
  }
}
</style>
