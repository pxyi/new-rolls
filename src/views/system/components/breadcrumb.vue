<template>
  <div id="breadcrumb" v-if="dataset.length">
    <el-breadcrumb separator=">">
      <el-breadcrumb-item v-for="item in dataset" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>

const getBreadcrumb = (matched) => matched.filter(route => route.meta?.title);
export default {
  data() {
    return {
      dataset: []
    }
  },
  watch: {
    '$route': function (v) { this.dataset = getBreadcrumb(v.matched) } 
  },
  created() {
    this.dataset = getBreadcrumb(this.$route.matched);
  }
}
</script>
<style scoped>
#breadcrumb {
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 24px;
  background: #fff;
  border-radius: 8px;
  margin: 12px 16px 0 16px;
}
</style>