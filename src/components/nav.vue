
<template>
  <div class="nav" style="">
    <el-row>
      <el-col :span="8" style="line-height:61px;">
        <img src="../assets/shlogo.png" alt="">
      </el-col>
      <el-col :span="14">
        <el-menu
          :default-active="this.$route.path" router
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#000"
          active-text-color="#000">
          <el-menu-item index="/index">
           首页
          </el-menu-item>
          <el-menu-item index="/userList">
            项目库专利技术
          </el-menu-item>
          <el-menu-item index="/block">供需撮合</el-menu-item>
          <el-menu-item index="/channel">需求市场</el-menu-item>
          <el-menu-item index="/channel">咨询</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>


  </div>

</template>
<style lang="scss">
  $lineColor:rgba(228, 228, 228, 1);
  .nav{
    margin-bottom:10px;
    border:1px solid $lineColor;
    padding:15px 0;
    a{
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    .el-menu.el-menu--horizontal{
      border-bottom:none;
    }
  }

</style>
<script>
  export default {
    name:'Nav',
    data() {
      return {
//        activeIndex: '1'
      };
    },
    mounted(){
     // console.log(this.$route.path);

    },
    computed:{
      activeIndex(){
        console.log(this.$route);
        return this.$route.path
      }
    },
    methods: {

      handleSelect(key, keyPath) {
        //console.log(key, keyPath);
       // this.activeIndex=keyPath[0];
        //console.log(typeof this.activeIndex);
//        this.activeIndex2=key;
        //console.log(this.$router.path);
      }
    }
  }
</script>
