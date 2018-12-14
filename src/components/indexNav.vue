
<template>
  <div class="navIndex">
    <img src="../assets/shlogo.png" alt="">
    <div class="regis">
      <span><router-link to="/regis">注册</router-link></span>
      |
      <span><a href="">登录</a></span>
    </div>
  </div>

</template>
<style lang="scss">
  $lineColor:rgba(228, 228, 228, 1);
  .navIndex{
    margin-bottom:10px;
    border:1px solid $lineColor;
    position:relative;
    padding-top:3px;
    a{
      color:#000;
    }
    .regis{
      position:absolute;
      top:20px;
      right:230px;
    }

  }

</style>
<script>
  export default {
//    name:'Nav',
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
