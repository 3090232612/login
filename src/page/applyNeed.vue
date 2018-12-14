<template>
  <section>
    <Nav></Nav>
    <el-form class="wrap">
      <div>
        <span>1、选择一个产业分类：</span>
        <el-form-item>
          <el-select  v-model="message.product" placeholder="请选择产业分类">
            <el-option label="产业分类" value="产业分类"></el-option>
            <el-option label="汽车产业" value="汽车产业"></el-option>
            <el-option label="电子信息产业" value="电子信息产业"></el-option>
            <el-option label="纺织产业" value="纺织产业"></el-option>
            <el-option label="有色金属产业" value="有色金属产业"></el-option>
            <!--<option selected="" value="    产业分类">&nbsp;&nbsp;&nbsp; 产业分类</option>-->
            <!--<option value="    汽车产业">&nbsp;&nbsp;&nbsp; 汽车产业</option>-->
            <!--<option value="    电子信息产业">&nbsp;&nbsp;&nbsp; 电子信息产业</option>-->
            <!--<option value="    纺织产业">&nbsp;&nbsp;&nbsp; 纺织产业</option>-->
            <!--<option value="    有色金属产业">&nbsp;&nbsp;&nbsp; 有色金属产业</option>-->
            <!--<option value="    石油化工产业">&nbsp;&nbsp;&nbsp; 石油化工产业</option>-->
            <!--<option value="    钢铁产业">&nbsp;&nbsp;&nbsp; 钢铁产业</option>-->
            <!--<option value="    物流产业">&nbsp;&nbsp;&nbsp; 物流产业</option>-->
            <!--<option value="    装备制造产业">&nbsp;&nbsp;&nbsp; 装备制造产业</option>-->
            <!--<option value="    轻工业产业">&nbsp;&nbsp;&nbsp; 轻工业产业</option>-->
            <!--<option value="    船舶产业">&nbsp;&nbsp;&nbsp; 船舶产业</option>-->
          </el-select>
        </el-form-item>
      </div>
      <div>
        <span>2、选择一个专利类型：</span>
        <el-form-item>
          <el-select v-model="message.type" placeholder="请选择专利类型">
            <el-option label="发明" value="发明"></el-option>
            <el-option label="实用新型" value="实用新型"></el-option>
          </el-select>
        </el-form-item>
      </div>

      <div>
        <span>3、选择一个所属地域：</span>
        <el-form-item>
          <el-select v-model="message.area" placeholder="请选择所属地域">
            <el-option label="上海" value="上海"></el-option>
            <el-option label="北京" value="北京"></el-option>
          </el-select>
        </el-form-item>

      </div>

      <div>
        <span>4、输入技术需求信息：</span>
        <el-form-item>
          <el-input type="textarea" v-model="message.desc"></el-input>
        </el-form-item>

      </div>
      <el-button type="primary">供需匹配</el-button>

    </el-form>


  </section>



</template>
<style lang="scss">
  $color:rgba(228, 228, 228, 1);
  .wrap{
    padding:30px 50px 30px 0;
    border:1px solid $color;
    textarea{
      width: 400px;
      position: relative;
      left: 50%;
      margin-left: -100px;
    }
    >div span{
      display: inline-block;
      margin-left:-40px;
      margin-bottom:15px;
      font-size:18px;
    }
  }

</style>
<script>
import Nav from '../components/nav.vue'
  export default {
    data(){
      return {
        message:{
          product:'',
          type:'',
          area:'',
          need:'',
          desc:''
        }

      }
    },
    mounted(){
      console.log(this);
    },
    components:{Nav},
  }

</script>
