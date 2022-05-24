<script setup>
import imageMain from "@/assets/main.png";
import imageCompany from "@/assets/company.png";
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
      <div class="home-hero-banner__bottom-line">
        <div class="home-hero-banner__bottom-price">
          <p v-for="(text, i) in '總獎金35萬'" v-text="text" :key="i"></p>
        </div>
      </div>
      <div class="home-hero-banner__bottom-line">
        <div class="home-hero-banner__bottom-copyright">
          <p>主辦單位 | 雲林縣政府新聞處</p>
          <img width="70" :src="imageCompany" alt="" />
          <p>承辦單位 | 貓草影像有限公司</p>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home-hero-banner {
  $pink: #b49b92;
  padding-top: 100px;
  padding-bottom: 100px;
  &__top {
    padding: 40px 0;
    background: -webkit-linear-gradient(45deg, $pink, #fff);
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
    padding: 40px 0;
    font-family: "Noto Serif TC", serif;
    width: 680px;
    max-width: 100%;
    margin-left: auto;
    color: #fff;
    &-line {
      display: flex;
      padding: 4px 0;
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
      height: 3px;
      background-color: #fff;
    }
    &-price {
      display: flex;
      width: 100%;
      justify-content: space-between;
      line-height: 1.2;
      font-weight: 700;
      font-size: 100px;
      background: -webkit-linear-gradient(45deg, $pink, #fff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &-copyright {
      width: 100%;
      display: flex;
      font-weight: 700;
      font-size: 20px;
      align-items: center;
      justify-content: space-between;
      letter-spacing: 0.1em;
      & > * {
        flex: 0 0 auto;
        white-space: nowrap;
      }
    }
  }
}
</style>
