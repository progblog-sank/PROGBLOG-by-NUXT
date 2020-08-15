<template>
  <div class="todo-block">
    <div class="todo-block-inner">
      <ScrollAction>
        <div class="heading-2">
          <h2 class="head"><span class="hdg">できること</span></h2>
        </div>
        <ul class="todo-list">
          <li v-on:mouseover="mouseover01" v-on:mouseleave="mouseleave01" v-html="text01"></li>
          <li v-on:mouseover="mouseover02" v-on:mouseleave="mouseleave02" v-html="text02"></li>
          <li v-on:mouseover="mouseover03" v-on:mouseleave="mouseleave03" v-html="text03"></li>
          <li v-on:mouseover="mouseover04" v-on:mouseleave="mouseleave04" v-html="text04"></li>
          <li v-on:mouseover="mouseover05" v-on:mouseleave="mouseleave05" v-html="text05"></li>
          <li v-on:mouseover="mouseover06" v-on:mouseleave="mouseleave06" v-html="text06"></li>
          <li v-on:mouseover="mouseover07" v-on:mouseleave="mouseleave07" v-html="text07"></li>
          <li v-on:mouseover="mouseover08" v-on:mouseleave="mouseleave08" v-html="text08"></li>
          <li><nuxt-link to="/contact">お気軽にご相談下さい</nuxt-link></li>
        </ul>
      </ScrollAction>
    </div>
    <div class="fix-desc">
      <p>気になる項目はクリックしてみてください。</p>
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
.todo-block {
  background-color: #EFEFEF;
  position: relative;
  &-inner {
    max-width: 1040px;
    width: 100%;
    margin:0 auto;
    padding: 60px 20px;
    .todo-list {
      display: flex;
      margin-top: 40px;
      flex-flow: wrap;
      @include mq(medium) {
        justify-content: center;
      }
      @include mq(small) {
        flex-direction: column;
      }
      li {
        display: flex;
        width: calc( ( 100% - 40px ) / 3 );
        max-height: 120px;
        margin-right: 20px;
        padding: 30px 20px;
        background-color: #ffffff;
        box-shadow: 0px 3px 6px rgba(0, 0, 0, .16);
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: bold;
        text-align: center;
        transition: .3s;
        &:hover {
          background-color: #000000;
          color: #ffffff;
          font-size: 16px;
          font-weight: normal;
          transition: .3s;
        }
        &:nth-of-type(3n) {
          margin-right: 0;
        }
        &:nth-of-type(n + 4) {
          margin-top: 20px;
        }
        &:last-of-type {
          padding: 0;
          a {
            display: flex;
            position: relative;
            height: 100%;
            width: 100%;
            align-items: center;
            justify-content: center;
            &:hover {
              color: #ffffff;
              &:before {
                border-color: transparent transparent #FF2A02 transparent;
                transition: .5s;
              }
            }
            &:before {
              content: '';
              position: absolute;
              width: 0;
              height: 0;
              bottom: 0;
              right: 0;
              border-style: solid;
              border-width: 0 0 26px 26px;
              border-color: transparent transparent #000000 transparent;
              transition: .5s;
            }
          }
        }
        @include mq(medium) {
          width: calc( ( 100% - 20px ) / 2 );
          margin-top: 0;
          margin-right: 0;
          &:nth-of-type(odd) {
            margin-right: 20px;
          }
          &:nth-of-type(n + 3) {
            margin-top: 20px;
          }
          a {
            min-height: 120px;
          }
        }
        @include mq(small) {
          width: 100%;
          margin-top: 0;
          margin-right: 0;
          &:nth-of-type(odd) {
            margin-right: 0;
          }
          &:nth-of-type(n + 2) {
            margin-top: 20px;
          }
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
      color: #ffffff;
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
      'text01': 'HTML/CSS/Javascript<br>使用した静的サイト!',
      'text02': 'wordpressの既存テーマを<br>カスタマイズした運用型サイト',
      'text03': 'wordpressのテーマを<br>新規作成した運用型サイト',
      'text04': 'Javascriptのフレームワークを<br>使用したモダンサイト',
      'text05': 'ウェブ広告の受け皿となる<br>キャンペーンページの作成',
      'text06': 'ウェブサイトの<br>運用、保守、点検',
      'text07': '1文字～<br>ウェブサイトの修正作業',
      'text08': 'ラフ～カンプデザイン<br>コーディング代行'
    };
  },
  methods: {
    mouseover01: function(){
      this.text01 = '更新頻度が高くなく<br>オリジナルサイトが欲しい方<br>ご相談ください'
    },
    mouseover02: function(){
      this.text02 = '簡単な運用は自分で行いたい<br>最速、最安値サイトが欲しい方<br>ご相談ください'
    },
    mouseover03: function(){
      this.text03 = '簡単な運用は自分で行いたい<br>オリジナルサイトが欲しい方<br>ご相談ください'
    },
    mouseover04: function(){
      this.text04 = '最新の技術で作られた<br>オリジナルサイトが欲しい方<br>ご相談ください'
    },
    mouseover05: function(){
      this.text05 = '制作会社にお願いしている<br>キャンペーンページが高い<br>ご相談ください'
    },
    mouseover06: function(){
      this.text06 = 'せっかくサイトを作ったのに<br>ぜんぜん更新してない<br>ご相談ください'
    },
    mouseover07: function(){
      this.text07 = 'サイト制作はしたが<br>修正費が高いという方<br>ご相談ください'
    },
    mouseover08: function(){
      this.text08 = 'コーティングのリソースが<br>取れない制作会社様<br>ご相談ください'
    },
    mouseleave01: function(){
      this.text01 = 'HTML/CSS/Javascript<br>使用した静的サイト'
    },
    mouseleave02: function(){
      this.text02 ='wordpressの既存テーマを<br>カスタマイズした運用型サイト'
    },
    mouseleave03: function(){
      this.text03 = 'wordpressのテーマを<br>新規作成した運用型サイト'
    },
    mouseleave04: function(){
      this.text04 ='Javascriptのフレームワークを<br>使用したモダンサイト'
    },
    mouseleave05: function(){
      this.text05 = 'ウェブ広告の受け皿となる<br>キャンペーンページの作成'
    },
    mouseleave06: function(){
      this.text06 ='ウェブサイトの<br>運用、保守、点検'
    },
    mouseleave07: function(){
      this.text07 ='1文字～<br>ウェブサイトの修正作業'
    },
    mouseleave08: function(){
      this.text08 ='ラフ～カンプデザイン<br>コーディング代行'
    },
  },
  // mounted() {
  //   const windowHight = window.innerHeight;
  //   const target = document.querySelectorAll('.todo-block');
  //   const onClass = 'js-on';
  // },
}
</script>