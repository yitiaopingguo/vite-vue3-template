<template>
  <div class="header">
    <div>嘻嘻嘻</div>
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
  width: 100%;
  height:90px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px 30px;
  color: #5c5e70;
  box-sizing: border-box;
  box-shadow: 0 4px 8px #0000001a;
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
