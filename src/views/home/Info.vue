<template>
  <div class="home-info container">
    <div class="home-info__frame">
      <div class="home-info__frame-top"></div>
      <div class="home-info__frame-bottom"></div>
    </div>
    <div class="home-info__content">
      <div class="home-info__content-title">
        <h2>活動簡介</h2>
      </div>
      <div class="home-info__content-text">
        邀請全國對創作紀錄雲林影像懷有熱情者，以雲林為主軸，例如介紹人文、風景、
        歷史、農業、美食、旅遊、雲林事物、奇幻題材等各種元素，創作出相關的劇情、
        動畫、紀錄等類型影片作品。
      </div>

      <div class="home-info__content-title">
        <h2>徵件辦法</h2>
      </div>
      <div class="home-info__content-text">
        徵件活動採「先審查，後拍攝」。請參賽者應檢具報名表及短片製作企劃書，依下列
        各款項規定，依序具體填寫:
        1.片名、類型、創作理念、預定於本縣拍片之場景、預估製作期程。 2.
        故事大綱(含分場大綱[須註明拍攝場景]、人物介紹;動畫類需提分鏡
        圖，以及角色介紹和場景設定的相關圖文輔助說明)。 (一)第一階段:企劃書初審
        3. 影片製作團隊(個人)介紹(含製片人、導演、編劇、主要演員、藝術與
        技術人員等)，請另檢附;若劇本或是故事大綱改編自他人著作者，應檢
        附該著作及該著作之著作財產權人同意改編劇本之授權文件影本。 4.
        參賽者個人(團隊)過去實績說明(例如過去製作影片之經歷、得獎紀錄
        等，請盡量提供，以增加企劃案說服力)。 5. 對本縣行銷推廣之效益評估。
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.home-info {
  height: 1000px;
  position: relative;
  padding-top: 100px;
  padding-bottom: 100px;
  &__frame {
    pointer-events: none;
    position: absolute;
    top: 100px;
    bottom: 100px;
    left: 0;
    width: 100%;
    border: 4px solid #fff;
    &-top,
    &-bottom {
      position: absolute;
      width: 100%;
      left: 0;
      right: 0;
      &::before,
      &::after {
        content: "";
        display: block;
        position: absolute;
        width: 20px;
        height: 20px;
        background: $color-pink;
        border-radius: 50%;
      }
      &::before {
        transform: translate(-50%, -50%);
        left: 0;
      }
      &::after {
        transform: translate(50%, -50%);
        right: 0;
      }
    }
    &-top {
      top: -2px;
    }
    &-bottom {
      bottom: -2px;
    }
  }
  &__content {
    padding: 80px 160px;
    text-align: left;

    &-title {
      margin-bottom: 40px;
      width: 100%;
      border-radius: 0.8em;
      padding: 0.2em 0.8em;
      font-family: "Noto Serif TC", serif;
      font-weight: 900;
      line-height: 1.2;
      font-size: 36px;
      background: linear-gradient(
        -45deg,
        rgb(239, 207, 190),
        rgb(252, 245, 240)
      );
    }
    &-text {
      margin-bottom: 40px;
      font-family: "Noto Serif TC", serif;
      font-weight: 900;
      line-height: 1.6;
      font-size: 24px;
      background: -webkit-linear-gradient(45deg, $color-pink, #fff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
}
</style>
