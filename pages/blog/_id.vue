<template>
  <div class="main-content">
    <!-- <UnderlayerHaed>
      <template v-slot:underHead>BLOG</template>
    </UnderlayerHaed> -->
    <div class="l-content">
      <div class="blog-detail">
        <div class="blog-head">
          <h2>{{ item.title }}</h2>
        </div>
        <p class="key-catch"> <img :src="item.key.url" alt=""></p>
        <div class="blog-detail-content" v-html="item.body"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    const blogLink = document.querySelectorAll('.blog-detail-content a');
    blogLink.forEach(function(links){
      links.insertAdjacentHTML('beforeend', '<i class="fas fa-link fa-fw"></i>');
      // const outLink = document.querySelectorAll('a[target="_blank"]')
    });
  },
  async asyncData({ params }) {
    const { data } = await axios.get(
      `https://nuxt-folio.microcms.io/api/v1/blog/${params.id}`,
      {
        headers: { 'X-API-KEY': '99195fd3-127a-41ac-ba25-514c7b97e7e2' }
      }
    );
    return {
      item: data
    };
  },
  data () {
    return {
      meta: {
        // title: this.item.title,
        // description: 'このページではweb制作フリーランスPROGBLOGのBLOGを紹介させていただきます',
        type: 'article',
        url: 'https://example.com/about',
        image: 'https://example.com/img/ogp/test.jpg',
      },
    }
  },
  head () {
    return {
      title: this.item.title,
      meta: [
        { hid: 'description', name: 'description', content: this.item.desc },
        { hid: 'og:type', property: 'og:type', content: this.meta.type },
        { hid: 'og:title', property: 'og:title', content: this.meta.title },
        { hid: 'og:description', property: 'og:description', content: this.meta.description },
        { hid: 'og:url', property: 'og:url', content: this.meta.url },
        { hid: 'og:image', property: 'og:image', content: this.meta.image },
      ],
    }
  },
};
</script>

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
.blog-detail {
  .blog-head {
    font-size: 30px;
    text-align: center;
    @include mq(small) {
      font-size: 24px;
    }
  }
  .key-catch {
    margin-top: 30px;
    text-align: center;
    img {
      width: 80%;
      border-radius: 20px;
      border: 3px solid #ff2a0269;
      @include mq(small) {
        width: 100%;
      }
    }
  }
  .blog-detail-content {
    margin-top: 60px;
    /deep/ h1 {
      margin: 2em 0 1em 0;
      font-size: 30px;
    }
    /deep/ h2 {
      margin: 2em 0 1em 0;
      border-bottom: 6px double #000000;
      font-size: 24px;
      
    }
    /deep/ h3 {
      margin: 2em 0 1em 0;
      background-color: #F3F3F3;
      border-radius: 20px;
      padding: 15px;
      font-size: 22px;
      // color: #ffffff;
    }
    /deep/ h4 {
      position: relative;
      margin: 2em 0 1em 0;
      padding-left: 1em;
      font-size: 20px;
      &::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        height: 100%;
        width: 5px;
        background-color: #000000;
        border-radius: 20px;
      }
    }
    /deep/ h5 {
      margin: 2em 0 1em 0;
      font-size: 20px;
    }
    /deep/ p {
      margin-top: 1em;
    }
    /deep/ strong {
      font-weight: bold;
    }
    /deep/ em {
      font-style: italic;
    }
    /deep/ ol {
      margin-top: 1em;
      counter-reset: number 0;
      li {
        position: relative;
        text-indent: -1em;
        padding-left: 1em;
        &:before {
          //position: absolute;
          counter-increment: number 1;
          content: counter(number) ". ";
        }
      }
    }
    /deep/ ul {
      margin-top: 1em;
      text-indent: -1em;
      padding-left: 1em;
      li {
        position: relative;
        &:before {
          content: '・';
        }
      }
    }
    /deep/ blockquote {
      padding: 20px;
      background-color: #EFEFEF;
      border-radius: 20px;
      font-style: italic;
    }
    /deep/ pre {
      padding: 20px;
      background-color: #000000;
      color: #ffffff;
      font-family: "SourceHanCodeJP-Regular";
      white-space: break-spaces;
    }
    /deep/ a {
      display: inline-block;
      color: #1A0DAB
    }
    @include mq(small) {
      margin-top: 30px;
      /deep/ h1 {
        margin: 1.5em 0 1em 0;
        font-size: 30px;
      }
      /deep/ h2 {
        margin: 1.5em 0 1em 0;
        font-size: 22px;
        
      }
      /deep/ h3 {
        margin: 1.5em 0 1em 0;
        font-size: 20px;
      }
      /deep/ h4 {
        margin: 1.5em 0 1em 0;
        font-size: 18px;
        &::before {
          width: 3px;
        }
      }
      /deep/ h5 {
        margin: 1.5em 0 1em 0;
        font-size: 18px;
      }
    }
  }
}
</style>