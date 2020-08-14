<template>
  <div class="contact-block">
    <div class="contact-block-inner">
      <div class="heading-2">
        <h2 class="head"><span class="hdg">お問合せ</span></h2>
      </div>
      <div class="contact-block-inner-flex">
          <p class="contact-block-inner-desc">大きすぎないウェブ制作。<br>フリーランスの柔軟さ、ちょうどよさが、お力になれるかもしれません。<br>些細なことでもお気軽にご相談ください。</p>
          <div class="contact-block-inner-button">
            <nuxt-link to="/contact">
            <p class="button-title">ご相談、お問い合わせ</p>
            <p class="button-text">まずはメールで相談や見積り依頼をしたいという方向けに、メールでのお問い合わせを承っております。こちらのフォームからお問い合わせください。</p>
            </nuxt-link>
          </div>
        </div>
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
.contact-block {
  position: relative;
  background-image: url("~@/assets/img/contact-fix.jpg");
  background-size: cover;
  @include mq(small) {
    height: auto;
  }
  &-inner {
    max-width: 1040px;
    width: 100%;
    margin:0 auto;
    padding: 40px 20px;
    .heading-2 {
      .head {
        .hdg {
          font-size: 30px;
          color: #ffffff;
        }
      }
    }
    &-flex {
      display: flex;
      @include mq(medium) {
        flex-direction: column;
      }
    }
    &-desc {
      margin-top: 20px;
      margin-right: 20px;
      color: #ffffff;
    }
    &-button {
      width: 50%;
      box-shadow: 0 0 5px rgb(255, 255, 255);
      background-color: #ffffff;
      text-align: center;
      transition: .3s;
      &:hover {
        border-radius: 30px;
        transition: .3s;
      }
      @include mq(medium) {
        width: 100%;
        margin-top: 20px;
      }
      a {
        padding: 30px 20px 20px;
      }
      .button-title {
        display: inline-block;
        position: relative;
        font-size: 20px;
        // text-align: center;
        font-weight: bold;
        &:before {
          content: '';
          height: 23px;
          width: 23px;
          position: absolute;
          top: 50%;
          left: -1em;
          background-image: url("~@/assets/img/contact-icon.svg");
          transform: translate(-50%, -50%);
        }
      }
      .button-text {
        margin-top: 20px;
        @include mq(small) {
          .pc-only {
            display: none;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  data: function() {
    return { }
  }
}
</script>

