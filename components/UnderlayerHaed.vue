<template>
<div class="heading-umder-1">
  <h1 class="head"><span class="hdg"><slot  name="underHead"/>.</span></h1>
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
.heading-umder-1 {
  position: relative;
  background-image: url("~@/assets/img/k-mv.jpg");
  background-size: cover;
  background-repeat: no-repeat;
    &:before {
    content: '';
    bottom: 20px;
    left: 50%;
    position: absolute;
    width: 1px;
    height: 20%;
    background-color: #ffffff;
  }
  .head {
    padding: 75px 20px;
    text-align: center;
    .hdg {
      color: #ffffff;
      font-size: 56px;
      letter-spacing: .15em;
      @include mq(small) {
        font-size: 40px;
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

