<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item class="login_tit">
      <strong>注册</strong>
      <span><router-link to="./login">立即登录</router-link></span>
    </el-form-item>
    <el-form-item label="" prop="phone">
      <el-input type="phone" placeholder="手机号" v-model="ruleForm2.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="" prop="pass">
      <el-input type="password" placeholder="密码" v-model="ruleForm2.pass" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="" prop="username">
      <el-input v-model="ruleForm2.username" placeholder="用户名"></el-input>
    </el-form-item>
    <el-form-item label="" prop="code">
      <el-input v-model="ruleForm2.code" placeholder="动态码" style="width:66%"></el-input>
      <el-button type="primary" @click="send('ruleForm2')" style="width:32%">发送验证码</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')" style="width:50%">登录</el-button>

      <!--<el-button @click="resetForm('ruleForm2')">重置</el-button>-->
    </el-form-item>
    <el-form-item>
      <el-checkbox label="我同意" name="type"></el-checkbox>
      <router-link to="">网站服务协议</router-link>
    </el-form-item>
  </el-form>
</template>
<style  lang="scss">
  @mixin border{
    border:1px solid rgba(228, 228, 228, 1);
  }
  $mainColor:rgba(228, 228, 228, 1);
  form{
    width:480px;
    margin:0 auto;
    @include border;
    padding: 15px 45px;
    box-sizing: border-box;
    .el-form-item__content{
      margin-left:0px!important;
    }
    top:50%;
    position:absolute;
    margin-top:-260px;
    left:50%;
    margin-left:-240px;
  }
  .login_tit{
    border-bottom:1px solid $mainColor;
    strong{
      font-size:16px;
      float:left;
    }
    span{
      float:right;
    }
  }


</style>
<script>
  export default {
    data() {
//      var checkAge = (rule, value, callback) => {
//        if (!value) {
//          return callback(new Error('年龄不能为空'));
//        }
//        setTimeout(() => {
//          if (!Number.isInteger(value)) {
//            callback(new Error('请输入数字值'));
//          } else {
//            if (value < 18) {
//              callback(new Error('必须年满18岁'));
//            } else {
//              callback();
//            }
//          }
//        }, 1000);
//      };
      let validatePhone=(rule,value,callback)=>{
        if(value===''){
          callback(new Error('请输入手机号'));
        }else if(!this.verify.phone.test(value)){
          callback(new Error('请输入正确的手机号'));
        }else{
          callback();
          console.log(callback);
        }
      };
      let validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(!this.verify.pass.test(value)){
          callback(new Error('请输入6位以上字符的密码'));
        } else {
//          if (this.ruleForm2.checkPass !== '') {
//            this.$refs.ruleForm2.validateField('checkPass');
//          }
          callback();
        }
      };
//      let validatePass2 = (rule, value, callback) => {
//        if (value === '') {
//          callback(new Error('请再次输入密码'));
//        } else if (value !== this.ruleForm2.pass) {
//          callback(new Error('两次输入密码不一致!'));
//        } else {
//          callback();
//        }
//      };
      return {
        ruleForm2: {
          username:'',
          phone:'',
          pass: '',
          code:''
//          checkPass: '',
        },
        verify: {
          pass: /^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,20}/,//6位以上字符的密码
          phone:/^1[3456789]\d{9}$/
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
//          checkPass: [
//            { validator: validatePass2, trigger: 'blur' }
//          ],
          phone: [
            { validator: validatePhone, trigger: 'blur' }
          ],
          code:[
            {required:true,message:'动态码不能为空',trigger:'blur'}
          ],
          username:[
            {required:true,message:'用户名不能为空',trigger:'blur'}
          ]
        }
      };
    },
    methods: {
      send(formName){

        this.$refs[formName].validateField("phone")
      },
      submitForm(formName) {
        console.log(formName);
        console.log(this.$refs[formName]);
        console.log(this.$refs);
        this.$refs[formName].validate((valid) => {
          console.log(valid);
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });



      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
