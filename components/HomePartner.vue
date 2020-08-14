<template>
<div class="partner-block">
  <ScrollAction>
    <div class="heading-2">
      <h2 class="head"><span class="hdg">制作会社様へ</span></h2>
    </div>
    <p class="partner-desc">コーディング代行、サイト制作、キャンペーンページ作成、承っております。<br>お気軽にご連絡ください。</p>
    <div class="partner-desc-denger">
      <p>お問合せご検討いただき、誠にありがとうございます。<br>最近、多くお問合せをいただくのですが、現在は副業でお仕事をさせていただいております。<br>そのため、平日の連絡は可能ですが、作業自体は夜に行わせていただきます。<br>ご連絡の際はその旨、確認いただけますと幸いでございます。</p>
    </div>
    <GlobalButton to="/contact">お気軽にご相談ください</GlobalButton>
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
.partner-block {
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 20px;
  .partner-desc {
    margin-top: 40px;
  }
  .partner-desc-denger {
    margin-top: 40px;
    padding: 20px;
    border-radius: 10px;
    background-color: #FFB8AB;
  }
}
</style>
<script>
export default {}
</script>