<template>
  <div class="header">
    <div class="name">chaofan lu</div>
    <div class="right">
      <span class="sel_span">首页</span>
      <span class="hov">关于</span>
      <span class="hov">项目</span>
      <span class="hov">找我</span>
    </div>
  </div>
</template>

<script lang="js"></script>

<style scoped lang="scss">
.header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height:90px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 30px 30px 10px 30px;
  color: #5c5e70;
  box-sizing: border-box;
  box-shadow: 0 4px 8px #0000001a;
  .name{
    transition: all 1.6s;
    margin-left: 17px;
    padding: 2px 4px;
    font-size: 1.5em;
    font-weight: 700;
    color: #4e5064;
    white-space: nowrap;
  }
  .right{
    span{
      font-size: 16px;
      padding: 6px 20px;
      cursor: pointer;
    }
    .sel_span{
      background-color: #3b3b3b;
      border-radius: 6px;
      color: #fff;
    }
    .hov:hover{
      color: #ff620b;
    }
  }
}
</style>
