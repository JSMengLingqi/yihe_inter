<template>
  <el-aside class="aside" :class="{collapseWidth: isCollapse}">
    <div style="height: 55px;line-height:55px;" @click="isCollapse = !isCollapse">
      <i class="el-icon-menu coolapseMenu"></i>
    </div>
    <el-menu
      default-active="2"
      :collapse="isCollapse"
      class="el-menu-vertical-demo">
      <el-submenu index="2">
        <template slot="title">
          <i class="iconfont">&#xe69c;</i>
          <span>账户集成</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="iconfont">&#xe61c;</i>
          <span>官网集成</span>
        </template>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="iconfont">&#xe671;</i>
          <span>信息发布</span>
        </template>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="iconfont">&#xe7c2;</i>
          <span>建设日历</span>
        </template>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>

<script>
export default {
  name: 'mlqaside',
  data () {
    return {
      isCollapse: true
    }
  }
}
</script>

<style lang="less" scoped>
  @import '../style/common';
  .iconfont,.el-icon-menu {
    font-size: 20px;
    color: #e4e2e7;
    padding-right: 8px;
  }
</style>
<style lang="less">
.el-submenu__title {
    border-bottom: 1px solid #24293a;
    border-top: 1px solid #181d2e;
     i {
      color: #25283c;
      }
}
.collapseWidth {
  width: 64px !important;
}
 .coolapseMenu {
    text-align: center;
    line-height: 30px;
    width: 100%;
 }
</style>
