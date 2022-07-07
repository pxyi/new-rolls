<template>
  <section class="personal_container">
    <aside><AsideComponent /></aside>
    <section>
      <header><HeaderComponent /></header>
      <div id="breadcrumb"><BreadcrumbComponent /></div>
      <main><MainComponent /></main>
    </section>
  </section>
</template>

<script>
import HeaderComponent from './components/header.vue';
import AsideComponent from './components/aside.vue';
import MainComponent from './components/main.vue';
import BreadcrumbComponent from './components/breadcrumb.vue';
export default {
  components: { HeaderComponent, AsideComponent, BreadcrumbComponent, MainComponent },
  data() {
    return {}
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
.personal_container {
  display: flex;
  height: 100%;
  background: #FCF8ED;;
  overflow: hidden;
  & > section {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  aside {
    width: 224px;
    flex-shrink: 0;
    background: #fff;
    background: #D0EF5E;
  }
  header {
    height: 64px;
    background: #fff;
  }
  #breadcrumb {
    display: flex;
    align-items: center;
    height: 48px;
    padding: 0 24px;
    background: #fff;
    border-radius: 8px;
    margin: 12px 16px 0 16px;
  }
  main {
    flex: 1;
    margin: 12px 16px;
    overflow: hidden;
  }
}
</style>