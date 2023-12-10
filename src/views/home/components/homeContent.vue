<template>
  <div class="content">
    <div class="page">
      <div class="person">
        你好，
        <br />我是一条苹果， <br />是一个前端开发工程师 <br />我喜欢<span class="typed-text"></span>
      </div>
      <div class="person-right">
        <div class="rocket"></div>
        <div>
          <Lottie v-for="item in 2" :key="item" id="fire" :width="60" :height="60"></Lottie>
        </div>
      </div>
    </div>
    <div class="floor-2">
      <img src="../../../assets/images/page-hero-workspace.webp" alt="">
    </div>
    <div class="floor-3">
      <div class="head-img">
        <img src="../../../assets/images/head.png" alt="">
      </div>
      <h2>chaofan lu</h2>
      <h3>前端开发人员</h3>
      <p>👋🏽 嘿，我叫 一条苹果，我是一名前端开发人员 👨‍💻， 🏠住在上海。 大多数情况下，我正在处理一些网站 🕸 和移动端 📱 。 目前就职于fx。</p>
      <div class="button-1">
        <el-button style="background-color: #db1f05;color: aliceblue;">了解更多👇</el-button>
      </div>
    </div>
    <div class="floor-4">
      <div>
        <img src="../../../assets/images/cartoon-rocket.webp" alt="">
      </div>
    </div>
    <div class="floor-5">
      <h2 class="title">个人项目</h2>
      <div class="item-box">
        <div class="item" v-for="item in 4" :key="item">
          <img src="../../../assets/images/xx.png" alt="">
          <h2>腾云慧城云平台</h2>
          <div class="item-typt">web & mobile</div>
          <div class="text">致力于为平衡城市发展需求和行业应用提供解决方案和服务，持续为客户创造价值，以填补城市不动产资产管理空白领域为核心使命，
            打造智慧城市的资产运营管理平台。</div>
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
    Lottie: () => import('../../../components/lottie.vue'),
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
        strings: ['滑滑板。', '打羽毛球。', '跑步。'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
      });
    },
  },
}
</script>

<style scoped lang="scss">
.content {
  width: 100%;
  background-color: white;
  margin-top: 90px;

  .page {
    width: 100%;
    height: 600px;
    background-image: url("@/assets/svg/home.svg");
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    box-sizing: border-box;
  }

  .person {
    font-family: Heavy, Helvetica, Arial, sans-serif;
    font-size: 36px;
    text-align: center;
    line-height: 50px;
    font-weight: 600;
    letter-spacing: 2px;
    color: #002245;
  }

  .person-right {
    display: flex;

    .rocket {
      display: inline-block;
      background: url(../../../assets/images/Spaceship.webp) no-repeat center center/cover;
      width: 300px;
      height: 300px;
    }

    .fire {
      margin: 50px 0;
    }
  }

  .floor-2 {
    padding-top: 80px;
    max-width: 100%;
    height: 540px;
    min-height: 80px;
    background: linear-gradient(0deg, #ffd803 25%, transparent 25%);
    margin-bottom: 64px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .floor-3 {
    background-image: url(../../../assets/svg/bgspot.svg);
    padding-bottom: 80px;
    padding-left: 16px;
    padding-right: 16px;

    .head-img {
      width: 100%;
      height: 200px;

      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
        margin: 0 auto;
      }
    }

    h2 {
      color: #4e5064;
      font-weight: 700;
      margin: 12px 0;
      font-size: 29px;
    }

    h3 {
      color: #4e5064;
      margin: 12px 0;
      font-weight: 400;
      font-size: 24px;
    }

    p {
      color: #4e5064;
      font-size: 16px;
      margin: 4px auto;
      display: block;
      line-height: 26px;
      max-width: 744px;
    }

    .button-1 {
      margin: 30px 0;
      font-size: 40px;
    }
  }

  .floor-4 {
    padding-top: 80px;

    div {
      max-width: 100%;
      height: 540px;
      min-height: 80px;
      background: linear-gradient(0deg, #ffd803 25%, transparent 25%);
      margin-bottom: 64px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        -webkit-user-drag: none;
      }
    }
  }

  .floor-5 {
    .title {
      display: inline-block;
      position: relative;
      background: linear-gradient(to bottom, transparent 0, transparent 55%, #bae8e8 55%, #bae8e8 100%);
      color: #4e5064;
      font-size: 45.6px;
      margin-bottom: 24px;
      font-weight: 500;
      line-height: 68px;
    }

    .title::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 1%;
      height: 12%;
      width: 90%;
      background: linear-gradient(to right, #eb9a04 0, #eb9a04 25%, #bae8e8 25%, #bae8e8 35%, #eb9a04 35%, #eb9a04 100%);
    }

    .item-box {
      width: 992px;
      margin: 24px auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;

      .item {
        padding: 24px;
        margin: 8px;
        border-radius: 10px;
        max-width: 430px;
        text-align: left;

        img {
          display: inline-block;
          height: 180px;
          width: 100%;
          border-radius: 5px;
        }

        h2 {
          color: #4e5064;
          font-weight: 700;
          margin: 8px auto;
          font-size: 16px;
          line-height: 19.2px;
        }

        .item-typt {
          display: inline-block;
          background-color: #bae8e8;
          padding: 2px 8px;
          font-size: 14px;
          color: #fff;
          border-radius: 8px;
          line-height: 20px;
          font-weight: 700;
          letter-spacing: 1.4px;
        }

        .text {
          color: #25252580;
          font-size: 16px;
          margin: 4px auto;
          line-height: 24px;
        }
      }
      .item:hover{
        transform: 1s;
        background-color: #fbf8f8;
        box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000;
    transition: box-shadow .3s;
    cursor: pointer;
      }
    }
  }
}
</style>
