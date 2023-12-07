<template>
  <div class="content">
    <div class="page">
      <div class="person">
        你好，
        <br />我是一条苹果， <br />是一个前端开发工程师 <br />我喜欢<span
          class="typed-text"
        ></span>
      </div>
      <div class="person-right">
        <div class="rocket"></div>
        <div>
          <Lottie
            v-for="item in 3"
            :key="item"
            id="fire"
            :width="30"
            :height="30"
          ></Lottie>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Typed from 'typed.js';

export default {
    props: {
    },
    components: {
      Lottie : () => import('../../../components/lottie.vue'),
    },
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {
      this.initTyped()
    },
    computed: {

    },
    methods: {
        initTyped() {
          new Typed('.typed-text', {
            strings: ['游泳', '滑滑板','打羽毛球'],
            typeSpeed: 50,
            backSpeed: 30,
            loop: false
          });
        },
    },
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  background-color: rgb(236, 237, 237);
  margin-top: 90px;
  .page {
    width: 100%;
    height: 600px;
    background: url(../../../assets/images/page-hero-workspace.webp) center
      center no-repeat;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .person {
    font-family: Heavy;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
  }
  .person-right {
    display: flex;
    .rocket {
      display: inline-block;
      background: url(../../../assets/images/Spaceship.webp) no-repeat center
        center/cover;
      width: 240px;
      height: 240px;
    }
    .fire{
      margin: 30px 0;
    }
  }
}
</style>
