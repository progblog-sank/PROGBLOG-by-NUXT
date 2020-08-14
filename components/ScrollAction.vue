<template>
  <div :class="{fadeIn: visible}">
    <!-- <div> -->
    <slot v-show="visible"></slot>
    <!-- <slot></slot> -->
  </div>
</template>
<style>
.fadeIn {
  animation: fadeIn 2s;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    /* transform: translateX(200px); */
  }
  80% {
    opacity: .8;
  }
  100% {
    opacity: 1;
    /* transform: translateX(0px); */
  }
}
</style>
<script>
  export default {
    data() {
      return {
        visible: false
      };
    },
    mounted() {
      window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
      window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
      handleScroll() {
        if (!this.visible) {
          var top = this.$el.getBoundingClientRect().top;
          this.visible = top < window.innerHeight + 100;
        }
      }
    }
  }
</script>