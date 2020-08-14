<template>
  <div class="main-content">
    <UnderlayerHaed>
      <template v-slot:underHead>CONTACT</template>
    </UnderlayerHaed>
    <div class="l-content">
      <SecondHead>
        <template v-slot:secondHead>お問合せ</template>
      </SecondHead>
      <p class="intro" >「サイト制作」、「サイト運用」、「パートナーの募集」など下記フォームからお問合せください。</p>
      <div class="form-layout">
        <form method="POST"  data-netlify="true" action="/success.html">
          <input type="hidden" name="contact-form" value="contact" >
          <div class="name">
            <p class="name-info">お名前</p>
            <input class="write" type="text" name="name" required>
          </div>
          <div class="mail">
            <p class="mail-info">メールアドレス</p>
            <input class="write" type="email" name="mail" required>
          </div>
          <div class="content">
            <p class="content-info">お問合せ内容</p>
            <textarea class="write" name="content" cols="30" rows="10"></textarea>
          </div>
          <div class="submit">
            <button class="submit-buton " type="submit" name="button" value="お問合せ">お問合せ</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      meta: {
        title: 'CONTACT',
        description: 'このページはお問合せページになります。「サイト制作」、「サイト運用」、「パートナーの募集」など下記フォームからお問合せください。',
        type: 'article',
        url: 'https://example.com/test',
        image: 'https://example.com/img/ogp/test.jpg',
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
}</script>

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

.form-layout {
  max-width: 620px;
  margin: 40px auto 0;
  padding: 60px;
  background-color: #EFEFEF;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  @include mq(small) {
    padding: 60px 20px;
  }
  form {
    & > div {
      margin-top: 30px;
      &:first-of-type {
        margin-top: 0;
      }
      .write {
        width: 100%;
        margin-top: 15px;
        padding: 10px 20px;
        background-color: #ffffff;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        transition: .5s;
        &:focus {
          border: 1px solid #FF2A02;
          transition: .5s;
        }
      }
    }
    .submit {
      text-align: center;
      .submit-buton {
        padding: 10px 20px;
        background-color: #000000;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        color: #ffffff;
        transition: .3s;
        &:hover {
          background-color: #ffffff;
          color: #000000;
          transition: .3s;
        }
      }
    }
  }
}
</style>