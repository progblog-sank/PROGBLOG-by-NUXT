<template>
<div class="main-content">
  <div class="key-visual">
    <div class="key-visual-inner">
      <h1 class="haeding-1"><span>お客様のニーズに答える</span><br>神奈川在住<br>フリーのウェブエンジニア</h1>
      <div class="global-button">
        <nuxt-link to="/contact">お気軽にご相談ください</nuxt-link>
      </div>
      <p class="hello">従来型、wordpress、モダンサイト<br>どんなサイトでもお任せください。<br>お客様に最適なサイトをヒアリングうえ、<br>ご提案させていただきます。</p>
    </div> 
  </div>
  <div class="lead-block">
    <p class="now-lead">ちょうどいいウェブ制作。</p>
    <div class="desc">
      <p>ウェブサイトがほしい理由はひとそれぞれ。</p>
      <p>「会社を立ち上げたので名刺代わりのコーポレートサイトを設立したい」<br>「個人でオリジナルデザインのネットショップを開設したい」<br>「サークルのメンバーでオウンドメディアを立ち上げたい」<br>「自分の意見を発表するブログがほしい」</p>
      <p>その思いを叶えるためには、<br>世の中のウェブ制作会社では少し敷居が高いかもしれません。</p>
      <p>そう思った時、<br>フリーランスに相談してみてください。</p>
    </div>
    <p class="next-lead">ちょうどいい提案、させてください。<span class="corp-name">PROGBLOG</span></p>
  </div>
  <div class="todo-block">
    <div class="todo-block-inner">
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
    </div>
  </div>
  <div class="flow-block">
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
        <p class="flow-figure-title" v-html="flowTitle">気になる工程をcheck！</p>
        <p class="flow-figure-text" v-html="flowText">まずは「お問合せフォーム」からご連絡ください。詳細はヒアリングでお伺いしますが、お問合せ時点で作りたいサイトの形が決まっているようでしたら、その旨をご記入いただけますとスムーズに進行することができます。</p>
      </div>
    </div>
  </div>
  <div class="project-block">
    <div class="project-block-inner">
      <div class="heading-2">
        <h2 class="head"><span class="hdg">ウェブ制作実績のご紹介</span></h2>
      </div>
      <ul class="project-list">
        <li><img src="~/assets/img/project_01.png"></li>
        <li><img src="~/assets/img/project_02.png"></li>
        <li><img src="~/assets/img/project_03.png"></li>
      </ul>
      <div class="global-button">
        <nuxt-link to="/contact">事例・実績一覧はお問合せください</nuxt-link>
      </div>
    </div>
  </div>
  <div class="features-block">
    <div class="heading-2">
      <h2 class="head"><span class="hdg">ウェブ制作に選ばれる特長</span></h2>
    </div>
    <div class="features-list">
        <div class="features-list-box">
          <div class="heading-3">
            <h3 class="head"><span class="hdg">お客様のニーズに<br>合わせたご提案</span></h3>
          </div>
          <div class="features-desc">
            <p>ウェブサイトが欲しい理由はひとそれぞれ。また活用法もひとそれぞれ。名刺に記載するだけのホームページに費用をかける必要はございません。お客様のニーズに合わせたご提案をさせていただきます。</p>
          </div>
        </div>
        <div class="features-list-box">
          <div class="heading-3">
            <h3 class="head"><span class="hdg">制作からディレクションまで<br>すべて１人で対応</span></h3>
          </div>
          <div class="features-desc">
            <p>ウェブサイト制作が高額になる理由は人件費。「営業」「企画」「ディレクター」「デザイナー」「コーダー」「エンジニア」。これらの作業を１人で対応させていただきます。</p>
          </div>
        </div>
        <div class="features-list-box">
          <div class="heading-3">
            <h3 class="head"><span class="hdg">納得いくまで<br>修正をさせていただきます</span></h3>
          </div>
          <div class="features-desc">
            <p>納品後の修正は料金をいただきますが、「デザインの修正」「挙動の修正」などその都度、ご納得いただけるまで、修正をさせていただきます。</p>
          </div>
        </div>
    </div>
  </div>
  <div class="price-block">
    <div class="price-block-inner">
      <div class="heading-2">
        <h2 class="head"><span class="hdg">ウェブ制作にかかる費用</span></h2>
      </div>
      <div class="price-list">
        <div class="price-list-block">
          <div class="price-list-block-title">
            <div class="tilte-num"><span class="case">case<span class="num">01</span></span></div>
            <div class="tilte-name">wordpress<br>テーマカスタマイズ</div>
          </div>
          <div class="price-list-block-text">
            <p>wordpressの公式テーマデザインをそのまま踏襲したウェブサイト制作。</p>
          </div>
          <div class="price-list-block-merit">
            <p class="merit">メリット</p>
            <ul class="price-list-block-merit-list">
              <li>wordpress公認のため、安心安全。</li>
              <li>慣れてくると自らカスタマイズも可能に。</li>
              <li>7日以内の納品が可能で、費用も抑えることが可能。</li>
            </ul>
          </div>
          <div class="price-list-block-demerit">
            <p class="demerit">デメリット</p>
            <ul class="price-list-block-demerit-list">
              <li>wordpress公認のため、安心安全。</li>
              <li>慣れてくると自らカスタマイズも可能に。</li>
              <li>7日以内の納品が可能で、費用も抑えることが可能。</li>
            </ul>
          </div>
          <div class="price">
            <p class="price-num">￥20,000～</p>
          </div>
        </div>
        <div class="price-list-block">
          <div class="price-list-block-title">
            <div class="tilte-num"><span class="case">case<span class="num">02</span></span></div>
            <div class="tilte-name">wordpress<br>テーマカスタマイズ</div>
          </div>
          <div class="price-list-block-text">
            <p>wordpressの公式テーマデザインをそのまま踏襲したウェブサイト制作。</p>
          </div>
          <div class="price-list-block-merit">
            <p class="merit">メリット</p>
            <ul class="price-list-block-merit-list">
              <li>wordpress公認のため、安心安全。</li>
              <li>慣れてくると自らカスタマイズも可能に。</li>
              <li>7日以内の納品が可能で、費用も抑えることが可能。</li>
            </ul>
          </div>
          <div class="price-list-block-demerit">
            <p class="demerit">デメリット</p>
            <ul class="price-list-block-demerit-list">
              <li>wordpress公認のため、安心安全。</li>
              <li>慣れてくると自らカスタマイズも可能に。</li>
              <li>7日以内の納品が可能で、費用も抑えることが可能。</li>
            </ul>
          </div>
          <div class="price">
            <p class="price-num">￥20,000～</p>
          </div>
        </div>
        <div class="price-list-block">
          <div class="price-list-block-title">
            <div class="tilte-num"><span class="case">case<span class="num">03</span></span></div>
            <div class="tilte-name">wordpress<br>テーマカスタマイズ</div>
          </div>
          <div class="price-list-block-text">
            <p>wordpressの公式テーマデザインをそのまま踏襲したウェブサイト制作。</p>
          </div>
          <div class="price-list-block-merit">
            <p class="merit">メリット</p>
            <ul class="price-list-block-merit-list">
              <li>wordpress公認のため、安心安全。</li>
              <li>慣れてくると自らカスタマイズも可能に。</li>
              <li>7日以内の納品が可能で、費用も抑えることが可能。</li>
            </ul>
          </div>
          <div class="price-list-block-demerit">
            <p class="demerit">デメリット</p>
            <ul class="price-list-block-demerit-list">
              <li>wordpress公認のため、安心安全。</li>
              <li>慣れてくると自らカスタマイズも可能に。</li>
              <li>7日以内の納品が可能で、費用も抑えることが可能。</li>
            </ul>
          </div>
          <div class="price">
            <p class="price-num">￥20,000～</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="partner-block">
    <div class="heading-2">
      <h2 class="head"><span class="hdg">制作会社様へ</span></h2>
    </div>
    <p class="partner-desc">コーディング代行、サイト制作、キャンペーンページ作成、承っております。<br>お気軽にご連絡ください。</p>
    <div class="partner-desc-denger">
      <p>お問合せご検討いただき、誠にありがとうございます。<br>最近、多くお問合せをいただくのですが、現在は副業でお仕事をさせていただいております。<br>そのため、平日の連絡は可能ですが、作業自体は夜に行わせていただきます。<br>ご連絡の際はその旨、確認いただけますと幸いでございます。</p>
    </div>
    <div class="global-button">
      <nuxt-link to="/contact">お気軽にご相談ください</nuxt-link>
    </div>
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
.main-content {
  padding-top: 92px;
}
.heading-2 {
  .head {
    .hdg {
      font-size: 30px;
    }
  }
}
.key-visual {
  position: relative;
  height: 60vh;
  // padding-top: calc(100% * 600 / 1920);
  background-image: url("~@/assets/img/k-mv.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  &-inner {
    max-width: 1040px;
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: 0 auto;
    transform: translate(-50%, -50%);
    .haeding-1 {
      color: #ffffff;
      font-size: 28px;
      font-weight: normal;
      text-align: center;
      text-shadow: 0px 0px 6px #000000;
      span {
        font-size: 30px;
      }
      @include mq(small) {
        font-size: 22px;
        span {
          font-size: 24px;
        }
      }
    }
    .hello {
      color: #ffffff;
      text-align: center;
      text-shadow: 0px 0px 6px #000000;
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
  .lead-block {
  max-width: 1040px;
  width: 100%;
  margin:0 auto;
  padding: 60px 20px;
  text-align: center;
  .now-lead {
    font-size: 30px;
    font-weight: bold;
    @include mq(small) {
      font-size: 24px;
    }
  }
  .desc {
    margin-top: 30px;
    p {
      &:nth-of-type(n + 2) {
        margin-top: 1em;
      }
    }
  }
  .next-lead {
    margin-top: 30px;
    font-size: 30px;
    font-weight: bold;
    @include mq(small) {
      font-size: 18px;
    }
    .corp-name {
      display: block;
      font-size: 16px;
      font-weight: normal;
    }
  }
}
.todo-block {
  background-color: #EFEFEF;
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
}
.flow-block {
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
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
.features-block {
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 20px;
  .features-list {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    &-box {
      width: 33.3333%;
      position: relative;
      margin-right: 20px;
      padding: 35px 20px;
      box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
      &:before {
        content:'';
        width: 75%;
        height: 44px;
        position: absolute;
        top: 0;
        left: 50%;
        background-color: rgba(223, 223, 223, .5);
        transform: translate(-50%, -50%);
      }
      &:nth-of-type(1) {
        background-color: #F8E89A;
      }
      &:nth-of-type(2) {
        background-color: #B9DBF4;
      }
      &:nth-of-type(3) {
        background-color: #FFBDA3;
      }
      &:nth-of-type(3n) {
        margin-right: 0;
      }
      .heading-3 {
        position: relative;
        text-align: center;
        font-size: 20px;
        &:before {
          content: '';
          width: 60%;
          height: 1px;
          position: absolute;
          bottom: -15px;
          left: 50%;
          background-color: #ffffff;
          transform: translate(-50%, -50%);
        }
      }
      .features-desc {
        margin-top: 30px;
      }
    }
    @include mq(medium) {
      flex-direction: column;
      &-box {
        width: 100%;
        margin-right: 0;
        &:nth-of-type( n+ 2) {
          margin-top: 60px;
        }
      }
    }
  }
}
.price-block {
  background-image: url("~@/assets/img/price-fix.jpg");
  background-attachment: fixed;
  background-position: center;
  &-inner {
    max-width: 1040px;
    width: 100%;
    position: relative;
    margin:0 auto;
    padding: 60px 20px;
    .heading-2 .hdg {
      background-color: #ffffff;
    }
    .price-list {
      margin-top: 40px;
      &-block {
        position: relative;
        padding: 20px 20px 80px 20px;
        background-color: rgba(0, 0, 0, .6);
        color: #ffffff;
        &:nth-of-type(n + 2) {
          margin-top: 40px;
        }
        &-title {
          display: flex;
          align-items: center;
          .tilte-num {
            text-align: center;
            .case {
              display: block;
              position: relative;
              margin-right: 20px;
              &:before {
                content: '';
                height: 80%;
                width: 1px;
                position: absolute;
                top: 50%;
                right: -10px;
                background-color: #ffffff;
                transform: translate(0, -50%);
                z-index: 1;
              }
              .num {
                display: block;
                margin-top: -10px;
                font-family: 'Anton', sans-serif;
                font-size: 40px;
              }
            }
          }
        }
        &-text {
          margin-top: 30px;
        }
        &-merit {
          margin-top: 30px;
          .merit {
            display: inline-block;
            border-bottom: 1px solid #ffffff;
          }
          &-list {
            margin-top: 10px;
          }
        }
        &-demerit {
          margin-top: 20px;
          .demerit {
            display: inline-block;
            border-bottom: 1px solid #ffffff;
          }
          &-list {
            margin-top: 10px;
          }
        }
        .price {
          position: absolute;
          bottom: 10px;
          right: 40px;
          font-family: 'Anton', sans-serif;
          font-size: 40px;
          letter-spacing: .15em;
          @include mq(small) {
            right: 20px;
            font-size: 30px;
          }
        }
        &:nth-of-type(2n) {
          background-color: rgba(255, 255, 255, .6);
          color: #000000;
          .case {
            &:before {
              background-color: #000000;
            }
          }
          .merit {
            border-bottom: 1px solid #000000;
          }
          .demerit {
            border-bottom: 1px solid #000000;
          }
        }
      }
    }
  }
}
.partner-block {
  max-width: 1040px;
  width: 100%;
  margin: 0 auto;
  padding: 60px 20px;
  .partner-desc {
    margin-top: 40px;
  }
  .partner-desc-denger {
    margin-top: 40px;
    padding: 20px;
    border-radius: 10px;
    background-color: #FFB8AB;
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
      'text08': 'ラフ～カンプデザイン<br>コーディング代行',
      'flowTitle': '気になる工程をcheck！',
      'flowText:': 'まずは「お問合せフォーム」からご連絡ください。詳細はヒアリングでお伺いしますが、お問合せ時点で作りたいサイトの形が決まっているようでしたら、その旨をご記入いただけますとスムーズに進行することができます。'
    }
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
    flowOn01: function(){
      this.flowTitle = 'ご相談／お問合せ',
      this.flowText = 'まずは「お問合せフォーム」からご連絡ください。詳細はヒアリングでお伺いしますが、お問合せ時点で作りたいサイトの形が決まっているようでしたら、その旨をご記入いただけますとスムーズに進行することができます。'
    },
    flowOn02: function(){
      this.flowTitle = 'ヒアリング',
      this.flowText = 'bbbbbbbbb'
    },
    flowOn03: function(){
      this.flowTitle = 'サイト構成／お見積りの提出',
      this.flowText = 'aaaaaaaaaaaaaa'
    },
    flowOn04: function(){
      this.flowTitle = 'ご契約',
      this.flowText = 'aaaaaaaaaaaaaa'
    },
    flowOn05: function(){
      this.flowTitle = 'デザインのご提案／決定',
      this.flowText = 'aaaaaaaaaaaaaa'
    },
    flowOn06: function(){
      this.flowTitle = '実制作／サイト構築',
      this.flowText = 'aaaaaaaaaaaaaa'
    },
    flowOn07: function(){
      this.flowTitle = '動作確認',
      this.flowText = 'aaaaaaaaaaaaaa'
    },
    flowOn08: function(){
      this.flowTitle = '公開',
      this.flowText = 'aaaaaaaaaaaaaa'
    },
    mouseover08: function(){
      this.text08 = 'コーティングのリソースが<br>取れない制作会社様<br>ご相談ください!!'
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
    }
  }
}
</script>