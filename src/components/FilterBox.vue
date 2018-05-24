<template>
  <div class="filter-box">
    <label class="labels">Categories</label>
    <br/>
    <br/>
    <el-checkbox-group @change="handleChange" v-model="checkList">
      <el-checkbox v-for="elem in $store.state.categories" :label="elem">{{ elem }}</el-checkbox>
    </el-checkbox-group>
    <br/>
    <label class="labels">Price</label>
    <el-slider v-model="range" @change="handleChange" range style="margin: 12px"/>
    <br/>
    <label class="labels">Proximity</label>
    <el-slider @change="handleChange" v-model="proximity" style="margin: 12px" />
  </div>
</template>

<script>
export default {
  name: 'FilterBox',
  data () {
    return {
      checkList: [],
      proximity: 50,
      range: [1, 50]
    }
  },
  methods: {
    handleChange () {
      this.$store.commit('changeSearchQuery', {
        name: this.$store.state.searchQuery.name,
        minPrice: this.range[0],
        maxPrice: this.range[1],
        proximity: this.proximity,
        categories: this.checkList
      })
      this.$store.dispatch('fetchItems')
    }
  }
}
</script>

<style scoped>
  .filter-box {
    margin: 8px;
    text-align: center;
    padding: 12px;
    background-color: rgba(66, 66, 66, 0.3);
    box-shadow: 0 0 4px;
    min-height: 400px;
    max-width: 300px;
  }
  .labels {
    color: whitesmoke;
  }
  .el-checkbox {
    color: whitesmoke;
  }
  .el-checkbox-group {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 12px;
  }
  label.el-checkbox {
    margin: 0;
  }
  @media only screen and (min-width: 500px) {
    .filter-box {
      min-width: 300px;
    }
  }
</style>
