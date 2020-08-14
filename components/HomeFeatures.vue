<template>
<div class="features-block">
  <ScrollAction>
    <div class="heading-2">
      <h2 class="head"><span class="hdg">ウェブ制作に選ばれる特長</span></h2>
    </div>
    <div class="features-list">
        <div class="features-list-box">
          <div class="heading-3">
            <h3 class="head"><span class="hdg">お客様のニーズに<br>合わせたご提案</span></h3>
          </div>
          <div class="features-desc">
            <p>ウェブサイトが欲しい理由はひとそれぞれ。また活用法もひとそれぞれ。名刺に記載するだけのホームページに費用をかける必要はございません。お客様のニーズに合わせたご提案をさせていただきます。</p>
          </div>
        </div>
        <div class="features-list-box">
          <div class="heading-3">
            <h3 class="head"><span class="hdg">制作からディレクションまで<br>すべて１人で対応</span></h3>
          </div>
          <div class="features-desc">
            <p>ウェブサイト制作が高額になる理由は人件費。「営業」「企画」「ディレクター」「デザイナー」「コーダー」「エンジニア」。これらの作業を１人で対応させていただきます。</p>
          </div>
        </div>
        <div class="features-list-box">
          <div class="heading-3">
            <h3 class="head"><span class="hdg">納得いくまで<br>修正をさせていただきます</span></h3>
          </div>
          <div class="features-desc">
            <p>納品後の修正は料金をいただきますが、「デザインの修正」「挙動の修正」などその都度、ご納得いただけるまで、修正をさせていただきます。</p>
          </div>
        </div>
    </div>
  </ScrollAction>
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
.features-block {
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 20px;
  .features-list {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    &-box {
      width: 33.3333%;
      position: relative;
      margin-right: 20px;
      padding: 35px 20px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      &:before {
        content:'';
        width: 75%;
        height: 44px;
        position: absolute;
        top: 0;
        left: 50%;
        background-color: rgba(223, 223, 223, .5);
        transform: translate(-50%, -50%);
      }
      &:nth-of-type(1) {
        background-color: #F8E89A;
      }
      &:nth-of-type(2) {
        background-color: #B9DBF4;
      }
      &:nth-of-type(3) {
        background-color: #FFBDA3;
      }
      &:nth-of-type(3n) {
        margin-right: 0;
      }
      .heading-3 {
        position: relative;
        text-align: center;
        font-size: 20px;
        &:before {
          content: '';
          width: 60%;
          height: 1px;
          position: absolute;
          bottom: -15px;
          left: 50%;
          background-color: #ffffff;
          transform: translate(-50%, -50%);
        }
      }
      .features-desc {
        margin-top: 30px;
      }
    }
    @include mq(medium) {
      flex-direction: column;
      &-box {
        width: 100%;
        margin-right: 0;
        &:nth-of-type( n+ 2) {
          margin-top: 60px;
        }
      }
    }
  }
}
</style>
<script>
export default {}
</script>