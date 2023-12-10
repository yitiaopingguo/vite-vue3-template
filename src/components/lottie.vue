<template>
  <div :id="id" class="fire" :style="{'width':width+'px','height':height+'px'}"></div>
</template>

<script>
import lottie from "lottie-web";
export default {
  name: "HelloWorld",
  props: {
    id: String,
    width:Number,
    height:Number
  },
  data() {
    return {};
  },
  mounted() {
    this.initLottie(this.id);
  },
  methods: {
    initLottie(id) {
      lottie.loadAnimation({
        container: document.getElementById(id),
        renderer: "svg", // 渲染方式：svg、canvas
        loop: true, // 循环播放，默认：false
        autoplay: true, //自动播放 ，默认：true
        path: "https://assets5.lottiefiles.com/packages/lf20_yppp9lxb.json", // json 路径
      });
    },
  },
};
</script>

<style scoped>
.fire {
  display: inline-block;
}
</style>
