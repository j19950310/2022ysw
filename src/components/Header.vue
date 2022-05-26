<template>
  <div class="header">
    <div class="header__container container">
      <router-link class="header__link" to="/"> 首頁 </router-link>
      <a class="header__link" href="https://www.facebook.com/YunlinSW">
        最新消息
      </a>
      <router-link class="header__link -disable" to="/works">
        作品欣賞
      </router-link>
      <a
        class="header__link"
        target="_blank"
        href="https://forms.gle/AY6F7dF1nEcwov5D7"
      >
        線上報名
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: $header-height;
  color: #fff;

  @include text-header();
  @include media-breakpoint-down(sm) {
    white-space: nowrap;
  }
  &::before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
    background-color: rgb(1, 3, 21);
    opacity: 0.5;
  }
  &__container {
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
  }
  &__link {
    padding: $header-padding;
    &.-disable {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}
</style>
