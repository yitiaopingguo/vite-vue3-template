<template>
  <div class="header">
    <div class="name">
      <Lottie id="logo" :path="path" :width="60" :height="60"></Lottie>chaofan lu</div>
    <div class="right">
      <span
        v-for="(item, index) in tabList"
        :class="tabIndex == index ? 'sel_span' : 'hov'"
        :key="index"
        @click="haneleChangeTab(item.id,index)"
        >{{ item.name }}</span
      >
    </div>
  </div>
</template>

<script lang="js">
import bus from '../../../utils/bus'
export default {
    data() {
        return {
          tabList:[
            {name:'首页',id:'floor-1'},
            {name:'关于',id:'floor-2'},
            {name:'项目',id:'floor-5'},
            {name:'找我',id:'footer'}
          ],
          tabIndex:0,
          path:'https://lottie.host/7a580cb8-c555-4f59-91cd-9388bc0997a1/kmD9swluwW.json'
        }
    },
    components: {
    Lottie: () => import('../../../components/lottie.vue'),
  },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    methods: {
      haneleChangeTab(el,i){
        this.tabIndex = i
        bus.$emit('toEl', el)
      }
    },
}
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 90px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 30px 30px 10px 30px;
  color: #5c5e70;
  box-sizing: border-box;
  box-shadow: 0 4px 8px #0000001a;
  .name {
    display: flex;
    margin-left: 17px;
    padding: 2px 4px;
    font-size: 1.5em;
    font-weight: 700;
    color: #4e5064;
    white-space: nowrap;
    vertical-align: top;
  }
  #logo{
    margin-top: -17px;
    margin-right: 15px;
  }
  .right {
    span {
      font-size: 16px;
      padding: 6px 20px;
      cursor: pointer;
    }
    .sel_span {
      background-color: #3b3b3b;
      border-radius: 6px;
      color: #fff;
    }
    .hov:hover {
      color: #ff620b;
    }
  }
}
</style>
