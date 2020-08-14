<template>
<footer>
  <div class="footer">
    <p class="copy"><small>Copyright PROGBLOG All rights reserved.</small></p>
  </div>
</footer>
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
footer {
  margin-top: 60px;
  padding: 20px;
  background-color: #000000;
  .footer {
    max-width: 1040px;
    width: 100%;
    margin: 0 auto;
    padding: 0 20px;
    .copy {
      font-size: 12px;
      color: #ffffff;
      text-align: right;
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

