<template>
  <div class="main-content">
    <UnderlayerHaed>
      <template v-slot:underHead>BLOG</template>
    </UnderlayerHaed>
    <div class="l-content">
      <SecondHead>
        <template v-slot:secondHead>記事一覧</template>
      </SecondHead>
      <p class="intro" >広く、浅く、細やかに。技術ブログを続けていく。</p>
      <div class="blog-block">
        <div class="blog-block-list" v-for="(item, index) in items" :key="index">
          <nuxt-link :to="'blog/' + item.id">
            <p class="key-catch"> <img :src="item.key.url" alt=""></p>
            <div class="blog-info">
              <h3 class="blog-title">{{ item.title }}</h3>
              <div class="infomation">
                <p class="cat-stamp">{{ item.cat.name }}</p>
                <p class="time-stamp">公開日：{{ dateFormat(item.createdAt) }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from "axios";
export default {
  data () {
  return {
      meta: {
        title: 'BLOG',
        description: 'このページではweb制作フリーランスPROGBLOGのBLOGを紹介させていただきます',
        type: 'article',
        url: 'https://nuxt.progblog-web.com/about',
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
  },
  async asyncData() {
    const{data} = await axios.get(
      'https://nuxt-folio.microcms.io/api/v1/blog?limit=100',
      {
        headers: { 'X-API-KEY': '99195fd3-127a-41ac-ba25-514c7b97e7e2' },
      }
    );
    return {
      items:data.contents
    };
  },
  computed: {
    dateFormat () {
      return (date) => {
        const dateTimeFormat = new Intl.DateTimeFormat(
          'ja', { dateStyle: 'medium' }
        )
        return dateTimeFormat.format(new Date(date))
      }
    }
  }
};
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
.blog-block {
  display: flex;
  flex-flow: wrap;
  margin-top: 40px;
  &-list {
    width: calc((100% - 40px) /3);
    margin-right: 20px;
    // box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    transition: .5s;
    .key-catch {
      img {
        border-radius: 20px;
        border: 3px solid transparent;
        transition: .5s;
      }
    }
    &:hover {
      transition: .5s;
      .key-catch {
        img {
          border-radius: 20px;
          border: 3px solid #ff2a0269;
          transition: .5s;
        }
      }
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
    a {
      height: 100%;
    }
    .blog-info {
      padding: 10px 20px 20px 10px;
      .blog-desc {
        margin-top: 20px;
      }
      .infomation {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        font-size: 12px;
        .cat-stamp {
          padding: 0 10px;
          border-radius: 20px;
          background-color: #000000;
          color: #ffffff;
        }
      }
    }
  }
}

</style>