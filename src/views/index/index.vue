<template>
  <div class="index_container">
    <div class="user">
      <el-dropdown v-if="userInfo" @command="handle">
        <div class="user_avatar">
          <img :src="userInfo.avatarUrl" alt="" />
          <span>{{ userInfo.nickName }}</span>
          <i class="el-icon-arrow-down" />
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="avatar">设置头像</el-dropdown-item>
          <el-dropdown-item command="materials">编辑资料</el-dropdown-item>
          <el-dropdown-item divided command="loginOut">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <button @click="$router.push('/login')" v-else>登录</button>
    </div>
    <div class="logo">
      <img src="~@img/index/logo.png" />
    </div>
    <div class="banner">
      <img src="~@img/index/banner.png" />
      <p>第 一 个 全 面 支 持 NFT 交 易 的<br>音 乐 创 作 者 社</p>
    </div>
    <div class="register">
      <div class="register_item" >
        <img src="~@img/index/register-1.png">
        <h2 class="title">乐迷</h2>
        <div class="introduce">
          <p>你可以直接从自己喜爱的音乐人和厂牌那里购买他们的音乐商品。</p>
          <p>你的所有收听、消费都会产生积分，为自己赢得更多的乐趣和权益。</p>
          <p>如果你愿意，你也可以成为创作者，通过对音乐作品进行二次创作或为音</p>
          <p>乐人进行服务赚取真金白银。你的爱好也可以为你赚钱。</p>
        </div>
        <button @click="register(1)" :class="{ 'is_disabled': !!userInfo }" >{{ !userInfo ? '注册乐迷账号' : '我已经是乐迷啦' }}</button>
      </div>
      <div class="register_item">
        <img src="~@img/index/register-2.png">
        <h2 class="title">音乐创作者</h2>
        <div class="introduce">
          <p>如果你是原创音乐人、音乐自媒体或播客博主，可以选择这里。</p>
          <p>在春卷，你可以发布数字或实体唱片、周边和多种多样的 NFT 产品。</p>
          <p>你可以清楚地知道是谁花了多少钱购买你的产品并且第一时间了解到他们的反馈。</p>
          <p>在春卷，没有创作者孤立无援的，不同的创作者可以相互支援、共同协作，带来更多的灵感和收入。</p>
        </div>
        <button @click="register(2)">注册音乐创作者账号</button>
      </div>
      <div class="register_item">
        <img src="~@img/index/register-3.png">
        <h2 class="title">厂牌</h2>
        <div class="introduce">
          <p>不管是大型唱片公司还是爱好者发起的小厂牌、小计划，在春卷上都有一席之地。</p>
          <p>你可以通过春卷让自己的音乐产品直接接触到乐迷，可以集中管理自己的所有发行，并且可以和更多乐迷、KOL和其他机构进行合作，推动自己的成长和发展。</p>
        </div>
        <button @click="register(3)">注册厂牌账号</button>
      </div>
    </div>
    <div class="footer">
      <p>京ICP备14018992号-2</p>
      <p>© CHUNJUAN. All Rights Reserved. </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInfo: this.$store.state.userInfo
    }
  },
  created() {

  },
  methods: {
    register(type) {

    },
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
.index_container {
  max-width: 1880px;
  margin: 0 auto;
  background: #fcf8ed;
  position: relative;
  .user {
    position: absolute;
    top: 58px;
    right: 60px;
    z-index: 9;
    & > button {
      display: block;
      outline: none;
      width: 88px;
      height: 40px;
      line-height: 38px;
      border-radius: 20px;
      border: 1px solid #2D2D2D;
      background: none;
      cursor: pointer;
    }
    &_avatar {
      display: flex;
      align-items: center;
      cursor: pointer;
      img {
        width: 34px;
        height: 34px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
      }
    }
  }
  .logo {
    position: absolute;
    top: 58px;
    left: 60px;
    z-index: 9;
  }
  .banner {
    position: relative;
    img {
      width: 100%;
      height: 1200px;
      object-fit: cover;
    }
    p {
      width: 100%;
      font-size: 30px;
      text-align: center;
      position: absolute;
      top: 880px;
      left: 0;
    }
  }

  .register {
    display: flex;
    justify-content: space-between;
    padding: 0 50px;
    margin-top: 200px;
    &_item {
      display: flex;
      flex-direction: column;
      flex: 1;
      max-width: 390px;
      height: 690px;
      padding: 50px;
      background: #FFFFFF;
      border-radius: 0 195px 30px 30px;
      position: relative;
      & > img {
        width: 326px;
        height: 287px;
        position: absolute;
        top: -210px;
        right: 0px;
      }
      .title {
        font-size: 56px;
        margin-top: 30px;
      }
      .introduce {
        p:not(:last-child) {
          margin-bottom: 30px;
        }
      }
      button {
        display: block;
        width: 234px;
        margin: auto auto 0;
        background: #2D2D2D;
        border-radius: 39px;
        font-size: 20px;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: #fff;
        line-height: 66px;
        text-align: center;
        outline: none;
        border: 0;
        cursor: pointer;
        &.is_disabled {
          pointer-events: none;
          background: #ddd;
        }
      }
    }
  }
  .footer {
    margin-top: 190px;
    padding-bottom: 40px;
    text-align: center;
    p {
      display: inline-block;
      margin: 0 50px;
    }
  }
}
</style>