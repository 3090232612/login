<template>
  <section class="home">
    <indexNav></indexNav>
    <div class="search">
      <el-input v-model="input" placeholder="请输入技术需求，将为您匹配适合的专利项目"></el-input>
      <!--<router-link :to="{path:'./userList',query:{input}}">-->
      <!---->
      <!--</router-link>-->
      <i class="el-icon-search" @click="goToDetail"></i>

    </div>
    <div class="products">
      <div class="titP clearfix">
        <span class="">按产业项目浏览</span>
        <span><a href="###">查看全部</a></span>
      </div>
      <div class="clearfix cont">
        <ul>
          <li v-for="item in productItems" :key="item.id">
            <img :src="item.img" alt="">
            <p>{{item.text}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="news">
      <el-row :gutter="8">
        <el-col :span="8"><div class="grid-content ">
          <span>焦点资讯</span>
          <div style="padding:0;">
            <img src="../assets/new.jpg" alt="" style="width:100%;height:100%">
          </div>
        </div></el-col>
        <el-col :span="7"><div class="grid-content ">
          <div  style="margin-top:27px;">
            <p class="f16 w400">{{newt}}</p>
            <p class="c666">{{newsDetail}}</p>
          </div>

        </div></el-col>
        <el-col :span="9"><div class="grid-content ">
          <span>最新资讯</span>
          <div>
            <ol v-for="item in newsItem">
              <li>{{item.text}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.date}}</li>
            </ol>
          </div>
        </div></el-col>
      </el-row>

    </div>
    <foot></foot>

  </section>


</template>
<style lang="scss">
  $lineColor:rgba(228, 228, 228, 1);
   .home{
    .search{
      background:rgba(153, 153, 153, 1);
      padding:15px 260px;
      position:relative;
      input{
        height:50px;
      }

      .el-icon-search{
        position:absolute;
        top:24px;
        right:280px;
        font-size:28px;
        font-weight:bold;
        cursor:pointer;
      }
        }
     .products{
       margin-top:20px;
       .cont{
         border-top:1px solid $lineColor;
       }
       .titP span:nth-child(1){
           font:{
             size:18px;
             weight:400;
           }
       float: left;
       }
       .titP span:nth-child(2){
         float: right;
       }

       img{
         width: 60px;
       }
       li{

         &:nth-child(8){
           padding-top:18px;
           img{
             width:76px;
           }
           p{
             padding-top:8px;
           }

         }
         &:nth-child(1),&:nth-child(6){
           border-left:1px solid $lineColor;
         }

         height: 120px;
         float:left;
         width:20%;
         border-right:1px solid $lineColor;
         border-bottom:1px solid $lineColor;
         box-sizing: border-box;
         padding-top:15px;
       }
     }
     .news{
       margin-top:20px;
       span{
         font:{
           size:18px;
           weight:400;
         }
       }
     }
   }
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    /*border-radius: 4px;*/

  }

  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    div{
      border:1px solid $lineColor;
      padding:7px;
      height: 200px;
    }

    ol{
      li{
        padding:9px 0;
      }
    }

    min-height: 36px;
    -ms-text-align-last: right;
    text-align: left;
  }
  .news .grid-content:first-child div:nth-child(0){
    padding:0;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
<script>
  import indexNav from '../components/indexNav'
  import foot from '../components/foot'
  export default{
    data(){
       return {
         input:'',
         productItems:[
           {img:require('../assets/car.png'),text:'汽车产业'},
           {img:require('../assets/elec.png'),text:'电子信息产业'},
           {img:require('../assets/clothes.png'),text:'纺织产业'},
           {img:require('../assets/metal.png'),text:'有色金属产业'},
           {img:require('../assets/oil.png'),text:'石油化工产业'},
           {img:require('../assets/oil.png'),text:'钢铁产业'},
           {img:require('../assets/tansfer.png'),text:'物流产业'},
           {img:require('../assets/equip.png'),text:'装备制造产业'},
           {img:require('../assets/slim_pro.png'),text:'轻工业产业'},
           {img:require('../assets/boat.png'),text:'船舶产业'}
         ],
         newt:'关于举办张江国家自主创新示范区 知识产权创新政策培训的通知',
         newsDetail:'11月10日上午，党的十九大精神清华大学宣讲座谈会在主楼接待厅举行。中共中央政治局委员、中央书记处书记、中宣部部长、学习贯彻党的十九大精神中央宣讲团成员黄坤明围绕如何准确深入地学习领会党的十九大精神作了全面系统的阐述，并与到场师生代表就大家关心的问题进行了互动交流。会议由清华大学党委书记陈旭主持……'
       , newsItem:[
           {text:'关于举办张江国家自主创新示范区 知识产权创新政策培训的通知',date:'11-22'},
           {text:'关于举办张江国家自主创新示范区 知识产权创新政策培训的通知',date:'11-22'},
           {text:'关于举办张江国家自主创新示范区 知识产权创新政策培训的通知',date:'11-22'},
           {text:'关于举办张江国家自主创新示范区 知识产权创新政策培训的通知',date:'11-22'},
           {text:'关于举办张江国家自主创新示范区 知识产权创新政策培训的通知',date:'11-22'}
         ]
       }

    },
    components:{indexNav,foot},
    methods:{
      goToDetail(){
        console.log(this.$router);
        console.log(this.$route);
       this.$router.push({path:'./userList',query:{input:this.input}})//等同于router-link :to 绑定的
      }
    }

  }
</script>
