<template>
  <section>
    <Nav></Nav>
    <div class="container">
      <div class="search">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="产业分类">
            <el-select v-model="formInline.region" placeholder="一级分类">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
            <el-select v-model="formInline.region" placeholder="二级分类">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item style="margin-left:80px;">
            <el-input v-model="formInline.user"  placeholder="输入关键字" style="width:310px"></el-input>

          </el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button type="primary" @click="" style="float:right">我要上传项目</el-button>
        </el-form>
      </div>
      <div class="results clearfix">
        <span>共有<i class="res">{{res.total}}</i>条检索结果</span>
        <span>如果没有找到想要的项目，点击<a href="###">查看更多相关专利。</a></span>
      </div>
      <div class="itemTotal">
        <div class="itemLists" v-for="item in patents" :key="item.id">
          <div v-if="item.sub==''" >
            <h3>{{item.headline}}
              <span><i class="el-icon-view"></i><i>{{item.saw}}</i></span>
              <span><i class="el-icon-star-off"></i><i>{{item.zan}}</i></span>
            </h3>
            <el-row>
              <el-col :span="6"><div class="grid-content">
                <ul>
                  <li>申请号：<span>{{item.sq}}</span></li>
                  <li>申请人：<span>{{item.sqp}}</span></li>
                </ul>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                <ul>
                  <li>专利类型：<span>{{item.patentType}}</span></li>
                  <li>产业分类：<span>{{item.classfiy}}</span></li>
                </ul>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                <el-button plain><i>{{item.score}}</i>分</el-button>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                <el-button type="info">去评估</el-button>
                <el-button type="info">感兴趣</el-button>
              </div></el-col>
            </el-row>
          </div>
          <div v-else>
            <h3>{{item.headline}}
              <span><i class="el-icon-view"></i><i>{{item.saw}}</i></span>
              <span><i class="el-icon-star-off"></i><i>{{item.zan}}</i></span>
              <el-row style="float:right;padding-top:0;margin-right:90px;">

                <el-button type="info" style="" @click="isShow">{{showTxt}} <i :class="{'el-icon-caret-top':show,'el-icon-caret-bottom':!show}"></i></el-button>
                <el-button type="info" style="margin-right:30px">感兴趣</el-button>
              </el-row>
            </h3>
            <el-row v-for="(item2,index) in item.sub" :key="item2.id" :id="item2.id" :userId="index" v-if="index==0">
              <h4>专利名称：{{item2.subtitle}}</h4>
              <el-col :span="6"><div class="grid-content">
                <ul>
                  <li>申请号：<span>{{item2.sq}}</span></li>
                  <li>申请人：<span>{{item2.sqp}}</span></li>
                </ul>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                <ul>
                  <li>专利类型：<span>{{item2.patentType}}</span></li>
                  <li>产业分类：<span>{{item2.classfiy}}</span></li>
                </ul>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                <el-button plain><i>{{item2.score}}</i>分</el-button>
              </div></el-col>
              <el-col :span="6"><div class="grid-content">
                <el-button type="info">去评估</el-button>
              </div></el-col>
            </el-row>
            <el-row v-for="(item2,index) in item.sub" :key="item2.id" :id="item2.id" :userId="index" v-if="index!=0">
              <div class="togoTop">
                <h4>专利名称：{{item2.subtitle}}</h4>
                <el-col :span="6"><div class="grid-content">
                  <ul>
                    <li>申请号：<span>{{item2.sq}}</span></li>
                    <li>申请人：<span>{{item2.sqp}}</span></li>
                  </ul>
                </div></el-col>
                <el-col :span="6"><div class="grid-content">
                  <ul>
                    <li>专利类型：<span>{{item2.patentType}}</span></li>
                    <li>产业分类：<span>{{item2.classfiy}}</span></li>
                  </ul>
                </div></el-col>
                <el-col :span="6"><div class="grid-content">
                  <el-button plain><i>{{item2.score}}</i>分</el-button>
                </div></el-col>
                <el-col :span="6"><div class="grid-content">
                  <el-button type="info">去评估</el-button>
                </div></el-col>
              </div>

            </el-row>
            <div class="toTop">
              <span @click="isShow" v-if="show">收起<i class="el-icon-caret-top"></i></span>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>

