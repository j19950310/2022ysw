<template>
  <div class="home-video-play">
    <div class="home-video-play__container container">
      <iframe
        src="https://www.youtube.com/embed/dqoBH1i7T4A?controls=0"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  </div>
</template>
<style lang="scss">
.home-video-play {
  background: linear-gradient(
    90deg,
    $color-pink,
    mix($color-pink, #ffffff, 10%),
    $color-pink
  );
  padding: 100px 0;
  &__container {
    position: relative;
    &:after {
      content: "";
      display: block;
      padding-top: 65%;
    }
    iframe {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
