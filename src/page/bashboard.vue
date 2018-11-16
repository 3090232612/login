<template>
  <section>
    <Nav></Nav>
    <div class="container">
      <el-row class="tips">
        <el-col :span="6" v-for="item in message" :key="item.id">
          <div class="tip">
            <el-row>
              <el-col :span="12" class="f24">
                <i class="el-icon-edit"></i>
              </el-col>
              <el-col :span="12" class="f24" style="text-align: left">
                <span>{{item.number}}</span>
              </el-col>
            </el-row>
            <div class="f12">
              <p>{{item.text}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="">
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-tabs type="border-card" class="tables">
              <el-tab-pane label="用户管理">
                <ul>
                  <li v-for="tableItem in tables" :key="tableItem.id">
                    <el-row>
                      <el-col :span="12"><div class="grid-content">{{tableItem.text}}</div></el-col>
                      <el-col :span="12"><div class="grid-content">
                        <el-button type="primary">{{tableItem.button}}</el-button>
                      </div></el-col>
                    </el-row>
                  </li>
                </ul>
              </el-tab-pane>
              <el-tab-pane label="配置管理">
                <ul>
                  <li v-for="tableItem in tables" :key="tableItem.id">
                    <el-row>
                      <el-col :span="12"><div class="grid-content">{{tableItem.text}}</div></el-col>
                      <el-col :span="12"><div class="grid-content">
                        <el-button type="primary">{{tableItem.button}}</el-button>
                      </div></el-col>
                    </el-row>
                  </li>
                </ul>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <el-tabs type="border-card"  @tab-click="changeLine">
              <el-tab-pane label="BLOCKS / HOUR">
                <div id="line0" style="width:100%;height:240px"></div>
              </el-tab-pane>
              <el-tab-pane label="BLOCKS / MIN" >
                <div id="line1" style="width:100%;height:240px"></div>
              </el-tab-pane>
              <el-tab-pane label="TX / HOUR" >
                <div id="line2" style="width:100%;height:240px"></div>
              </el-tab-pane>
              <el-tab-pane label="TX / MIN" >
                <div id="line3" style="width:100%;height:240px"></div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </el-col>

      </el-row>
      <el-row :gutter="20" class="">
        <el-col :span="12" style="">
          <div class="grid-content bg-purple pd10 box-shadow" style="height:291px;overflow: scroll;">
            <ul>
              <li class="ele-timeline-item">
                <i class="el-icon-news timeline-icon"></i>
                <div>
                  <h3 class="timeline-title">8月18日</h3>
                  <p>
                    <span class="bold">Channel Name:</span>mychannel
                  </p>
                  <p>
                    <span class="bold">Datahash:</span>
                    <br>
                    c935771bf960fc2e90830cc85e778f38d11327081c4b77f7bfc7178ac3706efd
                  </p>
                  <p>
                    <span class="bold">Number of Tx:</span>1
                  </p>
                  <p><el-button type="primary" size="small">2 days ago </el-button></p>

                </div>
              </li>
              <li class="ele-timeline-item">
                <i class="el-icon-news timeline-icon"></i>
                <div>
                  <h3 class="timeline-title">8月18日</h3>
                  <p>
                    <span class="bold">Channel Name:</span>mychannel
                  </p>
                  <p>
                    <span class="bold">Datahash:</span>
                    <br>
                    c935771bf960fc2e90830cc85e778f38d11327081c4b77f7bfc7178ac3706efd
                  </p>
                  <p>
                    <span class="bold">Number of Tx:</span>1
                  </p>
                  <p><el-button type="primary" size="small">2 days ago </el-button></p>

                </div>
              </li>
              <li class="ele-timeline-item">
                <i class="el-icon-news timeline-icon"></i>
                <div>
                  <h3 class="timeline-title">8月18日</h3>
                  <p>
                    <span class="bold">Channel Name:</span>mychannel
                  </p>
                  <p>
                    <span class="bold">Datahash:</span>
                    <br>
                    c935771bf960fc2e90830cc85e778f38d11327081c4b77f7bfc7178ac3706efd
                  </p>
                  <p>
                    <span class="bold">Number of Tx:</span>1
                  </p>
                  <p><el-button type="primary" size="small">2 days ago </el-button></p>

                </div>
              </li>
            </ul>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple box-shadow">
            <h3 class="t_four">Transactions by Organization</h3>
            <div id="pie" style="width:100%;height:264px"></div>
          </div>
        </el-col>

      </el-row>

    </div>

  </section>


</template>
<style lang="scss">
  @mixin box-shadow {
    box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
    border-radius: 5px;
  }

  .container {
    width: 80%;
    margin: 0 auto;
    > .tips {
      @include box-shadow;
    }
    > div {
      /*margin-left:0!important;*/
      /*margin-right:0!important;*/
    }
    ::-webkit-scrollbar {
      width: 0;
    }
    .t_four {
      font-size: 20px;
      color: #000;
      font-weight: 500;
      text-align: center;
      padding: 8px 0;
      border-bottom: 1px solid #f2f2f2;
    }
  }
  .ele-timeline-item{
    position: relative;
    word-break: break-all;
    &::before {
      content: '';
      position: absolute;
      left: 5px;
      top: 0;
      display: block;
      z-index: 0;
      width: 1px;
      height: 100%;
      background: #e6e6e6;
    }
    h3{
      padding-top: 12px;
      padding-bottom: 12px;
      background: #6283d0;
      color: #fff;
      padding-left: 5px;
    }
    >div{
      margin-right: 50px;
      margin-top: 20px;
      margin-left: 30px;
      padding-left: 0;
      @include box-shadow;
      padding-bottom: 20px;
    }
    p{
      text-align: left;
      padding-left:10px;
      color:#000;
    }
    .bold{
      font-weight:600;
    }


  }

  .timeline-icon{
    position: absolute;
    left: -5px;
    top: 0;
    z-index: 10;
    width: 20px;
    height: 20px;
    line-height: 20px;
    background-color: #fff;
    color: #5FB878;
    border-radius: 50%;
    text-align: center;
    cursor: pointer;
  }

  .f12 {
    font-size: 18px;
  }

  .f24 {
    font-size: 24px;
  }
  .pd10{
    padding:10px;
  }

  .el-col-6 .el-row {
    border-right: 1px solid #dff1fe;
  }

  .el-row {
    padding: 10px 0;
    margin-bottom: 10px;
    /*background: #fff;*/
    &:last-child {
      margin-bottom: 0;
    }
  }

  .el-col {
    border-radius: 4px;
  }
  .el-col-12 .box-shadow{
    @include box-shadow;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #fff;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
  .tables li{
    &:nth-child(2n+1){
      background: #f5f7fa;
    }
    &:hover{
      background: #f5f7fa;
    }
  }

</style>
<script>
  import NavS from '../components/nav'
  let echarts = require('echarts/lib/echarts');
  // 引入柱状图
  require('echarts/lib/chart/bar');
  require('echarts/lib/chart/line');
  require('echarts/lib/chart/pie');
  // 引入提示框和标题组件
  require('echarts/lib/component/tooltip');
  require('echarts/lib/component/title');
  export default {
    name: 'Bashboard',
    data() {
      return {
        message: [
          {number: 5, text: 'BLOCKS'},
          {number: 6, text: 'BLOCKS'},
          {number: 7, text: 'BLOCKS'},
          {number: 8, text: 'BLOCKS'}
        ],
        tables:[
          {text:'peer0.org1.example.com',button:'running'},
          {text:'peer0.org1.example.com',button:'running'},
          {text:'peer0.org1.example.com',button:'running'},
          {text:'peer0.org1.example.com',button:'running'}
        ],
        chartsLine:{
          xAxis:['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
          data:[5, 20, 36, 10, 10, 20]
        }


      }
    },
    created(){

//      this.$axios({
//          method:'get',
//          url:'/api/attack_drill_ability',
////        data:this.qs.stringify({"currentPage":1,"pageSize":20,"cookie":"ddostools-session-id=97eba821-b6fe-4b8b-bdd0-4efc13d8cd77"})
//        data:({'cookie':'ddostools-session-id=8ae8e0ae-97fc-40da-8007-7f4b0d9ffd49'})
//      }).then(response=>{
//        console.log(response);
//
//      }).catch(err=>{
//        console.log(err);
//      })
    },
    mounted(){

      this.$nextTick(function () {
        // Code that will run only after the
        // entire view has been rendered
        this.drawLine('line0');
        this.drawLine('line1');
        this.drawLine('line2');
        this.drawLine('line3');
        this.drawPie();
        //this.changeLine();
      })



    },
    updated(){
      console.log('updata');
    },
    components: {Nav: NavS},
    methods:{

      drawLine(ele){
        let myChart=echarts.init(document.getElementById(ele))
        myChart.setOption({
          title: {
            text: ''
          },
          tooltip: {},
          xAxis: {
            data: this.chartsLine.xAxis
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'line',
            data:this.chartsLine.data
          }]
        });
      },
      drawPie(){
        let myChart=echarts.init(document.getElementById('pie'))
        let option = {
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
        };
        myChart.setOption(option);

      },
      changeLine:function(tab,event){
        let data={
          x:[
            ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
            ['衬衫1', '羊毛衫1', '雪纺衫1', '裤子', '高跟鞋', '袜子'],
            ['衬衫2', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子'],
            ['衬衫3', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          ],
          das:[
            [5, 20, 36, 10, 10, 20],
            [5, 20, 36, 10, 10, 20],
            [5, 20, 36, 10, 10, 20],
            [5, 20, 36, 10, 10, 20]
          ]
        };
        this.chartsLine.xAxis=data.x[Math.floor(Math.random()*4)];
        this.chartsLine.data=data.das[Math.floor(Math.random()*4)];
        let a=tab.$el.getAttribute('id');
        this.drawLine('line'+a.split('-')[1]);
      }
    }
  }
</script>
