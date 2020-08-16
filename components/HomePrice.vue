<template>
  <div class="price-block">
    <div class="price-block-inner">
      <ScrollAction>
        <div class="heading-2">
          <h2 class="head"><span class="hdg">ウェブ制作にかかる費用</span></h2>
        </div>
        <div class="price-list">
          <div class="price-list-block">
            <div class="price-list-block-title">
              <div class="tilte-num"><span class="case">case<span class="num">01</span></span></div>
              <div class="tilte-name">WordPress<br>テーマカスタマイズ</div>
            </div>
            <div class="price-list-block-text">
              <p>WordPressの既存テーマデザインをそのまま踏襲したウェブサイト制作。<br>とにかくサイトが欲しい方におすすめ</p>
            </div>
            <div class="price-list-block-merit">
              <p class="merit">メリット</p>
              <ul class="price-list-block-merit-list">
                <li>自らカスタマイズも可能。</li>
                <li>ブログ標準装備</li>
                <li>7日以内の納品が可能で、費用も抑えることが可能。</li>
              </ul>
            </div>
            <div class="price-list-block-demerit">
              <p class="demerit">デメリット</p>
              <ul class="price-list-block-demerit-list">
                <li>既存テーマをもとにするので、他サイトとテイストが被ることもある</li>
              </ul>
            </div>
            <div class="price">
              <p class="price-num">￥20,000～</p>
            </div>
          </div>
          <div class="price-list-block">
            <div class="price-list-block-title">
              <div class="tilte-num"><span class="case">case<span class="num">02</span></span></div>
              <div class="tilte-name">HTMLサイト<br>静的サイト制作</div>
            </div>
            <div class="price-list-block-text">
              <p>HTML、CSSを使用しサイト制作。<br>更新頻度の低いサイトにおすすめ</p>
            </div>
            <div class="price-list-block-merit">
              <p class="merit">メリット</p>
              <ul class="price-list-block-merit-list">
                <li>無駄な機能がないので、表示速度が早い</li>
                <li>カスタマイズの幅が広い</li>
              </ul>
            </div>
            <div class="price-list-block-demerit">
              <p class="demerit">デメリット</p>
              <ul class="price-list-block-demerit-list">
                <li>簡単な更新などの運用も含め制作会社にお願いする必要がある</li>
              </ul>
            </div>
            <div class="price">
              <p class="price-num">￥50,000～</p>
            </div>
          </div>
          <div class="price-list-block">
            <div class="price-list-block-title">
              <div class="tilte-num"><span class="case">case<span class="num">03</span></span></div>
              <div class="tilte-name">WordPress<br>テーマ作成</div>
            </div>
            <div class="price-list-block-text">
              <p>お客様だけのWordPressテーマを作成<br>ブログ機能などをつけたく、オリジナルデザインが欲しい方におすすめ</p>
            </div>
            <div class="price-list-block-merit">
              <p class="merit">メリット</p>
              <ul class="price-list-block-merit-list">
                <li>他の人とデザインが被らない。</li>
                <li>ブログ標準装備</li>
                <li>カスタマイズの幅が広い</li>
              </ul>
            </div>
            <div class="price-list-block-demerit">
              <p class="demerit">デメリット</p>
              <ul class="price-list-block-demerit-list">
                <li>ブログ更新など簡単な修正はお客様でできるが、込み入った修正は制作会社にお願いする必要がある</li>
              </ul>
            </div>
            <div class="price">
              <p class="price-num">￥100,000～</p>
            </div>
          </div>
        </div>
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

</style>
<script>
export default {}
</script>