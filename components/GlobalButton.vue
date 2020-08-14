<template>
  <div class="global-button">
    <nuxt-link v-bind="$attrs"><slot /> </nuxt-link>
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
.global-button {
  text-align: center;
  a {
    display: inline-block;
    margin: 40px 0;
    padding: 10px 20px;
    border-radius: 10px;
    background-color: #000000;
    color: #ffffff;
    text-align: center;
    box-shadow: 0px 0px 6px #000000;
    transition: .3s;
    &:hover {
      background-color: #ffffff;
      color: #000000;
      transition: .3s;
    }
    @include mq(small) {
      margin: 20px 0;
    }
  }
}
</style>
<script>
export default {}
</script>