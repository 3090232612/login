
<template>
  <div class="footer">
    <img src="../assets/weixin.png" alt="">
   <p><i class="el-icon-phone"></i>021-52285665  周一至周五 9:00-17:00</p>
    <p><i class="el-icon-location"></i>联系地址：上海市南京西路580号B座10楼</p>

  </div>

</template>
<style lang="scss">
  $lineColor:rgba(228, 228, 228, 1);
  .footer{
    margin-top:10px;
    margin-bottom:10px;
    border:1px solid $lineColor;
    img {
      float:right;
      margin-right:200px;
      margin-top:12px;
    }
    p{
      padding:10px;
    }
    i{
      font-size: 24px;
      padding-right: 8px;
      vertical-align: middle;

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
