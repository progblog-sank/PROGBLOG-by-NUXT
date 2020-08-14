<template>
<header>
  <div class="header"  v-bind:class="{'is-fixed':scrollY > 0}">
    <div class="header-inner">
      <div class="logo">
        <nuxt-link to="/"><img src="~/assets/img/logo.svg" alt="PROGBLOG"></nuxt-link>
    </div>
    <div class="menu">
      <div class="menu-contact">
        <p class="contact-point">神奈川在住のフリーのウェブエンジニア</p>
        <p class="contact-button"><nuxt-link to="/contact"><font-awesome-icon icon = "mail-bulk" /><span class="fa-text">ご相談・お問合せ</span></nuxt-link></p>
      </div>
        <div class="menu-item" v-bind:class="{'is-active':menuDisplay}">
          <ul class="menu-item-list">
            <li v-on:click="togleClick" class="top"><nuxt-link to="/">HOME</nuxt-link></li>
            <li v-on:click="togleClick"><nuxt-link to="/about">ABOUT</nuxt-link></li>
            <li v-on:click="togleClick"><nuxt-link to="/blog">BLOG</nuxt-link></li>
            <li v-on:click="togleClick"><nuxt-link to="/project">PROJECT</nuxt-link></li>
            <li v-on:click="togleClick"><nuxt-link to="/contact">CONTACT</nuxt-link></li>
            <li v-on:click="togleClick"><a href="https://progblog-web.com/">WordPressサイト</a></li>
          </ul>
        </div>
        <div class="menu-togle" v-on:click="togleClick" v-bind:class="{'is-active':menuDisplay}"><span></span><span></span><span></span></div>
    </div>
  </div>
  </div>
</header>
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
.header {
  width: 100%;
  position: fixed;
  background-color: #ffffff;
  transition: .3s;
  z-index: 100;
  &.is-fixed {
    box-shadow: 0px 2px 10px 0px #4c4c4c;
    transition: .3s;
    .header-inner {
      @include mq(medium) {
        padding: 15px 1.5%;
        transition: .5s;
        .menu-item {
          top: 82px;
        }
      }
    }
  }
  .header-inner {
    max-width: 1040px;
    display: flex;
    position: relative;
    margin: 0 auto;
    padding: 0 20px 20px;
    align-items: center;
    justify-content: space-between;
    transition: .5s;
    @include mq(medium) {
      padding: 20px 10px;
    }
    .logo {
      width: 100%;
      max-width: 124px;
    }
    .menu {
      &-contact {
        display: flex;
        align-items: center;
        .contact-point {
          margin-right: 20px;
          color: #777777;
          font-size: 12px;
          @include mq(medium) {
            position: absolute;
            right: 80px;
          }
          @include mq(small) {
            display: none;
          }
        }
        .contact-button {
          a {
            padding: 10px;
            border-bottom-right-radius: 10px;
            border-bottom-left-radius: 10px;
            background-color: #000000;
            color: #ffffff;
            span {
              padding-left: 10px;
            }
          }
          @include mq(medium) {
            position: absolute;
            top: 50%;
            right: 60px;
            transform: translate(0, -50%);
            a {
              display: flex;
              width: 2em;
              height: 2em;
              border-radius: 50%;
              align-items: center;
              justify-content: center;
              span {
                display: none;
              }
            }
          }
          @include mq(small){
            right: 50px;
          }
        }
      }
      &-item {
        margin-top: 20px;
        @include mq(medium) {
          width: 100%;
          position: absolute;
          height: 100vh;
          top: 92px;
          left: 0;
          margin-top: 0;
          padding: 40px 20px;
          background-color: #000000;
          transform: translate(100vw, 0);
          transition: .5s;
          &-list {
            width: 100%;
            position: absolute;
            transform: translate(-200vw, 0);
            flex-direction: column;
            li {
              margin-right: 0!important;
              a {
                display: inline-block;
                padding: 10px 0;
                font-size: 24px;
                font-weight: bold;
                color: #ffffff;
                font-family: 'Anton', sans-serif;
                letter-spacing: .15em;
              }
            }
          }
          &.is-active {
            transform: translate(0, 0);
            transition: .5s;
            .menu-item-list {
              transform: translate(0, 0);
              transition: 1s;
            }
          }
        }
        &-list {
          display: flex;
          justify-content: flex-end;
          li {
            margin-right: 20px;
            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }
      @include mq(medium) {
        .menu-togle {
          position: absolute;
          width: 20px;
          height: 16px;
          right: 10px;
          top: 50%;
          transform: translate(0, -50%);
          span {
            position: absolute;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #000000;
            border-radius: 5px;
            transition-duration: .5s;
            &:nth-of-type(2) {
              top: 7px;
            }
            &:nth-of-type(3) {
              bottom: 0;
            }
          }
          &.is-active {
            span:nth-of-type(1) {
              top: 50%;
              transform: rotate(-45deg);
            }
            span:nth-of-type(2) {
              display: none;
            }
            span:nth-of-type(3) {
              top: 50%;
              transform: rotate(45deg);
            }
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
    return {
      menuDisplay: false,
      scrollY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    togleClick () {
      this.menuDisplay = !this.menuDisplay
    },
    handleScroll() {
      this.scrollY = window.scrollY
    }
  }
}
</script>

