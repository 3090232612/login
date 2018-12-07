<template>
  <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="手机号" prop="phone">
      <el-input type="phone" v-model="ruleForm2.phone" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
    </el-form-item>
    <!--<el-form-item label="确认密码" prop="checkPass">-->
      <!--<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>-->
    <!--</el-form-item>-->
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm2.username"></el-input>
    </el-form-item>
    <el-form-item label="动态码" prop="code">
      <el-input v-model="ruleForm2.code" style="width:66%"></el-input>
      <el-button type="primary" @click="send('ruleForm2')" style="width:32%">发送验证码</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>

      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<style scoped lang="scss">
  @mixin border{
  border:1px solid rgba(228, 228, 228, 1);
  }
  form{
    max-width:480px;
    margin:0 auto;
    @include border;
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
