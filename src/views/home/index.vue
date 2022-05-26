<script setup>
import { ref, onMounted } from "vue";
import HomeSliderShow from "./SlideShow.vue";
import HomeNavigator from "./Navigator.vue";
import HomeHeroBanner from "./HeroBanner.vue";
import HomeVideoPlay from "./VideoPlay.vue";
import HomeInfo from "./Info.vue";
import { vBackgroundImage as vBg } from "@/plugin/directives";
import bgNoise from "@/assets/noise.png";
import bgNoiseLarge from "@/assets/noise-large.png";
import SlideShowImage1 from "@/assets/pixta_37279544_M.jpg";
import SlideShowImage2 from "@/assets/pixta_30723336_M.jpg";
import SlideShowImage3 from "@/assets/pixta_29821523_M.jpg";
import SlideShowImage4 from "@/assets/pixta_28112844_M.jpg";
const bgImage = ref(bgNoise);
onMounted(() => {
  const img = new Image();
  img.src = bgNoiseLarge;
  img.onload = () => {
    bgImage.value = bgNoiseLarge;
  };
});
</script>
<template>
  <div class="home">
    <div class="home-top">
      <div class="home__bg" v-bg="bgImage"></div>
      <!-- <HomeNavigator></HomeNavigator> -->
      <HomeHeroBanner></HomeHeroBanner>
      <HomeSliderShow
        :items="[
          SlideShowImage1,
          SlideShowImage2,
          SlideShowImage3,
          SlideShowImage4,
        ]"
      ></HomeSliderShow>
    </div>
    <!-- <HomeVideoPlay></HomeVideoPlay> -->
    <div class="home-bottom">
      <div class="home__bg" v-bg="bgImage"></div>
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
