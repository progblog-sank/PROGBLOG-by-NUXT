<template>
  <div class="lead-block">
    <p class="now-lead">ちょうどいいウェブ制作。</p>
    <div class="desc">
      <p>ウェブサイトがほしい理由はひとそれぞれ。</p>
      <p>「会社を立ち上げたので名刺代わりのコーポレートサイトを設立したい」<br>「個人でオリジナルデザインのネットショップを開設したい」<br>「サークルのメンバーでオウンドメディアを立ち上げたい」<br>「自分の意見を発表するブログがほしい」</p>
      <p>その思いを叶えるためには、<br>世の中のウェブ制作会社では少し敷居が高いかもしれません。</p>
      <p>そう思った時、<br>フリーランスに相談してみてください。</p>
    </div>
    <p class="next-lead">ちょうどいい提案、させてください。<span class="corp-name">PROGBLOG</span></p>
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
  .lead-block {
  max-width: 1040px;
  width: 100%;
  margin:0 auto;
  padding: 60px 20px;
  text-align: center;
  .now-lead {
    font-size: 30px;
    font-weight: bold;
    @include mq(small) {
      font-size: 24px;
    }
  }
  .desc {
    margin-top: 30px;
    p {
      &:nth-of-type(n + 2) {
        margin-top: 1em;
      }
    }
  }
  .next-lead {
    margin-top: 30px;
    font-size: 30px;
    font-weight: bold;
    @include mq(small) {
      font-size: 18px;
    }
    .corp-name {
      display: block;
      font-size: 16px;
      font-weight: normal;
    }
  }
}
</style>
<script>
export default {}
</script>