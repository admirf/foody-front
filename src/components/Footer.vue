<template>
  <div class="footer">
    <p class="footer-text">Footer inc.</p>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .footer {
    position: fixed;
    width: 100%;
    left: 0;
    bottom: 0;
    text-align: right;
    background-color: rgba(66, 66, 66, 0.3);
    color: whitesmoke;
    box-shadow: 4px 0 4px black;
    height: 50px;
    z-index: 1;
  }
  .footer-text {
    margin-right: 12px;
  }
</style>
