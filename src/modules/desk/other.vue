<template>
  <div class="other">
    <section>
      <el-row>
        <el-col :span="16" style="padding:0 0 0 20px;">
          <div class="top-right">
            <el-tabs type="border-card">
              <el-tab-pane>
                 <div slot="label" class="label blue">工单统计报表</div>
                <div class="tabContent">
                  <el-row style="height: 100%;">
                    <el-col :span="12" style="height: 100%;">
                      <div class="canImg">
                        <chart :options="polar.two"></chart>
                      </div>
                    </el-col>
                    <el-col :span="12" style="height: 100%;">
                      <div class="canImg">
                        <chart :options="polar.one"></chart>
                      </div>
                    </el-col>
                  </el-row>
                </div>
              </el-tab-pane>
              <el-tab-pane>
                 <span slot="label"  class="label">考核评估</span>
                <div class="tabContent">
                  配置管理
                </div>
              </el-tab-pane>
              <el-tab-pane>
                 <span slot="label"  class="label">实时监控</span>
                <div class="tabContent">
                  角色管理
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
        <el-col :span="8" style="padding:0 20px 0 20px;">
          <div class="top-right">
            <i class="el-icon-more moreIcon"></i>
            <div class="home-comm">
              <div class="notice-title">
                <i class="iconfont">&#xe641;</i>
                <span class="span">代办事项</span>
              </div>
              <div class="com-use">
                <div class="com-use-body pull-left" v-for="(menu, $index) in useMenu" :key="$index">
                  <div class="img">
                    <img :src="`static/img/${menu.img}`" alt="" v-if="!!(menu.img)">
                    <img src="static/img/touxiang.png" alt="" v-else title="添加">
                  </div>
                <div class="el-c-master-light" style="margin: 5px 0 0 0;">{{menu.menuLabel}}</div>
              </div>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>
<script>
import ECharts from 'vue-echarts/components/ECharts.vue'
import polar from './polar.js'
export default {
  data () {
    return {
      polar,
      useMenu: [
        {
          img: '切片_01.jpg',
          menuLabel: '软件运营'
        },
        {
          img: '切片_02.jpg',
          menuLabel: '资料管理'
        },
        {
          img: '切片_03.jpg',
          menuLabel: '人员评估'
        },
        {
          img: '切片_04.jpg',
          menuLabel: '账户集成'
        },
        {
          img: '切片_05.jpg',
          menuLabel: '培训服务'
        },
        {
          img: '切片_06.jpg',
          menuLabel: '培训日历'
        },
        {
          img: '切片_04.jpg',
          menuLabel: '应急训练'
        },
        {
          img: '切片_01.jpg',
          menuLabel: '安全时间'
        },
        {
          img: '切片_02.jpg',
          menuLabel: '软件运营'
        },
        {
          img: '切片_03.jpg',
          menuLabel: '资料管理'
        },
        {
          img: '切片_04.jpg',
          menuLabel: '人员评估'
        },
        {
          img: '切片_07.jpg',
          menuLabel: ''
        }
      ]
    }
  },
  mounted () {
  },
  methods: {
  },
  components: {
    chart: ECharts
  }
}
</script>

<style lang="less">
.top-right {
  background-color: #fff;
  position: relative;
  height: 370px;
  border: 1px solid #dfdfe1;
  .el-tabs__item {
    padding: 0
  }
  .label {
    width: 74px;
    padding: 0 20px;
  }
  .blue {
    border-top: 2px solid #38b6e4;
  }
  .el-tabs--border-card {
    border: 0;
    box-shadow: 0;
    .el-tabs__nav-scroll{ 
      background: #eef3f7;
    }
  }
  .moreIcon {
    position: absolute;
    right: 0;
    display: inline-block;
    border-left: 1px solid #d5d5d5;
    width: 40px;
    height: 35px;
    text-align: center;
    line-height: 35px;
  }
  .tabContent {
    height: 300px;
    .canImg {
      height: 100%; 
      background: #f9f9f9;
      margin: 0 5px;
    }
    .echarts {
      width: 350px;
      height: 300px;
    }
  }
}
</style>
<style lang="less" scoped>
  @import '../../style/common';
  @import '../../style/other';
</style>
