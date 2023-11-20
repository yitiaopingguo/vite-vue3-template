<template>
  <div class="content">
    <div class="page">

    </div>
    <span class="typed-text"></span>
    <span id="box"></span>
  </div>
</template>

<script lang="js">
import Typed from 'typed.js';
import lottie from 'lottie-web'
export default {
    props: {
    },
    components: {},
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {
      // this.initTyped()
      this.initLottie()
    },
    computed: {

    },
    methods: {
        initTyped() {
          new Typed('.typed-text', {
            strings: ['Hello, World!', 'Welcome to Typed.js'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
          });
        },
        initLottie(){
          lottie.loadAnimation({
            container: document.getElementById('box'),
            renderer: 'svg',// 渲染方式：svg、canvas
            loop: true,  // 循环播放，默认：false
            autoplay: true, //自动播放 ，默认：true
            path: 'https://assets5.lottiefiles.com/packages/lf20_yppp9lxb.json'  // json 路径
          })
        }
    },
}
</script>

<style scoped lang="scss">
.content {
  height: calc(100vh - 80px);
  width: 100%;
  background-color: rgb(236, 237, 237);
  .page{
    width: 100%;
    height: 600px;
    background: url(../../../assets/images/page-hero-workspace.webp) center center no-repeat;
  }
}
</style>
