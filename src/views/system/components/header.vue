<template>
  <div class="header_container">
    <div class="logo"><img src="~@img/index/logo.png" /></div>
    <div class="user">
      <el-dropdown @command="handle">
        <img class="user_avatar" :src="userInfo.signUrl" alt="">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="avatar">设置头像</el-dropdown-item>
          <el-dropdown-item command="materials">编辑资料</el-dropdown-item>
          <el-dropdown-item divided command="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: this.$store.state.userInfo,
    }
  },
  methods: {
    avatar() {
      this.$router.push('/avatar')
    },
    materials() {
      this.$router.push('/materials')
    },
    loginOut() {
      this.$message.success('退出成功');
      this.$router.push('/login');
      this.$store.commit('login_out');
    },
    handle(type) {
      this[type]()
    }
  }
}
</script>

<style scoped lang="scss">
.header_container {
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 16px;
  .logo {
    img {
      height: 28px;
    }
  }
  .user {
    margin-left: auto;
    cursor: pointer;
    .user_avatar {
      width: 40px;
      height: 40px;
      border: 1px solid rgba(0,0,0, .05);
      border-radius: 50%;
      object-fit: cover;
    }
  }
}
</style>