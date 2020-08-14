<template>
<div>
  <MousePointer>
  <HederMenu />
    <nuxt />
  <GlobalContact />
  <FooterLine />
  </MousePointer>
</div>
</template>
<script>
</script>


<style lang="scss"  >
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
.main-content {
  padding-top: 114px;
  @include mq(medium) {
    padding-top: 92px;
  }
    .l-content {
    max-width: 1040px;
    width: 100%;
    margin: 60px auto 0;
    padding: 60px 20px;
    @include mq(medium) {
      margin-top: 0;
    }
  }
}
.heading-2 {
  .head {
    .hdg {
      font-size: 30px;
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
// ヘッダーメニューのカレント
.menu-item-list {
  .nuxt-link-active {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      width: 5px;
      height: 5px;
      bottom: 0;
      left: 50%;
      background-color: #FF2A02;
      border-radius: 50%;
      transform: translate(-50%, 100%);
    }
    @include mq(medium) {
      color: #FF2A02!important;
      &:before {
        content: none;
      }
    }
  }
  .top {
    .nuxt-link-active {
      &:before {
        content: none;
      }
    }
    .nuxt-link-exact-active {
      position: relative;
      &:before {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        bottom: 0;
        left: 50%;
        background-color: #FF2A02;
        border-radius: 50%;
        transform: translate(-50%, 100%);
      }
    }
  }
}
</style>
