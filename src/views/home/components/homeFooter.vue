<template>
  <div class="footer">
    <div class="footer-box">
      <div class="use">
        <div class="anim"></div>
        <span>个人主页使用了：</span>
        <el-tooltip class="box-item" effect="dark" content="Vue.js" placement="top">
          <i class="iconfont icon-Vue" style="color: #409eff"></i>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="TypeScript" placement="top">
          <i class="iconfont icon-chanpinjiemiantubiao-19" style="color: #f56c6c"></i>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="ElementUI" placement="top">
          <i class="el-icon-platform-eleme"></i>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="Eslint" placement="top">
          <i class="iconfont icon-eslint" style="color: #4b32c3"></i>
        </el-tooltip>
        <el-tooltip class="box-item" effect="dark" content="Sass" placement="top">
          <i class="iconfont icon-sass" style="color: #007acc"></i>
        </el-tooltip>
        <div>豫ICP备12138号</div>
      </div>
      <div class="footer-right">
        <i class="iconfont icon-pingguo" style="color: #ee951f"></i>
        <i class="iconfont icon-QQ"></i>
        <i class="iconfont icon-github"></i>
        <i class="iconfont icon-zhihu-circle-fill"></i>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.footer {
  background-color: #f4f4f4;
  height: 240px;
  width: calc(100% - 100px);
  margin: 20px 50px;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  .footer-box {
    display: flex;
    justify-content: space-between;
  }
  .anim {
    height: 50px;
    width: 50px;
    background-color: #fff;
  }
  .use {
    line-height: 24px;
    span {
      line-height: 24px;
    }
    .iconfont {
      margin: 0 10px;
    }
  }

  .icon-plus {
    color: #4b32c3;
    font-size: 18px;
    width: 18px;
    height: 18px;
    margin: 0 10px;
    line-height: 18px;
    margin-bottom: -1px;
  }
  .footer-right {
    padding-top: 160px;
    .iconfont {
      padding: 0 10px;
    }
  }
}
</style>
