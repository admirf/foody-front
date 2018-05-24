<template>
  <div class="home">
    <div class="box">
      <Search />
    </div>
    <div class="spacer"></div>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Search from '@/components/Search.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'home',
  components: {
    Search,
    Footer
  }
}
</script>

<style scoped>
  .home {
    width: 100%;
  }
  .box {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -68%);
  }
</style>
