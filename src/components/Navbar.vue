<template>
  <div class="nav-bar">
    <p class="logo">Foody</p>
    <el-input v-on:keyup.enter.native="handleChange" prefix-icon="el-icon-search" placeholder="Search..." />
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    handleChange (e) {
      this.$store.commit('changeName', e.target.value)
      this.$store.dispatch('fetchItems')
    }
  }
}
</script>

<style scoped>
  .nav-bar {
    background-color: rgba(66, 66, 66, 0.3);
    color: whitesmoke;
    height: 50px;
    width: 100%;
    margin-top: 0;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    box-shadow: 4px 0px 4px black;
  }
  .el-input {
    width: 240px;
    top: 10px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
  }
  .logo {
    text-align: left;
    margin-left: 12px;
  }
  @media only screen and (max-width: 371px){
    .logo {
      display: none;
    }
  }
</style>
