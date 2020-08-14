<template>
  <div class="main-content">
    <UnderlayerHaed>
      <template v-slot:underHead>ABOUT</template>
    </UnderlayerHaed>
    <div class="l-content">
      <SecondHead>
        <template v-slot:secondHead>はじめに</template>
      </SecondHead>
      <p class="intro" >はじめまして、こんにちは。<br>神奈川在住のフリーウェブエンジニア「PROGBLOG」と申します。<br>ここでは私の「できること」「スキル」「経歴」などをご紹介させていただきます。</p>
      <SecondHead>
        <template v-slot:secondHead>できること</template>
      </SecondHead>
      <p class="do"><span class="text-title">ウェブ制作</span><br>ディレクション/デザイン/コーディング/プログラミング...</p>
      <SecondHead>
        <template v-slot:secondHead>好きなこと</template>
      </SecondHead>
      <p class="like">読書/kindle/旅行/温泉/旅館...</p>
      <SecondHead>
        <template v-slot:secondHead>年譜</template>
      </SecondHead>
      <div class="record-block">
        <table class="record-block-table">
          <tbody>
            <tr>
              <th>2016年3月</th>
              <td><span class="record-title">文学部日本文学文化学科 卒業</span><br>・卒業論文は内田百閒の「山高帽子」。</td>
            </tr>
            <tr>
              <th>2016年4月</th>
              <td><span class="record-title">都内のweb会社に就職</span><br>・制作部に配属される。</td>
            </tr>
            <tr>
              <th>2018年2月</th>
              <td><span class="record-title">退職</span><br>・新しい技術を学びに。</td>
            </tr>
            <tr>
              <th>2018年3月</th>
              <td><span class="record-title">転職</span><br>・広告営業～社内のweb制作まで。</td>
            </tr>
            <tr>
              <th>現在</th>
              <td>営業力を付けつつ、webの勉強を続ける。<br>フリーの限界も感じ、web業界への転職も考え始める。</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      meta: {
        title: 'ABOUT',
        description: 'このページではweb制作フリーランスPROGBLOGの「できること」「スキル」「経歴」などをご紹介させていただきます',
        type: 'article',
        url: 'https://example.com/about',
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
}
</script>

<style lang="scss">
.heading-2 {
  &:nth-of-type(n +2) {
    margin-top: 40px;
  }
}
.text-title {
  font-size: 14px;
  font-weight: bold;
}
.record-block {
  &-table {
    th, td {
      padding: 20px 10px;
      // vertical-align: middle;
    }
    th {
      position: relative;
      white-space: nowrap;
      &:before {
        content: "";
        position: absolute;
        top: 26px;
        right: 0;
        width: 6px;
        height: 6px;
        border-radius: 100%;
        background-color: #FF2A02;
        transform: translate(50%, 50%);
        z-index: 1;
      }
      &:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: 1px;
        height: 100%;
        border-radius: 100%;
        background-color: #707070;
      }
    }
    td {
      .record-title {
        font-size: 14px;
        font-weight: bold;
      }
    }
  }
}

</style>