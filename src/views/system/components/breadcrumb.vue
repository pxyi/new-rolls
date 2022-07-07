<template>
  <el-breadcrumb separator=">">
    <el-breadcrumb-item v-for="item in dataset" :key="item.path">{{ item.meta.title }}</el-breadcrumb-item>
  </el-breadcrumb>
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