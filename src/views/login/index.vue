<template>
  <div class="login_container">
    <div class="login">
      <el-tabs v-model="type" @tab-click="handle" style="margin-bottom: 20px">
        <el-tab-pane label="免密码登录" name="0" />
        <el-tab-pane label="密码登录" name="1" />
      </el-tabs>

      <el-input placeholder="手机号" v-model="mobile" maxlength="11">
        <el-select v-model="countries" slot="prepend" placeholder="请选择" style="width: 150px">
          <el-option value="中国 +86" label="中国 +86" />
          <el-option value="美国 +1" label="美国 +1" />
          <el-option value="日本 +81" label="日本 +81" />
          <el-option value="中国香港 +852" label="中国香港 +852" />
          <el-option value="中国澳门 +853" label="中国澳门 +853" />
          <el-option value="中国台湾 +886" label="中国台湾 +886" />
          <el-option value="马来西亚 +60" label="马来西亚 +60" />
          <el-option value="澳大利亚 +61" label="澳大利亚 +61" />
          <el-option value="加拿大 +1" label="加拿大 +1" />
          <el-option value="英国 +44" label="英国 +44" />
          <el-option value="新加坡 +65" label="新加坡 +65" />
          <el-option value="德国 +49" label="德国 +49" />
        </el-select>
      </el-input>
      <el-input :placeholder="type === '0' ? '请输入6位验证码' : '请输入密码'" v-model="password" :maxlength="type === '0' ? 6 : 30" style="margin-top: 20px">
        <template slot="append" v-if="type === '0'"><a @click="getCode" :class="{ 'is_disabled': time }">{{ time ? `${time}S后可重发验证码` : '获取验证码' }}</a></template>
      </el-input>
      <el-button style="display: block; margin: 20px auto 0;" type="primary" :loading="loading" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import { GetCode, PhoneCodeLogin, PasswordLogin } from '@/api/login';
import { addAuthRoute } from '@/router'
export default {
  data() {
    return {
      loading: false,
      type: '0',
      countries: '中国 +86',
      mobile: null,
      password: null,
      time: null
    }
  },
  methods: {
    handle() {
      this.password = null;
    },
    getCode() {
      let phonereg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (!phonereg.test(this.mobile)) {
        this.$message.warning('请输入正确的手机号');
        return;
      } 
      GetCode({ mobile: this.mobile });
      this.time = 60;
      let interval = setInterval(() => {
        this.time--;
        this.time <= 0 && clearInterval(interval)
      }, 1000);
    },
    async login() {
      let phonereg = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (!phonereg.test(this.mobile)) {
        this.$message.warning('请输入正确的手机号');
        return;
      } 
      if (this.type === '0' && (!this.password.length || this.password.length !== 6)) {
        this.$message.warning('请输入正确的验证码');
        return;
      }
      if (this.type === '1' && !this.password?.length) {
        this.$message.warning('请输入正确的密码');
        return;
      }
      this.loading = true;
      let res = await (this.type === '0' ? PhoneCodeLogin({ mobile: this.mobile, code: this.password}) : PasswordLogin({ mobile: this.mobile, password: this.password }));
      this.loading = false;
      if (res.token) {
        this.$store.commit('set_token', res.token);
        this.$store.commit('set_user_info', res.rollUserVo);
        res.rollUserVo.signUtype > 0 && addAuthRoute(res.rollUserVo.signUtype);
        this.$router.push('/')
      }
    }
  }
}
</script>
<style scoped lang="scss">
.login_container {
  .login {
    width: 600px;
    height: 400px;
    border: 1px solid #D6D6D6;
    border-radius: 5px;
    padding: 10px 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    a {
      cursor: pointer;
      color: #409EFF;
      &.is_disabled {
        color: #ccc;
        pointer-events: none;
      }
    }
  }
}
</style>