</template>
<style lang="scss">
  $lineColor:rgba(228, 228, 228, 1);
  @mixin border1px{
    border:1px solid $lineColor;
  }


  .container {
    margin: 0 auto;
    .search{
      border:1px solid $lineColor;
      padding:15px;
      padding-bottom:0;
       form{
         text-align: left;
       }
    }
    .res{
      color:red;

    }
    .results{
      padding:5px 15px;
      @include border1px;
      margin-top:10px;

      span:first-child{
        float: left;
      }
      span:nth-child(2){
        float: right;
      }
    }
    .itemLists{
      @include border1px;
      margin-top:10px;
      padding-top:10px;
      h3{
        padding-left:20px;
        text-align:left;
        >span{
          margin-left:30px;
        }
      }
      >div{

      }
      .el-row{
        margin-bottom:0;
        padding-top:20px;
        padding-left:20px;
        padding-right:20px;
        background: rgba(242, 242, 242, 1);
//        @include border1px;
        border-bottom:1px solid $lineColor;
        h4{
          text-align:left;
        }
        .el-col{

        }
      }
      .el-row:nth-of-type(1){
        background:none;
        border:none;
      }
      ul li{
        padding:5px;
        text-align: left;
      }
      .toTop{
        text-align:right;
        padding:15px 160px;
        font-size:16px;
        cursor:pointer;
      }
    }
  }
</style>
<script>
  import NavS from '../components/nav'
  export default {
    data() {
      return {
        show:true,
        showTxt:'收起',
        formInline: {
          user: '',
          region: ''
        },
        res:{
          total:'2'
        },
        patents:[
          {headline:'一种人抗体基因重组质粒的转染方法',
            sub:'',
            saw:16,
            zan:106,
            score:89,
            sq:'CN106318971A',
            sqp:'南昌大学',
            patentType:'发明',
            classfiy:'汽车产业-发动机'
          },
          {headline:'一种人抗体基因重组质粒的转染方法',
            sub:[
              {subtitle:'一种人抗体基因重组质粒的转染方法',
                saw:16,
                zan:16,
                score:99,
                sq:'CN106318971A',
                sqp:'南昌大学',
                patentType:'发明',
                classfiy:'汽车产业-发动机'},
              {subtitle:'产生人抗体的细胞',
                saw:16,
                zan:16,
                score:79,
                sq:'CN106318971A',
                sqp:'南昌大学',
                patentType:'发明',
                classfiy:'汽车产业-发动机'},
              {subtitle:'一种人表皮生长因子的制备和纯化方法',
                saw:16,
                zan:16,
                score:76,
                sq:'CN106318971A',
                sqp:'南昌大学',
                patentType:'发明',
                classfiy:'汽车产业-发动机'},
              {subtitle:'一种人表皮生长因子的制备和纯化方法',
                saw:16,
                zan:16,
                score:95,
                sq:'CN106318971A',
                sqp:'南昌大学',
                patentType:'发明',
                classfiy:'汽车产业-发动机'}
              ],
            saw:16,
            zan:136,
          },
        ],
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    created(){
      console.log(this.$route.query.input);
    },
    mounted(){
      console.log(this.$route.query.input);
    },
    components: {Nav: NavS},
    methods:{
      onSubmit() {
        console.log('submit!');
      },
      isShow(event){
        let show=!this.show;
        let topClass=document.getElementsByClassName('togoTop');
        if(show){
          for(var i=0;i<topClass.length;i++){
            topClass[i].parentNode.style.display='block';
            this.showTxt='收起'
          }
        }else{
          for(var i=0;i<topClass.length;i++){
            topClass[i].parentNode.style.display='none';
            this.showTxt='展开'
          }
        }
        this.show=show;
      }
    }
  }
</script>
