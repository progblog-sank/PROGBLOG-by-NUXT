<template>
<div class="heading-2">
  <h2 class="head"><span class="hdg"><slot  name="secondHead"/> ．</span></h2>
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
.heading-2 {
  margin-bottom: 20px;
  .head {
    .hdg {
      font-size: 30px;
      @include mq(small) {
        font-size: 24px;
      }
    }
  }
}
</style>
<script>
// export default {
//   data: function() {
//     return { }
//   }
// }
</script>

