
<template>
  <div class="nav" style="background-color:#545c64">
    <el-row>
      <el-col :span="4" style="line-height:61px;">
        <img src="../assets/logo.png" alt="">
      </el-col>
      <el-col :span="18">
        <el-menu
          :default-active="this.$route.path" router
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="/index">
           首页
          </el-menu-item>
          <el-menu-item index="/userList">
            客户列表
          </el-menu-item>
          <el-menu-item index="/block">个人管理</el-menu-item>
          <el-menu-item index="/channel">商区管理</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>


  </div>

</template>
<style lang="scss">
  .nav{
    margin-bottom:10px;
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
      console.log(this.$route.path);

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
