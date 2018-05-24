<template>
  <div class="search-box">
    <div class="inner">
      <h1 style="color: whitesmoke">
        Foody
      </h1>
      <h3 style="color: whitesmoke"> Search whatever your heart desires...</h3>
      <el-input v-on:keyup.enter.native="handleSearch" class="my-input" prefix-icon="el-icon-search" size="large" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  methods: {
    handleSearch: function (e) {
      this.$store.commit('changeName', e.target.value)
      this.$router.push('main')
    }
  }
}
</script>

<style scoped>
  .search-box {
    height: 240px;
    width: 400px;
    background-color: rgba(66, 66, 66, 0.3);
    text-align: center;
    padding: 24px;
    box-shadow: 0 0 4px;
    z-index: 2;
  }
  .my-input {
    margin-top: 12px;
    min-width: 320px;
  }
</style>
