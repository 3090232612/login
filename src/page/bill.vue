<template>
  <div id="pie" style="width:100%;height:500px">

  </div>
</template>
<script>
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图
  require('echarts/lib/chart/pie');
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  export default {
    data(){
      return {
        props:'data'

      }
    },
    mounted(){
      this. drawPie();
    },
    methods:{
      drawPie(){
        let myChart=echarts.init(document.getElementById('pie'));
        myChart.setOption({
          title: {
            text: '天气情况统计',
//            subtext: '虚构数据',
            left: 'center'
          },
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            // orient: 'vertical',
            // top: 'middle',
            bottom: 10,
            left: 'center',
            data: ['西凉', '益州','兖州','荆州','幽州']
          },
          series : [
            {
              type: 'pie',
              radius : '65%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data:[
                {
                  value:1548,
                  name: '幽州',
                  label: {

                  }
                },
                {value:535, name: '荆州'},
                {value:510, name: '兖州'},
                {value:634, name: '益州'},
                {value:735, name: '西凉'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        })
      }
    }
  }
</script>
