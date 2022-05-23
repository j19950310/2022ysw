<template>
  <div class="header">
    <div class="header__container container">
      <router-link class="header__link" to="/"> 首頁 </router-link>
      <router-link class="header__link" to="/news"> 最新消息 </router-link>
      <router-link class="header__link" to="/works"> 作品欣賞 </router-link>
      <a class="header__link"> 線上報名 </a>
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
  @include text-header();
  &__container {
    display: flex;
    justify-content: end;
    align-items: center;
    height: 100%;
  }
  &__link {
    padding: $header-padding;
  }
}
</style>
