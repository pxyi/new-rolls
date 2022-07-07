<template>
  <div class="header_container">
    <div class="logo"><img src="~@img/index/logo.png" /></div>
    <div class="user">
      <el-dropdown>
        <img class="user_avatar" src="~@img/index/banner.png" alt="">
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
          <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  
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