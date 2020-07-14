<!--
 * @Author: your name
 * @Date: 2020-04-27 21:17:30
 * @LastEditTime: 2020-04-27 23:34:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \supermall\src\views\register\register.vue
 -->
<template>
  <div id="register">
    <nav-bar class="home-nav"><div slot="center">欢迎来到注册页面</div></nav-bar>
      <el-row type="flex" justify="center">
        <el-form ref="formData" :model="formData" :rules="rules" label-width="80px" @keyup.enter.native="register()">
          <el-form-item prop="userName" label="用户名"><el-input v-model="formData.userName" placeholder="请输入用户名" prefix-icon="icon-login_user" clearable></el-input></el-form-item>
          <el-form-item prop="password" label="密码"><el-input v-model="formData.password" placeholder="请输入密码" type="password" prefix-icon="icon-login_pwd" clearable></el-input></el-form-item>
          <el-form-item prop="cheackPassword" label="确认密码"><el-input v-model="formData.cheackPassword" placeholder="再次输入密码" type="password" prefix-icon="icon-login_pwd" clearable></el-input></el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register('formData')" icon="el-icon-upload">注册</el-button>
            <el-button @click="resetForm('formData')">重置</el-button></el-form-item>
         <router-link to="login">已有密码？登录</router-link>
        </el-form>
      </el-row>
  </div>    
</template>>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
    name:"Register",
    components:{
        NavBar
    },
    data() {
      var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.formData.password) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
 
    return {
      formData: {
        userName: '',
        password: '',
        cheackPassword:''
      },
      rules: {
        userName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
        password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
        cheackPassword: [{ required: true, validator: validatePass, trigger: 'blur' }]
 
      }
    };
  },
  methods: {
    register(formName) {
      this.$refs[formName].validate(valid => {
				if (valid) {
					this.$message({
						type: 'success',
						message: '注册成功'
                    });
                     this.$router.push({name:'login'});
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

<style scoped>
    .home-nav{
        color: #000;
    }
</style>>