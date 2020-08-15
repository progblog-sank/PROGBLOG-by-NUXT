<template>
  <div class="flow-block">
    <div class="flow-block-inner">
      <ScrollAction>
        <div class="heading-2">
          <h2 class="head"><span class="hdg">ウェブ制作の流れ</span></h2>
        </div>
        <div class="flow-desc">
          <ol class="flow-list">
            <li v-on:mouseover="flowOn01">ご相談／お問合せ</li>
            <li v-on:mouseover="flowOn02">ヒアリング</li>
            <li v-on:mouseover="flowOn03">サイト構成／お見積りの提出</li>
            <li v-on:mouseover="flowOn04">ご契約</li>
            <li v-on:mouseover="flowOn05">デザインのご提案／決定</li>
            <li v-on:mouseover="flowOn06">実制作／サイト構築</li>
            <li v-on:mouseover="flowOn07">動作確認</li>
            <li v-on:mouseover="flowOn08">公開</li>
          </ol>
          <div class="flow-figure">
            <p class="flow-figure-title" v-html="flowTitle"></p>
            <p class="flow-figure-text" v-html="flowText"></p>
          </div>
        </div>
      </ScrollAction>
      </div>
    <div class="fix-desc">
      <p>気になる過程をクリックしてみてください。</p>
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
.flow-block {
  // background-color: #EFEFEF;
  position: relative;
  // padding-bottom: 40px;
  &-inner {
    max-width: 1040px;
    width: 100%;
    margin:0 auto;
    padding: 60px 20px;
    .flow-desc {
      display: flex;
      margin-top: 40px;
      // align-items: baseline;
      justify-content: space-between;
      @include mq(medium) {
        flex-direction: column-reverse;
      }
      .flow-list {
        counter-reset: number 0;
        @include mq(medium) {
          margin-top: 20px;
          padding-left: 1.5em;
        }
        li {
          position: relative;
          margin-top: .5em;
          padding-left: 2em;
          &:nth-of-type(2) {
            &:after {
              content: 'ここまで無料';
              position: absolute;
              height: 96px;
              top: 50%;
              right: -65px;
              color: #FF2A02;
              transform: translate(-50%, -50%);
              writing-mode: vertical-rl;
              @include mq(medium) {
                left: -1.5em;
                right: auto;
              }
            }
          }
          &:nth-of-type(3) {
            &:after {
              content: '';
              position: absolute;
              width: 110%;
              height: 110px;
              bottom: -5px;
              left: -5px;
              border: 1px dashed #FF2A02;
              background-color: #FFB8AB;
              z-index: -1;
              @include mq(medium) {
                width: 100%;
              }
            }
          }
          &:before {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            counter-increment: number 1;
            content: counter(number) " ";
            top: 50%;
            left: 0;
            width: 1.5em;
            height: 1.5em;
            border-radius: 50%;
            background-color: #000000;
            color: #ffffff;
            transform: translate(0, -50%);
            transition-duration: .5s;
          }
        }
      }
      .flow-figure {
        max-width: 500px;
        width: 50%;
        background-color: #EFEFEF;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        @include mq(medium) {
          max-width: inherit;
          width: 100%;
        }
        &-title {
          display: inline-block;
          padding: 10px;
          background-color: #747474;
          color: #ffffff;
        }
        &-text {
          padding: 20px;
        }
      }
    }
  }
  .fix-desc {
    display: none;
    @include mq(medium) {
      display: block;
      position: sticky;
      // bottom
      width: 100%;
      padding: 10px;
      background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
 background-blend-mode: multiply,multiply;
      bottom: 0;
      left: 0;
      // color: #ffffff;
      font-size: 12px;
      text-align: center;
      z-index: 1;
    }
  }

}
</style>
<script>
export default {
  data () {
    return {
      'flowTitle': 'ご相談／お問合せ',
      'flowText': 'まずは「お問合せフォーム」からご連絡ください。詳細はヒアリングでお伺いしますが、お問合せ時点で作りたいサイトの形が決まっているようでしたら、その旨をご記入いただけますとスムーズに進行することができます。'
    }
  },
  methods: {
    flowOn01: function(){
      this.flowTitle = 'ご相談／お問合せ',
      this.flowText = 'まずは「お問合せフォーム」からご連絡ください。詳細はヒアリングでお伺いしますが、お問合せ時点で作りたいサイトの形が決まっているようでしたら、その旨をご記入いただけますとスムーズに進行することができます。'
    },
    flowOn02: function(){
      this.flowTitle = 'ヒアリング',
      this.flowText = 'お客差がどのようなサイトを欲しがっているのかお伺いさせていただきます。「とにかく最速でで欲しい」「予算は○○円まで」「ブログ機能をつけてほしい」など、やりたいことをお聞かせください。参考サイトなどがあればご提示ください。'
    },
    flowOn03: function(){
      this.flowTitle = 'サイト構成／お見積りの提出',
      this.flowText = 'ヒアリングさせていただきました内容をもとにお客様に最適なサイト構造をご提示させていただきます。合わせてお見積りもご提出させていただきます。'
    },
    flowOn04: function(){
      this.flowTitle = 'ご契約',
      this.flowText = 'ありがとうございます。ここから費用が発生いたします。お支払い関係のご相談はお気軽にお申し付けください。'
    },
    flowOn05: function(){
      this.flowTitle = 'デザインのご提案／決定',
      this.flowText = 'Photoshop、XDを用いてサイトのデザインを作成させていただきます。まずはトップページをご提出させていただきます。気に入らない点は何なりとお申し付けください。トップページのデザインが完了次第、下層ページのデザインをさせていただきます。こちらにつきましても気に入らない点は何なりとお申し付けください'
    },
    flowOn06: function(){
      this.flowTitle = '実制作／サイト構築',
      this.flowText = 'デザインが完了し、お客様にご納得いただけましたら、コーティングに移らせていただきます。サイトの動きなどもこちらで作成させていただきます。'
    },
    flowOn07: function(){
      this.flowTitle = '動作確認',
      this.flowText = 'テストサイトでお客様にご確認いただきます。'
    },
    flowOn08: function(){
      this.flowTitle = '公開',
      this.flowText = 'ありがとうございました。公開し、契約終了になります。運用につきましてはご相談ください'
    }
  }
}
</script>