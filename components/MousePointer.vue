<template>
<div class="pointer-area" @mousemove="onMousemove">
  <div class="cursor" id="cursor"></div>
  <div class="follower" id="follower"></div>
  <slot v-show="mouse"></slot>
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
.pointer-area {
  cursor: none;
  .cursor {
    pointer-events: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 8px;
    height: 8px;
    background: #000000;
    border-radius: 50%;
    transform: translate(0,0);
    z-index: 1000;
    // &.active-hover {
    //   top: -16px;
    //   left: -16px;
    //   width: 40px;
    //   height: 40px;
    //   background: #ff2a0269;
    //   transition: .25s;
    // }
  @include mq(medium) {
    display: none;
  }
  }
  .follower {
    pointer-events: none;
    position: fixed;
    top: -16px;
    left: -16px;
    width: 40px;
    height: 40px;
    // background: #ff2a0269;
    background: #00000047;
    border-radius: 50%;
    transform: translate(0,0);
    transition: transform 0.2s;
    transition-timing-function: ease-out;
    z-index: 999;
  @include mq(medium) {
    display: none;
  }
    &.active-hover {
      background: #ff2a0269;
      transition: .25s;
    }
  }
}
</style>
<script>
export default {
  mounted() {
  },
  methods: {
    onMousemove: function(e) {
      let follower = document.getElementById('follower');
      follower.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)'; 

      let cursor = document.getElementById('cursor');
      cursor.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)'; 

      const linkElem = document.querySelectorAll('a, button, .flow-list > li, .todo-list > li');
        for (let i = 0; i < linkElem.length; i++) {
          linkElem[i].addEventListener('mouseover', function (e) {
            cursor.classList.add('active-hover');
            follower.classList.add('active-hover');
          });
          linkElem[i].addEventListener('mouseout', function (e) {
            cursor.classList.remove('active-hover');
            follower.classList.remove('active-hover');
          });
        }
    }
  }
}
</script>