<template>
  <div class="aside_container">
    <div class="user">
      <img src="~@img/index/banner.png" alt="">
      <h2>音乐创作者</h2>
    </div>
    <ul class="menu">
      <li class="menu-item" v-for="item in dataset" :key="item.key" :class="{ 'is_current': item.show && item.children, 'is_active': $route.path.includes(item.key) }"> 
        <div class="menu-item__title" @click="handle(item)">
          <i :class="`el-icon-s-${item.icon}`" />
          <span>{{ item.title }}</span>
        </div>
        <el-collapse-transition v-if="item.children">
          <ul class="menu-item__collapse" v-show="item.show">
            <li 
              v-for="i in item.children" 
              :key="i.key" 
              :class="{ 'is_active': $route.path === i.key }"
              @click="$router.push(i.key)"
            >{{ i.title }}</li>
          </ul>
        </el-collapse-transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataset: []
    }
  },
  created() {
    const routes = this.$router.options.routes.find(({ name }) => name === 'system').children;

    this.dataset = routes.reduce((arr, route) => {
      let children = route.children ? route.children.filter(r => !r.hidden) : [];
      !route.hidden && arr.push({ 
        title: route.meta.title,
        icon: route.meta.icon, 
        key: `/${ route.path }`,
        show: this.$route.path.includes(`/${ route.path }`),
        children: children.length ? children.map(r => ({ title: r.meta.title, key: `/${ route.path }/${ r.path }` })) : null 
      })
      return arr;
    }, [])
  
  },
  methods: {
    handle(item) {
      if (item.children) {
        item.show = !item.show;
      } else {
        this.$router.push(item.key);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.aside_container {
  .user {
    padding: 48px 0 40px;
    text-align: center;
    border-bottom: solid 1px #BDE740;
    img {
      display: inline-block;
      width: 104px;
      height: 104px;
      object-fit: cover;
      border-radius: 50%;
      border: 3px solid #BDE740;
    }
    h2 {
      margin-top: 20px;
      line-height: 20px;
      font-weight: 500;
    }
  }
  .menu {
    padding: 20px 0;
    &-item {
      padding: 0 24px;
      font-size: 16px;
      color: rgba(0,0,0, .5);
      transition: all .5s;
      &:hover,
      &.is_current,
      &.is_active {
        background: #E4F3A1;
        color: rgba(0,0,0, .9);
      }
      &__title {
        display: flex;
        align-items: center;
        height: 56px;
        cursor: pointer;
        span {
          font-size: 16px;
          margin-left: 20px;
          font-weight: 400;
        }
      }
      &__collapse {
        padding-left: 0;
        list-style: none;
        padding-bottom: 5px;
        li {
          line-height: 1;
          font-size: 14px;
          padding: 10px 0 10px 52px;
          cursor: pointer;
        }
        .is_active {
          pointer-events: none;
        }
      }
      .is_active {
        font-weight: bold !important;;
      }
    }
  }
}
</style>