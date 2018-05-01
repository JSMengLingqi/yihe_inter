<template>
  <div style="padding-bottom:20px;">
    <div class="banner">
      <span class="banSpan">官网集成</span>
      <div class="banDiv">
        <el-input
          placeholder="请输入内容"
          clearable>
        </el-input>
        <i class="el-icon-search"></i>
      </div>
    </div>
     <el-row>
      <el-col :span="12" style="padding:20px 0 20px 20px;">
        <div class="blk_01">
          <div class="blk_tit">
            <i class="iconfont">&#xe641;</i>
            <span class="span">代办事项</span>
            <i class="el-icon-more"></i>
          </div>
          <div class="mc">
            <ul>
                <li>
                  <a href="#">
                    <i class="iconfont">&#xe601;</i>
                    &nbsp;&nbsp;后台推送至前台的数据，推送栏目出错 
                  </a>
                <span class="diamonds yellow">进行中</span>
                </li>
                <li><a href="#">
                    <i class="iconfont">&#xe736;</i>
                    &nbsp;&nbsp;产品定制logo、copyright、背景等的定制化能力
                  </a>
                  <span class="diamonds green">已完成</span>
                </li>
                <li><a href="#">
                    <i class="iconfont">&#xe667;</i>
                    &nbsp;&nbsp;产品信息告知-把生产环境现在的产品信息全还原回未审核状态
                    </a>
                  <span class="diamonds yellow">问题验证</span>
                </li>
                <li><a href="#">
                    <i class="iconfont">&#xe606;</i>
                    &nbsp;&nbsp;企业注册界面的主营产品或服务与供应信息界面的产品标签
                    </a>
                  <span class="diamonds blue">TO DO</span>
                </li>
                <li>
                  <a href="#">
                    <i class="iconfont">&#xe601;</i>
                    &nbsp;&nbsp;后台推送至前台的数据，推送栏目出错 
                  </a>
                <span class="diamonds yellow">进行中</span>
                </li>
                <li><a href="#">
                    <i class="iconfont">&#xe736;</i>
                    &nbsp;&nbsp;产品定制logo、copyright、背景等的定制化能力
                  </a>
                  <span class="diamonds green">已完成</span>
                </li>           
            </ul>
          </div>
        </div>
      </el-col>
      <el-col :span="12" style="padding:0 20px 20px 20px;">
        <div class="blk_02" style="border-bottom:none;">
          <div class="blk_tit">
            <i class="iconfont">&#xe641;</i>
            <span class="span">动态</span>
            <i class="el-icon-more"></i>
          </div>
          <div class="mc">
            <ul :style="{ top }" class="scroll-content">
                <li class="li" v-for="(item, $index) in prizeList" :key="$index"><a href="#">
                    <i class="circle"></i>
                    {{item.name}}
                    </a>
                <span>2017-04-21</span></li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
    <twoRow></twoRow>
  </div>
  
</template>

<script>
import twoRow from '../modules/desk/other.vue'
import $ from 'jquery'
export default {
  data () {
    return {
       prizeList: [
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]。" },
        { name: "2016年度总结大会即将在河北雄县举行。" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "2016年度总结大会即将在河北雄县举行。" },      
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "2016年度总结大会即将在河北雄县举行。" },      
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]。" },
        { name: "2016年度总结大会即将在河北雄县举行。" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "2016年度总结大会即将在河北雄县举行。" },      
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "2016年度总结大会即将在河北雄县举行。" },      
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" },
        { name: "关于[2017年第一季度产品发布方案]会议总结关于" }
      ],
      activeIndex: 0,
      demoList: [
        { name: 0 },
        { name: 1 },
        { name: 2 },
        { name: 3 },
        { name: 4 }
      ]
    }
  },
  components: {
    twoRow
  },
  computed: {
    top() {
      return - this.activeIndex * 40 + 'px';
    }
  },
  mounted() {
   var i = setInterval(_ => {
      if(this.activeIndex < this.demoList.length) {
        this.activeIndex += 1;
      } else {
        this.activeIndex = 0;
         if($(".scroll-content").scrollTop>=$(".scroll-content").scrollHeight/2){
          $(".scroll-content").scrollTop = 0;    
        }
      }
    }, 1000);
  },
  methods: {
    
  }
}
</script>

<style lang="less" scoped>
  @import '../style/common';
  @import '../style/content';
  .scroll-wrap{
  width: 200px;
  height: 50px;
  border: 1px solid blue;
  overflow: hidden;
}

</style>
<style lang="less">
  .el-input__inner {
    height: 30px;
  }
</style>