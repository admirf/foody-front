<template>
  <div>
    <Navbar style="z-index: 2" />
    <div class="spacer"></div>
    <div class="wrapper">
      <el-row style="margin-top: 32px;">
        <el-col :xs="24" :sm="24" :md="8" :lg="8" :xl="8">
          <FilterBox style="z-index: -3" />
        </el-col>
        <el-col :xs="24" :sm="24" :md="14" :lg="14" :xl="14">
          <ListView />
        </el-col>
      </el-row>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import FilterBox from '@/components/FilterBox'
import ListView from '@/components/ListView'

export default {
  name: 'Main',
  components: {
    Navbar,
    Footer,
    FilterBox,
    ListView
  }
}
</script>

<style scoped>
  .spacer {
    position: relative;
    height: 50px;
    z-index: -1;
  }
  .wrapper {
    padding-left: 8%;
    padding-right: 8%;
  }
  h1 {
    text-align: center;
  }
  @media only screen and (max-width: 500px) {
    .wrapper {
      padding-left: 8%;
      padding-right: 8%;
    }
  }
</style>
