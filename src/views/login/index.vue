<template>
  <div class="login">
    <h1>智慧服务平台</h1>
    <div class="login-form">
      <h2>欢迎登录</h2>
      <el-form ref="form" :model="form" :rules="rules">
        <el-form-item prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入账号"
            suffix-icon="el-icon-user-solid"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="form.password"
            clearable
            show-password
            placeholder="请输入密码"
            suffix-icon="el-icon-s-goods"
          ></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input
            v-model="form.code"
            placeholder="请输入验证码"
            class="yzm"
          ></el-input>
          <el-image :src="codeImageUrl"></el-image>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="login-button">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import rules from './rules'
import UserApi from '../../api/user'

export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        code: '',
        token: ''
      },
      //   登录表单验证
      rules,
      //   验证码路径
      codeImageUrl: ''
    }
  },
  created() {
    this.handleGetCaptcha()
  },
  methods: {
    async handleGetCaptcha() {
      const { captchaImg, token } = await UserApi.getCaptcha()
      this.codeImageUrl = captchaImg
      this.form.token = token
    }
  }
}
</script>

<style>
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: Verdana;
  background-size: cover;
  background: url('../../assets/风景.jpeg') no-repeat fixed center;
}
h1 {
  text-align: center;
  font-size: 42px;
  margin-top: 50px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 5px;
}
h2 {
  color: #fff;
  font-size: 30px;
  margin-bottom: 20px;
}
.login-form {
  margin: 6% auto 13%;
  width: 20%;
}
.verify {
  width: 100%;
  display: flex;
  align-items: center;
}
.el-image {
  width: 300px;
  height: 55px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
.login-button {
  width: 100%;
  border-radius: 5px;
}
.el-input {
  margin-right: 100px;
}
</style>
