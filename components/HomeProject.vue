<template>
<div class="project-block">
  <div class="project-block-inner">
    <ScrollAction>
      <div class="heading-2">
        <h2 class="head"><span class="hdg">ウェブ制作実績のご紹介</span></h2>
      </div>
      <ul class="project-list">
        <li><img src="~/assets/img/project_01.png"></li>
        <li><img src="~/assets/img/project_02.png"></li>
        <li><img src="~/assets/img/project_03.png"></li>
      </ul>
      <GlobalButton to="/contact">事例・実績一覧はお問合せください</GlobalButton>
    </ScrollAction>
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
.project-block {
  background-color: #EFEFEF;
  &-inner {
    max-width: 1040px;
    width: 100%;
    margin:0 auto;
    padding: 60px 20px;
    .project-list {
      display: flex;
      margin-top: 40px;
      margin-bottom: 40px;
      @include mq(small) {
        flex-direction: column;
      }
      li {
        width: 33.3%;
        margin-right: 20px;
        &:last-of-type {
          margin-right: 0;
        }
        @include mq(small) {
          width: 100%;
          margin-right: 0;
          &:nth-of-type(n +2) {
            margin-top: 20px;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {}
</script>