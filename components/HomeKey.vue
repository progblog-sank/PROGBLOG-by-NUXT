<template>
<div class="key-visual">
  <div class="key-visual-inner">
    <h1 class="haeding-1"><span>お客様のニーズに応える</span><br>神奈川在住<br>フリーのウェブエンジニア</h1>
    <!-- <div class="global-button">
      <nuxt-link to="/contact">お気軽にご相談ください</nuxt-link>
    </div> -->
    <GlobalButton to="/contact">お気軽にご相談ください</GlobalButton>
    <p class="hello">従来型、wordpress、モダンサイト<br>どんなサイトでもお任せください。<br>お客様に最適なサイトをヒアリングうえ、<br>ご提案させていただきます。</p>
  </div> 
</div>
</template>
<style lang="scss" scoped >
@mixin mq($breakpoint: medium) {
  @if $breakpoint == xsmall {
    @media screen and (max-width: 320px) {
      @content;
    }
  } @else if $breakpoint == small {
    @media screen and (max-width: 480px) {
      @content;
    }
  } @else if $breakpoint == medium {
    @media screen and (max-width: 768px) {
      @content;
    }
  } @else if $breakpoint == large {
    @media screen and (max-width: 1000px) {
      @content;
    }
  }
}

.key-visual {
  position: relative;
  height: 60vh;
  // padding-top: calc(100% * 600 / 1920);
  background-image: url("~@/assets/img/k-mv.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  &-inner {
    max-width: 1040px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    .haeding-1 {
      color: #ffffff;
      font-size: 28px;
      font-weight: normal;
      text-align: center;
      text-shadow: 0px 0px 6px #000000;
      span {
        font-size: 30px;
      }
      @include mq(small) {
        font-size: 22px;
        span {
          font-size: 24px;
        }
      }
    }
    .hello {
      color: #ffffff;
      text-align: center;
      text-shadow: 0px 0px 6px #000000;
    }
  }
}
</style>
<script>
export default {

}
</script>