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
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
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
  }
</style>
<script>
  import NavS from '../components/nav'
  export default {
    data() {
      return {
        formInline: {
          user: '',
          region: ''
        },
        res:{
          total:'2'
        },
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
      }
    }
  }
</script>
