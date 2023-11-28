<template>
  <div class="content">
    <div class="page">
      <div class="person">
        你好，
        <br/>我是一条苹果，
        <br/>是一个前端开发工程师
        <br/>我喜欢<span class="typed-text"></span>
      </div>
      <div class="person-right">
        <div></div>
        <div>
          <span id="fire1" class="fire"></span>
          <span id="fire2" class="fire"></span>
          <span id="fire3" class="fire"></span>
        </div>
      </div>
    </div>
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
      this.initTyped()
      this.initLottie('fire1')
      this.initLottie('fire2')
      this.initLottie('fire3')
    },
    computed: {

    },
    methods: {
        initTyped() {
          new Typed('.typed-text', {
            strings: ['游泳', '滑滑板','打羽毛球'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: true
          });
        },
        initLottie(id){
          lottie.loadAnimation({
            container: document.getElementById(id),
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
  width: 100%;
  background-color: rgb(236, 237, 237);
  margin-top: 90px;
  .page{
    width: 100%;
    height: 600px;
    background: url(../../../assets/images/page-hero-workspace.webp) center center no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .person{
    font-family: Heavy;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
  }
  .person-right{
    display: flex;
    div:nth-child(1){
      display: inline-block;
      background: url(../../../assets/images/Spaceship.webp) no-repeat center center/cover;
      width: 120px;
      height: 120px;
    }
    .fire{
    display: inline-block;
    width: 30px;
    height: 30px;
  }
  }
  
}
</style>
