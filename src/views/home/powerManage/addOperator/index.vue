<template>
  <div>
    <el-card class="box-card marginBottom">
      添加操作员
    </el-card>

    <el-card class="box-card marginBottom">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="account">
          <el-input v-model="ruleForm.account" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="ruleForm.password" type="password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="重复密码" prop="password2">
          <el-input v-model="ruleForm.password2" type="password" placeholder="请重复输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="success" @click="submitForm('ruleForm')">添加</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {createUser} from "@/api/api";
import md5 from "md5";

export default {
  name: 'addOperator',
  data() {
    return {
      ruleForm: {
        account: '',
        password: '',
        password2: '',
      },
      rules: {
        account: [
          {required: true, message: '请输入用户名', trigger: 'blur'},
          {min: 3, max: 18, message: '长度在 3 到 18 个字符', trigger: 'blur'}
        ],
        password: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ],
        password2: [
          {required: true, trigger: 'blur', validator: this.validatePass2}
        ],
      }
    }
  },
  methods: {
    validatePass2(rule, value, callback) {
      if (value === '') {
        callback(new Error('请再次输入密码！'))
      } else if (value !== this.ruleForm.password) {
        callback(new Error('两次密码输入不一致，请重新输入！'))
      } else {
        callback()
      }
    },
    submitForm(formName) {
      this.ruleForm.password = md5(this.ruleForm.password)
      this.ruleForm.password2 = md5(this.ruleForm.password2)
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const res = await createUser(this.ruleForm)
          if (res.data.code === 20000) {
            this.$router.push('/powerManage/operatorList')
          }
        } else {
          return false;
        }
      });
    },
  }
}
</script>

<style scoped>

</style>
