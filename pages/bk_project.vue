<template>
  <div class="main-content">
    <UnderlayerHaed>
      <template v-slot:underHead>PROJECT</template>
    </UnderlayerHaed>
    <div class="l-content">
      <SecondHead>
        <template v-slot:secondHead>実績一覧</template>
      </SecondHead>
      <p class="intro" >ここでは「VUE JS」を使用し作成した「サイト」・「ツール」を紹介していきます。</p>
      <div class="global-button">
        <a href="https://progblog-web.com/work/" target="_blank">wordpress制作などの実績はこちら</a>
      </div>
      <div class="project-block">
        <ul class="project-block-list">
          <li><nuxt-link to="/"><img src="~/assets/img/project/project-01.jpg"></nuxt-link></li>
          <li><nuxt-link to="/project"><img src="~/assets/img/project/project-none.svg"></nuxt-link></li>
          <li><nuxt-link to="/project"><img src="~/assets/img/project/project-none.svg"></nuxt-link></li>
          <li><nuxt-link to="/project"><img src="~/assets/img/project/project-none.svg"></nuxt-link></li>
          <li><nuxt-link to="/project"><img src="~/assets/img/project/project-none.svg"></nuxt-link></li>
          <li><nuxt-link to="/project"><img src="~/assets/img/project/project-none.svg"></nuxt-link></li>
          <li><nuxt-link to="/project"><img src="~/assets/img/project/project-none.svg"></nuxt-link></li>
          <li><nuxt-link to="/project"><img src="~/assets/img/project/project-none.svg"></nuxt-link></li>
          <li><nuxt-link to="/project"><img src="~/assets/img/project/project-none.svg"></nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      meta: {
        title: 'PROJECT',
        description: 'このページではweb制作フリーランスPROGBLOGがVUE JSを使用し作成したプロジェクトを紹介いたします。',
        type: 'article',
        url: 'https://nuxt.progblog-web.com/project',
      },
    }
  },
  head () {
    return {
      title: this.meta.title,
      meta: [
        { hid: 'description', name: 'description', content: this.meta.description },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
      ],
    }
  }
}
</script>

<style lang="scss">
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
  // margin-top: 40px;
  &-list {
    display: flex;
    flex-flow: wrap;
    li {
      // width: 33.33333%;
      margin-right: 20px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      transition: .5s;
      &:hover {
        //box-shadow: 3px 3px 6px #FF2A02;
        box-shadow: 3px 3px 6px #000000;
        transition: .5s;
      }
      &:nth-of-type(3n) {
        margin-right: 0;
      }
      &:nth-of-type(n + 4) {
        margin-top: 20px;
      }
      @include mq(medium) {
        width: calc((100% - 20px) / 2);
        margin-top: 0;
        &:nth-of-type(2n) {
          margin-right: 0;
        }
        &:nth-of-type(3n) {
          margin-right: auto;
        }
        &:nth-of-type(n + 3) {
          margin-top: 20px;
        }
      }
      @include mq(small) {
        width: 100%;
        margin-top: 0;
        margin-right: 0;
        &:nth-of-type(n + 2) {
          margin-top: 20px;
        }
      }

    }
  }
}

</style>