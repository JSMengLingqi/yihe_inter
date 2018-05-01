<template>
   <div id="app">
    <el-container class="wrapper">
        <el-header class="header gre-bg" :height="'55px'">
          <el-row class="h-100">
            <el-col class="h-100" :span="6">
              <span class="img"></span>
            </el-col>
            <el-col :span="13">
              <div class="grid-content">
                <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect">
                <el-submenu index="1" style="width:60px;">
                  <template slot="title"><i class="iconfont iconfont26">&#xe69c;</i></template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="2" style="width:60px;">
                  <template slot="title"><i class="iconfont iconfont26">&#xe61c;</i></template>
                  <el-menu-item index="2-1">选项1</el-menu-item>
                  <el-menu-item index="2-2">选项2</el-menu-item>
                  <el-menu-item index="2-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="3" style="width:60px;">
                  <template slot="title"><i class="iconfont iconfont26">&#xe684;</i></template>
                  <el-menu-item index="3-1">选项1</el-menu-item>
                  <el-menu-item index="3-2">选项2</el-menu-item>
                  <el-menu-item index="3-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="4" style="width:60px;">
                  <template slot="title"><i class="iconfont iconfont26">&#xe682;</i></template>
                  <el-menu-item index="4-1">选项1</el-menu-item>
                  <el-menu-item index="4-2">选项2</el-menu-item>
                  <el-menu-item index="4-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="5" style="width:60px;">
                  <template slot="title"><i class="iconfont iconfont26">&#xe671;</i></template>
                  <el-menu-item index="5-1">选项1</el-menu-item>
                  <el-menu-item index="5-2">选项2</el-menu-item>
                  <el-menu-item index="5-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="6" style="width:60px;">
                  <template slot="title"><i class="iconfont iconfont26">&#xe604;</i></template>
                  <el-menu-item index="6-1">选项1</el-menu-item>
                  <el-menu-item index="6-2">选项2</el-menu-item>
                  <el-menu-item index="6-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="7" style="width:60px;">
                  <template slot="title"><i class="iconfont iconfont26">&#xe613;</i></template>
                  <el-menu-item index="7-1">选项1</el-menu-item>
                  <el-menu-item index="7-2">选项2</el-menu-item>
                  <el-menu-item index="7-3">选项3</el-menu-item>
                </el-submenu>
                <el-submenu index="8" style="width:60px;">
                  <template slot="title"><i class="iconfont iconfont26">&#xe671;</i></template>
                  <el-menu-item index="8-1">选项1</el-menu-item>
                  <el-menu-item index="8-2">选项2</el-menu-item>
                  <el-menu-item index="8-3">选项3</el-menu-item>
                </el-submenu>
              </el-menu>
              <div class="line"></div>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content userContent">
                <span  class="userContentIcon rightUser" @click="showMore">
                  <i class="iconfont userIcon">&#xe620;</i>管理员 
                  <i class="iconfont userIcon iconRight">&#xe60d;</i>
                </span>
                <span class="userContentIcon">
                  <i class="iconfont">&#xe610;</i>
                </span>
                <span class="userContentIcon">
                  <i class="iconfont">&#xe600;</i>
                </span>
                <div v-show="moreContent" class="moreContent">
                  <ul style="color: white;">
                    <li>
                      第一个
                    </li>
                    <li>
                      第二个
                    </li>
                  </ul>
                </div>
              </div>
            </el-col>
          </el-row>
        </el-header>
        <el-container class="content">
          <mlqaside></mlqaside>
            <el-main class="main_area">
              <mlqcontent></mlqcontent>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
  import mlqaside from '../components/aside.vue'
  import mlqcontent from '../components/content.vue'
  export default {
    data () {
       return {
        moreContent: false,
        activeIndex: '0',
        banMoreContent: false
      }
    },
    methods: {
      showMore () {
        this.moreContent = !this.moreContent
      },
      handleSelect () {

      }
    },
    components: {
      mlqaside,
      mlqcontent
    }
  }
</script>

<style lang="less" scoped>
  @import '../style/common';
  @import '../style/header';
</style>
<style lang="less">
  .h-100 {
      height: 100%;
    }
  .wrapper {
    .el-menu-item:not(.is-disabled):hover{
      background: #11152b;
    }
    .grid-content .el-menu-item{
      background: #2d3048;
    }
    .grid-content .el-menu--horizontal>.el-menu-item.is-active {
      color: #909399;
    }
    .el-submenu .el-submenu__title {
      height: 55px !important;
      line-height: 55px !important;
      color: #fffffd;
      background: #24293c;
      .el-submenu__icon-arrow {
        display: none;
      }
    }
    .el-menu-item, .el-submenu__title {
      background: #24293c;
      height: 55px;
    }
    .userContent {
      position: relative;
      .moreContent {
        position: absolute;
        width: 120px;
        height: 50px;
        background: #11152b;
        right: 0;
        top: 55px;
        z-index: 20;
        li {
          width: 120px;
          height: 20px;
        }
      }
      .el-submenu {
        float: right;
      }
    }
    .el-submenu .el-submenu__title:hover {
      background: #11152b;
    }
  }
</style>
