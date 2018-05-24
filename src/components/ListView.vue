<template>
  <div class="list-view">
    <div class="list-item" v-for="item in $store.state.items" :key="item.id">
      <h3>{{ item.name }}</h3>
      <el-row>
        <el-col :span="8">
          <img src="http://via.placeholder.com/140x100" style="width:80px;height:80px; text-align: left"/>
        </el-col>
        <el-col :span="16" style="text-align: left;">
          <p>{{ item.description }}</p>
          <label>{{ item.price }}$</label>
        </el-col>
      </el-row>
      <el-button type="info" class="clearfix" style="float: right; margin-right: 12px">Order</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListView'
}
</script>

<style scoped>
  .list-view {
    text-align: center;
  }
  .list-item {
    padding-top: 12px;
    padding-bottom: 12px;
    color: whitesmoke;
    background-color: rgba(66, 66, 66, 0.3);
    box-shadow: 0 0 4px black;
    margin-left: 20%;
    margin-right: 20%;
    overflow: auto;
  }
  .clearfix {
    overflow: auto;
  }
</style>
