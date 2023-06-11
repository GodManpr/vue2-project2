<template>
  <div class="login">
    <div class="login-content">
      <div class="login-item login-box">
        <p>软件平台</p>
      </div>

      <div class="login-item login-box">
        <p>软件平台</p>
      </div>
      <div class="login-item login-form">
        <p class="login-title">朝夕电量智能监控系统</p>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="用户名" prop="account">
            <el-input v-model="ruleForm.account"></el-input>
          </el-form-item>

          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="success" @click="submitForm('ruleForm')">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="login-item login-box">
        <p>软件平台</p>
      </div>

      <div class="login-item login-box">
        <p>软件平台</p>
      </div>
    </div>
  </div>
</template>

<script>

import {login} from "@/api/api";
import md5 from "md5";
import {useToken} from "@/utils/useToken";
const {setToken} = useToken()

export default {
  data() {
    return {
      rules: {
        account: [
          {required: true, message: 'account', trigger: 'blur'},
          {min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: 'password', trigger: 'blur'},
          {min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur'}
        ],
      },
      ruleForm: {
        account: 'admin',
        password: 'admin@123'
      },
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          this.ruleForm.password = md5(this.ruleForm.password)
          const res = await login(this.ruleForm)
          const {data: {token}, code} = res.data
          console.log(token);
          if (code == 20000) {
            setToken(token)
            this.$router.push('/home')
          }
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
  }
}
</script>
