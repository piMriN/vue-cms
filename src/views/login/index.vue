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
          <div class="verify">
            <el-input
              v-model="form.code"
              placeholder="请输入验证码"
              class="yzm"
              @click.stop="handleCodeRefresh"
            ></el-input>
            <el-image :src="codeImageUrl"></el-image>
          </div>
        </el-form-item>
        <el-form-item>
          <el-button
            class="login-button"
            :loading="loadingStatus"
            @click="handleVerifyForm"
            type="danger"
            >{{ loadingStatus ? '登录中...' : '立即登录' }}</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import rules from './rules'
import UserApi from '../../api/user'
import { mapActions } from 'vuex'

export default {
  name: 'index',
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
      codeImageUrl: '',
      //   loading加载状态
      loadingStatus: false
    }
  },
  created() {
    this.handleGetCaptcha()
  },
  methods: {
    // 获取验证码
    async handleGetCaptcha() {
      const { captchaImg, token } = await UserApi.getCaptcha()
      this.codeImageUrl = captchaImg
      this.form.token = token
    },

    // 验证码刷新
    handleCodeRefresh() {
      this.form.code = ''
      this.handleGetCaptcha()
    },

    // 登录表单校验
    handleVerifyForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          this.handleSubmitLogin()
        }
      })
    },

    async handleSubmitLogin() {
      try {
        const token = await this.login(this.form)
        if (!token) return
        this.$notify({ title: '提示', message: '登录成功', type: 'success' })
        this.loadingStatus = true
        await this.$router.push('/')
      } catch (e) {
        console.log(e)
      } finally {
        this.loadingStatus = false
      }
    },

    /**
     * vuex登录
     */
    ...mapActions({
      login: 'user/login'
    })
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
  margin-bottom: 30px;
}
.login-form {
  margin: 10% auto 13%;
  width: 20%;
}
.verify {
  width: 100%;
  display: flex;
  align-items: center;
}
.el-image {
  width: 200px;
  height: 40px;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
}
.login-button {
  width: 100%;
  border-radius: 5px;
}
</style>
