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
    height:Number,
    path:String
  },
  data() {
    return {};
  },
  mounted() {
    this.initLottie(this.id,this.path);
  },
  methods: {
    initLottie(id,path) {
      lottie.loadAnimation({
        container: document.getElementById(id),
        renderer: "svg", // 渲染方式：svg、canvas
        loop: true, // 循环播放，默认：false
        autoplay: true, //自动播放 ，默认：true
        path// json 路径
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
