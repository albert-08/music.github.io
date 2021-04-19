<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from '@/components/layout/Footer.vue' 
import Header from '@/components/layout/Header.vue'

export default {
  name: 'app',

  components: { Footer, Header }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }

  .is-active {
    border: 3px #23d160 solid;
  }
</style>
