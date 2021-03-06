export default {
  one: {
    tooltip : {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
      orient : 'vertical',
      x : 'left',
      data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
  },
  toolbox: {
      show : true,
      feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          magicType : {
              show: true, 
              type: ['pie', 'funnel']
          },
          restore : {show: true},
          saveAsImage : {show: true}
      }
  },
  calculable : false,
  series : [
      {
          name:'访问来源',
          type:'pie',
          selectedMode: 'single',
          radius : [0, 70],
          
          // for funnel
          x: '20%',
          width: '40%',
          funnelAlign: 'right',
          max: 1400,
          
          itemStyle : {
              normal : {
                  label : {
                      position : 'inner'
                  },
                  labelLine : {
                      show : false
                  }
              }
          },
          data:[
              {value:335, name:'直达'},
              {value:679, name:'营销广告'},
              {value:1548, name:'搜索引擎', selected:true}
          ]
      },
      {
          name:'访问来源',
          type:'pie',
          radius : [100, 140],
          
          // for funnel
          x: '60%',
          width: '35%',
          funnelAlign: 'left',
          max: 1048,
          
          data:[
              {value:335, name:'直达'},
              {value:310, name:'邮件营销'},
              {value:234, name:'联盟广告'},
              {value:135, name:'视频广告'},
              {value:1048, name:'百度'},
              {value:251, name:'谷歌'},
              {value:147, name:'必应'},
              {value:102, name:'其他'}
          ]
      }
  ]
  },
  two: {
      title : {
          text: '某地区蒸发量和降水量',
          subtext: '纯属虚构'
      },
      tooltip : {
          trigger: 'axis'
      },
      legend: {
          data:['蒸发量','降水量']
      },
      toolbox: {
          show : true,
          feature : {
              mark : {show: true},
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {show: true}
          }
      },
      calculable : true,
      xAxis : [
          {
              type : 'category',
              data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
      series : [
          {
              name:'蒸发量',
              type:'bar',
              data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
              markPoint : {
                  data : [
                      {type : 'max', name: '最大值'},
                      {type : 'min', name: '最小值'}
                  ]
              },
              markLine : {
                  data : [
                      {type : 'average', name: '平均值'}
                  ]
              }
          },
          {
              name:'降水量',
              type:'bar',
              data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
              markPoint : {
                  data : [
                      {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183, symbolSize:18},
                      {name : '年最低', value : 2.3, xAxis: 11, yAxis: 3}
                  ]
              },
              markLine : {
                  data : [
                      {type : 'average', name : '平均值'}
                  ]
              }
          }
      ]
  }
};
// var ecConfig = require('echarts/config');
// myChart.on(ecConfig.EVENT.PIE_SELECTED, function (param){
//   var selected = param.selected;
//   var serie;
//   var str = '当前选择： ';
//   for (var idx in selected) {
//       serie = option.series[idx];
//       for (var i = 0, l = serie.data.length; i < l; i++) {
//           if (selected[idx][i]) {
//               str += '【系列' + idx + '】' + serie.name + ' : ' + 
//                      '【数据' + i + '】' + serie.data[i].name + ' ';
//           }
//       }
//   }
//   document.getElementById('wrong-message').innerHTML = str;
// })