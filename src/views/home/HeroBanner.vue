<script setup>
import imageMain from "@/assets/main.png";
</script>
<template>
  <div class="home-hero-banner container">
    <div class="home-hero-banner__top">
      <img :src="imageMain" />
      <div class="home-hero-banner__top-info">
        <p class="home-hero-banner__top-desc">「 雲林尋光 」主題創作徵件</p>
        <p class="home-hero-banner__top-title">【 找尋雲林亮點映像 】</p>
      </div>
    </div>
    <div class="home-hero-banner__bottom">
      <div class="home-hero-banner__bottom-line">
        <div class="home-hero-banner__bottom-border">先審後拍</div>
        <div class="home-hero-banner__bottom-date">111.07.04(一)17:00止</div>
      </div>
      <div class="home-hero-banner__bottom-line">
        <div class="home-hero-banner__bottom-space-text">
          <p
            v-for="(text, i) in '雲林縣111年公用頻道影片徵件活動'"
            v-text="text"
            :key="i"
          ></p>
        </div>
      </div>
      <div class="home-hero-banner__bottom-line">
        <div class="home-hero-banner__bottom-hr"></div>
      </div>
      <div class="home-hero-banner__bottom-line"></div>
    </div>
  </div>
</template>
<style lang="scss">
.home-hero-banner {
  &__top {
    background: -webkit-linear-gradient(45deg, $color-pink, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Noto Serif TC", serif;
    font-weight: 600;
    text-align-last: left;
    &-desc {
      margin-top: 20px;
      font-size: 46px;
      letter-spacing: 4px;
    }
    &-title {
      width: 100%;
      letter-spacing: 7.5px;
      font-size: 54px;
    }
  }
  &__bottom {
    font-family: "Noto Serif TC", serif;
    $width: 1000px;
    $height: 530px;
    width: 60%;
    margin-left: auto;
    color: #fff;
    &-line {
      display: flex;
    }
    &-border {
      padding: 2px 20px 6px;
      border: 3px solid #fff;
      font-family: "Noto Serif TC", serif;
      font-weight: 700;
      line-height: 1.2;
      display: inline-block;
      font-size: 40px;
      letter-spacing: 0.1em;
      white-space: nowrap;
    }
    &-date {
      white-space: nowrap;
      padding: 0 20px;
      font-weight: 700;
      line-height: 1.2;
      font-size: 36px;
      flex-wrap: nowrap;
      letter-spacing: 0.1em;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &-space-text {
      display: flex;
      width: 100%;
      justify-content: space-between;
      font-weight: 700;
      font-size: 36px;
    }
    &-hr {
      width: 100%;
      height: 2px;
      background-color: #fff;
    }
  }
}
</style>
