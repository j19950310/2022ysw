<script setup>
import { computed } from "vue";
import { vBackgroundImage as vBg } from "@/plugin/directives";
import starImage from "@/assets/star.png";
const prop = defineProps({
  width: {
    type: Number,
    default: 48,
  },
  height: {
    type: Number,
    default: 79,
  },
});
const scale = computed(() => {
  return prop.width / 48;
});
const style = computed(() => {
  return {
    width: `${prop.width * scale.value}px`,
    height: `${prop.height * scale.value}px`,
  };
});
</script>
<template>
  <div class="star" v-bg="starImage" :style="style"></div>
</template>
<style lang="scss">
.star {
  color: $color-pink;
}
</style>
